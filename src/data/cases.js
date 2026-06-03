export const taskCases = [
  {
    id: 'WQ-2026-001',
    title: '校园饮用水发黄事件',
    shortTitle: '饮水发黄',
    type: '校园饮用水',
    location: '教学楼一层饮水机',
    appearance: '浅黄色，轻微金属味',
    clue: '管道近期维修，清晨首次放水颜色更明显',
    role: '现场检测员',
    goal: '判断可能原因，设计初筛检测方案并形成教学模拟报告',
    riskLabel: '教学模拟需复测',
    scene: {
      pollutionType: 'iron',
      turbidity: 0.42,
      precipitate: 0.28,
      riskLevel: 'warning'
    },
    recommendedIndicators: ['pH', '浊度', 'Fe³⁺', 'Mn²⁺', '硬度', 'Cl⁻'],
    suggestedMethods: ['pH计', '分光光度法', 'EDTA络合滴定', 'AgNO₃沉淀滴定'],
    simulatedData: [
      { indicator: 'pH', value: '6.8', unit: '', status: '正常', explain: '酸碱性未见明显异常' },
      { indicator: '浊度', value: '4.6', unit: 'NTU', status: '可疑', explain: '可能与管道扰动和悬浮颗粒有关' },
      { indicator: 'Fe³⁺', value: '0.58', unit: 'mg/L', status: '异常', explain: '与发黄和金属味存在关联' },
      { indicator: '硬度', value: '238', unit: 'mg/L CaCO₃', status: '偏高', explain: '提示结垢风险，需结合管网情况判断' },
      { indicator: 'Cl⁻', value: '78', unit: 'mg/L', status: '正常', explain: '暂不支持氯化物异常输入' }
    ]
  },
  {
    id: 'WQ-2026-002',
    title: '河道鱼类异常死亡事件',
    shortTitle: '河道鱼亡',
    type: '地表水应急',
    location: '校园东侧河道中游',
    appearance: '略浑浊，有轻微刺激性气味',
    clue: '上游有生活污水排口，前一日降雨后水位上涨',
    role: '环境检测员',
    goal: '制定河道水质初筛方案，判断缺氧、有机污染或重金属风险',
    riskLabel: '教学模拟需扩展检测',
    scene: {
      pollutionType: 'algae',
      turbidity: 0.66,
      precipitate: 0.2,
      riskLevel: 'danger'
    },
    recommendedIndicators: ['pH', 'DO', 'NH₄⁺', 'NO₂⁻', 'NO₃⁻', 'COD', 'Cu²⁺', 'Pb²⁺', 'Cr(VI)'],
    suggestedMethods: ['pH计', '溶解氧仪', '分光光度法', '快速检测试剂', '仪器分析法'],
    simulatedData: [
      { indicator: 'pH', value: '6.3', unit: '', status: '可疑', explain: '偏弱酸，需结合上游输入判断' },
      { indicator: 'DO', value: '2.1', unit: 'mg/L', status: '异常', explain: '低溶解氧可解释鱼类上浮风险' },
      { indicator: 'NH₄⁺', value: '2.8', unit: 'mg/L', status: '异常', explain: '提示含氮污染输入' },
      { indicator: 'COD', value: '42', unit: 'mg/L', status: '异常', explain: '提示有机物负荷升高' },
      { indicator: 'Cu²⁺', value: '0.03', unit: 'mg/L', status: '正常', explain: '暂不支持铜污染为主因' }
    ]
  },
  {
    id: 'WQ-2026-003',
    title: '实验室废水误排事件',
    shortTitle: '废水误排',
    type: '实验室安全',
    location: '基础化学实验室废液暂存区',
    appearance: '黄色偏橙，局部有蓝绿色痕迹',
    clue: '含铜盐和铬酸盐实验刚结束，废液桶标签不清',
    role: '实验室分析员',
    goal: '完成未知废水初步鉴别、风险分级和安全处置建议',
    riskLabel: '教学模拟高风险',
    scene: {
      pollutionType: 'chromium',
      turbidity: 0.35,
      precipitate: 0.48,
      riskLevel: 'danger'
    },
    recommendedIndicators: ['pH', 'Cu²⁺', 'Cr(VI)', 'Cl⁻', '电导率', '颜色与沉淀'],
    suggestedMethods: ['pH试纸', '目视比色法', '分光光度法', 'AgNO₃沉淀滴定', '仪器分析法'],
    simulatedData: [
      { indicator: 'pH', value: '3.2', unit: '', status: '异常', explain: '提示酸性废液风险' },
      { indicator: 'Cr(VI)', value: '0.36', unit: 'mg/L', status: '异常', explain: '与黄色外观和强氧化性风险相关' },
      { indicator: 'Cu²⁺', value: '0.72', unit: 'mg/L', status: '异常', explain: '与蓝绿色痕迹存在关联' },
      { indicator: 'Cl⁻', value: '142', unit: 'mg/L', status: '可疑', explain: '需结合废液来源和空白对照判断' },
      { indicator: '电导率', value: '2680', unit: 'μS/cm', status: '异常', explain: '总离子强度较高' }
    ]
  },
  {
    id: 'WQ-2026-004',
    title: '鱼塘水体浑浊事件',
    shortTitle: '鱼塘浑浊',
    type: '农业水体',
    location: '校外实训基地鱼塘',
    appearance: '绿色浑浊，表层有少量泡沫',
    clue: '近期高温，投喂量增加，午后异味较明显',
    role: '水质监测员',
    goal: '判断藻类、有机负荷与含氮污染风险，设计复测方案',
    riskLabel: '教学模拟可疑',
    scene: {
      pollutionType: 'turbidity',
      turbidity: 0.78,
      precipitate: 0.18,
      riskLevel: 'warning'
    },
    recommendedIndicators: ['pH', '浊度', 'DO', 'NH₄⁺', 'NO₂⁻', 'COD', '电导率'],
    suggestedMethods: ['pH计', '溶解氧仪', '比浊分析', '分光光度法', '快速检测试剂'],
    simulatedData: [
      { indicator: 'pH', value: '8.4', unit: '', status: '可疑', explain: '藻类光合作用可造成日间pH升高' },
      { indicator: '浊度', value: '32', unit: 'NTU', status: '异常', explain: '与绿色浑浊外观一致' },
      { indicator: 'DO', value: '5.2', unit: 'mg/L', status: '可疑', explain: '需晨间复测判断夜间缺氧' },
      { indicator: 'NH₄⁺', value: '1.1', unit: 'mg/L', status: '可疑', explain: '可能与投喂和分解有关' },
      { indicator: 'COD', value: '28', unit: 'mg/L', status: '可疑', explain: '提示有机负荷升高' }
    ]
  }
];

