import { useEffect, useMemo, useState } from 'react';
import WaterScene from './components/WaterScene.jsx';
import { indicatorLibrary, methodLibrary, taskCases, workflowSteps } from './data/cases.js';

const tabs = [
  { id: 'home', label: '任务大厅' },
  { id: 'task', label: '交互任务台' },
  { id: 'simulator', label: '3D模拟舱' },
  { id: 'planner', label: '方案工作台' },
  { id: 'report', label: '报告复核' }
];

const phaseButtons = [
  { phase: 'hypothesis', label: '诊断假设' },
  { phase: 'indicators', label: '检查指标' },
  { phase: 'methods', label: '检查方法' },
  { phase: 'data', label: '生成数据' },
  { phase: 'risk', label: '风险研判' }
];

const phaseTitles = {
  chat: '任务对话反馈',
  hypothesis: '污染假设诊断',
  indicators: '指标体系反馈',
  methods: '方法与质控反馈',
  data: '教学模拟数据',
  risk: '风险研判反馈',
  report: '报告初稿',
  teacherReview: '教师复核意见',
  expert: '专业难题解释'
};

const initialAssistantMessage = (caseInfo) => ({
  role: 'assistant',
  content: `【事件编号】${caseInfo.id}
【事件名称】${caseInfo.title}
【事件背景】${caseInfo.location} 发现水样异常：${caseInfo.appearance}。
【初始线索】${caseInfo.clue}
【你的身份】${caseInfo.role}
【当前任务】先提出污染假设，再说明“现象证据”和“需要验证的指标”。`,
  provider: 'local',
  phase: 'case'
});

const emptyFeedback = {
  title: 'AI即时反馈',
  phase: 'idle',
  provider: 'local',
  content: '这里会显示最近一次LLM返回的完整内容。你可以在任何页面点击AI按钮，反馈会直接出现在当前工作区，不再藏到别的页面里。',
  time: ''
};

