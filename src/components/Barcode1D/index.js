import React from 'react'
import Barcode from 'react-barcode'

type Props = {
  value: string,
}

const Barcode1D = (props: Props) => {
  const { value, ...rest } = props
  return <Barcode value={value} {...rest} />
}

export default Barcode1D
