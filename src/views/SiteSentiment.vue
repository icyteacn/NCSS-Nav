<script setup>
import { ref, computed } from 'vue'
import { siteSentimentData } from '../data/siteSentiment.js'
import KpiCard from '../components/KpiCard.vue'
import InsightPanel from '../components/InsightPanel.vue'
import BarRow from '../components/BarRow.vue'
import PieChart from '../components/PieChart.vue'
import LineChart from '../components/LineChart.vue'

const emit = defineEmits(['back'])

const activeTab = ref('overview')
const trendType = ref('bar')
const trendHover = ref(-1)

const maxDaily = computed(() => Math.max(...siteSentimentData.dailyTrend.map(d => d.users)))
const maxHourly = computed(() => Math.max(...siteSentimentData.hourlyTrend.map(d => d.users)))
const maxFeature = computed(() => Math.max(...siteSentimentData.topFeatures.map(f => f.usage)))

const devicePie = computed(() => 
  siteSentimentData.deviceStats.map((d, i) => ({
    label: d.type,
    value: d.percentage,
    color: ['#3b82f6', '#22c55e', '#f59e0b'][i]
  }))
)

const sourcePie = computed(() => 
  siteSentimentData.trafficSources.map((s, i) => ({
    label: s.source,
    value: s.percentage,
    color: ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#94a3b8'][i]
  }))
)

const feedbackPie = computed(() => 
  siteSentimentData.userFeedback.map((f, i) => ({
    label: f.type,
    value: f.percentage,
    color: ['#22c55e', '#f59e0b', '#ef4444'][i]
  }))
)

const dailyLine = computed(() => ({
  labels: siteSentimentData.dailyTrend.map(d => d.day),
  series: [{ label: '日活用户', color: '#3b82f6', data: siteSentimentData.dailyTrend.map(d => d.users) }]
}))

const hourlyLine = computed(() => ({
  labels: siteSentimentData.hourlyTrend.map(d => d.hour),
  series: [{ label: '活跃用户', color: '#8b5cf6', data: siteSentimentData.hourlyTrend.map(d => d.users) }]
}))

const growthLine = computed(() => ({
  labels: siteSentimentData.userGrowth.map(d => d.month.replace('2026-', '')),
  series: [
    { label: '累计用户', color: '#3b82f6', data: siteSentimentData.userGrowth.map(d => d.users) },
    { label: '页面浏览', color: '#22c55e', data: siteSentimentData.userGrowth.map(d => Math.round(d.pages / 100)) }
  ]
}))

function trendIcon(t) {
  return t === 'up' ? '📈' : t === 'down' ? '📉' : '➡️'
}
</script>

