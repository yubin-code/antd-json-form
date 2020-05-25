import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'
import _ from 'lodash';
import { fieldSource } from '../FormType'

const getData = (item: fieldSource, getProps: any,) => {
  const type = item.type && item.type.toLowerCase() || ''
  if(_.isEmpty(type)){
    return []
  }

  // 树形结构返回这个数据
  if(type === "treeselect"){
    return getProps.treeData || []
  }
  
  // 穿梭框 返回这个数据
  if(type === "transfer"){
    return getProps.dataSource || []
  }

  return getProps.options || []
}

/**
 * 对需要请求的组件统一处理
 * @param isLoading 是否显示 Spin 一般组件自身没有loading状态使用比如radio 或者checkbox
 * @param item fieldSource
 * @param getProps props
 * @param Component 组件
 * @return React.ReactNode
 */
export default (isLoading: boolean, item: fieldSource, getProps: any, Component: React.ReactElement) => {
  const [loading, setLoading] = useState(true)                    // loading 状态
  const [request, setRequest] = useState(false)                   // 是否请求过了防止重复请求
  const [data, setData] = useState(getData(item, getProps))       // 数据
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    let didCancel = false
    if(!request && _.isEmpty(data) && _.isFunction(item.request)){
      setRequest(() => true)
      const HandleComponentRequest = async () => {
        if(!item.request){
          return false
        }
        // 判断是否有异步函数
        const response = await item.request(item)
        /**
         * 防止组件卸载的时候还修改数据导致报错
         */
        if(didCancel) {
          return false
        }
        setLoading(() => false)
        setData(() => _.isArray(response) ? response : [])
        return false
      }
      HandleComponentRequest()
    }else{
      setLoading(() => false) 
    }

    return () => {
      didCancel = true
    }
  }, [])


  let prop = {}


  const type = item.type && item.type.toLowerCase() || ''
  // 数据字段判断
  switch(type){
    case "treeselect":
      prop = { treeData: data }
      break
    case "transfer":
      prop = { dataSource: data }
      break
    default:
      prop = { options: data }
  }

  // 如果 options 默认有值就不请求了
  if(!_.isEmpty(data)){
    return React.cloneElement(Component, Object.assign(getProps, prop))
  }

  if(isLoading){
    return loading ? 
    <Spin size="small" /> :
    React.cloneElement(Component, Object.assign(getProps, prop))
  }
  
  return React.cloneElement(Component, Object.assign(getProps, prop, { loading }))
}