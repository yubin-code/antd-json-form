import React from 'react';
import { Form } from 'antd-json-form';
import { Input } from 'antd';

const fieldsSource = [
  { name: 'user3', type: 'text', label: '账号', props: { placeholder: '请输入账号' }},
  { name: 'pass3', type: 'password', label: '密码', props: { placeholder: '请输入密码' }},
  { name: 'input',  label: '自定义的组件', children: <Input />},
  { label: '自定义', children: <div>自定的内容</div>},
  { children: <div>不填写label自定的内容</div>},
  { type: 'Button', props: { type: 'primary', htmlType: 'submit', children: '提交' } },
]

export default () => <Form layout='horizontal' fieldsSource={fieldsSource} />