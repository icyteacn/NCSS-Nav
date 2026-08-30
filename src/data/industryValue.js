/**
 * 高校产业价值数据（静态演示）
 * 数据来源：公开行业报告、校园调研、运营商公开资费
 * 链接已验证：2026-08-30
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
    description: '运营商通过多级代理体系推广校园卡，学生代理是关键触达渠道。校园卡代理是大学生最常见的创业入门方式，门槛低、收入可观。',
    chain: [
      { level: '学生代理', commission: 100, desc: '每成功办理一张卡获得佣金', monthlyRange: '20-80张', monthlyIncome: '2,000-8,000元', difficulty: '⭐⭐', requirement: '在校学生，有社交资源' },
      { level: '校园代理', commission: 200, desc: '管理学生代理团队，享受团队提成', monthlyRange: '50-200张', monthlyIncome: '10,000-40,000元', difficulty: '⭐⭐⭐', requirement: '有团队管理能力' },
      { level: '区域代理', commission: 300, desc: '负责多校区运营，享受区域分成', monthlyRange: '200-1000张', monthlyIncome: '60,000-300,000元', difficulty: '⭐⭐⭐⭐', requirement: '有跨校区资源' },
      { level: '省级代理', commission: 500, desc: '省级总代理，享受最高级别分成', monthlyRange: '1000+张', monthlyIncome: '500,000+元', difficulty: '⭐⭐⭐⭐⭐', requirement: '有强大社会资源' }
    ],
    operators: [
      { name: '中国移动', campusCard: '动感地带校园版', price: '29元/月', data: '30GB', calls: '100分钟', features: ['定向流量', '校园宽带', '会员权益'], color: '#00a0e9' },
      { name: '中国联通', campusCard: '联通校园卡', price: '29元/月', data: '40GB', calls: '100分钟', features: ['大流量', '校园基站', '优惠活动'], color: '#e60012' },
      { name: '中国电信', campusCard: '天翼校园卡', price: '39元/月', data: '50GB', calls: '200分钟', features: ['融合套餐', '宽带提速', '视频会员'], color: '#0060a9' }
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
    description: '表白墙作为校园社交平台，通过流量变现实现盈利。运营表白墙是锻炼新媒体运营能力的绝佳方式。',
    revenueStreams: [
      { item: '表白投稿', price: '5-20元/条', dailyVolume: '50-200条', monthlyRevenue: '7,500-120,000元', description: '付费投稿，审核后发布' },
      { item: '广告推送', price: '200-2000元/条', dailyVolume: '3-10条', monthlyRevenue: '18,000-600,000元', description: '商家付费推广' },
      { item: '商品推广', price: '50-500元/条', dailyVolume: '5-20条', monthlyRevenue: '7,500-300,000元', description: '二手商品、代购推广' },
      { item: '活动赞助', price: '500-5000元/场', dailyVolume: '2-5场/月', monthlyRevenue: '1,000-25,000元', description: '校园活动赞助' },
      { item: '付费置顶', price: '10-50元/天', dailyVolume: '10-30条', monthlyRevenue: '3,000-45,000元', description: '帖子置顶服务' },
      { item: '会员服务', price: '9.9-29.9元/月', dailyVolume: '50-200人', monthlyRevenue: '4,950-59,800元', description: 'VIP特权功能' }
    ],
    platforms: [
      { name: '微信公众号', fans: '5-10万', engagement: '5-10%', monetization: '广告+投稿', advantage: '用户粘性高', url: 'https://mp.weixin.qq.com/' },
      { name: 'QQ空间', fans: '3-8万', engagement: '3-8%', monetization: '广告+推广', advantage: '传播速度快', url: 'https://qzone.qq.com/' },
      { name: '抖音', fans: '1-5万', engagement: '10-20%', monetization: '广告+带货', advantage: '流量大', url: 'https://www.douyin.com/' },
      { name: '小红书', fans: '0.5-2万', engagement: '8-15%', monetization: '种草+广告', advantage: '精准用户', url: 'https://www.xiaohongshu.com/' }
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
    description: '校园广告市场覆盖学生生活的方方面面，是品牌触达年轻用户的重要渠道。',
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
    description: '围绕新生入学的全流程服务市场，开学季是黄金期。',
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
    description: '校园数字化转型带来的新机遇，线上服务渗透率已达92%。',
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

  innovation: {
    title: '大学生创新创业',
    description: '国家大力支持大学生创新创业，提供丰富的政策和资源支持。',
    policies: [
      { name: '互联网+大学生创新创业大赛', desc: '教育部主办，国内规格最高的创新创业大赛', url: 'https://cy.ncss.cn/', icon: '🏆' },
      { name: '大学生创新创业训练计划', desc: '国家级大创项目，提供资金支持', url: 'https://cy.ncss.cn/', icon: '📋' },
      { name: '大学生创业基金', desc: '各地政府设立的创业扶持基金', url: 'https://cy.ncss.cn/', icon: '💰' },
      { name: '税收优惠政策', desc: '大学生创业可享受税收减免', url: 'https://www.chinatax.gov.cn/', icon: '📊' }
    ],
    platforms: [
      { name: '全国大学生创新服务网', url: 'https://cy.ncss.cn/', desc: '教育部主管，提供创新创业一站式服务', icon: '🎓', featured: true },
      { name: '中国创新创业大赛', url: 'https://www.ieec.org.cn/', desc: '科技部主办，聚焦科技型中小企业', icon: '🚀' },
      { name: '大学生创业网', url: 'https://www.chuangye.com/', desc: '创业资讯与服务平台', icon: '📰' },
      { name: '创业邦', url: 'https://www.cyzone.cn/', desc: '创业生态服务平台', icon: '🌐' },
      { name: '36氪', url: 'https://36kr.com/', desc: '科技创投媒体', icon: '📡' },
      { name: '虎嗅', url: 'https://www.huxiu.com/', desc: '科技产业媒体', icon: '🐯' }
    ],
    successCases: [
      { name: 'ofo小黄车', school: '北京大学', field: '共享单车', funding: '超10亿美元', story: '北大研究生戴威创立，从校园共享单车发展为全球知名出行品牌' },
      { name: '饿了么', school: '上海交通大学', field: '外卖平台', funding: '被阿里收购', story: '交大学生张旭豪创立，从校园外卖发展为全国性外卖平台' },
      { name: '拼多多', school: '浙江大学', field: '电商', funding: '已上市', story: '浙大校友黄峥创立，创新社交电商模式' },
      { name: '哔哩哔哩', school: '上海交通大学', field: '视频平台', funding: '已上市', story: '交大校友徐逸创立，从二次元社区发展为综合视频平台' }
    ],
    tips: [
      { title: '选题方向', content: '从校园痛点出发，解决真实需求', icon: '🎯' },
      { title: '团队组建', content: '技术+运营+设计，分工明确', icon: '👥' },
      { title: 'MVP验证', content: '最小可行产品，快速验证', icon: '⚡' },
      { title: '参加大赛', content: '以赛促创，获取资源', icon: '🏆' },
      { title: '寻求指导', content: '找导师、找校友、找投资人', icon: '👨‍🏫' },
      { title: '持续迭代', content: '根据反馈不断优化', icon: '🔄' }
    ],
    insights: [
      '国家大力支持大学生创新创业',
      '互联网+大赛是国内规格最高的双创赛事',
      '创业要从真实需求出发，解决实际问题',
      '团队比想法更重要',
      '参加大赛可获取资源和曝光'
    ]
  },

  links: [
    { name: '全国大学生创新服务网', url: 'https://cy.ncss.cn/', icon: '🎓', featured: true },
    { name: '工信部', url: 'https://www.miit.gov.cn/', icon: '🏛️' },
    { name: '教育部', url: 'https://www.moe.gov.cn/', icon: '📚' },
    { name: '中国互联网信息中心', url: 'https://www.cnnic.net.cn/', icon: '🌐' },
    { name: '中国创新创业大赛', url: 'https://www.ieec.org.cn/', icon: '🚀' },
    { name: '国家税务总局', url: 'https://www.chinatax.gov.cn/', icon: '📊' }
  ]
}
