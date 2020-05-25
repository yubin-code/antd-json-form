import React from 'react'
import { RateProps } from 'antd/es/rate';
import { Rate } from 'antd'
import { GetSystemParam } from '../util'

const filter: string[] = ['item']
export default function (props: RateProps) {
  const getProps = GetSystemParam(props, filter)
  return <Rate {...getProps}/>
}