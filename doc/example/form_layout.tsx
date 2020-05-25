import React, { useState } from 'react';
import { Form } from 'antd-json-form';

export default () => {
  const [layout, setlayout] = useState("horizontal")

  const fieldsSource = [
    { name: 'user2', type: 'text', label: '账号', isEditDisabled: true, props: { placeholder: '请输入账号' }},
    { name: 'pass5', type: 'password', label: '密码', props: { placeholder: '请输入密码' }},
    { name: 'textarea1', type: 'textarea', label: '内容', isEditHide: true, props: { rows: 4 } },
    { type: 'button', props: [
        { type: 'primary', htmlType: 'submit', children: '提交', style:{ marginRight: 10 } }, 
        { type: 'primary', htmlType: 'reset', children: '重置' }
      ]
    },
  ]

  const operation = [
    { type: 'radio',
      name: 'layout',
      props: {
        buttonStyle:"solid",
        options: [
          { label: "horizontal", value: "horizontal" },
          { label: "inline", value: "inline" },
          { label: "vertical", value: "vertical" },
        ]
      },
    label: '布局'},
  ]

  const onFormLayoutChange = (data: { layout: React.SetStateAction<string>; }) => {
    setlayout(data.layout)
  }

  return (
    <div>
      <Form onValuesChange={onFormLayoutChange}layout='horizontal' initialValues={{ layout }} fieldsSource={operation} />
      <Form layout={layout} fieldsSource={fieldsSource} />
    </div>
  )
}