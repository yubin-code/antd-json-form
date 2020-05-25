import React from 'react';
import { Form } from 'antd-json-form';

const fieldsSource = [
  { name: 'selectbao', type: 'select', props: {
    placeholder: '请选择',
    mode: 'multiple',
    options: [
      { label: 'one', value: 'one' },
      { label: 'two', value: 'two' },
      { label: 'three', value: 'three' },
    ]
  }, label: '选项' },
  { name: 'name2', type: 'text', label: '名称', bindfield: [
    { field: 'selectbao', value: ['one', 'two'] },
  ]},
]

export default () => <Form layout='vertical' initialValues={{ selectbao: ['three'] }} fieldsSource={fieldsSource} />