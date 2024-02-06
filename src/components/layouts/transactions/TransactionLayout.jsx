'use client'

import { Breadcrumb } from '../../shared'
import { BREADCRUMB } from '../../../constants'
import { Button, Tooltip } from 'flowbite-react'
import { TfiReload } from 'react-icons/tfi'
import { getTransactions } from '../../../actions/transactions'
import { useParams, useRouter } from 'next/navigation'

export function TransactionLayout({
  children,
  bank_name,
  bank_id,
  account_name,
}) {
  const { link_id, account_id } = useParams()
  const router = useRouter()
  const getLastTransactions = async (data) => {
    const resp = await getTransactions({
      link_id,
      account_id,
    })

    if (resp.ok) {
      router.refresh()
    } else {
      alert('Something went wrong')
    }
  }
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
            onClick={getLastTransactions}
          >
            <TfiReload className="h-4 w-4" />
          </Button>
        </Tooltip>
      </div>

      {children}
    </div>
  )
}
