import React, { useState } from 'react'
import { TransferProps } from 'antd/es/transfer';
import _ from 'lodash';
import { Transfer } from 'antd'
import { CompleteProps } from '../FormType'
import { GetSystemParam } from '../util'
import ComponentRequest from './ComponentRequest'


interface TransferProp extends TransferProps, CompleteProps {
}

const filter: string[] = ['item', 'onChange']
export default function (props: TransferProp) {
  const { targetKeys=[], selectedKeys= [] } = props
  const [targetKey, setTargetKey] = useState(targetKeys)
  const [selectedKey, setSelectedKey] = useState(selectedKeys)
  const getProps = GetSystemParam(props, filter)

  // 改变时候逻辑
  const handleChange = (nextTargetKeys: string[], direction: string, moveKeys: string[]) => {

    setTargetKey(()=>nextTargetKeys)
    // 系统的change需要运行不然表单就没有值了
    if(_.isFunction(props.onChange)){
      props.onChange(nextTargetKeys, direction, moveKeys)
    }
  }

  // 选中逻辑
  const handleSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
    setSelectedKey(() => [...sourceSelectedKeys, ...targetSelectedKeys])

    // 系统提供的selectChange事件
    if(_.isFunction(props.onSelectChange)){
      props.onSelectChange(sourceSelectedKeys, targetSelectedKeys)
    }
  }

  return ComponentRequest(true, props.item, Object.assign(getProps,{
    targetKeys: targetKey,
    selectedKeys: selectedKey,
  }), <Transfer onChange={handleChange} onSelectChange={handleSelectChange}/>)
}


