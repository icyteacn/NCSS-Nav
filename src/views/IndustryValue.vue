<script setup>
import { ref, computed } from 'vue'
import { industryData } from '../data/industryValue.js'
import KpiCard from '../components/KpiCard.vue'
import InsightPanel from '../components/InsightPanel.vue'
import PieChart from '../components/PieChart.vue'

const emit = defineEmits(['back'])

const activeTab = ref('overview')

const marketPie = computed(() => [
  { label: '新生服务', value: 800, color: '#3b82f6' },
  { label: '校园卡', value: 200, color: '#22c55e' },
  { label: '校园广告', value: 150, color: '#f59e0b' },
  { label: '表白墙', value: 50, color: '#ec4899' }
])
</script>

<template>
  <div class="view-top">
    <button class="back-btn" @click="emit('back')">← 返回首页</button>
    <div class="view-title">产业价值洞察</div>
    <div class="view-sub">高校校园产业生态数据 · 基于公开信息与调研分析</div>
  </div>

  <div class="panel" style="margin-bottom:16px;">
    <a class="industry-banner" href="https://cy.ncss.cn/" target="_blank" rel="noopener">
      <span class="banner-icon">📊</span>
      <span class="banner-main">
        <b>{{ industryData.title }}</b>
        <span class="muted">数据来源：工信部、教育部、CNNIC等公开报告 · 更新于 {{ industryData.updatedAt }}</span>
      </span>
      <span class="banner-go">↗</span>
    </a>
  </div>

  <div class="tab-row" style="margin-bottom:16px;flex-wrap:wrap;gap:6px;">
    <button class="tab" :class="{ active: activeTab === 'overview' }" @click="activeTab = 'overview'">📊 市场概览</button>
    <button class="tab" :class="{ active: activeTab === 'campusCard' }" @click="activeTab = 'campusCard'">📱 校园卡代理</button>
    <button class="tab" :class="{ active: activeTab === 'confessionWall' }" @click="activeTab = 'confessionWall'">💕 表白墙经济</button>
    <button class="tab" :class="{ active: activeTab === 'campusAds' }" @click="activeTab = 'campusAds'">📢 校园广告</button>
    <button class="tab" :class="{ active: activeTab === 'freshman' }" @click="activeTab = 'freshman'">🎒 新生服务</button>
    <button class="tab" :class="{ active: activeTab === 'digital' }" @click="activeTab = 'digital'">💻 数字校园</button>
    <button class="tab" :class="{ active: activeTab === 'innovation' }" @click="activeTab = 'innovation'">🚀 创新创业</button>
  </div>

  <!-- 市场概览 -->
  <template v-if="activeTab === 'overview'">
    <div class="kpi-grid">
      <KpiCard :value="industryData.overview.totalMarket" label="校园市场规模" sub="年消费总额" />
      <KpiCard :value="industryData.overview.growthRate" label="年增长率" sub="持续增长" />
      <KpiCard :value="industryData.overview.digitalPenetration" label="数字化渗透率" sub="线上服务占比" />
      <KpiCard :value="industryData.overview.freshmanMarket" label="新生市场" sub="开学季消费" />
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:16px;">
      <div class="panel">
        <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📊 市场结构分布</div>
        <div class="chart-center">
          <PieChart :data="marketPie" :size="160" />
        </div>
        <div class="legend-list">
          <span v-for="item in marketPie" :key="item.label" class="legend-item">
            <span class="legend-dot" :style="{ background: item.color }"></span>
            {{ item.label }}: {{ item.value }}亿/年
          </span>
        </div>
      </div>

      <div class="panel">
        <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📈 市场规模对比</div>
        <div class="market-bars">
          <div class="market-bar-item" v-for="item in marketPie" :key="item.label">
            <span class="bar-label">{{ item.label }}</span>
            <div class="bar-track">
              <div class="bar-fill" :style="{ width: (item.value / 800 * 100) + '%', background: item.color }"></div>
            </div>
            <span class="bar-value">{{ item.value }}亿</span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>🔗 官方资源入口</div>
      <div class="resource-links">
        <a v-for="link in industryData.links" :key="link.url" :href="link.url" target="_blank" rel="noopener" class="resource-item" :class="{ featured: link.featured }">
          <span class="resource-icon">{{ link.icon }}</span>
          <span>{{ link.name }}</span>
          <span class="resource-go">↗</span>
        </a>
      </div>
    </div>
  </template>

  <!-- 校园卡代理 -->
  <template v-if="activeTab === 'campusCard'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 6px;"><span class="bar"></span>📱 {{ industryData.campusCard.title }}</div>
      <p class="section-desc">{{ industryData.campusCard.description }}</p>
      
      <div class="chain-flow">
        <div v-for="(item, i) in industryData.campusCard.chain" :key="item.level" class="chain-item">
          <div class="chain-header">
            <span class="chain-level">{{ item.level }}</span>
            <span class="chain-arrow" v-if="i < industryData.campusCard.chain.length - 1">→</span>
          </div>
          <div class="chain-card">
            <div class="chain-commission">¥{{ item.commission }}/张</div>
            <div class="chain-details">
              <div class="chain-detail"><span>月潜力：</span><b>{{ item.monthlyRange }}</b></div>
              <div class="chain-detail"><span>月收入：</span><b class="highlight">{{ item.monthlyIncome }}</b></div>
              <div class="chain-detail"><span>难度：</span>{{ item.difficulty }}</div>
              <div class="chain-detail"><span>要求：</span>{{ item.requirement }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📞 三大运营商校园卡对比</div>
      <div class="operator-grid">
        <div v-for="op in industryData.campusCard.operators" :key="op.name" class="operator-card">
          <div class="operator-header" :style="{ borderTopColor: op.color }">
            <span class="operator-name">{{ op.name }}</span>
            <span class="operator-price">{{ op.price }}</span>
          </div>
          <div class="operator-product">{{ op.campusCard }}</div>
          <div class="operator-specs">
            <div class="spec-item"><span class="spec-label">流量</span><span class="spec-value">{{ op.data }}</span></div>
            <div class="spec-item"><span class="spec-label">通话</span><span class="spec-value">{{ op.calls }}</span></div>
          </div>
          <div class="operator-features">
            <span v-for="f in op.features" :key="f" class="feature-tag">{{ f }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>💡 行业洞察</div>
      <InsightPanel :items="industryData.campusCard.insights" />
      <div class="source-link">数据来源：<a :href="industryData.campusCard.source" target="_blank">{{ industryData.campusCard.source }}</a></div>
    </div>
  </template>

  <!-- 表白墙经济 -->
  <template v-if="activeTab === 'confessionWall'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 6px;"><span class="bar"></span>💕 {{ industryData.confessionWall.title }}</div>
      <p class="section-desc">{{ industryData.confessionWall.description }}</p>
      
      <div class="revenue-table">
        <div class="table-header">
          <span class="th">收入来源</span>
          <span class="th">单价</span>
          <span class="th">日均量</span>
          <span class="th">月收入潜力</span>
          <span class="th">说明</span>
        </div>
        <div v-for="item in industryData.confessionWall.revenueStreams" :key="item.item" class="table-row">
          <span class="td name">{{ item.item }}</span>
          <span class="td price">{{ item.price }}</span>
          <span class="td volume">{{ item.dailyVolume }}</span>
          <span class="td revenue highlight">{{ item.monthlyRevenue }}</span>
          <span class="td desc">{{ item.description }}</span>
        </div>
      </div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📱 平台对比</div>
      <div class="platform-grid">
        <a v-for="p in industryData.confessionWall.platforms" :key="p.name" :href="p.url" target="_blank" rel="noopener" class="platform-card">
          <div class="platform-name">{{ p.name }}</div>
          <div class="platform-stats">
            <div class="stat-item"><span class="stat-label">粉丝</span><span class="stat-value">{{ p.fans }}</span></div>
            <div class="stat-item"><span class="stat-label">互动率</span><span class="stat-value">{{ p.engagement }}</span></div>
          </div>
          <div class="platform-monetization">{{ p.monetization }}</div>
          <div class="platform-advantage">✨ {{ p.advantage }}</div>
        </a>
      </div>
    </div>

    <div class="panel">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>💡 行业洞察</div>
      <InsightPanel :items="industryData.confessionWall.insights" />
      <div class="source-link">数据来源：<a :href="industryData.confessionWall.source" target="_blank">{{ industryData.confessionWall.source }}</a></div>
    </div>
  </template>

  <!-- 校园广告 -->
  <template v-if="activeTab === 'campusAds'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 6px;"><span class="bar"></span>📢 {{ industryData.campusAds.title }}</div>
      <p class="section-desc">{{ industryData.campusAds.description }}</p>
      
      <div class="advertiser-list">
        <div v-for="ad in industryData.campusAds.advertisers" :key="ad.type" class="advertiser-card">
          <div class="advertiser-header">
            <span class="advertiser-type">{{ ad.type }}</span>
            <span class="advertiser-budget">{{ ad.budget }}</span>
          </div>
          <div class="advertiser-details">
            <div class="ad-detail"><span class="ad-label">目标人群：</span>{{ ad.target }}</div>
            <div class="ad-detail"><span class="ad-label">投放高峰：</span>{{ ad.peak }}</div>
            <div class="ad-detail"><span class="ad-label">投资回报：</span><b class="highlight">{{ ad.roi }}</b></div>
          </div>
          <div class="advertiser-channels">
            <span v-for="c in ad.channels" :key="c" class="channel-tag">{{ c }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>💡 行业洞察</div>
      <InsightPanel :items="industryData.campusAds.insights" />
      <div class="source-link">数据来源：<a :href="industryData.campusAds.source" target="_blank">{{ industryData.campusAds.source }}</a></div>
    </div>
  </template>

  <!-- 新生服务 -->
  <template v-if="activeTab === 'freshman'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 6px;"><span class="bar"></span>🎒 {{ industryData.freshmanServices.title }}</div>
      <p class="section-desc">{{ industryData.freshmanServices.description }}</p>
      
      <div v-for="cat in industryData.freshmanServices.services" :key="cat.category" class="service-group">
        <div class="service-group-title">{{ cat.category }}</div>
        <div class="service-grid">
          <div v-for="item in cat.items" :key="item.name" class="service-card">
            <div class="service-name">{{ item.name }}</div>
            <div class="service-price">{{ item.price }}</div>
            <div class="service-margin">利润率 {{ item.margin }}</div>
            <div class="service-meta">
              <span>目标：{{ item.target }}</span>
              <span>高峰：{{ item.peak }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>💡 行业洞察</div>
      <InsightPanel :items="industryData.freshmanServices.insights" />
      <div class="source-link">数据来源：<a :href="industryData.freshmanServices.source" target="_blank">{{ industryData.freshmanServices.source }}</a></div>
    </div>
  </template>

  <!-- 数字校园 -->
  <template v-if="activeTab === 'digital'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 6px;"><span class="bar"></span>💻 {{ industryData.digitalCampus.title }}</div>
      <p class="section-desc">{{ industryData.digitalCampus.description }}</p>
      
      <div class="digital-grid">
        <div v-for="p in industryData.digitalCampus.platforms" :key="p.name" class="digital-card">
          <div class="digital-header">
            <span class="digital-name">{{ p.name }}</span>
            <span class="digital-growth">{{ p.growth }}</span>
          </div>
          <div class="digital-stats">
            <div class="digital-stat"><span>用户</span><b>{{ p.users }}</b></div>
            <div class="digital-stat"><span>流水</span><b>{{ p.revenue }}</b></div>
          </div>
          <div class="digital-features">
            <span v-for="f in p.features" :key="f" class="feature-tag">{{ f }}</span>
          </div>
          <div class="digital-model">{{ p.model }}</div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>💡 行业洞察</div>
      <InsightPanel :items="industryData.digitalCampus.insights" />
      <div class="source-link">数据来源：<a :href="industryData.digitalCampus.source" target="_blank">{{ industryData.digitalCampus.source }}</a></div>
    </div>
  </template>

  <!-- 创新创业 -->
  <template v-if="activeTab === 'innovation'">
    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 6px;"><span class="bar"></span>🚀 {{ industryData.innovation.title }}</div>
      <p class="section-desc">{{ industryData.innovation.description }}</p>
      
      <div class="innovation-banner">
        <a href="https://cy.ncss.cn/" target="_blank" rel="noopener" class="innovation-main">
          <span class="innovation-icon">🎓</span>
          <div class="innovation-info">
            <b>全国大学生创新服务网</b>
            <span>教育部主管 · 创新创业一站式服务</span>
          </div>
          <span class="innovation-go">↗</span>
        </a>
      </div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>📋 政策支持</div>
      <div class="policy-grid">
        <a v-for="p in industryData.innovation.policies" :key="p.name" :href="p.url" target="_blank" rel="noopener" class="policy-card">
          <span class="policy-icon">{{ p.icon }}</span>
          <div class="policy-info">
            <div class="policy-name">{{ p.name }}</div>
            <div class="policy-desc">{{ p.desc }}</div>
          </div>
          <span class="policy-go">↗</span>
        </a>
      </div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>🌐 创业资源平台</div>
      <div class="platform-grid">
        <a v-for="p in industryData.innovation.platforms" :key="p.name" :href="p.url" target="_blank" rel="noopener" class="platform-card" :class="{ featured: p.featured }">
          <span class="platform-icon">{{ p.icon }}</span>
          <div class="platform-info">
            <div class="platform-name">{{ p.name }}</div>
            <div class="platform-desc">{{ p.desc }}</div>
          </div>
          <span class="platform-go">↗</span>
        </a>
      </div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>🏆 成功案例</div>
      <div class="case-list">
        <div v-for="c in industryData.innovation.successCases" :key="c.name" class="case-card">
          <div class="case-header">
            <span class="case-name">{{ c.name }}</span>
            <span class="case-school">{{ c.school }}</span>
          </div>
          <div class="case-field">{{ c.field }} · {{ c.funding }}</div>
          <div class="case-story">{{ c.story }}</div>
        </div>
      </div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>💡 创业建议</div>
      <div class="tips-grid">
        <div v-for="t in industryData.innovation.tips" :key="t.title" class="tip-card">
          <span class="tip-icon">{{ t.icon }}</span>
          <div class="tip-info">
            <div class="tip-title">{{ t.title }}</div>
            <div class="tip-content">{{ t.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="section-title" style="margin:0 0 12px;"><span class="bar"></span>💡 创新洞察</div>
      <InsightPanel :items="industryData.innovation.insights" />
    </div>
  </template>
</template>

<style scoped>
.kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin-bottom: 16px; }
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
.banner-main .muted { color: rgba(255,255,255,0.8); font-size: 12px; }
.banner-go { font-size: 18px; }
.tab-row { display: flex; flex-wrap: wrap; gap: 6px; }
.tab { font-size: 13px; padding: 8px 14px; border-radius: 10px; border: 1px solid var(--border); background: var(--card); cursor: pointer; transition: all 0.2s; }
.tab.active { background: var(--primary); color: #fff; border-color: var(--primary); }
.section-desc { color: var(--text-sub); font-size: 13px; margin-bottom: 14px; line-height: 1.6; }
.chart-center { display: flex; justify-content: center; margin-bottom: 12px; }
.legend-list { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
.legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-sub); }
.legend-dot { width: 10px; height: 10px; border-radius: 50%; }
.market-bars { display: flex; flex-direction: column; gap: 10px; }
.market-bar-item { display: flex; align-items: center; gap: 10px; }
.bar-label { min-width: 60px; font-size: 12px; color: var(--text-sub); }
.bar-track { flex: 1; height: 20px; background: var(--border); border-radius: 10px; overflow: hidden; }
.bar-fill { height: 100%; border-radius: 10px; transition: width 0.5s ease; }
.bar-value { min-width: 40px; font-size: 12px; font-weight: 700; text-align: right; }
.resource-links { display: flex; flex-direction: column; gap: 8px; }
.resource-item { display: flex; align-items: center; gap: 10px; padding: 10px; background: var(--soft-fg, #f8fafc); border-radius: 8px; color: var(--text); text-decoration: none; transition: background 0.2s; }
.resource-item:hover { background: var(--border); }
.resource-item.featured { background: var(--primary-soft); border: 1px solid var(--primary); }
.resource-icon { font-size: 20px; }
.resource-go { margin-left: auto; color: var(--text-sub); }
.source-link { margin-top: 12px; font-size: 12px; color: var(--text-sub); }
.source-link a { color: var(--primary); text-decoration: none; }

/* 校园卡代理 */
.chain-flow { display: flex; flex-direction: column; gap: 12px; }
.chain-item { display: flex; align-items: flex-start; gap: 12px; }
.chain-header { display: flex; flex-direction: column; align-items: center; min-width: 80px; }
.chain-level { font-weight: 700; font-size: 14px; color: var(--primary); padding: 6px 12px; background: var(--primary-soft); border-radius: 8px; }
.chain-arrow { font-size: 20px; color: var(--text-sub); margin-top: 8px; }
.chain-card { flex: 1; padding: 16px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 12px; }
.chain-commission { font-size: 24px; font-weight: 800; color: #eab308; margin-bottom: 10px; }
.chain-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; }
.chain-detail { font-size: 12px; color: var(--text-sub); }
.chain-detail b { color: var(--text); }
.chain-detail .highlight { color: #22c55e; }
.operator-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; }
.operator-card { padding: 16px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 12px; }
.operator-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; padding-top: 8px; border-top: 3px solid var(--primary); }
.operator-name { font-weight: 700; font-size: 16px; }
.operator-price { font-weight: 700; color: var(--primary); }
.operator-product { font-size: 13px; color: var(--text-sub); margin-bottom: 10px; }
.operator-specs { display: flex; gap: 16px; margin-bottom: 10px; }
.spec-item { display: flex; flex-direction: column; }
.spec-label { font-size: 11px; color: var(--text-sub); }
.spec-value { font-weight: 700; font-size: 14px; }
.operator-features { display: flex; flex-wrap: wrap; gap: 6px; }
.feature-tag { font-size: 11px; padding: 3px 8px; background: var(--primary-soft); color: var(--primary); border-radius: 6px; }

/* 表白墙经济 */
.revenue-table { margin-bottom: 16px; }
.table-header { display: grid; grid-template-columns: 1fr 1fr 1fr 1.2fr 1.5fr; gap: 8px; padding: 10px 0; border-bottom: 2px solid var(--border); font-size: 12px; font-weight: 700; color: var(--text-sub); }
.table-row { display: grid; grid-template-columns: 1fr 1fr 1fr 1.2fr 1.5fr; gap: 8px; padding: 10px 0; border-bottom: 1px dashed var(--border); font-size: 13px; align-items: center; }
.table-row:last-child { border-bottom: none; }
.td.name { font-weight: 600; }
.td.price { color: var(--primary); }
.td.volume { color: var(--text-sub); }
.td.revenue { font-weight: 700; color: #22c55e; }
.td.desc { font-size: 12px; color: var(--text-sub); }
.platform-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
.platform-card { display: flex; flex-direction: column; padding: 16px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 12px; text-decoration: none; color: var(--text); transition: all 0.2s; }
.platform-card:hover { border-color: var(--primary); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.platform-card.featured { border-color: var(--primary); background: var(--primary-soft); }
.platform-name { font-weight: 700; font-size: 16px; margin-bottom: 10px; }
.platform-stats { display: flex; gap: 16px; margin-bottom: 10px; }
.stat-item { display: flex; flex-direction: column; }
.stat-label { font-size: 11px; color: var(--text-sub); }
.stat-value { font-weight: 700; font-size: 14px; }
.platform-monetization { font-size: 12px; color: var(--primary); margin-bottom: 6px; }
.platform-advantage { font-size: 12px; color: #22c55e; }
.platform-icon { font-size: 24px; margin-bottom: 8px; }
.platform-info { flex: 1; }
.platform-desc { font-size: 12px; color: var(--text-sub); margin-top: 4px; }
.platform-go { margin-left: auto; color: var(--text-sub); }

/* 校园广告 */
.advertiser-list { display: flex; flex-direction: column; gap: 12px; }
.advertiser-card { padding: 16px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 12px; }
.advertiser-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.advertiser-type { font-weight: 700; font-size: 16px; }
.advertiser-budget { font-weight: 700; color: #eab308; }
.advertiser-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; margin-bottom: 10px; }
.ad-detail { font-size: 12px; color: var(--text-sub); }
.ad-label { font-weight: 600; }
.ad-detail .highlight { color: #22c55e; }
.advertiser-channels { display: flex; flex-wrap: wrap; gap: 6px; }
.channel-tag { font-size: 11px; padding: 3px 8px; background: var(--accent-light, #f0f9ff); color: var(--primary); border-radius: 6px; }

/* 新生服务 */
.service-group { margin-bottom: 16px; }
.service-group-title { font-size: 14px; font-weight: 700; color: var(--primary-dark); margin-bottom: 10px; padding-left: 8px; border-left: 3px solid var(--accent); }
.service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; }
.service-card { padding: 14px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 10px; }
.service-name { font-weight: 700; font-size: 14px; margin-bottom: 6px; }
.service-price { font-size: 16px; font-weight: 700; color: var(--primary); margin-bottom: 4px; }
.service-margin { font-size: 12px; color: #22c55e; margin-bottom: 6px; }
.service-meta { display: flex; flex-direction: column; gap: 2px; font-size: 11px; color: var(--text-sub); }

/* 数字校园 */
.digital-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
.digital-card { padding: 16px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 12px; }
.digital-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.digital-name { font-weight: 700; font-size: 16px; }
.digital-growth { font-weight: 700; color: #22c55e; font-size: 14px; }
.digital-stats { display: flex; gap: 20px; margin-bottom: 10px; }
.digital-stat { display: flex; flex-direction: column; }
.digital-stat span { font-size: 11px; color: var(--text-sub); }
.digital-stat b { font-size: 14px; }
.digital-features { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.digital-model { font-size: 12px; color: var(--primary); font-weight: 600; }

/* 创新创业 */
.innovation-banner { margin-bottom: 16px; }
.innovation-main { display: flex; align-items: center; gap: 12px; padding: 16px; background: linear-gradient(135deg, #059669, #10b981); color: #fff; border-radius: 12px; text-decoration: none; transition: opacity 0.2s; }
.innovation-main:hover { opacity: 0.9; }
.innovation-icon { font-size: 32px; }
.innovation-info { flex: 1; display: flex; flex-direction: column; gap: 4px; }
.innovation-info b { font-size: 16px; }
.innovation-info span { font-size: 12px; opacity: 0.9; }
.innovation-go { font-size: 18px; }
.policy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
.policy-card { display: flex; align-items: center; gap: 12px; padding: 14px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 10px; text-decoration: none; color: var(--text); transition: all 0.2s; }
.policy-card:hover { border-color: var(--primary); }
.policy-icon { font-size: 24px; }
.policy-info { flex: 1; }
.policy-name { font-weight: 700; font-size: 14px; }
.policy-desc { font-size: 12px; color: var(--text-sub); margin-top: 2px; }
.policy-go { color: var(--text-sub); }
.case-list { display: flex; flex-direction: column; gap: 12px; }
.case-card { padding: 16px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 12px; }
.case-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.case-name { font-weight: 700; font-size: 16px; }
.case-school { font-size: 12px; color: var(--primary); padding: 2px 8px; background: var(--primary-soft); border-radius: 4px; }
.case-field { font-size: 13px; color: #eab308; font-weight: 600; margin-bottom: 6px; }
.case-story { font-size: 13px; color: var(--text-sub); line-height: 1.6; }
.tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
.tip-card { display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: var(--soft-fg, #f8fafc); border: 1px solid var(--border); border-radius: 10px; }
.tip-icon { font-size: 24px; }
.tip-title { font-weight: 700; font-size: 14px; margin-bottom: 4px; }
.tip-content { font-size: 12px; color: var(--text-sub); }
</style>
