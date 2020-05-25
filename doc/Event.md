---
title: 事件
order: 9
sidemenu: false
nav:
  title: 事件
  order: 9
---

# 事件
> antd 事件不能满足我们要求有时候我们可能需要修改数据而antd通常只返回了一个参数   
> 所以我们增加了一些事件来满足我们的要求  
> 下面所有事件都存在于 `props` 上


## handleSearch 事件
> 添加 `handleSearch` 事件实现搜索同时修改 `options` 数据

<code src="./event/search.tsx" />


## handleLoadData 事件
> 添加 `handleLoadData` 可以用于实现异步加载

<code src="./event/loaddata.tsx" />