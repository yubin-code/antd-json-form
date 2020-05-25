import React, { useState } from 'react'
import { UploadProps, RcFile } from 'antd/es/upload';
import { PlusOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { Upload, Button } from 'antd'
import { GetSystemParam } from '../util'
import { CompleteProps } from '../FormType'

interface UploadProp extends UploadProps, CompleteProps {
  children?: any;           // 子级
  size?: number;            // 文件大小
  max?: number;             // 上传数量
  fileType?: string[];      // 上传类型
  fileText: string;         // 上传按钮文字
  error?: string;           // 错误提示语
  setParam?: any;           // 自定义错误提示
  fileStyle?: 'button'|'images';     // 上传样式
  getError?: (err:string, props: UploadProp) => void
}

const filter: string[] = ['item', 'children', 'error', 'size', 'fileStyle', 'fileText', 'max', 'fileType', 'getError', 'defaultFileList']
export default function (props: UploadProp) {
  const { defaultFileList=[], size=2, getError=()=>{}, max, fileType=[], fileStyle='button' } = props
  const [fileList, setFileList] = useState(defaultFileList)
  const getProps = GetSystemParam(props, filter)

  const Event = {
    beforeUpload: (file: RcFile) => {

      // 上传类型限制
      if(!_.isUndefined(fileType) && fileType.indexOf(file.type) === -1){
        getError('type', props)
        return false
      }

      // 最大数量限制
      if(!_.isUndefined(max) && fileList.length >= max){
        getError('max', props)
        return false
      }

      // 文件大小判断
      const FileSize = file.size / 1024 / 1024 < size;
      if(!FileSize){
        getError('size', Object.assign({ size }, props))
        return false
      }
      return true
    },
    onChange: (info: any) => {
      let list = [...info.fileList]
      // if (info.file.status === 'uploading') {
      //   setLoading(true)
      // }

      // if (info.file.status === 'done') {
      //   setLoading(false)
      // }

      list = list.map(file => {
        const newFile = file
        let url:string = newFile.response && newFile.response.url
        // 设置来自定义获取参数
        if(_.isFunction(props.setParam)){
          url = props.setParam(newFile.response)
        }

        // 如果没有获取地址就报错
        if(!url){
          newFile.status = 'error';
          newFile.response = props.error;
          return newFile
        }

        return newFile
      })
      
      setFileList(list)
    }
  }
  
  const prop = Object.assign(getProps, Event, { fileList })
  
  // 如果有儿子那么就自定义
  if(props.children){
    return <Upload {...prop}>{props.children}</Upload>
  }

  const fileText = props.fileText || 'Upload'

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">{fileText}</div>
    </div>
  );
  
  // 头像样式
  if(fileStyle === 'images'){
    const isMax = !_.isUndefined(max) && fileList.length >= max
    return <Upload {...prop} listType="picture-card">
      {isMax ? null : uploadButton}
    </Upload>
  }

  // 默认按钮样式
  return <Upload {...prop}>
    <Button>{fileText}</Button>
  </Upload>
}