import React from 'react'
import { SelectProps, SelectValue } from 'antd/es/select';
import { Select } from 'antd'
import { GetSystemParam } from '../util'
import { CompleteProps } from '../FormType'
import ComponentRequest from './ComponentRequest'

interface SelectProp<SelectValue> extends SelectProps<SelectValue>, CompleteProps {
}

const filter: string[] = ['item']

export default function (props: SelectProp<SelectValue>) {
  const getProps = GetSystemParam(props, filter)
  return ComponentRequest(false, props.item, getProps, <Select />)
}
