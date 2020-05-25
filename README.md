[查看文档](https://184622329.github.io/antd-json-form/)
## API

> JSON-Form 在antd 基础上进行了封装，尽可能的保留antd Api，也新增了新的api方便快速生成表单

## Form API

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldsSource | 字段列表参数 | [<code>fieldsSource[]</code>](#fieldssource) | `[]` |
| isEdit | form是否是编辑状态 | `"Boolean"` | `false` |
| loading | 表单是否加载中 | `"Boolean"` | `false` |
| onReset | 重置的时候触发 | `() => void` | - |
| 更多 | 更多API与 [antd Form](https://ant.design/components/form-cn/#API) 保持一致 | - | - |


<!-- handleSearch 组件自动完成 -->
<!-- handleLoadData 组件自动完成 -->

## fieldsSource

> `fieldsSource` 对应的是antd 中的 `Form.Item` 同时增加一些新的API

| 属性 | 描述 | 类型 | 默认值 | 必填|
| --- | --- | --- | --- | --- |
| name | 字段名字 | `"string"` | - | 是 |
| [type](#组件类型) | 组件类型 | `"string"` | `Input` | - |
| label | 字段的label |`"string"`| - | - |
| props | 组件的props |`"Object"`|`{}`| - |
| rules | 字段验证与 antd 保持一致 |`Rule[]`| - | - |
| children | 自定义组件 |`ReactNode`|`null`| - |
| isEditDisabled | 编辑状态是否可编辑 | `"Boolean"` | `true` | - |
| isEditHide | 编辑状态是否隐藏 |`"Boolean"`| `false` | - |
| [request](/example#通过异步获取选项数据) | 异步请求数据目前只有`select`，`checkbox`,`radio`组件支持 | `(item: fieldsSource) => Promise` | - | - |
| [bindfield](/form-contact) | 字段联动 | `"Array"` | - | - |
| 更多 | 更多API与[antd Form.Item](https://ant.design/components/form-cn/#Form.Item)保持一致 | - | - | - |


## 组件类型
> 目前支持的类型如下, 他们的`props`属性就是 `fieldsSource`中的 `props`

| TYPE | 描述 |
| --- | --- |
| `"text"` | input输入框 |
| `"number"` | 数字输入框 |
| `"textarea"` | 多行输入框 |
| `"password"` | 密码 |
| `"switch"` | 开关 |
| `"radio"` | 单选框 |
| `"checkbox"` | 复选框 |
| `"select"` | 选择器 |
| `"button"` | 按钮 |
| `"rate"` | 评分 |
| `"slider"` | 滑动输入 |
| `"search"` | 搜索输入框 |
| `"timePicker"` | 时间选择 |
| `"datePicker"` | 日期选择 |
| `"rangePicker"` | 日期范围选择 |
| `"treeSelect"` | 树选择 |
| `"transfer"` | 穿梭框 |
| `"mentions"` | 提及 |
| `"autoComplete"` | 自动完成 |
| `"cascader"` | 级联选择 |
| `"upload"` | 上传 |
