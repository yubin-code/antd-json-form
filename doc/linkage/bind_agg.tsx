import React from 'react';
import { Form } from 'antd-json-form';

const fieldsSource = [
  { name: 'switch1', type: 'switch', label: '开启' },
  { name: 'radio', label: '性别', type: 'Radio',
    props: {
      options: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
        { label: '你猜', value: '你猜' },
      ]
    }
  },
  { name: 'selecteQual1', label: '选项', type: 'select',
    props: {
      placeholder: '请选择',
      mode: 'multiple',
      options: [
        { label: 'one', value: 'one' },
        { label: 'two', value: 'two' },
        { label: 'three', value: 'three' },
      ]
    }
  },
  { name: 'age', type: 'text', label: '年龄', bindfield: [
      { field: 'switch1', value: true },
      { field: 'selecteQual1', value: ['one','two'], mode: 'equal' },
      { field: 'radio', value: '你猜', mode: 'no' },
    ]
  },
]
export default () => <Form layout='vertical' initialValues={{ radio: '中间' }} fieldsSource={fieldsSource} />