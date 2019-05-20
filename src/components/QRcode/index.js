import React from 'react'
import QRCode from 'react-qr-code'

type Props = {
  value: string,
  size: number,
}

const Qrcode = (props: Props) => {
  const { value, size, ...rest } = props
  return <QRCode value={value} size={size} {...rest} />
}

export default Qrcode
