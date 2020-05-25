import React, { useState } from 'react';
import { Form } from 'antd-json-form';

export default () => {
  const [load, setload] = useState(false)
  const [edit, setEdit] = useState(false)

  const fieldsSource = [
    { name: 'user1', type: 'text', label: '账号', isEditDisabled: true, props: { placeholder: '请输入账号' }},
    { name: 'pass2', type: 'password', label: '密码', props: { placeholder: '请输入密码' }},
    { name: 'textarea', type: 'textarea', label: '内容', isEditHide: true, props: { rows: 4 } },
    { type: 'button', props: [
        { type: 'primary', htmlType: 'submit', children: '提交', style:{ marginRight: 10 } }, 
        { type: 'primary', htmlType: 'reset', children: '重置' }
      ]
    },
  ]

  const operation = [
    { type: 'switch',
      props: [
        { style: { marginRight: 10 }, checkedChildren: '不加载', unCheckedChildren: '加载状态', onChange:  (value:boolean) => setload(() => value)},
        { checkedChildren: '添加状态', unCheckedChildren: '编辑状态', onChange: (value:boolean) => setEdit(() => value) }
      ],
    label: '表单状态'},
  ]

  return (
    <div>
      <Form layout='horizontal' fieldsSource={operation} />
      <Form layout='horizontal' loading={load} isEdit={edit} fieldsSource={fieldsSource} />
    </div>
  )
}