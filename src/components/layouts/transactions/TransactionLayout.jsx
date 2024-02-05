'use client'

import { Breadcrumb } from '../../shared'
import { BREADCRUMB } from '../../../constants'
import { Button, Tooltip } from 'flowbite-react'
import { TfiReload } from 'react-icons/tfi'

export function TransactionLayout({
  children,
  bank_name,
  bank_id,
  account_name,
}) {
  return (
    <div className=" w-full p-4">
      <Breadcrumb
        breadcrumb={BREADCRUMB.TRANSACTIONS_DETAILS(
          bank_id,
          bank_name.replaceAll('-', ' '),
          account_name
        )}
      />

      <div className="relative flex">
        <h2 className="text-3xl font-bold capitalize">{account_name}</h2>
        <Tooltip content="Retrive account transactions">
          <Button
            outline
            color="blue"
            className="ml-4"
            type="button"
            onClick={() => alert('Not implemented yet')}
          >
            <TfiReload className="h-4 w-4" />
          </Button>
        </Tooltip>
      </div>

      {children}
    </div>
  )
}
