import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import OpenAI from 'openai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const readQuoted = (raw, key) => {
  const match = raw.match(new RegExp(`${key}\\s*=\\s*["']([^"']+)["']`));
  return match?.[1] ?? '';
};

const readLlmInfo = () => {
  const infoPath = path.join(rootDir, 'LLM信息.txt');
  if (!fs.existsSync(infoPath)) return {};
  const raw = fs.readFileSync(infoPath, 'utf8');
  return {
    apiKey: readQuoted(raw, 'api_key'),
    baseURL: readQuoted(raw, 'base_url'),
    model: readQuoted(raw, 'model')
  };
};

const llmFile = readLlmInfo();
const llmConfig = {
  apiKey: process.env.DEEPSEEK_API_KEY || process.env.LLM_API_KEY || llmFile.apiKey,
  baseURL: process.env.DEEPSEEK_BASE_URL || process.env.LLM_BASE_URL || llmFile.baseURL || 'https://api.deepseek.com',
  model: process.env.DEEPSEEK_MODEL || process.env.LLM_MODEL || llmFile.model || 'deepseek-v4-flash'
};

const client = llmConfig.apiKey
  ? new OpenAI({
      apiKey: llmConfig.apiKey,
      baseURL: llmConfig.baseURL
    })
  : null;

const SYSTEM_PROMPT = `
你是“水质检测应急官”AI环境分析模拟角色智能体，用于《无机及分析化学》《分析化学实验》《环境监测基础》等课程教学。
你的任务不是替学生直接完成作业，而是在模拟水样污染事件中，引导学生完成污染识别、检测指标选择、检测方法设计、模拟数据解释和检测报告撰写。

必须遵守：
1. 角色身份：你同时扮演水质检测应急官、环境分析师和实验质控员。学生扮演现场检测员或实验室分析员。
2. 教学目标：训练学生建立“现象—污染假设—检测指标—分析方法—数据解释—风险判断—报告表达”的证据链。
3. 交互方式：不要一次性给出完整答案。每次反馈包含：对当前判断的评价、一个明确追问、一个可操作下一步任务。
4. 知识范围：仅围绕无机及分析化学、基础分析化学实验、水质检测基础知识进行教学互动。
5. 数据要求：如果生成数据，必须明确标注“以下为教学模拟数据，仅用于课程训练”。
6. 合规要求：不得作出真实饮用水安全、公共卫生或环境执法结论；不得要求学生上传可识别个人身份的信息。
7. 表达要求：准确、简洁、教学化。学生只给结论时，必须追问“数据或现象证据是什么”。
8. 输出格式优先使用：
【当前判断】
【存在问题】
【追问】
【下一步任务】
【必要提示】
`;

const PHASE_PROMPTS = {
  case: '请生成或补全一个水质检测模拟任务。不要直接告诉最终答案。',
  chat: '请根据学生当前发言继续角色互动，保持教学追问，不要一次性给完整答案。',
  hypothesis: '学生已经提出污染假设。请诊断假设是否有现象证据、替代解释和必要追问。',
  indicators: '学生已经选择水质检测指标。请判断指标体系是否合理，指出遗漏指标和修改要求。',
  methods: '学生已经选择检测指标和方法。请检查方法匹配、化学原理与质控设计。',
  data: '请根据当前案例生成一组教学模拟数据，包含至少3项正常指标和2项异常或可疑指标。',
  risk: '请基于已有模拟数据做教学模拟风险研判，说明不确定性和复测建议。',
  report: '请根据学生过程记录生成“AI生成”的水质检测应急报告初稿，缺失信息用“未提供”。',
  teacherReview: '你是教师复核助手。请对报告进行100分制教学评价，并给出具体修改建议。',
  expert: `你是水质分析课程的专业助教。请解释学生提出的专业难题。
要求：
1. 先用一句话给出核心结论；
2. 再用“原理—本案例意义—容易出错点—学生下一步”四段解释；
3. 语言适合无机及分析化学课程学生；
4. 不要作真实饮用水安全或环境执法结论；
5. 如问题与当前案例有关，要结合案例、已选指标和已选方法。`
};

