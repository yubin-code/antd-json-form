import React from 'react'
import { TimePickerProps } from 'antd/es/time-picker';
import { TimePicker } from 'antd'
import { GetSystemParam } from '../util'

const filter: string[] = ['item']
export default function (props: TimePickerProps) {
  const getProps = GetSystemParam(props, filter)
  return <TimePicker {...getProps}/>
}