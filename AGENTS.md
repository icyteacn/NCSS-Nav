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
2. 前端构建：`npm run build`
3. 更新版本号（`src/config/site.js`）
4. 更新 README 和贡献者墙

## 五、红线

- 不引入前端注释（除非必要）
- 不编造数据
- 版权与隐私：第三方内容只做轻量聚合