const fallbackReply = (payload) => {
  const selectedIndicators = payload.selectedIndicators || [];
  const selectedMethods = payload.selectedMethods || {};
  const caseInfo = payload.caseInfo || {};
  const missingBasics = ['pH', '浊度'].filter((name) => !selectedIndicators.includes(name));
  const recommended = caseInfo.recommendedIndicators || [];
  const missingRecommended = recommended.filter((name) => !selectedIndicators.includes(name)).slice(0, 4);

  if (payload.phase === 'expert') {
    return `【核心结论】
这个问题可以从“化学平衡条件”和“检测结果可靠性”两个层面理解。

【原理】
检测方法往往依赖特定反应条件。例如EDTA络合滴定需要合适pH来保证金属离子与EDTA形成稳定络合物；分光光度法需要标准曲线把吸光度转换为浓度；空白样用于扣除试剂或容器本底。

【本案例意义】
当前案例为“${caseInfo.title || '水质检测任务'}”。已选指标为：${selectedIndicators.join('、') || '未提供'}。这些指标需要与水样外观、现场线索和检测方法一一对应，不能只凭颜色或单一检测值下结论。

【容易出错点】
常见错误是忽略pH、空白样、平行样、标准曲线或方法适用范围，导致数据看似完整但证据链不可靠。

【学生下一步】
请把你的问题对应到一个具体指标，写出“为什么测、用什么方法、需要什么质控、结果如何解释”。`;
  }

  if (payload.phase === 'report') {
    return `本报告为AI生成初稿，仅用于课程教学模拟，需经学生修改和教师复核。

一、事件概况
事件编号：${caseInfo.id || '未提供'}
事件名称：${caseInfo.title || '未提供'}
发生地点：${caseInfo.location || '未提供'}

二、水样信息
水样外观：${caseInfo.appearance || '未提供'}
初始线索：${caseInfo.clue || '未提供'}

三、初步污染假设
${payload.reasoning || '未提供。建议学生补充“现象—污染物—检测指标”的推理链。'}

四、检测指标选择依据
已选指标：${selectedIndicators.join('、') || '未提供'}
需说明每项指标与水样外观、气味、地点或污染来源之间的关系。

五、检测方法与质控设计
${Object.entries(selectedMethods).map(([k, v]) => `${k}：${v}`).join('\n') || '未提供'}
建议补充空白样、平行样、标准曲线或标准溶液标定。

六、教学模拟检测数据
${formatDataRows(caseInfo.simulatedData)}

七、结果分析
请学生依据异常指标解释污染假设，避免把单一指标直接等同于最终原因。

八、风险研判
教学模拟等级：${caseInfo.riskLabel || '需复测'}

九、复测与处置建议
建议进行平行测定、空白对照，并结合不同采样点或不同时间复测。

十、AI辅助使用说明
本报告由AI辅助生成，仅用于课程训练，不代表真实检测结论。

【学生需补充内容】
1. 补充污染假设的证据依据。
2. 说明至少一种检测方法的化学原理。
3. 完善质控设计与不确定性说明。`;
  }

  if (payload.phase === 'teacherReview') {
    return `【总体评价】
报告框架基本完整，但仍需增强证据链、方法原理和质控说明。

【优点】
能够围绕事件场景选择部分检测指标，并尝试形成风险判断。

【主要问题】
1. 部分结论缺少模拟数据或现场现象支撑。
2. 检测方法与指标之间的化学原理说明不足。
3. 质控设计较薄弱，需补充空白样、平行样和标准曲线。

【修改建议】
请把每个异常指标对应到“现象—检测值—可能解释—复测建议”，并补充至少一种方法的反应原理。

【建议得分】
78/100`;
  }

  if (payload.phase === 'data') {
    return `【教学模拟数据说明】
以下数据为教学模拟数据，仅用于课程训练，不代表真实检测结论。

指标 | 检测值 | 单位 | 初步判断 | 可能解释
${formatDataRows(caseInfo.simulatedData)}

【需要学生完成的计算或判断】
1. 哪些指标与初始现象直接相关？
2. 是否存在需要复测或扩展检测的指标？
3. 当前数据能否支持最终污染来源判断，为什么？`;
  }

  if (payload.phase === 'methods') {
    const methodRows = selectedIndicators.map((name) => {
      const method = selectedMethods[name] || '未匹配';
      return `- ${name}：${method}`;
    });
    return `【方法匹配评价】
你已经选择了 ${selectedIndicators.length || 0} 项指标。当前方法匹配如下：
${methodRows.join('\n') || '- 未提供'}

【需要修改的方法】
若出现“未匹配”，请补充对应方法；若使用滴定法，请说明终点判断和实验条件。

【质控要求】
至少补充空白样、平行样；分光光度法需说明标准曲线，滴定法需说明标准溶液标定。

【下一步任务】
请选择一个最关键指标，说明它的化学检测原理及与事件现象的关系。`;
  }

  if (payload.phase === 'indicators') {
    return `【指标选择评价】
已选指标：${selectedIndicators.join('、') || '未选择'}。
${selectedIndicators.length >= 4 ? '指标数量基本可用于初筛。' : '指标数量偏少，难以支撑完整污染判断。'}

【遗漏指标】
${[...missingBasics, ...missingRecommended].filter(Boolean).join('、') || '暂未发现明显遗漏'}。

【指标与现象的对应关系】
请把每个指标分别对应到水样颜色、气味、地点、周边活动或可能污染源。

【修改要求】
补充基础指标和替代解释指标后，再进入检测方法匹配阶段。`;
  }

  return `【当前判断】
已进入“${caseInfo.title || '水质检测'}”教学模拟。你的任务是建立从现场现象到检测方案的证据链。

【存在问题】
当前信息还不足以直接给出污染结论。${missingBasics.length ? `基础指标仍缺少：${missingBasics.join('、')}。` : '基础指标已经开始覆盖。'}

【追问】
你判断最可能的污染方向是什么？支持该判断的现场证据是哪一条？

【下一步任务】
选择至少3项检测指标，并说明每项指标与污染假设的关系。`;
};

