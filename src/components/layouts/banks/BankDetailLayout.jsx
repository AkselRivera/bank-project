'use client'

import { Breadcrumb } from '../../shared'
import { BREADCRUMB } from '../../../constants'
import { Button, Tooltip } from 'flowbite-react'
import { IoAdd } from 'react-icons/io5'

export function BankDetailLayout({ children, name }) {
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
            onClick={() => alert('Not implemented yet')}
          >
            <IoAdd className="h-4 w-4" />
          </Button>
        </Tooltip>
      </div>

      {children}
    </div>
  )
}
