---
title: 字段联动
order: 3
sidemenu: false
nav:
  title: 字段联动
  order: 3
---

## 字段联动
在 `fieldsSource` 参数中提供 `bindfield` 字段用于联动表单

## 参数 bindfield

> `bindfield` 是一个数组可以关联多个字段

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| field | `"string"` | 被关联的字段名称 |
| value | `"string"`,`"number"`,`"array"` | 关联字段的值 |
| mode | `"string"` | `默认`是联动模式 `no` 模式为不匹配 `equal` 模式需完全匹配 |


## 提示
> 如果觉得这个 Form-Json 太大可以单独安装这个组件  
> 我已经把他抽象出来了 [文档地址](https://yubin-code.github.io/antd-linkage/#/)

```bash
npm i antd-linkage --save
# or
yarn add antd-linkage --save

```

## 默认模式
<code src="./linkage/bind_default.tsx" />


## no 不匹配模式

> 当值不为 `one` 的时候完成匹配

<code src="./linkage/bind_one.tsx" />

## 包含关系

> 只要包括其中一个值那么就显示

<code src="./linkage/bind_intersection.tsx" />


## equal 完全匹配模式

> 两个值必须完成相等才能完成匹配包括数组，当`one`和`two`都被选中的时候完成匹配

<code src="./linkage/bind_equal.tsx" />


## 三种模式同时使用

> 下面成立条件为 `开启`，性别不为`中间` 选项 `one`, `two`

<code src="./linkage/bind_agg.tsx" />
