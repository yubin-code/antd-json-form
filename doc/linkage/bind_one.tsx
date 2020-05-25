import React from 'react';
import { Form } from 'antd-json-form';

const fieldsSource = [
  { name: 'selectOn', type: 'select', props: {
    placeholder: '请选择',
    options: [
      { label: 'one', value: 'one' },
      { label: 'two', value: 'two' },
      { label: 'three', value: 'three' },
    ]
  }, label: '选项' },
  { name: 'name2', type: 'text', label: '名称', bindfield: [
    { field: 'selectOn', value: 'one', mode: 'no' },
  ]},
]

export default () => <Form layout='vertical' initialValues={{ selectOn: 'one' }} fieldsSource={fieldsSource} />