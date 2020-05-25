import React from 'react';
import { Form } from 'antd-json-form';
import { message } from 'antd';

const fieldsSource = [
  { name: 'upload', type: 'upload', label: '图片', 
    help: "图片上传",
    props: {
      fileStyle: "images",
      fileText: "上传图片",
      action: "/Enter/public/upload",
      fileType: ['image/jpeg', 'image/png'],
      error: "上传失败",
      getError: (err: string, props: { fileType: any; size: any; }) => {
        if(err === "type"){
          message.error(`上传类型错误只能上传的类型为${props.fileType}`)
        }
        if(err === 'size'){
          message.error(`最大上传为${props.size}MB`)
        }
      },
      max: 1,
      size: 2,
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
      },
      defaultFileList: [],
    }
  },
  { name: 'upload1', type: 'upload', label: '文件', 
    help: "按钮方式",
    props: {
      fileStyle: "button",
      fileText: "上传文件",
      action: "/Enter/public/upload",
      fileType: ['image/jpeg', 'image/png'],
      error: "上传失败",
      max: 9,
      headers: {
        'Content-Type': "application/x-www-form-urlencoded",
      },
      defaultFileList: [],
    }
  },
]




export default () => <Form layout='horizontal' fieldsSource={fieldsSource} />