import React from 'react';
import { Form } from 'antd-json-form';

const fieldsSource = [
  { name: 'selecteQual', label: '选项', type: 'select', props: {
      placeholder: '请选择',
      mode: 'multiple',
      options: [
        { label: 'one', value: 'one' },
        { label: 'two', value: 'two' },
        { label: 'three', value: 'three' },
      ]
    }
  },
  { name: 'name3', type: 'text', label: '名称', bindfield: [
    { field: 'selecteQual', value: ['one','two'], mode: 'equal' },
  ]},
]

export default () => <Form layout='vertical' fieldsSource={fieldsSource} />