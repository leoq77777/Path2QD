# Path2QD
中文 Quant Developer 学习工作台，12 个模块，以免费英文资料为主线。

## 使用
直接打开 dist/index.html；也可在 dist 目录启动任意静态文件服务器。无依赖，无构建步骤，无外部字体或统计脚本。学习进度存于浏览器 localStorage，不跨设备同步，清除浏览器数据会移除进度。存储不可用时退回本次会话。

## 文件
- dist/index.html：页面结构
- dist/style.css：响应式深色主题
- dist/data.js：模块、资料、免费范围、练习与验收
- dist/app.js：导航、折叠、进度

资料核对日期：2026-10-06。免费可读、开源代码、公开协议与仅配套代码开放分别标注；来源直接链接至原作者/官方/仓库。网页提供独立中文学习指引，不复制原始教材。社区资料不作为官方事实依据。实时 feed 和交易所接入可能收费；学习使用合成 fixtures。

Interview Prep 新增 30 题 LeetCode 精选（6 个主题，官方直链、难度、顺序和 C++ 追问），见 dist/leetcode.js。题面免费可读不等于平台内容开源；部分题解/功能收费。

## GitHub Pages
发布 dist 目录中的静态网站。使用 gh-pages 分支根目录发布。更新后运行 git subtree push --prefix dist origin gh-pages。
