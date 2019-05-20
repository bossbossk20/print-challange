import React, { useEffect } from 'react'
import bwipjs from 'bwip-js'

type Props = {
  barcodeType: string,
  text: string,
  scale: number,
  height: number,
  includetext: boolean,
  textalign: string,
  barcodeId: string,
}

const Barcode = (props: Props) => {
  const {
    text,
    scale,
    height,
    includetext,
    textalign,
    barcodeType,
    barcodeId,
  } = props
  useEffect(() => {
    // Update the document title using the browser API
    bwipjs(
      barcodeId,
      {
        bcid: barcodeType,
        text,
        scale,
        height,
        includetext,
        textalign,
      },
      function(err, cvs) {
        if (err) {
          console.log(err)
          // Decide how to handle the error
          // `err` may be a string or Error object
        } else {
          // Nothing else to do in this example...
        }
      }
    )
  })
  return <canvas id={barcodeId} />
}

export default Barcode
