<script setup>
import { ref, computed } from 'vue'
import { industryData } from '../data/industryValue.js'
import KpiCard from '../components/KpiCard.vue'
import InsightPanel from '../components/InsightPanel.vue'
import BarRow from '../components/BarRow.vue'
import PieChart from '../components/PieChart.vue'

const emit = defineEmits(['back'])

const activeSection = ref(industryData.sections[0].id)
const currentSection = computed(() => 
  industryData.sections.find(s => s.id === activeSection.value) || industryData.sections[0]
)

const insights = computed(() => {
  const list = []
  list.push(`高校校园市场规模达 ${industryData.marketAnalysis.totalMarket}，年增长率 ${industryData.marketAnalysis.growthRate}`)
  list.push(`数字化服务渗透率已达 ${industryData.marketAnalysis.digitalShare}`)
  industryData.sections.forEach(s => {
    if (s.insights?.[0]) list.push(s.insights[0])
  })
  return list
})

const pieData = computed(() => [
  { label: '线上服务', value: 45, color: '#3b82f6' },
  { label: '传统服务', value: 55, color: '#94a3b8' }
])

const maxBarValue = computed(() => {
  const sec = currentSection.value
  if (!sec?.data) return 1
  return Math.max(...sec.data.map(d => d.commission || 100))
})
</script>

