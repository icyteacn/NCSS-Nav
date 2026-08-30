/**
 * 本站舆情数据（静态演示）
 * 模拟校园导航站的使用情况统计
 */
export const siteSentimentData = {
  title: '本站舆情分析',
  subtitle: 'FJNU-Nav 校园导航站使用数据统计与分析',
  updatedAt: '2026-08-30',
  period: '2026年3月-2026年8月',

  overview: {
    totalUsers: 12580,
    monthlyActive: 4320,
    dailyActive: 680,
    totalPageViews: 156800,
    avgSessionTime: '4分32秒',
    bounceRate: '28.5%'
  },

  userGrowth: [
    { month: '2026-03', users: 1200, pages: 8500 },
    { month: '2026-04', users: 2100, pages: 15200 },
    { month: '2026-05', users: 3400, pages: 28600 },
    { month: '2026-06', users: 5200, pages: 42300 },
    { month: '2026-07', users: 8900, pages: 98500 },
    { month: '2026-08', users: 12580, pages: 156800 }
  ],

  topFeatures: [
    { name: '课程表', usage: 4520, percentage: 35.9, trend: 'up' },
    { name: '教室导航', usage: 3280, percentage: 26.1, trend: 'up' },
    { name: '食堂空座率', usage: 2150, percentage: 17.1, trend: 'stable' },
    { name: '校历', usage: 1680, percentage: 13.4, trend: 'up' },
    { name: '今天吃什么', usage: 1200, percentage: 9.5, trend: 'down' },
    { name: '生活费计数器', usage: 980, percentage: 7.8, trend: 'up' },
    { name: '体测计算器', usage: 850, percentage: 6.8, trend: 'stable' },
    { name: '贴吧舆情', usage: 720, percentage: 5.7, trend: 'down' }
  ],

  dailyTrend: [
    { day: '周一', users: 720 },
    { day: '周二', users: 680 },
    { day: '周三', users: 750 },
    { day: '周四', users: 690 },
    { day: '周五', users: 620 },
    { day: '周六', users: 480 },
    { day: '周日', users: 520 }
  ],

  hourlyTrend: [
    { hour: '8:00', users: 45 },
    { hour: '9:00', users: 82 },
    { hour: '10:00', users: 68 },
    { hour: '11:00', users: 95 },
    { hour: '12:00', users: 120 },
    { hour: '13:00', users: 78 },
    { hour: '14:00', users: 65 },
    { hour: '15:00', users: 58 },
    { hour: '16:00', users: 72 },
    { hour: '17:00', users: 88 },
    { hour: '18:00', users: 110 },
    { hour: '19:00', users: 95 },
    { hour: '20:00', users: 82 },
    { hour: '21:00', users: 68 }
  ],

  deviceStats: [
    { type: '移动端', percentage: 78, icon: '📱' },
    { type: '桌面端', percentage: 18, icon: '💻' },
    { type: '平板', percentage: 4, icon: '📟' }
  ],

  trafficSources: [
    { source: '直接访问', percentage: 42 },
    { source: '微信分享', percentage: 28 },
    { source: 'QQ分享', percentage: 15 },
    { source: '搜索引擎', percentage: 10 },
    { source: '其他', percentage: 5 }
  ],

  userFeedback: [
    { type: '好评', count: 1250, percentage: 78 },
    { type: '建议', count: 280, percentage: 17 },
    { type: '吐槽', count: 85, percentage: 5 }
  ],

  topComments: [
    { text: '课程表功能太方便了，再也不用打开教务系统了！', sentiment: 'positive', source: '微信' },
    { text: '食堂空座率很实用，再也不用排队了', sentiment: 'positive', source: 'QQ' },
    { text: '建议增加更多学院的课表查询', sentiment: 'suggestion', source: '反馈' },
    { text: '教室导航地图可以更精确一些', sentiment: 'suggestion', source: '反馈' },
    { text: '希望能增加考试倒计时功能', sentiment: 'suggestion', source: '贴吧' },
    { text: '校历功能很方便，一眼就能看到假期安排', sentiment: 'positive', source: '微信' }
  ],

  socialImpact: {
    servedStudents: 12580,
    coveredColleges: 28,
    coveredMajors: 84,
    dailyQueries: 2800,
    timeSaved: '约 15 分钟/人/天',
    employmentOpportunities: 8,
    internPositions: 3,
    skillTraining: 45
  },

  insights: [
    '课程表和教室导航是最受欢迎的功能，占总使用量的 62%',
    '移动端用户占比 78%，符合学生使用习惯',
    '工作日使用量明显高于周末，说明主要服务于学习场景',
    '用户平均停留时间 4 分 32 秒，说明功能粘性较好',
    '好评率达 78%，用户满意度较高',
    '项目已服务超过 12000 名学生，覆盖全校 28 个学院'
  ],

  links: [
    { name: 'FJNU-Nav 在线访问', url: 'https://icyteacn.github.io/FJNU-Nav/' },
    { name: 'GitHub 仓库', url: 'https://github.com/icyteacn/FJNU-Nav' }
  ]
}
