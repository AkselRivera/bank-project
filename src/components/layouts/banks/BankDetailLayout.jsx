'use client'

import { Breadcrumb, Modal } from '../../shared'
import { BREADCRUMB } from '../../../constants'
import { Button, Tooltip } from 'flowbite-react'
import { IoAdd } from 'react-icons/io5'
import { AccountLink } from '../../forms'
import { useState } from 'react'

export function BankDetailLayout({ children, name, form_fields }) {
  const [openModal, setOpenModal] = useState(false)

  const onCloseModal = () => setOpenModal(false)
  return (
    <div className="w-full p-4">
      <Breadcrumb
        breadcrumb={BREADCRUMB.BANK_DETAILS(name.replaceAll('-', ' '))}
      />

      <div className="relative flex">
        <h2 className="text-3xl font-bold capitalize">
          {name.replaceAll('-', ' ')}
        </h2>
        <Tooltip content="Add a new link to load banks accounts">
          <Button
            outline
            color="blue"
            className="ml-4"
            type="button"
            onClick={() => setOpenModal(true)}
          >
            <IoAdd className="h-4 w-4" />
          </Button>
        </Tooltip>
      </div>

      {children}

      <Modal
        openModal={openModal}
        onCloseModal={onCloseModal}
        title="Add an account link"
      >
        <AccountLink form_fields={form_fields} />
      </Modal>
    </div>
  )
}
