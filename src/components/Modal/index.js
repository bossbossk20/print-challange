import React from 'react'
import { Modal } from 'antd'

type Props = {
  title: string,
  visible: boolean,
  onOk: Function,
  onCancel: Function,
  okText: string,
  cancelText: string,
  footer: string | React.ReactNode,
  maskClosable: boolean,
}

const AntdModal = (props: Props) => {
  const {
    title,
    visible,
    onOk,
    onCancel,
    okText = 'OK',
    cancelText = 'Cancel',
    maskClosable,
    children,
    footer,
    ...rest
  } = props
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      maskClosable={maskClosable}
      footer={footer}
      {...rest}
    >
      {children}
    </Modal>
  )
}

export default AntdModal
