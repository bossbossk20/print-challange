import React, { useState, useRef } from 'react'
import ReactToPrint from 'react-to-print'

import { FooterModal, ModalTitle, PrintPreviewBox } from './styles'
import data from './mockData'
import PrintPreview from '../../components/PrintPreview'
import tableColumn from './columnConfig'
import Container from '../../components/Container'
import Table from '../../components/Table'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

const Main = props => {
  const [openModal, setOpenModal] = useState(false)
  const componentRef = useRef()

  return (
    <Container>
      <PrintPreviewBox>
        <Button
          type="primary"
          text="Print Preview"
          onClick={e => setOpenModal(true)}
        />
      </PrintPreviewBox>

      <Table columns={tableColumn} dataSource={data} />
      <Modal
        visible={openModal}
        onCancel={() => setOpenModal(false)}
        hideDefaultFooter
        title={<ModalTitle>พิมพ์ป้ายพัสดุ</ModalTitle>}
        footer={null}
        bodyStyle={{
          padding: '14px',
        }}
        width={760}
      >
        <PrintPreview printData={data} ref={componentRef} />
        <FooterModal>
          <ReactToPrint
            trigger={() => <Button type="primary" text="Print" />}
            content={() => componentRef.current}
          />
        </FooterModal>
      </Modal>
    </Container>
  )
}

export default Main
