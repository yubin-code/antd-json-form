import React from 'react';
import { Form } from 'antd-json-form';
import { Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

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


const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const options1 = [
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
  { name: 'user', type: 'text', label: '账号', rules: [{ required: true, message: "账号不能为空" }],
    props: { placeholder: '请输入账号' }
  },
  { name: 'pass', type: 'password', label: '密码', props: { placeholder: '请输入密码' }},
  { name: 'age', type: 'number', label: '年龄' },
  { name: 'url', type: 'text', label: '地址',
    props: {
      placeholder: '请输入地址',
      suffix:".com",
      addonAfter: <SettingOutlined />,
      addonBefore:<Select defaultValue="http://">
      <Select.Option value="http://">http://</Select.Option>
      <Select.Option value="https://">https://</Select.Option>
    </Select>,
    }
  },
  { name: 'search', type: 'search', label: '搜索', 
    props: {
      placeholder: '请输入搜索内容',
      enterButton: true,
    }
  },
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
  { name: 'cascader', type: 'cascader', label: '级联', props: { placeholder: '请输入选择', options }},
  { name: 'datepicker', type: 'datePicker', label: '日期'},
  { name: 'rangePicker', type: 'rangePicker', label: '范围日期' },
  { name: 'timePicker', type: 'timePicker', label: '时间选择' },
  { name: 'Mentions', type: 'Mentions', label: '提及', 
    props: {
      options: [ "张三", "李四", "老王"],
    }
  },
  { name: 'Rate', type: 'Rate', label: '评分'},
  { name: 'Slider', type: 'Slider', label: '滑动输入'},
  { name: 'Select', type: 'Select', label: '选择器',
    props:{
      mode: 'multiple',
      options: [
        { label: 'one', value: 'one' },
        { label: 'two', value: 'two' },
        { label: 'three', value: 'three' },
      ]
    }
  },
  { name: 'treeSelect', type: 'treeSelect', label: '树选择', 
    props: {
      treeData,
      treeDefaultExpandAll: true,
    }
  },
  { name: 'transfer', type: 'transfer', label: '穿梭框', 
    props: {
      showSearch: true,
      dataSource: TransferData,
      // targetKeys: [1],
      render: (item: { title: string; }) => item.title
    }
  },
  { type: 'Button', props: [
      { type: 'primary', htmlType: 'submit', children: '提交', style: {marginRight: 10 } },
      { type: 'primary', htmlType: 'reset', children: '重置' }
    ]
  },
  { name: 'upload', type: 'upload', label: '上传', 
    props: {
      fileStyle: "avatar",
      fileText: "上传次",
      action: "/Enter/public/upload",
      fileType: ['image/jpeg', 'image/png'],
      error: "上传失败",
      setError: () => {
        console.log("上传失败")
      },
      max: 1,
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
      },
      defaultFileList: [],
    }
  },
]


const onFinish = (values:any) => {
  console.log(values)
}

export default () => {
  return <Form onFinish={onFinish}  initialValues={{user: 'admin', transfer: []}} layout='horizontal' fieldsSource={fieldsSource} />
}