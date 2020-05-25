import React from 'react'
import { AutoCompleteProps } from 'antd/es/auto-complete';
import { AutoComplete } from 'antd'
import { GetSystemParam } from '../util'
import { CompleteProps } from '../FormType'
import ComponentEvent from './ComponentEvent'

interface AutoCompleteProp extends AutoCompleteProps, CompleteProps {
}

const filter: string[] = ['item']
export default function(props: AutoCompleteProp) {
  const getProps = GetSystemParam(props, filter)
  return ComponentEvent(props.item, getProps, <AutoComplete />)
}