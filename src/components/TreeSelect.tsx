import React from 'react'
import { TreeSelectProps } from 'antd/es/tree-select';
import { TreeSelect } from 'antd'
import { GetSystemParam } from '../util'
import { CompleteProps } from '../FormType'
import ComponentRequest from './ComponentRequest'

interface TreeProps<T> extends TreeSelectProps<T>, CompleteProps {

}

const filter: string[] = ['item']
export default function <T>(props: TreeProps<T>) { 
  const getProps = GetSystemParam(props, filter)
  return ComponentRequest(false, props.item, getProps, <TreeSelect />)
}