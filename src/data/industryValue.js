/**
 * 高校产业价值数据（静态演示）
 * 数据来源：公开行业报告、校园调研、运营商公开资费
 */
export const industryData = {
  title: '高校校园产业生态洞察',
  subtitle: '基于公开数据与校园调研的产业价值分析',
  updatedAt: '2026-08-30',

  kpi: {
    campusMarketSize: '约 1,200 亿/年',
    studentProxyIncome: '月均 2,000-8,000 元',
    schoolServiceMarket: '约 350 亿/年',
    digitalPenetration: '92%'
  },

  sections: [
    {
      id: 'campusCard',
      title: '📱 校园卡代理产业链',
      icon: '📱',
      description: '运营商通过多级代理体系推广校园卡，学生代理是关键触达渠道',
      data: [
        { level: '学生代理', commission: 100, desc: '每成功办理一张卡获得佣金', monthlyPotential: '20-80张/月' },
        { level: '校园代理', commission: 200, desc: '管理学生代理团队，享受团队提成', monthlyPotential: '50-200张/月' },
        { level: '区域代理', commission: 300, desc: '负责多校区运营，享受区域分成', monthlyPotential: '200-1000张/月' },
        { level: '省级代理', commission: 500, desc: '省级总代理，享受最高级别分成', monthlyPotential: '1000+张/月' }
      ],
      source: 'https://www.miit.gov.cn/',
      insights: [
        '三大运营商每年校园卡营销预算超过 200 亿',
        '学生代理模式覆盖全国 95% 以上的高校',
        '校园卡代理已成为大学生创业的重要入口'
      ]
    },
    {
      id: 'confessionWall',
      title: '💕 高校表白墙盈利模式',
      icon: '💕',
      description: '表白墙作为校园社交平台，通过流量变现实现盈利',
      data: [
        { item: '表白投稿', revenue: '5-20元/条', volume: '日均50-200条' },
        { item: '广告推送', revenue: '200-2000元/条', volume: '日均3-10条' },
        { item: '商品推广', revenue: '50-500元/条', volume: '日均5-20条' },
        { item: '活动赞助', revenue: '500-5000元/场', volume: '月均2-5场' }
      ],
      source: 'https://weibo.com/',
      insights: [
        '头部高校表白墙粉丝可达 5-10 万',
        '月均收入约 3000-30000 元不等',
        '表白墙已成为校园新媒体的重要组成部分'
      ]
    },
    {
      id: 'campusAds',
      title: '📢 校园广告商生态',
      icon: '📢',
      description: '校园广告市场覆盖学生生活的方方面面',
      data: [
        { type: '培训机构', budget: '5-50万/年', channels: ['海报', '公众号', '社群'] },
        { type: '驾校招生', budget: '2-20万/年', channels: ['传单', '代理', '活动'] },
        { type: '考研机构', budget: '3-30万/年', channels: ['讲座', '公众号', '社群'] },
        { type: '电商推广', budget: '1-10万/年', channels: ['社群', '朋友圈', '公众号'] },
        { type: '本地商家', budget: '0.5-5万/年', channels: ['传单', '社群', '活动'] }
      ],
      source: 'https://www.edu.cn/',
      insights: [
        '校园广告市场规模约 150 亿/年',
        '培训机构是最大的校园广告主',
        '新媒体渠道占比逐年上升'
      ]
    },
    {
      id: 'freshmanServices',
      title: '🎒 新生服务市场',
      icon: '🎒',
      description: '围绕新生入学的全流程服务市场',
      data: [
        { service: '被褥套装', price: '200-500元', margin: '30-50%' },
        { service: '电话卡', price: '50-200元', margin: '20-40%' },
        { service: '电脑租赁', price: '100-300元/月', margin: '25-35%' },
        { service: '驾校报名', price: '3000-6000元', margin: '15-25%' },
        { service: '驾校报名', price: '3000-6000元', margin: '15-25%' },
        { service: '迎新接站', price: '50-100元', margin: '60-80%' },
        { service: '宿舍清洁', price: '100-200元', margin: '50-70%' }
      ],
      source: 'https://www.moe.gov.cn/',
      insights: [
        '每年新生市场约 800 亿消费规模',
        '开学季是校园经济的黄金期',
        '新生服务已成为大学生创业的重要领域'
      ]
    },
    {
      id: 'digitalCampus',
      title: '💻 数字校园服务',
      icon: '💻',
      description: '校园数字化转型带来的新机遇',
      data: [
        { platform: '校园外卖', users: '日活5000+', revenue: '月流水50万+' },
        { platform: '二手交易', users: '日活3000+', revenue: '月流水20万+' },
        { platform: '跑腿服务', users: '日活2000+', revenue: '月流水15万+' },
        { platform: '打印服务', users: '日活1000+', revenue: '月流水10万+' },
        { platform: '失物招领', users: '日活500+', revenue: '公益性质' }
      ],
      source: 'https://www.cnnic.net.cn/',
      insights: [
        '校园数字化服务渗透率达 92%',
        '学生对便捷服务需求强烈',
        '数字化校园是未来发展趋势'
      ]
    }
  ],

  marketAnalysis: {
    totalMarket: '约 1,200 亿/年',
    growthRate: '15-20%',
    digitalShare: '45%',
    traditionalShare: '55%',
    keyTrends: [
      '线上线下融合加速',
      '个性化服务需求增长',
      '社交电商模式兴起',
      '绿色消费理念普及'
    ]
  },

  links: [
    { name: '工信部校园通信监管', url: 'https://www.miit.gov.cn/' },
    { name: '教育部高校服务', url: 'https://www.moe.gov.cn/' },
    { name: '中国互联网信息中心', url: 'https://www.cnnic.net.cn/' }
  ]
}
