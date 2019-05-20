import React from 'react'
import OrderTrackingCard from '../OrderTrackingCard'
import { PrintPreviewBox } from './styles'

export default class PrintPreview extends React.PureComponent {
  render() {
    const { printData } = this.props
    return (
      <PrintPreviewBox>
        {printData.map(item => (
          <OrderTrackingCard key={item.orderId} {...item} />
        ))}
      </PrintPreviewBox>
    )
  }
}
