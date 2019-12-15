---
title: "Git HEAD Detached问题"
date: 2019-12-15T16:17:50+08:00
lastmod: 2019-12-15T16:17:50+08:00
draft: true
keywords: []
description: ""
tags: ["git"]
categories: ["git"]
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

今天在操作blog时遇到detached HEAD的问题，具体解释参考该[文章](https://www.git-tower.com/learn/git/faq/detached-head-when-checkout-commit "detached HEAD")

### 出现原因
在 `git checkout` 时，可以检出分支或提交

`git checkout \<branchname\>`

`git checkout \<commit id\>`

检出分支时，HEAD一起移动到分支最新版本；而检出提交时HEAD就处于detached状态

另外在submodules和rebase中，detached HEAD也常见

### 问题
在detached HEAD状态下，提交的更改不属于任何分支，当切换到其他分支时，修改会丢失。（或许记住提交的commit hash id能找到）

但是也能让在历史版本中方便切换


### 解决detached HEAD办法 

1. 新建临时分支

  `git chechout -b tmp <commit id>`

2. 合并到master

```
  git checkout master
  git merge tmp
```

3. 删除临时分支

`git branch -d tmp`


### 引申问题
若想回到旧版本，其实也不用故意制造detached HEAD状态，使用与上类似操作：

```
$ git checkout -b tmp-branch 56a4e5c08

...do your thing...

$ git checkout master
$ git branch -d tmp-branch
```