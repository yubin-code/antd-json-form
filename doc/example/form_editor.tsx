import React from 'react';
import { Form } from 'antd-json-form';

const fieldsSource = [
  { name: 'editor', type: "editor", label: '内容' },
]

export default () => <Form layout='horizontal' fieldsSource={fieldsSource} /> 
