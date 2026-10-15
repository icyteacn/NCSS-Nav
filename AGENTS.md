# AGENTS.md — NCSS-Nav 维护手册

## 一、项目简介

**NCSS-Nav**：模块化、可拼接的校园导航单页应用，支持一键换校适配。

- 技术栈：Vite + Vue 3（Composition API）+ 无后端，托管于 GitHub Pages。
- 数据策略：「优先抓实时、回退用快照」

## 二、一键换校

运行 `python customize.py` 即可交互式适配新高校，或使用配置文件：
```bash
python customize.py --config templates/pku.json
```

## 三、添加新应用

1. 在 `src/views/` 新建视图组件
2. 在 `src/data/apps.js` 追加应用注册
3. 在 `src/router.js` 的 VIEWS 中登记懒加载

## 四、维护清单

1. 改完跑 Python 单测：`python -m unittest discover -s tests`
2. 前端纯函数改动另跑 Node 单测：`node scripts/test_budgetengine.mjs`、`node scripts/test_billimport.mjs`
3. 前端构建：`npm run build`
4. 更新版本号（`src/config/site.js`）
5. 更新 README 和贡献者墙

## 五、更新日志

| 日期 | 版本 | 内容 |
| --- | --- | --- |
| 2026-10-15 | **v1.4.1** | **备份恢复 + 真机冒烟（minor，承接 v1.4.0）**。①新增 `src/utils/budgetBackup.js`（与 QDU-Nav / FJNU-Nav 字节级一致）+ `Budget.vue` 「备份与恢复」面板：导出 JSON 自行保管、导入支持**追加（指纹去重）**与**整体替换**；外部 JSON 逐条规范化并丢弃非法项，不因一条脏数据整包失败；兼容「完整备份 / 裸数组 / 旧版 data」三形态。②新增真机冒烟 `scripts/e2e-budget.mjs`（12 项，自带零依赖静态服务器托管 `dist/`）：断言稳健月均 1000 / 置信度徽标 / 当月外推 620 / 三口径并列 / 加权占比 / 预测面板 / 订阅体检 / 一键配平 100% / 抄进分配器 / 零 JS 错误。③引擎边界加固：金额统一按绝对值聚合，修掉负号金额静默抵消支出的隐患（新增导出 `amountOf()`）。④新增单测 `test_budgetbackup.mjs`（10 项），`test_budgetengine.mjs` 扩至 31 项。⑤`Budget.vue` 文件选择器 accept 补 `.xls`/`.pdf`。**验证**：`npm run build` 通过；三个单测全绿；真机冒烟 12/12（复用本机 ms-playwright 既有 chromium，未下载）。 |
| 2026-10-15 | **v1.4.0** | **生活费预算引擎（与 QDU-Nav / FJNU-Nav 同算法，三仓 `budgetEngine.js` 字节级一致）**。①新增 `src/utils/budgetEngine.js`：稳健月均（Tukey 离群剔除 + 截尾均值 / 中位数降级）、剔除进行中的当月 + 跑量外推、加权分类占比、样本置信度分级、趋势预测（线性回归 vs Holt 按 MAPE 择优）、固定扣费体检（订阅）、占比自动配平、剩余生活费日预算节奏。②`src/views/BudgetSim.vue` 校准页由「近 3 个月简单算术平均」升级为稳健口径，新增置信度徽标、当月外推（含建议日限额）、下月支出预测、订阅体检；参考区间与「按习惯粗估」改同源模型（本地物价系数 1.04）；分配器新增一键配平（最大余额法，尊重各项 min/max）。③`src/utils/billImport.js` 升级为三仓统一版：独立收入词表（旧版收入复用支出词表）、微信交易类型映射、统一内部资金移动识别、金额/日期解析加固、xlsx 多工作表定位、`recordFingerprint()` 幂等去重、**新增银行通用流水解析**（单金额列 / 借贷双列）、**新增中国银行 PDF 账单解析**（新增 `src/utils/pdfjsLoader.js` + 依赖 `pdfjs-dist@6.3.289`，PDF 分支按需动态加载不拖累主包）。④`Budget.vue` 文件选择器 accept 补 `.xls`/`.pdf`。⑤记账存储键**沿用** `fjnu_budget_records`（与「生活费计数器」同键），改名会静默丢失既有记录。**验证**：`npm run build` 通过；`test_budgetengine.mjs` 22 项 + `test_billimport.mjs` 8 项全绿。 |

## 六、红线

- 不引入前端注释（除非必要）
- 不编造数据
- 版权与隐私：第三方内容只做轻量聚合
