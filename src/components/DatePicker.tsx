import React from 'react'
import { DatePickerProps } from 'antd/es/date-picker';
import { DatePicker } from 'antd'
import { GetSystemParam } from '../util'

const filter: string[] = ['item']


function DatePickerComponent(props: DatePickerProps) {
  const getProps = GetSystemParam(props, filter)
  return <DatePicker {...getProps}/>
}

DatePickerComponent.RangePicker = DatePicker.RangePicker

export default DatePickerComponent
