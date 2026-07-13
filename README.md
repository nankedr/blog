# 个人博客

基于 Astro 的轻量个人博客，用 Markdown 记录学习笔记和分享。

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

静态产物输出到 `dist`。

## 写文章

在 `src/pages/posts` 下新建 `.md` 文件，并添加 frontmatter：

```md
---
layout: ../../layouts/PostLayout.astro
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-07-13
tags: ["标签"]
---
```
