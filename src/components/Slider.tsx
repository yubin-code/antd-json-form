import React from 'react'
import { SliderProps } from 'antd/es/slider';
import { Slider } from 'antd'
import { GetSystemParam } from '../util'

const filter: string[] = ['item']
export default function (props: SliderProps) {
  const getProps = GetSystemParam(props, filter)
  return <Slider {...getProps}/>
}