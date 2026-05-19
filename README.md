# 🌳 Cayden's Treehouse

米线哥的小树屋

🔗 在线访问：<https://fky.github.io/cayden-treehouse/>

## 本地构建

```bash
npm install
npm run build
```

构建脚本会读取 `games.json`，结合 `scripts/rebuild-index/template.ejs` 模板渲染出 `index.html`。每次 `games.json` 变更，GitHub Actions 也会自动重建并提交首页。
