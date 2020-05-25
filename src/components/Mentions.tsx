import React from 'react'
import { MentionProps } from 'antd/es/mentions';
import { Mentions } from 'antd'
import { GetSystemParam } from '../util'

interface MentionProp extends MentionProps {
  options: string[];
}
const { Option } = Mentions;
const filter: string[] = ['options', 'item']

export default function (props: MentionProp) {
  const { options=[] } = props
  const getProps = GetSystemParam(props, filter)
  return <Mentions {...getProps}>
   {options.map((value: string) => {
     return <Option key={value} value={value}>{value}</Option>
   })}
  </Mentions>
}