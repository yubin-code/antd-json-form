import React from 'react';
import { Form } from 'antd-json-form';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

const fieldsSource = [
  { name: 'cascader1', type: 'cascader', label: '级联', 
    props: {
      options,
      placeholder: '请输入选择',
      handleLoadData: (selectedOptions: string | any[], data: any, setData: (arg: any[]) => void) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        setTimeout(() => {
          targetOption.loading = false;
          targetOption.children = [
            {
              label: `${targetOption.label} Dynamic 1`,
              value: 'dynamic1',
            },
            {
              label: `${targetOption.label} Dynamic 2`,
              value: 'dynamic2',
            },
          ];
          setData([...data])
        }, 1000);
      }
    }
  },
]

export default () => {
  return <Form layout='horizontal' fieldsSource={fieldsSource} />
}