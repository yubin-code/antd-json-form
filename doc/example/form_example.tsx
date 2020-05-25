import React from 'react';
import { Form } from 'antd-json-form';

const fieldsSource = [
  { name: 'user', type: 'text', label: '账号', rules: [{ required: true, message: "账号不能为空" }], props: { placeholder: '请输入账号' }},
  { name: 'pass', type: 'password', label: '密码', props: { placeholder: '请输入密码' }},
  { type: 'Button', props: { type: 'primary', htmlType: 'submit', children: '提交' } },
]

export default () => <Form layout='horizontal' fieldsSource={fieldsSource} />