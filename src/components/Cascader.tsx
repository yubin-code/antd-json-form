import React from 'react'
import { CascaderProps } from 'antd/es/cascader';
import { Cascader } from 'antd'
import { GetSystemParam } from '../util'
import { CompleteProps } from '../FormType'
import ComponentEvent from './ComponentEvent'
import ComponentRequest from './ComponentRequest'

interface CascaderProp extends CascaderProps, CompleteProps {
}

const filter: string[] = ['item', 'handleLoadData']
export default function (props: CascaderProp) {
  const getProps = GetSystemParam(props, filter)

  const Component = ComponentEvent(props.item, props, <Cascader/>)
  return ComponentRequest(true, props.item, getProps, Component)
}