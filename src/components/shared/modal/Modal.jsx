import React from 'react'

import { Modal as FModal } from 'flowbite-react'

export function Modal({
  openModal,
  onCloseModal,
  children,
  title,
  size = '2xl',
}) {
  return (
    <FModal show={openModal} size={size} onClose={onCloseModal} popup>
      <FModal.Header>{title}</FModal.Header>
      <FModal.Body>{children}</FModal.Body>
    </FModal>
  )
}
