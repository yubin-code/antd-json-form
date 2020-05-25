import React from 'react'
import { ButtonProps } from 'antd/es/button';
import { Button } from 'antd'
import { GetSystemParam } from '../util'

const filter: string[] = ['item']
export default function (props: ButtonProps) {
  const getProps = GetSystemParam(props, filter)
  return <Button {...getProps}>{props.children}</Button>
}