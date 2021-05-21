---
title: "hugo tutorial"
date: 2021-05-21T23:44:10+08:00
lastmod: 2021-05-21T23:44:10+08:00
draft: false
keywords: []
description: ""
tags: ["hugo"]
categories: ["hugo"]
author: ""

# You can also close(false) or open(true) something for this content.
# P.S. comment can only be closed
comment: false
toc: false
autoCollapseToc: false
postMetaInFooter: false
hiddenFromHomePage: false
# You can also define another contentCopyright. e.g. contentCopyright: "This is another copyright."
contentCopyright: false
reward: false
mathjax: false
mathjaxEnableSingleDollar: false
mathjaxEnableAutoNumber: false

# You unlisted posts you might want not want the header or footer to show
hideHeaderAndFooter: false

# You can enable or disable out-of-date content warning for individual post.
# Comment this out to use the global config.
#enableOutdatedInfoWarning: false

flowchartDiagrams:
  enable: false
  options: ""

sequenceDiagrams: 
  enable: false
  options: ""

---

[原文](https://gohugo.io/getting-started/quick-start/ "quick-start")
## 安装
Mac
```
brew install hugo
```
Win/Linux: https://github.com/gohugoio/hugo/releases

验证
```
hugo version
```

## 新建站
```
hugo new site quickstart
```
目录结构
```
quickstart/
├── archetypes
│   └── default.md
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes
```
## 添加theme
从 themes.gohugo.io 找一款theme，这里使用[Ananke theme](https://themes.gohugo.io/gohugo-theme-ananke/)
```
cd quickstart
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke

(git submodule add git@github.com:theNewDynamic/gohugo-theme-ananke.git themes/ananke)
```
添加theme配置
```
echo theme = \"ananke\" >> config.toml
```

## 添加Content
```
hugo new posts/my-first-post.md

(hugo new <SECTIONNAME>/<FILENAME>.<FORMAT>)
```
生成的md开头有`draft: true`，改成`true`该content才能部署

## 启动hugo server预览
当前目录下
```
hugo server -D
```
打开 http://localhost:1313/

## 生成静态页面
```
hugo -D
```
生成在当前的public目录

