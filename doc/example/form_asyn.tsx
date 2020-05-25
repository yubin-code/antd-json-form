import React from 'react';
import { Form } from 'antd-json-form';

const TransferData = [
  { description: "说明1", title: "选项1", key: 1 },
  { description: "说明2", title: "选项2", key: 2 },
  { description: "说明3", title: "选项3", key: 3 },
  { description: "说明4", title: "选项4", key: 4 },
  { description: "说明5", title: "选项5", key: 5 },
  { description: "说明6", title: "选项6", key: 6 },
  { description: "说明7", title: "选项7", key: 7 },
  { description: "说明8", title: "选项8", key: 8 },
  { description: "说明9", title: "选项9", key: 9 },
  { description: "说明10", title: "选项10", key: 10 },
]

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

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];


const fieldsSource = [
  { name: 'select4', label: '爱好', type: 'select',
    props: {
      placeholder: '请选择',
    },
    request: () => {
      return new Promise( (resolve) => {
        setTimeout(() => {
          resolve([
            { label: '篮球', value: 'basketball' },
            { label: '足球', value: 'football' },
            { label: '保龄球', value: 'bowling' },
          ])
        }, 3000)
      })
    }
  },
  { name: 'checkbox', label: '特长', type: 'checkbox',
    request: () => {
      return new Promise( (resolve) => {
        setTimeout(() => {
          resolve([
            { label: '腿特长', value: 'long' },
            { label: '腰特细', value: 'fine' },
            { label: '头特大', value: 'head' },
          ])
        },2000)
      })
    }
  },
  { name: 'radio', label: '性别', type: 'radio',
    request: () => {
      return new Promise( (resolve) => {
        setTimeout(() => {
          resolve([
            { label: '男', value: 'male' },
            { label: '女', value: 'woman' },
            { label: '你猜', value: 'middle' },
          ])
        },1500)
      })
    }
  },
  { name: 'treeSelect', type: 'treeSelect', label: '树选择',
    request: () => {
      return new Promise( (resolve) => {
        setTimeout(() => {
          resolve(treeData)
        },3000)
      })
    },
    props: {
      treeDefaultExpandAll: true,
    }
  },
  { name: 'transfer', type: 'transfer', label: '穿梭框',
    request: () => {
      return new Promise( (resolve) => {
        setTimeout(() => {
          resolve(TransferData)
        },3000)
      })
    },
    props: {
      showSearch: true,
      // targetKeys: [1],
      render: (item: { title: string; }) => item.title
    }
  },
  { name: 'cascader1', type: 'cascader', label: '级联', 
    request: () => {
      return new Promise( (resolve) => {
        setTimeout(() => {
          resolve(options)
        },3000)
      })
    },
    props: {
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
  { type: 'Button', props: { type: 'primary', htmlType: 'submit', children: '提交' } },
]

export default () => <Form layout='horizontal' fieldsSource={fieldsSource} />