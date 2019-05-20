import React from 'react'

import {
  TrackingCard,
  TrackingNumberBox,
  RecipientBox,
  SenderBox,
  SenderTextBox,
  Ref1,
  Ref1Count,
  TrackingNumberText,
  Note,
  BarcodeBox,
} from './styles'
import QRcode from '../QRcode'
import Barcode1D from '../Barcode1D'

const OrderTrackingCard = props => {
  const {
    orderId,
    trackingNumber,
    ref1,
    recipient,
    sender,
    remark,
    note,
  } = props
  return (
    <TrackingCard key={orderId}>
      <BarcodeBox>
        <Barcode1D value={orderId} height={40} fontSize={12} textMargin={0} />
      </BarcodeBox>
      <TrackingNumberBox>
        <div className="left">
          <TrackingNumberText>{trackingNumber}</TrackingNumberText>
        </div>
        <div className="right">
          <Ref1>{ref1}</Ref1>
          <Ref1Count>1 of 1</Ref1Count>
        </div>
      </TrackingNumberBox>
      <RecipientBox>
        <span>ผู้รับ: {recipient}</span>
      </RecipientBox>
      <SenderBox>
        <div>
          <SenderTextBox>
            <span>ผู้ส่ง: {sender}</span>
          </SenderTextBox>
          <Note>{note}</Note>
          <div>หมายเหตุ: {remark}</div>
        </div>
        <div>
          <QRcode value={trackingNumber} size={64} />
        </div>
      </SenderBox>
    </TrackingCard>
  )
}

export default OrderTrackingCard
