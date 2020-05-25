import React from 'react'
import { RadioGroupProps } from 'antd/es/radio';
import { Radio } from 'antd'
import { GetSystemParam } from '../util'
import { CompleteProps } from '../FormType'
import ComponentRequest from './ComponentRequest'

interface RadioProps extends RadioGroupProps, CompleteProps {
}

const RadioButton = (props: RadioProps) => {
  const options:any = props.options || []
  return <Radio.Group>
    {options.map((value:{ label: string; value: string }) => {
      return <Radio.Button key={value.value} value={value.value}>{value.label}</Radio.Button>
    })}
  </Radio.Group>
}

const filter: string[] = ['loading', 'item']
export default function (props: RadioProps) {
  const getProps = GetSystemParam(props, filter)
  let Component:React.ReactElement = <div/>
  if(props.buttonStyle === "solid"){
    delete getProps.options
    Component = RadioButton(props)
  }else {
    Component = <Radio.Group />
  }

  return ComponentRequest(true, props.item, getProps, Component)
}