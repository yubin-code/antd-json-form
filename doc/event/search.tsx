import React from 'react';
import { Form } from 'antd-json-form';

const fieldsSource = [
  {
    name: 'autocomplete', type: 'autoComplete', label: '自动完成',
    props: {
      options: [{ value: 'gmail.com' }, { value: '163.com' }, { value: 'qq.com' }],
      handleSearch: (value:string, data:any, setData:any) => {
        let res: string[] = [];
        if (!value || value.indexOf('@') >= 0) {
          res = [];
        }else {
          res = data.map((domain: { value: string; }) => {
            return { value: `${value}@${domain.value}` }
          });
        }
        setData(res)
      },
      placeholder:"请输入"
    }
  },
]

export default () => {
  return <Form layout='horizontal' fieldsSource={fieldsSource} />
}