<template>
  <div class="view-top">
    <button class="back-btn" @click="emit('back')">← 返回首页</button>
    <div class="view-title">产业价值洞察</div>
    <div class="view-sub">高校校园产业生态数据 · 基于公开信息与调研分析</div>
  </div>

  <div class="panel" style="margin-bottom:16px;">
    <a class="industry-banner" :href="industryData.links[0]?.url || '#'" target="_blank" rel="noopener">
      <span class="banner-icon">📊</span>
      <span class="banner-main">
        <b>{{ industryData.title }}</b>
        <span class="muted">{{ industryData.subtitle }}</span>
      </span>
      <span class="banner-go">↗</span>
    </a>
    <p class="muted" style="font-size:12px;margin:10px 2px 0;">
      数据来源：工信部、教育部、CNNIC等公开报告，仅供学习研究参考。
    </p>
  </div>

  <div class="kpi-grid">
    <KpiCard :value="industryData.kpi.campusMarketSize" label="校园市场规模" sub="年消费总额" />
    <KpiCard :value="industryData.kpi.studentProxyIncome" label="学生代理收入" sub="月均可观收入" />
    <KpiCard :value="industryData.kpi.schoolServiceMarket" label="校园服务市场" sub="服务类消费" />
    <KpiCard :value="industryData.kpi.digitalPenetration" label="数字化渗透率" sub="线上服务占比" />
  </div>

  <InsightPanel :items="insights" />

  <div class="panel" style="margin-bottom:16px;">
    <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📊 市场结构分析</div>
    <div class="chart-row">
      <div class="chart-box">
        <div class="chart-label">线上 vs 传统服务占比</div>
        <PieChart :data="pieData" :size="140" />
      </div>
      <div class="chart-info">
        <div class="info-item">
          <span class="info-label">年增长率</span>
          <span class="info-value">{{ industryData.marketAnalysis.growthRate }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">数字化占比</span>
          <span class="info-value">{{ industryData.marketAnalysis.digitalShare }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">传统占比</span>
          <span class="info-value">{{ industryData.marketAnalysis.traditionalShare }}</span>
        </div>
      </div>
    </div>
    <div class="trend-tags">
      <span v-for="t in industryData.marketAnalysis.keyTrends" :key="t" class="trend-tag">{{ t }}</span>
    </div>
  </div>

  <div class="section-tabs">
    <button 
      v-for="s in industryData.sections" 
      :key="s.id"
      class="tab-btn"
      :class="{ active: activeSection === s.id }"
      @click="activeSection = s.id"
    >
      {{ s.icon }} {{ s.title.replace(/^.+\s/, '') }}
    </button>
  </div>

  <div class="panel" style="margin-bottom:16px;">
    <div class="section-title" style="margin:0 0 12px;">
      <span class="bar"></span>{{ currentSection.title }}
    </div>
    <p class="section-desc">{{ currentSection.description }}</p>
    
    <div class="data-table">
      <div class="table-header">
        <template v-if="currentSection.id === 'campusCard'">
          <span class="th">级别</span>
          <span class="th">单卡佣金</span>
          <span class="th">月潜力</span>
          <span class="th">说明</span>
        </template>
        <template v-else-if="currentSection.id === 'confessionWall'">
          <span class="th">收入来源</span>
          <span class="th">单价</span>
          <span class="th">日均量</span>
        </template>
        <template v-else-if="currentSection.id === 'campusAds'">
          <span class="th">广告主</span>
          <span class="th">年度预算</span>
          <span class="th">渠道</span>
        </template>
        <template v-else-if="currentSection.id === 'freshmanServices'">
          <span class="th">服务</span>
          <span class="th">价格</span>
          <span class="th">利润率</span>
        </template>
        <template v-else>
          <span class="th">平台</span>
          <span class="th">日活</span>
          <span class="th">月流水</span>
        </template>
      </div>
      <div v-for="(item, i) in currentSection.data" :key="i" class="table-row">
        <template v-if="currentSection.id === 'campusCard'">
          <span class="td level">{{ item.level }}</span>
          <span class="td commission">¥{{ item.commission }}</span>
          <span class="td potential">{{ item.monthlyPotential }}</span>
          <span class="td desc">{{ item.desc }}</span>
        </template>
        <template v-else-if="currentSection.id === 'confessionWall'">
          <span class="td">{{ item.item }}</span>
          <span class="td">{{ item.revenue }}</span>
          <span class="td">{{ item.volume }}</span>
        </template>
        <template v-else-if="currentSection.id === 'campusAds'">
          <span class="td">{{ item.type }}</span>
          <span class="td">{{ item.budget }}</span>
          <span class="td channels">
            <span v-for="c in item.channels" :key="c" class="channel-tag">{{ c }}</span>
          </span>
        </template>
        <template v-else-if="currentSection.id === 'freshmanServices'">
          <span class="td">{{ item.service }}</span>
          <span class="td">{{ item.price }}</span>
          <span class="td margin">{{ item.margin }}</span>
        </template>
        <template v-else>
          <span class="td">{{ item.platform }}</span>
          <span class="td">{{ item.users }}</span>
          <span class="td">{{ item.revenue }}</span>
        </template>
      </div>
    </div>

    <div class="insight-box">
      <div class="insight-title">💡 行业洞察</div>
      <ul>
        <li v-for="(ins, i) in currentSection.insights" :key="i">{{ ins }}</li>
      </ul>
    </div>

    <div class="source-link">
      <span>数据来源：</span>
      <a :href="currentSection.source" target="_blank" rel="noopener">{{ currentSection.source }}</a>
    </div>
  </div>

  <div class="panel" style="margin-bottom:16px;">
    <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>🔗 相关资源</div>
    <div class="resource-links">
      <a v-for="link in industryData.links" :key="link.url" :href="link.url" target="_blank" rel="noopener" class="resource-item">
        <span class="resource-icon">🌐</span>
        <span>{{ link.name }}</span>
        <span class="resource-go">↗</span>
      </a>
    </div>
  </div>

  <div class="panel">
    <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📈 产业价值总结</div>
    <div class="summary-grid">
      <div class="summary-item">
        <div class="summary-icon">🎯</div>
        <div class="summary-text">
          <b>市场规模</b>
          <p>高校校园市场年消费规模超 1200 亿，覆盖通信、餐饮、教育、生活服务等多个领域</p>
        </div>
      </div>
      <div class="summary-item">
        <div class="summary-icon">💼</div>
        <div class="summary-text">
          <b>就业创业</b>
          <p>校园代理模式每年创造超过 100 万个学生兼职岗位，培养创业意识和能力</p>
        </div>
      </div>
      <div class="summary-item">
        <div class="summary-icon">🚀</div>
        <div class="summary-text">
          <b>数字化转型</b>
          <p>数字化服务渗透率达 92%，线上化趋势加速，为校园Nav类产品提供发展机遇</p>
        </div>
      </div>
      <div class="summary-item">
        <div class="summary-icon">💡</div>
        <div class="summary-text">
          <b>创新机遇</b>
          <p>校园服务聚合平台可整合分散资源，提升服务效率，创造商业和社会双重价值</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 16px; }
.industry-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  color: #fff;
  border-radius: 14px;
  padding: 14px;
}
.industry-banner:hover { opacity: 0.92; }
.banner-icon { font-size: 32px; }
.banner-main { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.banner-main .muted { color: rgba(255,255,255,0.8); }
.banner-go { font-size: 18px; }
.chart-row { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
.chart-box { text-align: center; }
.chart-label { font-size: 12px; color: var(--text-sub); margin-bottom: 8px; }
.chart-info { flex: 1; min-width: 150px; }
.info-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed var(--border); }
.info-label { color: var(--text-sub); font-size: 13px; }
.info-value { font-weight: 700; color: var(--primary); }
.trend-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.trend-tag { font-size: 12px; padding: 4px 10px; background: var(--accent-light); color: var(--primary); border-radius: 20px; }
.section-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.tab-btn { font-size: 13px; padding: 8px 14px; border-radius: 10px; border: 1px solid var(--border); background: var(--card); cursor: pointer; transition: all 0.2s; }
.tab-btn.active { background: var(--primary); color: #fff; border-color: var(--primary); }
.section-desc { color: var(--text-sub); font-size: 13px; margin-bottom: 14px; }
.data-table { margin-bottom: 14px; }
.table-header { display: grid; gap: 8px; padding: 8px 0; border-bottom: 2px solid var(--border); font-size: 12px; font-weight: 700; color: var(--text-sub); }
.table-row { display: grid; gap: 8px; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 13px; align-items: center; }
.table-row:last-child { border-bottom: none; }
.level { font-weight: 700; color: var(--primary); }
.commission { font-weight: 800; color: #eab308; }
.potential { color: #22c55e; font-weight: 600; }
.desc { color: var(--text-sub); font-size: 12px; }
.channels { display: flex; flex-wrap: wrap; gap: 4px; }
.channel-tag { font-size: 11px; padding: 2px 6px; background: var(--accent-light); border-radius: 4px; }
.margin { color: #22c55e; font-weight: 600; }
.insight-box { background: var(--accent-light); border-radius: 10px; padding: 12px; margin-top: 12px; }
.insight-title { font-weight: 700; font-size: 13px; margin-bottom: 8px; }
.insight-box ul { margin: 0; padding-left: 18px; font-size: 12px; color: var(--text-sub); line-height: 1.8; }
.source-link { margin-top: 10px; font-size: 12px; color: var(--text-sub); }
.source-link a { color: var(--primary); text-decoration: none; }
.source-link a:hover { text-decoration: underline; }
.resource-links { display: flex; flex-direction: column; gap: 8px; }
.resource-item { display: flex; align-items: center; gap: 10px; padding: 10px; background: var(--accent-light); border-radius: 8px; color: var(--text); text-decoration: none; transition: background 0.2s; }
.resource-item:hover { background: var(--border); }
.resource-icon { font-size: 20px; }
.resource-go { margin-left: auto; color: var(--text-sub); }
.summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }
.summary-item { display: flex; gap: 12px; padding: 12px; background: var(--accent-light); border-radius: 10px; }
.summary-icon { font-size: 28px; }
.summary-text b { display: block; margin-bottom: 4px; }
.summary-text p { margin: 0; font-size: 12px; color: var(--text-sub); line-height: 1.6; }
</style>
