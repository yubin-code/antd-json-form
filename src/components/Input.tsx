import React from 'react'
import { InputProps } from 'antd/es/input';
import { Input } from 'antd'
import { GetSystemParam } from '../util'

const filter: string[] = ['item']

function InputComponent(props: InputProps) {
  const getProps = GetSystemParam(props, filter)
  return <Input {...getProps}/>
}

InputComponent.Password = Input.Password
InputComponent.TextArea = Input.TextArea
InputComponent.Search = Input.Search

export default InputComponent