<template>
  <div class="view-top">
    <button class="back-btn" @click="emit('back')">← 返回首页</button>
    <div class="view-title">本站舆情分析</div>
    <div class="view-sub">FJNU-Nav 校园导航站使用数据统计（静态演示）</div>
  </div>

  <div class="panel" style="margin-bottom:16px;">
    <a class="site-banner" :href="siteSentimentData.links[0]?.url || '#'" target="_blank" rel="noopener">
      <span class="banner-icon">📊</span>
      <span class="banner-main">
        <b>{{ siteSentimentData.title }}</b>
        <span class="muted">{{ siteSentimentData.period }}</span>
      </span>
      <span class="banner-go">↗</span>
    </a>
  </div>

  <div class="kpi-grid">
    <KpiCard :value="siteSentimentData.overview.totalUsers.toLocaleString()" label="累计用户" sub="全部访问者" />
    <KpiCard :value="siteSentimentData.overview.monthlyActive.toLocaleString()" label="月活用户" sub="近30天活跃" />
    <KpiCard :value="siteSentimentData.overview.dailyActive" label="日活用户" sub="今日活跃" />
    <KpiCard :value="(siteSentimentData.overview.totalPageViews / 10000).toFixed(1) + '万'" label="总浏览量" sub="页面访问" />
  </div>

  <div class="kpi-grid" style="margin-bottom:16px;">
    <KpiCard :value="siteSentimentData.overview.avgSessionTime" label="平均停留" sub="单次访问时长" />
    <KpiCard :value="(100 - parseFloat(siteSentimentData.overview.bounceRate)).toFixed(1) + '%'" label="访问深度" sub="非跳出率" />
    <KpiCard :value="siteSentimentData.socialImpact.servedStudents.toLocaleString()" label="服务学生" sub="覆盖人数" />
    <KpiCard :value="siteSentimentData.socialImpact.dailyQueries.toLocaleString()" label="日均查询" sub="功能使用次数" />
  </div>

  <InsightPanel :items="siteSentimentData.insights" />

  <div class="section-tabs">
    <button class="tab-btn" :class="{ active: activeTab === 'overview' }" @click="activeTab = 'overview'">📊 总览</button>
    <button class="tab-btn" :class="{ active: activeTab === 'features' }" @click="activeTab = 'features'">🎯 功能</button>
    <button class="tab-btn" :class="{ active: activeTab === 'trends' }" @click="activeTab = 'trends'">📈 趋势</button>
    <button class="tab-btn" :class="{ active: activeTab === 'feedback' }" @click="activeTab = 'feedback'">💬 反馈</button>
    <button class="tab-btn" :class="{ active: activeTab === 'impact' }" @click="activeTab = 'impact'">🌍 影响</button>
  </div>

  <!-- 总览 -->
  <template v-if="activeTab === 'overview'">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-bottom:16px;">
      <div class="panel">
        <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📱 设备分布</div>
        <div class="chart-center">
          <PieChart :data="devicePie" :size="140" />
        </div>
        <div class="legend-list">
          <span v-for="d in siteSentimentData.deviceStats" :key="d.type" class="legend-item">
            {{ d.icon }} {{ d.type }}: {{ d.percentage }}%
          </span>
        </div>
      </div>

      <div class="panel">
        <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>🔗 流量来源</div>
        <div class="chart-center">
          <PieChart :data="sourcePie" :size="140" />
        </div>
        <div class="legend-list">
          <span v-for="s in siteSentimentData.trafficSources" :key="s.source" class="legend-item">
            {{ s.source }}: {{ s.percentage }}%
          </span>
        </div>
      </div>

      <div class="panel">
        <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>😊 用户反馈</div>
        <div class="chart-center">
          <PieChart :data="feedbackPie" :size="140" />
        </div>
        <div class="legend-list">
          <span v-for="f in siteSentimentData.userFeedback" :key="f.type" class="legend-item">
            {{ f.type }}: {{ f.count }}条 ({{ f.percentage }}%)
          </span>
        </div>
      </div>
    </div>
  </template>

  <!-- 功能使用 -->
  <template v-if="activeTab === 'features'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>🎯 功能使用排行</div>
      <div v-for="f in siteSentimentData.topFeatures" :key="f.name" class="feature-row">
        <span class="feature-name">{{ f.name }}</span>
        <div class="feature-bar">
          <i :style="{ width: (f.usage / maxFeature * 100) + '%' }"></i>
        </div>
        <span class="feature-count">{{ f.usage.toLocaleString() }}</span>
        <span class="feature-pct">{{ f.percentage }}%</span>
        <span class="feature-trend">{{ trendIcon(f.trend) }}</span>
      </div>
    </div>
  </template>

  <!-- 趋势 -->
  <template v-if="activeTab === 'trends'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📈 用户增长趋势</div>
      <LineChart :series="growthLine.series" :labels="growthLine.labels" :height="160" :max-width="600" />
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:16px;">
      <div class="panel">
        <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📅 周活跃分布</div>
        <div class="mini-bar-chart">
          <div v-for="(d, i) in siteSentimentData.dailyTrend" :key="d.day" class="mb-col" 
               @mouseenter="trendHover = i" @mouseleave="trendHover = -1">
            <div class="mb-tip" :class="{ show: trendHover === i }">{{ d.users }}</div>
            <div class="mb-bar" :class="{ hi: trendHover === i }">
              <i :style="{ height: (d.users / maxDaily * 100) + '%' }"></i>
            </div>
            <span class="mb-label">{{ d.day }}</span>
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>⏰ 24小时活跃</div>
        <LineChart :series="hourlyLine.series" :labels="hourlyLine.labels" :height="140" :max-width="500" />
      </div>
    </div>
  </template>

  <!-- 用户反馈 -->
  <template v-if="activeTab === 'feedback'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>💬 热门评论</div>
      <div v-for="(c, i) in siteSentimentData.topComments" :key="i" class="comment-row">
        <span class="comment-sentiment" :class="c.sentiment">
          {{ c.sentiment === 'positive' ? '👍' : c.sentiment === 'suggestion' ? '💡' : '😤' }}
        </span>
        <span class="comment-text">{{ c.text }}</span>
        <span class="comment-source muted">{{ c.source }}</span>
      </div>
    </div>
  </template>

  <!-- 社会影响 -->
  <template v-if="activeTab === 'impact'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>🌍 社会影响</div>
      <div class="impact-grid">
        <div class="impact-item">
          <div class="impact-value">{{ siteSentimentData.socialImpact.servedStudents.toLocaleString() }}</div>
          <div class="impact-label">服务学生数</div>
        </div>
        <div class="impact-item">
          <div class="impact-value">{{ siteSentimentData.socialImpact.coveredColleges }}</div>
          <div class="impact-label">覆盖学院</div>
        </div>
        <div class="impact-item">
          <div class="impact-value">{{ siteSentimentData.socialImpact.coveredMajors }}</div>
          <div class="impact-label">覆盖专业</div>
        </div>
        <div class="impact-item">
          <div class="impact-value">{{ siteSentimentData.socialImpact.dailyQueries.toLocaleString() }}</div>
          <div class="impact-label">日均查询</div>
        </div>
        <div class="impact-item">
          <div class="impact-value">{{ siteSentimentData.socialImpact.timeSaved }}</div>
          <div class="impact-label">每人每天节省</div>
        </div>
        <div class="impact-item">
          <div class="impact-value">{{ siteSentimentData.socialImpact.employmentOpportunities }}</div>
          <div class="impact-label">带动就业</div>
        </div>
        <div class="impact-item">
          <div class="impact-value">{{ siteSentimentData.socialImpact.internPositions }}</div>
          <div class="impact-label">实习岗位</div>
        </div>
        <div class="impact-item">
          <div class="impact-value">{{ siteSentimentData.socialImpact.skillTraining }}</div>
          <div class="impact-label">技能培训</div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>🔗 访问入口</div>
      <div class="resource-links">
        <a v-for="link in siteSentimentData.links" :key="link.url" :href="link.url" target="_blank" rel="noopener" class="resource-item">
          <span class="resource-icon">🌐</span>
          <span>{{ link.name }}</span>
          <span class="resource-go">↗</span>
        </a>
      </div>
    </div>
  </template>
