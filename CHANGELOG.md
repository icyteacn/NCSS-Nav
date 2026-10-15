# Changelog · NCSS-Nav

> 逐条工程日志见 AGENTS.md 更新日志；本文件为版本摘要。

## v1.4.3 (2026-10-15) · 修复 GitHub Actions 部署失败（patch）
run failed 的精确根因有二：
① v1.4.0 新增了 pdfjs-dist 依赖，但 package-lock.json 未同步 → CI 的 `npm ci` 直接失败
  （npm ci 要求 lock 与 package.json 严格一致）。已 `npm install` 同步锁文件，`npm ci --dry-run` 本地复验通过。
② deploy.yml 缺少 `actions/configure-pages@v5`：deploy-pages 依赖它写入 Pages 站点信息，缺失时典型报错为
  「Get Pages site failed ... consider exploring the enablement parameter」。已按两仓同款补齐（build 之后、
  upload-pages-artifact 之前）。

顺带：router.js 的 preloadPopular 增加「弱网(2G/saveData)跳过 + 空闲调度」，避免 7 个路由 chunk 在首屏后
立刻争抢带宽。


## v1.4.2 (2026-10-15) · 安全与健壮性加固（patch）：外部 HTML 白名单消毒 + 本机存储兜底 + 死代码清理 + 门禁补挂
新增 src/utils/sanitizeHtml.js（零依赖 · DOM-free，浏览器与 Node 行为一致）：通知详情页 v-html 渲染的教务处正文来自校外服务器，属外部不可信输入，原实现仅在网关侧剥 on* 且无标签白名单，纯静态降级路径更是完全裸露。现改为严格白名单：标签白名单（非白名单标签「拆壳保字」）、内容丢弃表（script/style/iframe/svg/math/form 等连子树一起丢）、属性按标签限定（a[href]、img[src/alt]、td[colspan/rowspan]…）、URL 协议白名单（javascript:/vbscript:/非图片 data: 一律拒绝，先做实体解码与空白/控制字符归一，防 &#106;avascript: 绕过）、外链自动补 rel="noopener noreferrer"。测试中还揪出并修掉一个真实缺陷：script 内出现 "<script>" 字符串时深度配对计数会误判，导致脚本体被当正文输出——按 HTML 规范改为「原始文本元素在第一个 </tag 处结束」。
新增 src/utils/safeStorage.js：localStorage/sessionStorage 的「永不抛异常」薄壳（隐私模式/配额满/沙箱下 setItem 会抛 QuotaExceededError/SecurityError，裸调用会中断交互），提供 safeGet/safeSet/safeRemove/getJson/setJson/makeStore 与可用性探测。
修复 8 处未保护的本机写入：Budget 记录写回与隐藏皮肤、PhysicalTest 体测偏好、FoodWheel 历史与余额、QuizGame 最佳分/轮次/排行榜、BuildingMatch 最佳步数，全部改走 safeStorage。
死代码清理：删除未被任何地方引用的导出 utils/busuanzi.js bszPagePv()。
门禁补挂：deploy.yml 的前端单测门禁补上 test_budgetbackup.mjs（上一版漏挂）与新增 test_sanitize.mjs。
新增单测 scripts/test_sanitize.mjs（15 项）：标签白名单/内容丢弃/属性限定/伪协议与实体绕过/标签配对/真实公报样本。

