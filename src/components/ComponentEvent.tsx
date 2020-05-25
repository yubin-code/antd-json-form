import React, { useState } from 'react'
import { CascaderOptionType } from 'antd/es/cascader';
import _ from 'lodash';
import { fieldSource } from '../FormType'
import { GetSystemParam } from '../util'

// 事件的组件类型
interface EventType {
  loadData?: (selectedOptions?: CascaderOptionType[] | undefined) => void;
  onSearch?: (value: string) => void;
}

const filter = [
  'handleLoadData', 'handleSearch',
  'options', 'item'
]
// 获取数据
const getData = (data:any) => {
  return data.options || []
}

export default (item: fieldSource, props: any, Component: React.ReactElement) => {
  const [data, setData] = useState(getData(props))
  // const [loading, setLoading] = useState(true)
  // 过滤props不需要的
  const getProps = GetSystemParam(props, filter)
  const Event:EventType = {}
  
  // 加载数据事件
  if(_.isFunction(props.handleLoadData)){
    Event.loadData = (selectedOptions?: CascaderOptionType[]) => {
      props.handleLoadData(selectedOptions, data, setData)
    }
  }
  
  // 搜索事件
  if(_.isFunction(props.handleSearch)){
    Event.onSearch = (value: string) => {
      props.handleSearch(value, getData(props), setData)
    }
  }

  let prop = {}
  
  // 数据字段判断
  switch(item.type && item.type.toLowerCase()){
    case "treeselect":
      prop = { treeData: data }
      break
    case "transfer":
      prop = { dataSource: data }
      break
    default:
      prop = { options: data }
  }

  return React.cloneElement(Component, Object.assign(getProps, Event, prop))
}