</template>

<style scoped>
.kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin-bottom: 14px; }
.site-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #059669, #10b981);
  color: #fff;
  border-radius: 14px;
  padding: 14px;
}
.site-banner:hover { opacity: 0.92; }
.banner-icon { font-size: 32px; }
.banner-main { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.banner-main .muted { color: rgba(255,255,255,0.8); }
.banner-go { font-size: 18px; }
.section-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.tab-btn { font-size: 13px; padding: 8px 14px; border-radius: 10px; border: 1px solid var(--border); background: var(--card); cursor: pointer; transition: all 0.2s; }
.tab-btn.active { background: var(--primary); color: #fff; border-color: var(--primary); }
.chart-center { display: flex; justify-content: center; margin-bottom: 12px; }
.legend-list { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.legend-item { font-size: 12px; color: var(--text-sub); }
.feature-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px dashed var(--border); }
.feature-row:last-child { border-bottom: none; }
.feature-name { min-width: 80px; font-size: 13px; font-weight: 600; }
.feature-bar { flex: 1; height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }
.feature-bar i { display: block; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 4px; }
.feature-count { font-size: 13px; font-weight: 700; min-width: 50px; text-align: right; }
.feature-pct { font-size: 12px; color: var(--text-sub); min-width: 40px; text-align: right; }
.feature-trend { font-size: 14px; }
.mini-bar-chart { display: flex; align-items: flex-end; gap: 8px; height: 140px; }
.mb-col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 4px; height: 100%; cursor: pointer; position: relative; }
.mb-tip { position: absolute; top: 0; font-size: 11px; font-weight: 700; background: var(--notice-bg); border: 1px solid var(--notice-border); border-radius: 6px; padding: 2px 6px; opacity: 0; transition: opacity 0.15s; pointer-events: none; }
.mb-tip.show { opacity: 1; }
.mb-bar { width: 100%; max-width: 40px; height: 110px; display: flex; align-items: flex-end; background: var(--bar); border-radius: 6px 6px 0 0; overflow: hidden; transition: background 0.15s; }
.mb-bar i { width: 100%; background: linear-gradient(180deg, #60a5fa, #3b82f6); border-radius: 6px 6px 0 0; transition: background 0.15s; }
.mb-bar.hi { background: rgba(59,130,246,0.25); }
.mb-bar.hi i { background: linear-gradient(180deg, #93c5fd, #3b82f6); }
.mb-label { font-size: 10px; color: var(--text-sub); }
.comment-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px dashed var(--border); }
.comment-row:last-child { border-bottom: none; }
.comment-sentiment { font-size: 20px; }
.comment-text { flex: 1; font-size: 13px; }
.comment-source { font-size: 12px; }
.impact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; }
.impact-item { text-align: center; padding: 14px 8px; background: var(--accent-light); border-radius: 10px; }
.impact-value { font-size: 22px; font-weight: 800; color: var(--primary); margin-bottom: 4px; }
.impact-label { font-size: 12px; color: var(--text-sub); }
.resource-links { display: flex; flex-direction: column; gap: 8px; }
.resource-item { display: flex; align-items: center; gap: 10px; padding: 10px; background: var(--accent-light); border-radius: 8px; color: var(--text); text-decoration: none; transition: background 0.2s; }
.resource-item:hover { background: var(--border); }
.resource-icon { font-size: 20px; }
.resource-go { margin-left: auto; color: var(--text-sub); }
</style>
