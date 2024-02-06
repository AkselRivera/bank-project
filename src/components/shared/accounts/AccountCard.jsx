'use client'

import { Button, Card, Label, Progress } from 'flowbite-react'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function AccountCard({
  account_id,
  currency,
  balance,
  loan_data,
  credit_data,
  name,
  type,
  category,
  link,
}) {
  const available = balance?.available ?? 0
  const current = balance?.current ?? 0
  const credit_limit =
    category === 'CREDIT_CARD'
      ? credit_data?.credit_limit
      : category === 'LOAN_ACCOUNT'
      ? loan_data?.credit_limit
      : current

  const { bank_id } = useParams()
  return (
    <Card className="min-w-[16rem] max-w-sm max-h-[22rem] flex-1 w-full relative">
      <span className=" absolute top-0 right-0 text-xs font-bold px-2.5 py-0.5 mx-4 mt-2 rounded shadow-md">
        {currency}
      </span>
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>

      <h6 className="text-lg text-center font-semibold tracking-tight text-gray-900 dark:text-white">
        {type}
      </h6>
      <div className="flex items-center justify-center gap-x-4 ">
        <span className="inline-flex items-center capitalize text-xs font-bold px-2.5 py-0.5 rounded shadow-md">
          {category.replaceAll('_', ' ')}
        </span>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between text-sm font-medium ">
          <div className="flex flex-col items-center justify-center mb-2">
            <Label htmlFor="available" value="Available:" className="" />
            <span name="available" className=" font-normal">
              ${' '}
              {category === 'CHECKING_ACCOUNT'
                ? available.toFixed(2)
                : (credit_limit - available).toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mb-2">
            <Label htmlFor="available" value="Total:" className="" />
            <span name="available" className=" font-normal">
              $ {credit_limit.toFixed(2)}
            </span>
          </div>
        </div>
        <Progress progress={(100 * available) / credit_limit} color="blue" />

        <span className="text-xs font-semibold mt-1 text-gray-900/70 dark:text-white/70 ">
          Balance used: ${' '}
          {(credit_limit - (available - credit_limit)).toFixed(2)}
        </span>
      </div>

      <Link href={`/private/banks/${bank_id}/${link}/${account_id}`}>
        <Button color="blue" className="w-full">
          Account details <FaArrowRight className="ml-2" />
        </Button>
      </Link>
    </Card>
  )
}
