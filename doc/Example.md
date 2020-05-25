---
title: 例子
order: 2
sidemenu: false
nav:
  title: 例子
  order: 2
---

## 生成表单

> 通过一个 `fieldsSource` 参数就可以快速的生成表单

<code src="./example/form_example.tsx" />

## 表单布局方式
> 与官方保持一致 `horizontal`, `inline`, `vertical`

<code src="./example/form_layout.tsx" />

## 控制表单的状态
> 表单有两种状态  
> `loading` 防止重置提交  
> `isEdit`当编辑状态的时候可以对对应的字段进行隐藏或者不可编辑状态  
> 对应的参数则是编辑状态不可编辑 `isEditDisabled`, 编辑状态隐藏字段 `isEditHide` 

<code src="./example/form_state.tsx" />


## 自定义字段类型

> 当基础组件类型不能满足要求的时候可以通过 `children` 自定义字段类型

<code src="./example/form_custom.tsx" />

## 通过异步获取选项数据

> 在实际项目中可能出现 `select` 需要向后台请求的情况  
> 只需添加 `request` 返回一个 `Promise` 即可实现

<code src="./example/form_asyn.tsx" />


## 图片上传
> 对上传进行来简化包括上传大小限制 `size` 上传数量限制 `max` 上传类型限制 `fileType`

#### 对 props 新增参数
| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 上传大小显示 1 代表 1MB | `"number"` | `2`|
| max | 上传数量限制 | `"number"` | - |
| error | 错误提示语 | `"string"` | Upload error |
| getError | 获取错误 | `(err: type｜max｜size, props: UploadProp) => void` | - |
| fileType | 上传类型限制 | `string[]` | `[]` |
| fileStyle | 上传的样式 | `button｜images` | `button` |



#### 例子参考

<code src="./example/form_update.tsx" />
