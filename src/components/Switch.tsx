import React from 'react'
import { SwitchProps } from 'antd/es/switch';
import { Switch } from 'antd'
import { GetSystemParam } from '../util'

const filter: string[] = ['item']
export default function (props: SwitchProps) {
  const getProps = GetSystemParam(props, filter)
  return <Switch {...getProps}/>
}