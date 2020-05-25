import React from 'react'
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { Checkbox } from 'antd'
import { GetSystemParam } from '../util'
import { CompleteProps } from '../FormType'
import ComponentRequest from './ComponentRequest'

interface CheckboxProps extends CheckboxGroupProps, CompleteProps {
}

const filter = ['loading', 'item']
export default (props: CheckboxProps) => {
  const getProps = GetSystemParam(props, filter)
  return ComponentRequest(true, props.item, getProps, <Checkbox.Group />)
}