export const indicatorLibrary = [
  { name: 'pH', meaning: '判断酸碱性和金属溶出条件', method: 'pH计', group: '基础指标' },
  { name: '浊度', meaning: '识别悬浮颗粒和水体混浊程度', method: '比浊分析', group: '基础指标' },
  { name: '电导率', meaning: '判断总离子强度和盐分输入', method: '电导率仪', group: '基础指标' },
  { name: '硬度', meaning: '反映Ca²⁺、Mg²⁺含量和结垢风险', method: 'EDTA络合滴定', group: '滴定分析' },
  { name: 'Cl⁻', meaning: '判断消毒、盐分或管网污染输入', method: 'AgNO₃沉淀滴定', group: '滴定分析' },
  { name: 'Fe³⁺', meaning: '判断水体发黄和金属味可能来源', method: '分光光度法', group: '金属离子' },
  { name: 'Fe²⁺', meaning: '辅助识别还原性铁和管网锈蚀', method: '分光光度法', group: '金属离子' },
  { name: 'Mn²⁺', meaning: '辅助排除地下水或管道锰异常', method: '目视比色法', group: '金属离子' },
  { name: 'Cu²⁺', meaning: '识别铜盐或实验室废水风险', method: '目视比色法', group: '金属离子' },
  { name: 'Pb²⁺', meaning: '识别重金属污染风险', method: '仪器分析法', group: '金属离子' },
  { name: 'Cr(VI)', meaning: '识别铬酸盐和强氧化性废液风险', method: '分光光度法', group: '金属离子' },
  { name: 'NH₄⁺', meaning: '识别含氮污染和有机分解影响', method: '分光光度法', group: '营养盐' },
  { name: 'NO₂⁻', meaning: '判断氮循环异常和亚硝酸盐风险', method: '分光光度法', group: '营养盐' },
  { name: 'NO₃⁻', meaning: '判断硝酸盐输入和氮污染迁移', method: '分光光度法', group: '营养盐' },
  { name: 'COD', meaning: '判断有机污染负荷', method: 'COD测定', group: '综合污染' },
  { name: 'DO', meaning: '判断缺氧风险', method: '溶解氧仪', group: '综合污染' }
];

export const methodLibrary = [
  'pH计',
  'pH试纸',
  '比浊分析',
  '电导率仪',
  'EDTA络合滴定',
  'AgNO₃沉淀滴定',
  '酸碱滴定',
  '分光光度法',
  '目视比色法',
  '离子选择电极法',
  '快速检测试剂',
  '仪器分析法'
];

export const workflowSteps = [
  '事件阅读',
  '污染假设',
  '指标选择',
  '方法匹配',
  '模拟数据',
  '风险研判',
  '报告复核'
];
