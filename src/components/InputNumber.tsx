import React from 'react'
import { InputNumberProps } from 'antd/es/input-number';
import { InputNumber } from 'antd'
import { GetSystemParam } from '../util'

const filter: string[] = ['item']
export default function (props: InputNumberProps) {
  const getProps = GetSystemParam(props, filter)
  return <InputNumber {...getProps}/>
}