import React from 'react'
import { Button } from 'antd'

type Props = {
  text: string,
}

const AntdButton = (props: Props) => {
  const { text, ...rest } = props
  return <Button {...rest}>{props.text}</Button>
}

export default AntdButton
