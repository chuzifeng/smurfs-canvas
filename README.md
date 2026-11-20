# 蓝精灵画布

一块画布，从文字到成片。AI 短剧 / 漫剧创作桌面软件。

## 技术栈
- Electron 桌面壳
- Vite + Vue 3 前端
- bun 包管理器
- NSIS 打包安装程序

## 本地开发
```bash
bun install          # 安装依赖
bun run dev          # 启动开发模式
bun run build:win    # 打包 Windows 安装包
```

## 发布
推送 `v*` 标签即可自动构建三平台安装包并发布 GitHub Release：
```bash
git tag v0.1.0
git push origin main --tags
```

## 官网
- 源码在 `site/`，推送 `main` 分支后 GitHub Actions 自动部署到 GitHub Pages。
- 仓库非同名，官网地址为 `https://chuzifeng.github.io/smurfs-canvas/`。
- 需在仓库 Settings → Pages → Source 选 **GitHub Actions**。