const callAgent = async (payload) => {
  const response = await fetch('/api/agent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(`Agent API ${response.status}`);
  return response.json();
};

const createContextPayload = ({
  phase,
  selectedCase,
  selectedIndicators,
  selectedMethods,
  reasoning,
  reportDraft,
  messages,
  studentMessage
}) => ({
  phase,
  caseInfo: selectedCase,
  selectedIndicators,
  selectedMethods,
  reasoning,
  reportDraft,
  history: messages,
  studentMessage
});

const nowText = () => new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCase, setSelectedCase] = useState(taskCases[0]);
  const [sceneData, setSceneData] = useState(taskCases[0].scene);
  const [selectedIndicators, setSelectedIndicators] = useState(['pH', '浊度']);
  const [selectedMethods, setSelectedMethods] = useState({ pH: 'pH计', 浊度: '比浊分析' });
  const [reasoning, setReasoning] = useState('');
  const [messages, setMessages] = useState([initialAssistantMessage(taskCases[0])]);
  const [studentMessage, setStudentMessage] = useState('');
  const [reportDraft, setReportDraft] = useState('');
  const [teacherReview, setTeacherReview] = useState('');
  const [apiStatus, setApiStatus] = useState({ ok: false, llmConfigured: false, model: '检查中' });
  const [loadingPhase, setLoadingPhase] = useState('');
  const [lastProvider, setLastProvider] = useState('local');
  const [agentFeedback, setAgentFeedback] = useState(emptyFeedback);
  const [expertOpen, setExpertOpen] = useState(false);
  const [expertQuestion, setExpertQuestion] = useState('');
  const [expertMessages, setExpertMessages] = useState([
    {
      role: 'assistant',
      content: '我可以解释专业难题，例如：为什么EDTA测硬度要控制pH？Fe³⁺分光光度法为什么要做标准曲线？空白样和平行样分别解决什么问题？'
    }
  ]);

  const progressIndex = useMemo(() => {
    if (reportDraft) return 6;
    if (agentFeedback.phase === 'risk' || messages.some((message) => message.phase === 'risk')) return 5;
    if (agentFeedback.phase === 'data' || messages.some((message) => message.phase === 'data')) return 4;
    if (Object.keys(selectedMethods).length >= Math.max(1, selectedIndicators.length)) return 3;
    if (selectedIndicators.length >= 3) return 2;
    if (reasoning.trim()) return 1;
    return 0;
  }, [agentFeedback.phase, messages, reportDraft, reasoning, selectedIndicators.length, selectedMethods]);

  const planScore = useMemo(() => {
    const recommendedHits = selectedCase.recommendedIndicators.filter((item) => selectedIndicators.includes(item)).length;
    const methodHits = selectedIndicators.filter((item) => selectedMethods[item]).length;
    const baseHits = ['pH', '浊度'].filter((item) => selectedIndicators.includes(item)).length;
    return Math.min(100, Math.round(baseHits * 12 + recommendedHits * 9 + methodHits * 7 + (reasoning.trim() ? 12 : 0)));
  }, [reasoning, selectedCase.recommendedIndicators, selectedIndicators, selectedMethods]);

  useEffect(() => {
    fetch('/api/health')
      .then((response) => response.json())
      .then(setApiStatus)
      .catch(() => setApiStatus({ ok: false, llmConfigured: false, model: '未连接' }));
  }, []);

  const startCase = (caseInfo) => {
    setSelectedCase(caseInfo);
    setSceneData(caseInfo.scene);
    const nextIndicators = ['pH', '浊度'].filter((name) => caseInfo.recommendedIndicators.includes(name));
    const seededIndicators = nextIndicators.length ? nextIndicators : ['pH'];
    setSelectedIndicators(seededIndicators);
    setSelectedMethods(
      Object.fromEntries(
        seededIndicators.map((name) => [name, indicatorLibrary.find((item) => item.name === name)?.method || 'pH计'])
      )
    );
    setReasoning('');
    setReportDraft('');
    setTeacherReview('');
    setMessages([initialAssistantMessage(caseInfo)]);
    setAgentFeedback({
      ...emptyFeedback,
      content: `已载入「${caseInfo.title}」。建议先写出污染假设，然后点击“诊断假设”让LLM追问证据。`,
      time: nowText()
    });
    setActiveTab('task');
  };

  const toggleIndicator = (name) => {
    setSelectedIndicators((current) => {
      const exists = current.includes(name);
      const next = exists ? current.filter((item) => item !== name) : [...current, name];
      setSelectedMethods((methods) => {
        if (exists) {
          const copy = { ...methods };
          delete copy[name];
          return copy;
        }
        const recommended = indicatorLibrary.find((item) => item.name === name)?.method || methodLibrary[0];
        return { ...methods, [name]: recommended };
      });
      return next;
    });
  };

  const updateMethod = (indicator, method) => {
    setSelectedMethods((current) => ({ ...current, [indicator]: method }));
  };

  const requestAgent = async (phase, directMessage = '', options = {}) => {
    setLoadingPhase(phase);
    const outgoingMessage = directMessage || studentMessage.trim();
    const appendToTask = options.appendToTask ?? ['chat', 'hypothesis', 'indicators', 'methods', 'data', 'risk'].includes(phase);
    const nextMessages = outgoingMessage && appendToTask
      ? [...messages, { role: 'user', content: outgoingMessage, phase }]
      : messages;

    if (outgoingMessage && appendToTask) {
      setMessages(nextMessages);
      setStudentMessage('');
    }

    setAgentFeedback({
      title: phaseTitles[phase] || 'AI即时反馈',
      phase,
      provider: 'loading',
      content: '正在请求LLM，请稍候...',
      time: nowText()
    });

    try {
      const result = await callAgent(
        createContextPayload({
          phase,
          selectedCase,
          selectedIndicators,
          selectedMethods,
          reasoning,
          reportDraft,
          messages: nextMessages,
          studentMessage: outgoingMessage
        })
      );

      const content = result.reply || 'LLM未返回正文。请检查接口配置，或稍后重试。';
      const provider = result.provider || 'unknown';
      setLastProvider(provider);
      setAgentFeedback({
        title: options.title || phaseTitles[phase] || 'AI即时反馈',
        phase,
        provider,
        content,
        time: nowText()
      });

      if (appendToTask) {
        setMessages((current) => [
          ...current,
          {
            role: 'assistant',
            content,
            provider,
            phase
          }
        ]);
      }
      if (phase === 'data') setActiveTab('simulator');
      if (phase === 'report') {
        setReportDraft(content);
        setActiveTab('report');
      }
      if (phase === 'teacherReview') {
        setTeacherReview(content);
        setActiveTab('report');
      }
      return content;
    } catch (error) {
      const content = `【接口提示】智能体服务暂时不可用：${error.message}`;
      setLastProvider('error');
      setAgentFeedback({
        title: '接口异常',
        phase,
        provider: 'error',
        content,
        time: nowText()
      });
      if (appendToTask) {
        setMessages((current) => [...current, { role: 'assistant', content, provider: 'error', phase }]);
      }
      return content;
    } finally {
      setLoadingPhase('');
    }
  };

  const requestExpert = async () => {
    const question = expertQuestion.trim();
    if (!question) return;
    setExpertMessages((current) => [...current, { role: 'user', content: question }]);
    setExpertQuestion('');
    setLoadingPhase('expert');
    try {
      const result = await callAgent(
        createContextPayload({
          phase: 'expert',
          selectedCase,
          selectedIndicators,
          selectedMethods,
          reasoning,
          reportDraft,
          messages: expertMessages,
          studentMessage: question
        })
      );
      const content = result.reply || 'LLM未返回解释内容。';
      setLastProvider(result.provider || 'unknown');
      setAgentFeedback({
        title: '专业难题解释',
        phase: 'expert',
        provider: result.provider || 'unknown',
        content,
        time: nowText()
      });
      setExpertMessages((current) => [...current, { role: 'assistant', content }]);
    } catch (error) {
      const content = `专业解释暂时不可用：${error.message}`;
      setExpertMessages((current) => [...current, { role: 'assistant', content }]);
    } finally {
      setLoadingPhase('');
    }
  };

  const generateReport = () => requestAgent('report', '请根据当前过程记录生成报告初稿。', { appendToTask: false });
  const reviewReport = () => requestAgent('teacherReview', '请对当前报告进行教师复核评价。', { appendToTask: false });

  const exportReport = () => {
    const content = reportDraft || '尚未生成报告。';
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedCase.id}-水质检测应急报告.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">AI环境分析模拟角色智能体</p>
          <h1>水质检测应急官</h1>
        </div>
        <nav className="tabbar" aria-label="工作区导航">
          {tabs.map((tab) => (
            <button key={tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {activeTab === 'home' && (
          <Home
            selectedCase={selectedCase}
            startCase={startCase}
            sceneData={sceneData}
            agentFeedback={agentFeedback}
          />
        )}

        {activeTab === 'task' && (
          <TaskDesk
            selectedCase={selectedCase}
            messages={messages}
            studentMessage={studentMessage}
            setStudentMessage={setStudentMessage}
            requestAgent={requestAgent}
            loadingPhase={loadingPhase}
            selectedIndicators={selectedIndicators}
            toggleIndicator={toggleIndicator}
            progressIndex={progressIndex}
            agentFeedback={agentFeedback}
          />
        )}

        {activeTab === 'simulator' && (
          <Simulator
            selectedCase={selectedCase}
            sceneData={sceneData}
            setSceneData={setSceneData}
            requestAgent={requestAgent}
            loadingPhase={loadingPhase}
            agentFeedback={agentFeedback}
          />
        )}

        {activeTab === 'planner' && (
          <Planner
            selectedCase={selectedCase}
            selectedIndicators={selectedIndicators}
            selectedMethods={selectedMethods}
            toggleIndicator={toggleIndicator}
            updateMethod={updateMethod}
            reasoning={reasoning}
            setReasoning={setReasoning}
            planScore={planScore}
            requestAgent={requestAgent}
            loadingPhase={loadingPhase}
            agentFeedback={agentFeedback}
          />
        )}

        {activeTab === 'report' && (
          <ReportDesk
            selectedCase={selectedCase}
            reportDraft={reportDraft}
            setReportDraft={setReportDraft}
            teacherReview={teacherReview}
            generateReport={generateReport}
            reviewReport={reviewReport}
            exportReport={exportReport}
            loadingPhase={loadingPhase}
            agentFeedback={agentFeedback}
          />
        )}
      </main>

      <button className="expert-launcher" type="button" onClick={() => setExpertOpen(true)}>
        LLM专家答疑
      </button>

      <ExpertModal
        open={expertOpen}
        onClose={() => setExpertOpen(false)}
        messages={expertMessages}
        question={expertQuestion}
        setQuestion={setExpertQuestion}
        onSubmit={requestExpert}
        loading={loadingPhase === 'expert'}
        selectedCase={selectedCase}
      />
    </div>
  );
}

function Home({ selectedCase, startCase, sceneData, agentFeedback }) {
  return (
    <section className="home-grid">
      <div className="task-column">
        <div className="section-title">
          <span>任务类型</span>
          <strong>选择水样异常事件</strong>
        </div>
        <div className="task-list">
          {taskCases.map((caseInfo) => (
            <button key={caseInfo.id} className={`task-card ${caseInfo.id === selectedCase.id ? 'selected' : ''}`} onClick={() => startCase(caseInfo)}>
              <span className="case-id">{caseInfo.id}</span>
              <strong>{caseInfo.title}</strong>
              <small>{caseInfo.appearance}</small>
              <span className="risk-chip">{caseInfo.riskLabel}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="command-center">
        <div className="center-copy">
          <p className="eyebrow">海蓝实验分析台</p>
          <h2>{selectedCase.title}</h2>
          <p>{selectedCase.goal}</p>
          <div className="quick-stats">
            <div>
              <span>推荐指标</span>
              <strong>{selectedCase.recommendedIndicators.length}</strong>
            </div>
            <div>
              <span>模拟数据</span>
              <strong>{selectedCase.simulatedData.length}</strong>
            </div>
            <div>
              <span>案例类型</span>
              <strong>{selectedCase.type}</strong>
            </div>
          </div>
        </div>
        <WaterScene data={sceneData} />
      </div>

      <aside className="ai-brief">
        <div className="section-title">
          <span>课堂提示</span>
          <strong>教学模拟提醒</strong>
        </div>
        <ul className="brief-list">
          <li>请先提出污染假设，再选择检测指标。</li>
          <li>每个结论都需要对应现场现象或模拟数据。</li>
          <li>报告用于课程训练，需经学生修改和教师复核。</li>
        </ul>
        <AgentFeedback feedback={agentFeedback} compact />
      </aside>
    </section>
  );
}

function TaskDesk({
  selectedCase,
  messages,
  studentMessage,
  setStudentMessage,
  requestAgent,
  loadingPhase,
  selectedIndicators,
  toggleIndicator,
  progressIndex,
  agentFeedback
}) {
  return (
    <section className="task-desk layout-three">
      <aside className="event-file">
        <div className="section-title">
          <span>事件档案</span>
          <strong>{selectedCase.id}</strong>
        </div>
        <dl>
          <dt>地点</dt>
          <dd>{selectedCase.location}</dd>
          <dt>水样外观</dt>
          <dd>{selectedCase.appearance}</dd>
          <dt>初始线索</dt>
          <dd>{selectedCase.clue}</dd>
          <dt>学生身份</dt>
          <dd>{selectedCase.role}</dd>
          <dt>任务目标</dt>
          <dd>{selectedCase.goal}</dd>
        </dl>
        <Workflow progressIndex={progressIndex} />
      </aside>

      <section className="chat-panel">
        <div className="section-title horizontal">
          <div>
            <span>AI任务对话</span>
            <strong>输入学生判断后再让LLM追问</strong>
          </div>
          <div className="phase-actions">
            {phaseButtons.map((button) => (
              <button key={button.phase} onClick={() => requestAgent(button.phase)} disabled={Boolean(loadingPhase)}>
                {loadingPhase === button.phase ? '处理中' : button.label}
              </button>
            ))}
          </div>
        </div>

        <div className="messages" aria-live="polite">
          {messages.map((message, index) => (
            <article key={`${message.role}-${index}`} className={`message ${message.role}`}>
              <span>{message.role === 'user' ? '现场检测员' : message.provider === 'llm' ? 'AI应急官 · LLM' : 'AI应急官'}</span>
              <p>{message.content}</p>
            </article>
          ))}
        </div>

        <form
          className="composer"
          onSubmit={(event) => {
            event.preventDefault();
            if (studentMessage.trim()) requestAgent('chat');
          }}
        >
          <textarea
            value={studentMessage}
            onChange={(event) => setStudentMessage(event.target.value)}
            placeholder="例如：我认为水样发黄可能与管道锈蚀有关，准备检测Fe³⁺、Fe²⁺、浊度和pH。"
          />
          <button type="submit" disabled={Boolean(loadingPhase) || !studentMessage.trim()}>
            {loadingPhase === 'chat' ? '发送中' : '发送并追问'}
          </button>
        </form>
      </section>

      <aside className="indicator-panel">
        <div className="section-title">
          <span>指标选择</span>
          <strong>{selectedIndicators.length} 项已选</strong>
        </div>
        <div className="indicator-tags compact">
          {indicatorLibrary.map((indicator) => (
            <button
              key={indicator.name}
              className={selectedIndicators.includes(indicator.name) ? 'selected' : ''}
              onClick={() => toggleIndicator(indicator.name)}
              title={indicator.meaning}
            >
              {indicator.name}
            </button>
          ))}
        </div>
        <div className="hint-box">
          <strong>本案推荐关注</strong>
          <p>{selectedCase.recommendedIndicators.join('、')}</p>
        </div>
        <AgentFeedback feedback={agentFeedback} compact />
      </aside>
    </section>
  );
}

function Simulator({ selectedCase, sceneData, setSceneData, requestAgent, loadingPhase, agentFeedback }) {
  const update = (patch) => setSceneData((current) => ({ ...current, ...patch }));

  return (
    <section className="simulator-grid">
      <div className="simulator-main">
        <div className="section-title horizontal">
          <div>
            <span>三维水样污染模拟舱</span>
            <strong>{selectedCase.shortTitle}</strong>
          </div>
          <div className="phase-actions">
            <button onClick={() => requestAgent('data')} disabled={Boolean(loadingPhase)}>
              {loadingPhase === 'data' ? '生成中' : '生成模拟数据'}
            </button>
            <button onClick={() => requestAgent('risk')} disabled={Boolean(loadingPhase)}>
              {loadingPhase === 'risk' ? '研判中' : '解释风险'}
            </button>
          </div>
        </div>
        <WaterScene data={sceneData} className="large-scene" />
      </div>

      <aside className="control-panel">
        <div className="section-title">
          <span>场景参数</span>
          <strong>数据联动</strong>
        </div>
        <label>
          污染类型
          <select value={sceneData.pollutionType} onChange={(event) => update({ pollutionType: event.target.value })}>
            <option value="normal">normal 正常浅蓝</option>
            <option value="iron">iron 铁污染浅黄</option>
            <option value="copper">copper 铜污染蓝绿</option>
            <option value="algae">algae 藻类绿色</option>
            <option value="chromium">chromium 铬酸盐黄橙</option>
            <option value="turbidity">turbidity 高浊度</option>
          </select>
        </label>
        <label>
          浊度粒子 {Math.round(sceneData.turbidity * 100)}%
          <input type="range" min="0" max="1" step="0.01" value={sceneData.turbidity} onChange={(event) => update({ turbidity: Number(event.target.value) })} />
        </label>
        <label>
          底部沉淀 {Math.round(sceneData.precipitate * 100)}%
          <input type="range" min="0" max="1" step="0.01" value={sceneData.precipitate} onChange={(event) => update({ precipitate: Number(event.target.value) })} />
        </label>
        <label>
          风险光效
          <select value={sceneData.riskLevel} onChange={(event) => update({ riskLevel: event.target.value })}>
            <option value="normal">normal 正常</option>
            <option value="warning">warning 警戒</option>
            <option value="danger">danger 危险</option>
          </select>
        </label>

        <div className="data-table">
          <div className="table-row head">
            <span>指标</span>
            <span>检测值</span>
            <span>判断</span>
          </div>
          {selectedCase.simulatedData.map((row) => (
            <div className="table-row" key={row.indicator}>
              <span>{row.indicator}</span>
              <span>{row.value} {row.unit}</span>
              <span>{row.status}</span>
            </div>
          ))}
        </div>
        <AgentFeedback feedback={agentFeedback} compact />
      </aside>
    </section>
  );
}

function Planner({
  selectedCase,
  selectedIndicators,
  selectedMethods,
  toggleIndicator,
  updateMethod,
  reasoning,
  setReasoning,
  planScore,
  requestAgent,
  loadingPhase,
  agentFeedback
}) {
  return (
    <section className="planner-grid">
      <aside className="library-panel">
        <div className="section-title">
          <span>指标库</span>
          <strong>点击加入检测流程</strong>
        </div>
        {['基础指标', '滴定分析', '金属离子', '营养盐', '综合污染'].map((group) => (
          <div className="indicator-group" key={group}>
            <h3>{group}</h3>
            <div className="indicator-tags">
              {indicatorLibrary
                .filter((indicator) => indicator.group === group)
                .map((indicator) => (
                  <button
                    key={indicator.name}
                    className={selectedIndicators.includes(indicator.name) ? 'selected' : ''}
                    onClick={() => toggleIndicator(indicator.name)}
                  >
                    {indicator.name}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </aside>

      <section className="workflow-board">
        <div className="section-title horizontal">
          <div>
            <span>检测方案设计工作台</span>
            <strong>完整性 {planScore}/100</strong>
          </div>
          <div className="phase-actions">
            <button onClick={() => requestAgent('indicators')} disabled={Boolean(loadingPhase)}>
              {loadingPhase === 'indicators' ? '分析中' : '检查指标'}
            </button>
            <button onClick={() => requestAgent('methods')} disabled={Boolean(loadingPhase)}>
              {loadingPhase === 'methods' ? '分析中' : '检查方法'}
            </button>
          </div>
        </div>

        <div className="flow-list">
          {selectedIndicators.map((name, index) => {
            const info = indicatorLibrary.find((item) => item.name === name);
            return (
              <article className="flow-item" key={name}>
                <span className="step-number">{index + 1}</span>
                <div>
                  <strong>{name}</strong>
                  <p>{info?.meaning}</p>
                </div>
                <select value={selectedMethods[name] || ''} onChange={(event) => updateMethod(name, event.target.value)}>
                  <option value="">选择方法</option>
                  {methodLibrary.map((method) => (
                    <option value={method} key={method}>{method}</option>
                  ))}
                </select>
              </article>
            );
          })}
          {!selectedIndicators.length && <p className="empty">请先从左侧选择检测指标。</p>}
        </div>

        <label className="reasoning-box">
          判断依据与质控设计
          <textarea
            value={reasoning}
            onChange={(event) => setReasoning(event.target.value)}
            placeholder="写下指标选择依据、方法原理、空白样、平行样、标准曲线或标准溶液标定。LLM会基于这里的内容给反馈。"
          />
        </label>
      </section>

      <aside className="feedback-panel">
        <div className="section-title">
          <span>AI即时反馈</span>
          <strong>当前页可见</strong>
        </div>
        <div className="hint-box">
          <strong>本案推荐指标</strong>
          <p>{selectedCase.recommendedIndicators.join('、')}</p>
        </div>
        <div className="hint-box">
          <strong>推荐方法</strong>
          <p>{selectedCase.suggestedMethods.join('、')}</p>
        </div>
        <div className="score-meter" style={{ '--score': `${planScore}%` }}>
          <span>完整性评分</span>
          <strong>{planScore}</strong>
        </div>
        <AgentFeedback feedback={agentFeedback} compact={false} />
      </aside>
    </section>
  );
}

function ReportDesk({
  selectedCase,
  reportDraft,
  setReportDraft,
  teacherReview,
  generateReport,
  reviewReport,
  exportReport,
  loadingPhase,
  agentFeedback
}) {
  return (
    <section className="report-grid">
      <section className="report-editor">
        <div className="section-title horizontal">
          <div>
            <span>水质检测应急报告生成台</span>
            <strong>{selectedCase.id}</strong>
          </div>
          <div className="phase-actions">
            <button onClick={generateReport} disabled={Boolean(loadingPhase)}>
              {loadingPhase === 'report' ? '生成中' : '生成报告初稿'}
            </button>
            <button onClick={exportReport} disabled={!reportDraft}>导出Markdown</button>
            <button onClick={() => window.print()} disabled={!reportDraft}>打印/PDF</button>
          </div>
        </div>
        <textarea
          className="report-text"
          value={reportDraft}
          onChange={(event) => setReportDraft(event.target.value)}
          placeholder="点击“生成报告初稿”。生成结果会直接写入这里，同时右侧也会显示最近一次LLM反馈。"
        />
      </section>

      <aside className="teacher-panel">
        <div className="section-title horizontal">
          <div>
            <span>教师复核助手</span>
            <strong>100分制评价</strong>
          </div>
          <button onClick={reviewReport} disabled={Boolean(loadingPhase) || !reportDraft}>
            {loadingPhase === 'teacherReview' ? '复核中' : 'AI复核'}
          </button>
        </div>
        <div className="review-box">
          {teacherReview ? <pre>{teacherReview}</pre> : <p>复核结果会检查污染假设、指标完整性、方法匹配、数据解释、质控与报告规范性。</p>}
        </div>
        <AgentFeedback feedback={agentFeedback} compact />
      </aside>
    </section>
  );
}

function AgentFeedback({ feedback, compact = false }) {
  return (
    <section className={`agent-feedback ${compact ? 'compact' : ''}`} aria-live="polite">
      <div className="agent-feedback-head">
        <div>
          <span>{feedback.title}</span>
          <strong>{feedback.provider === 'loading' ? '正在生成反馈' : '教学反馈'}</strong>
        </div>
        {feedback.time && <time>{feedback.time}</time>}
      </div>
      <pre>{feedback.content}</pre>
    </section>
  );
}

function ExpertModal({ open, onClose, messages, question, setQuestion, onSubmit, loading, selectedCase }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="LLM专家答疑弹窗">
      <section className="expert-modal">
        <header>
          <div>
            <span>LLM专业难题解释</span>
            <strong>{selectedCase.shortTitle} · 课程助教</strong>
          </div>
          <button type="button" onClick={onClose}>关闭</button>
        </header>

        <div className="expert-body">
          {messages.map((message, index) => (
            <article key={`${message.role}-${index}`} className={`expert-message ${message.role}`}>
              <span>{message.role === 'user' ? '我' : 'LLM助教'}</span>
              <p>{message.content}</p>
            </article>
          ))}
        </div>

        <form
          className="expert-composer"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="输入专业难题，例如：EDTA络合滴定为什么需要pH=10缓冲溶液？"
          />
          <button type="submit" disabled={loading || !question.trim()}>
            {loading ? '解释中' : '提问'}
          </button>
        </form>
      </section>
    </div>
  );
}

function Workflow({ progressIndex }) {
  return (
    <div className="workflow">
      {workflowSteps.map((step, index) => (
        <div className={`workflow-step ${index <= progressIndex ? 'done' : ''}`} key={step}>
          <span>{index + 1}</span>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
