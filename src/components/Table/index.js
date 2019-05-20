import React from 'react'
import { Table } from 'antd'

type Props = {
  column: any,
  dataSource: any,
}

const AntdTable = (props: Props) => {
  const { column, dataSource, ...rest } = props
  return <Table column={column} dataSource={dataSource} {...rest} />
}

export default AntdTable
