# 中国高校科研成果地图 Dashboard

一个面向高校 TTO / 科研成果转化信息的静态 dashboard，可直接部署到 GitHub Pages、Netlify、Vercel 或任意静态文件服务。

## 本地预览

```bash
python3 -m http.server 8001
```

然后访问：

```text
http://localhost:8001/
```

## GitHub Pages 部署

1. 将本目录推送到 GitHub 仓库。
2. 在 GitHub 仓库页面进入 `Settings` -> `Pages`。
3. `Build and deployment` 选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/root`。
5. 保存后等待 GitHub Pages 生成访问链接。

入口文件是 `index.html`。
