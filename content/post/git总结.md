---
title: "Git总结"
date: 2019-12-15T15:18:13+08:00
lastmod: 2019-12-15T15:18:13+08:00
draft: true
keywords: []
description: ""
tags: ["git"]
categories: []
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

对[廖雪峰git教程](https://www.liaoxuefeng.com/wiki/896043488029600 "git教程")的总结, 多人协作部分继续完善

## 基础
`git log` 查看提交历史

`git log --pretty=oneline` 查看简易提交历史

HEAD 当前版本

HEAD^ 上版本

HEAD^^ 上上版本

`git reflog` 记录命令历史

`git diff HEAD -- \<filename\>` 查看工作区和版本库区别

## 撤销修改场景：
1. 改乱了工作区

`git checkout -- \<filename\>` （从暂存区检出 || 从版本库检出）回到最近一次git commit或git add状态

2. 添加了暂存区

`git reset HEAD \<file\>` 撤销暂存区修改unstage，此时回到场景1，执行场景1命令

3. 提交到版本库

`git reset --hard HEAD^` 回退上一个版本
`git reset --hard \<commit id\>` 回退到某个版本

## 删除文件场景：
1. 正常删除:删除文件后从版本库删除

`rm \<file\>`
`git add/rm \<file\>`
`git commit -m "remove \<file>"`

2. 删错了

`git checkout -- \<file\>`

## 远程库
1. 先有本地库，再推远程库

远程库添加

`git remote add origin git@github.com:<username>/<project>.git`

第一次推送，远程库为空

`git push -u origin master`

之后推送

`git push origin master`

2. 从零开发，先创建远程库，再克隆到本地

`git clone git@github.com:<username>/<project>.git`

## 分支管理
`git checkout -b \<dev\>` 创建并切换到dev分支，该命令相当去以下2命令：

  `git branch \<dev\>`

  `git checkout \<dev\>`

`git branch` 查看分支，当前分支前有\*号

`git merge \<dev\>` 将指定分支合并到当前分支（多种合并模式，例如Fast Forward）

`git branch -d \<dev\>` 删除dev分支

新版git支持switch切换分支

`git switch -c dev` 创建并切换分支

`git switch master` 切换到已有分支

merge冲突后，手动修改冲突文件再提交

`git log --graph` 看分支合并图 （--pretty=oneline --abbrev-commit）

可以禁用ff模式，ff模式看不出做过合并

`git merge --no-ff -m "merge with no-ff" \<dev\>` 选项-m加commit

bug分支
feature分支
多人协作
rebase

## 标签管理
标签和commit对应

`git tag` 查看标签，按字母序，不是时间序

`git show \<tagname\>` 查看具体标签信息

`git tag \<v1.0\>` 打标签，默认标签是打在当前分支最新提交的commit上

`git tag v0.9 \<f52c633\>` 在某个commit id上打标签

`git tag -a v0.1 -m "version 0.1 released" \<1094adb\>` 带说明标签

`git tag -d \<v0.1\>` 删除标签

`git push origin \<v1.0\>` 推送单个标签

`git push origin --tags` 推送全部标签

删除远程标签分2步：

`git tag -d v0.9`

`git push origin :refs/tags/v0.9`

设置别名

`git config --global alias.st "status"`