const formatDataRows = (rows = []) => {
  if (!rows.length) return '未提供模拟数据。';
  return rows
    .map((row) => `${row.indicator} | ${row.value} | ${row.unit} | ${row.status} | ${row.explain}`)
    .join('\n');
};

const makeUserPrompt = (payload) => {
  const safePayload = {
    phase: payload.phase,
    caseInfo: payload.caseInfo,
    selectedIndicators: payload.selectedIndicators,
    selectedMethods: payload.selectedMethods,
    reasoning: payload.reasoning,
    reportDraft: payload.reportDraft,
    studentMessage: payload.studentMessage,
    history: (payload.history || []).slice(-8)
  };

  return `${PHASE_PROMPTS[payload.phase] || PHASE_PROMPTS.chat}

请基于以下前端状态输出中文教学反馈：
${JSON.stringify(safePayload, null, 2)}`;
};

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    llmConfigured: Boolean(client),
    baseURL: llmConfig.baseURL,
    model: llmConfig.model
  });
});

app.post('/api/agent', async (req, res) => {
  const payload = req.body || {};

  if (!client) {
    return res.json({
      provider: 'fallback',
      model: 'local-rule-engine',
      reply: fallbackReply(payload)
    });
  }

  try {
    const completion = await client.chat.completions.create({
      model: llmConfig.model,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: makeUserPrompt(payload) }
      ],
      max_tokens: 1600,
      temperature: 0.7,
      top_p: 0.95,
      stream: false,
      frequency_penalty: 0,
      presence_penalty: 0,
      extra_body: {
        thinking: { type: 'disabled' }
      }
    });

    const reply = completion.choices?.[0]?.message?.content?.trim();
    res.json({
      provider: reply ? 'llm' : 'fallback',
      model: llmConfig.model,
      reply: reply || fallbackReply(payload)
    });
  } catch (error) {
    console.error('[LLM request failed]', error.message);
    res.json({
      provider: 'fallback',
      model: 'local-rule-engine',
      reply: `${fallbackReply(payload)}

【接口提示】
LLM接口暂未返回有效结果，当前为本地规则兜底反馈。请检查网络、base_url、model或API key。`
    });
  }
});

const port = Number(process.env.PORT || 8787);
app.listen(port, () => {
  console.log(`Agent API listening on http://127.0.0.1:${port}`);
  console.log(`LLM configured: ${Boolean(client)}; model: ${llmConfig.model}`);
});
