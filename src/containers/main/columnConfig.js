const columns = [
  {
    title: 'รหัสสินค้า',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: 'เลขที่พัสดุ',
    dataIndex: 'trackingNumber',
    key: 'trackingNumber',
  },
  {
    title: 'ผู้รับ',
    dataIndex: 'recipient',
    key: 'recipient',
  },
  {
    title: 'ผู้ส่ง',
    dataIndex: 'sender',
    key: 'sender',
  },
  {
    title: 'โน้ต',
    key: 'note',
    dataIndex: 'note',
  },
]

export default columns
