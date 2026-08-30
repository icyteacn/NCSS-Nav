/**
 * 高校产业价值数据（静态演示）
 * 数据来源：公开行业报告、校园调研、运营商公开资费
 */
export const industryData = {
  title: '高校校园产业生态洞察',
  subtitle: '基于公开数据与校园调研的产业价值分析',
  updatedAt: '2026-08-30',

  overview: {
    totalMarket: '约 1,200 亿/年',
    growthRate: '15-20%',
    digitalPenetration: '92%',
    campusCardMarket: '约 200 亿/年',
    confessionWallMarket: '约 50 亿/年',
    campusAdMarket: '约 150 亿/年',
    freshmanMarket: '约 800 亿/年'
  },

  campusCard: {
    title: '校园卡代理产业链',
    description: '运营商通过多级代理体系推广校园卡，学生代理是关键触达渠道',
    chain: [
      { level: '学生代理', commission: 100, desc: '每成功办理一张卡获得佣金', monthlyRange: '20-80张', monthlyIncome: '2,000-8,000元', difficulty: '⭐⭐', requirement: '在校学生，有社交资源' },
      { level: '校园代理', commission: 200, desc: '管理学生代理团队，享受团队提成', monthlyRange: '50-200张', monthlyIncome: '10,000-40,000元', difficulty: '⭐⭐⭐', requirement: '有团队管理能力' },
      { level: '区域代理', commission: 300, desc: '负责多校区运营，享受区域分成', monthlyRange: '200-1000张', monthlyIncome: '60,000-300,000元', difficulty: '⭐⭐⭐⭐', requirement: '有跨校区资源' },
      { level: '省级代理', commission: 500, desc: '省级总代理，享受最高级别分成', monthlyRange: '1000+张', monthlyIncome: '500,000+元', difficulty: '⭐⭐⭐⭐⭐', requirement: '有强大社会资源' }
    ],
    operators: [
      { name: '中国移动', campusCard: '动感地带校园版', price: '29元/月', data: '30GB', calls: '100分钟', features: ['定向流量', '校园宽带', '会员权益'] },
      { name: '中国联通', campusCard: '联通校园卡', price: '29元/月', data: '40GB', calls: '100分钟', features: ['大流量', '校园基站', '优惠活动'] },
      { name: '中国电信', campusCard: '天翼校园卡', price: '39元/月', data: '50GB', calls: '200分钟', features: ['融合套餐', '宽带提速', '视频会员'] }
    ],
    insights: [
      '三大运营商每年校园卡营销预算超过 200 亿',
      '学生代理模式覆盖全国 95% 以上的高校',
      '校园卡代理已成为大学生创业的重要入口',
      '开学季（8-9月）是办理高峰，占全年60%以上',
      '优秀学生代理月收入可达万元以上'
    ],
    source: 'https://www.miit.gov.cn/'
  },

  confessionWall: {
    title: '高校表白墙盈利模式',
    description: '表白墙作为校园社交平台，通过流量变现实现盈利',
    revenueStreams: [
      { item: '表白投稿', price: '5-20元/条', dailyVolume: '50-200条', monthlyRevenue: '7,500-120,000元', description: '付费投稿，审核后发布' },
      { item: '广告推送', price: '200-2000元/条', dailyVolume: '3-10条', monthlyRevenue: '18,000-600,000元', description: '商家付费推广' },
      { item: '商品推广', price: '50-500元/条', dailyVolume: '5-20条', monthlyRevenue: '7,500-300,000元', description: '二手商品、代购推广' },
      { item: '活动赞助', price: '500-5000元/场', dailyVolume: '2-5场/月', monthlyRevenue: '1,000-25,000元', description: '校园活动赞助' },
      { item: '付费置顶', price: '10-50元/天', dailyVolume: '10-30条', monthlyRevenue: '3,000-45,000元', description: '帖子置顶服务' },
      { item: '会员服务', price: '9.9-29.9元/月', dailyVolume: '50-200人', monthlyRevenue: '4,950-59,800元', description: 'VIP特权功能' }
    ],
    platforms: [
      { name: '微信公众号', fans: '5-10万', engagement: '5-10%', monetization: '广告+投稿', advantage: '用户粘性高' },
      { name: 'QQ空间', fans: '3-8万', engagement: '3-8%', monetization: '广告+推广', advantage: '传播速度快' },
      { name: '抖音', fans: '1-5万', engagement: '10-20%', monetization: '广告+带货', advantage: '流量大' },
      { name: '小红书', fans: '0.5-2万', engagement: '8-15%', monetization: '种草+广告', advantage: '精准用户' }
    ],
    insights: [
      '头部高校表白墙粉丝可达 5-10 万',
      '月均收入约 3,000-30,000 元不等',
      '表白墙已成为校园新媒体的重要组成部分',
      '运营表白墙可积累新媒体运营经验',
      '表白墙是校园创业的低门槛入口'
    ],
    source: 'https://weibo.com/'
  },

  campusAds: {
    title: '校园广告商生态',
    description: '校园广告市场覆盖学生生活的方方面面',
    advertisers: [
      { type: '培训机构', budget: '5-50万/年', channels: ['海报', '公众号', '社群', '讲座'], target: '考研/考证学生', peak: '3-5月, 9-11月', roi: '1:3-1:5' },
      { type: '驾校招生', budget: '2-20万/年', channels: ['传单', '代理', '活动', '社群'], target: '大一大二学生', peak: '全年', roi: '1:4-1:6' },
      { type: '考研机构', budget: '3-30万/年', channels: ['讲座', '公众号', '社群', '资料'], target: '大三大四学生', peak: '3-9月', roi: '1:3-1:5' },
      { type: '电商推广', budget: '1-10万/年', channels: ['社群', '朋友圈', '公众号', '直播'], target: '全体学生', peak: '618/双11', roi: '1:2-1:4' },
      { type: '本地商家', budget: '0.5-5万/年', channels: ['传单', '社群', '活动', '团购'], target: '周边学生', peak: '全年', roi: '1:5-1:8' },
      { type: '教育科技', budget: '2-15万/年', channels: ['公众号', '社群', '体验课', '裂变'], target: '全体学生', peak: '开学季', roi: '1:3-1:5' }
    ],
    insights: [
      '校园广告市场规模约 150 亿/年',
      '培训机构是最大的校园广告主',
      '新媒体渠道占比逐年上升',
      '精准投放可提升转化率3-5倍',
      '校园KOL（关键意见领袖）价值凸显'
    ],
    source: 'https://www.edu.cn/'
  },

  freshmanServices: {
    title: '新生服务市场',
    description: '围绕新生入学的全流程服务市场',
    services: [
      { category: '生活用品', items: [
        { name: '被褥套装', price: '200-500元', margin: '30-50%', target: '新生', peak: '8-9月' },
        { name: '生活用品包', price: '100-300元', margin: '40-60%', target: '新生', peak: '8-9月' },
        { name: '收纳用品', price: '50-200元', margin: '35-55%', target: '新生', peak: '8-9月' }
      ]},
      { category: '通讯服务', items: [
        { name: '电话卡', price: '50-200元', margin: '20-40%', target: '新生', peak: '8-9月' },
        { name: '校园宽带', price: '100-300元/年', margin: '25-35%', target: '在校生', peak: '全年' },
        { name: '流量包', price: '30-100元', margin: '30-40%', target: '在校生', peak: '全年' }
      ]},
      { category: '数码产品', items: [
        { name: '电脑租赁', price: '100-300元/月', margin: '25-35%', target: '新生', peak: '8-9月' },
        { name: '手机分期', price: '100-500元/月', margin: '15-25%', target: '新生', peak: '8-9月' },
        { name: '数码配件', price: '20-200元', margin: '40-60%', target: '在校生', peak: '全年' }
      ]},
      { category: '教育培训', items: [
        { name: '驾校报名', price: '3000-6000元', margin: '15-25%', target: '大一大二', peak: '全年' },
        { name: '技能培训', price: '500-3000元', margin: '30-50%', target: '在校生', peak: '全年' },
        { name: '语言培训', price: '1000-5000元', margin: '25-40%', target: '在校生', peak: '全年' }
      ]},
      { category: '生活服务', items: [
        { name: '迎新接站', price: '50-100元', margin: '60-80%', target: '新生', peak: '8-9月' },
        { name: '宿舍清洁', price: '100-200元', margin: '50-70%', target: '新生', peak: '8-9月' },
        { name: '代拿快递', price: '5-15元/件', margin: '70-90%', target: '在校生', peak: '全年' },
        { name: '跑腿服务', price: '10-30元/次', margin: '60-80%', target: '在校生', peak: '全年' }
      ]}
    ],
    insights: [
      '每年新生市场约 800 亿消费规模',
      '开学季是校园经济的黄金期',
      '新生服务已成为大学生创业的重要领域',
      '口碑传播是新生服务的关键',
      '线上+线下融合是趋势'
    ],
    source: 'https://www.moe.gov.cn/'
  },

  digitalCampus: {
    title: '数字校园服务',
    description: '校园数字化转型带来的新机遇',
    platforms: [
      { name: '校园外卖', users: '日活5000+', revenue: '月流水50万+', growth: '+25%', features: ['即时配送', '优惠活动', '商家合作'], model: '平台抽成+配送费' },
      { name: '二手交易', users: '日活3000+', revenue: '月流水20万+', growth: '+15%', features: ['担保交易', '分类浏览', '校内自提'], model: '交易佣金+广告' },
      { name: '跑腿服务', users: '日活2000+', revenue: '月流水15万+', growth: '+30%', features: ['快递代拿', '代买代送', '排队代办'], model: '服务费+会员' },
      { name: '打印服务', users: '日活1000+', revenue: '月流水10万+', growth: '+10%', features: ['自助打印', '论文装订', '证件照'], model: '打印费+增值服务' },
      { name: '失物招领', users: '日活500+', revenue: '公益性质', growth: '+20%', features: ['信息发布', '失物认领', '悬赏机制'], model: '公益+广告' },
      { name: '校园社交', users: '日活800+', revenue: '广告收入', growth: '+35%', features: ['兴趣匹配', '活动发布', '表白墙'], model: '广告+会员' }
    ],
    insights: [
      '校园数字化服务渗透率达 92%',
      '学生对便捷服务需求强烈',
      '数字化校园是未来发展趋势',
      '线上线下融合是关键',
      '数据驱动运营提升效率'
    ],
    source: 'https://www.cnnic.net.cn/'
  },

 创业指南: {
    title: '学生创业指南',
    description: '从零开始的校园创业路径',
    steps: [
      { step: 1, title: '发现需求', desc: '观察校园生活痛点，挖掘未被满足的需求', tips: ['与同学交流', '观察日常不便', '分析竞品不足'], icon: '🔍' },
      { step: 2, title: '验证想法', desc: '通过小规模测试验证需求真实性', tips: ['MVP最小可行产品', '收集用户反馈', '快速迭代'], icon: '💡' },
      { step: 3, title: '组建团队', desc: '寻找志同道合的伙伴，分工协作', tips: ['技术+运营+设计', '明确职责', '股权分配'], icon: '👥' },
      { step: 4, title: '获取资源', desc: '利用学校和社会资源支持创业', tips: ['创业孵化器', '大学生创业基金', '导师指导'], icon: '🚀' },
      { step: 5, title: '正式运营', desc: '开始正式运营，持续优化产品', tips: ['数据驱动', '用户反馈', '成本控制'], icon: '📈' },
      { step: 6, title: '规模化', desc: '验证商业模式后，考虑规模化扩张', tips: ['复制成功模式', '拓展市场', '融资'], icon: '🌟' }
    ],
    resources: [
      { name: '大学生创业孵化器', desc: '学校提供的创业场地和指导', icon: '🏢' },
      { name: '创业基金', desc: '政府和学校提供的创业资金支持', icon: '💰' },
      { name: '创业导师', desc: '有经验的企业家或教授指导', icon: '👨‍🏫' },
      { name: '创业课程', desc: '学校开设的创业相关课程', icon: '📚' },
      { name: '创业大赛', desc: '互联网+、挑战杯等创业竞赛', icon: '🏆' },
      { name: '校友网络', desc: '成功创业校友的资源和经验', icon: '🤝' }
    ],
    risks: [
      { risk: '市场需求不足', solution: '充分调研，小步快跑', level: '高' },
      { risk: '团队分裂', solution: '明确股权，建立机制', level: '高' },
      { risk: '资金链断裂', solution: '控制成本，及时融资', level: '中' },
      { risk: '竞争加剧', solution: '差异化竞争，持续创新', level: '中' },
      { risk: '技术风险', solution: '选择成熟技术，快速迭代', level: '低' }
    ],
    insights: [
      '先解决自己的痛点，再服务他人',
      '小成本试错，快速验证',
      '团队比想法更重要',
      '现金流是生命线',
      '保持学习，持续迭代'
    ]
  },

  marketAnalysis: {
    keyTrends: [
      '线上线下融合加速',
      '个性化服务需求增长',
      '社交电商模式兴起',
      '绿色消费理念普及',
      '数据驱动运营',
      'AI技术应用深化'
    ],
    opportunities: [
      '校园服务聚合平台',
      '学生创业孵化服务',
      '校园新媒体运营',
      '校园生活服务O2O',
      '校园数据服务',
      '校园金融科技'
    ],
    challenges: [
      '市场竞争激烈',
      '用户获取成本上升',
      '盈利模式单一',
      '政策监管加强',
      '技术迭代快速'
    ]
  },

  links: [
    { name: '工信部校园通信监管', url: 'https://www.miit.gov.cn/', icon: '🏛️' },
    { name: '教育部高校服务', url: 'https://www.moe.gov.cn/', icon: '📚' },
    { name: '中国互联网信息中心', url: 'https://www.cnnic.net.cn/', icon: '🌐' },
    { name: '大学生创业网', url: 'https://www.chuangye.com/', icon: '🚀' },
    { name: '中国大学生创业基金', url: 'https://www.chuangye.org/', icon: '💰' }
  ]
}
