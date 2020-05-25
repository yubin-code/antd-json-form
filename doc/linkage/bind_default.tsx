import React from 'react';
import { Form } from 'antd-json-form';

const fieldsSource = [
  { name: 'switch', type: 'switch', label: '开启'},
  { name: 'name1', type: 'text', label: '名称', bindfield: [
    { field: 'switch', value: true },
  ]},
]

export default () => <Form layout='vertical' fieldsSource={fieldsSource} />