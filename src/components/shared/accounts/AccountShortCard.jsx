'use client'

import { Card, Label, Progress } from 'flowbite-react'

export function AccountShortCard({
  currency,
  balance,
  category,
  last_accessed_at,
  children,
}) {
  const available = balance?.available ?? 0
  const current = balance?.current ?? 0

  return (
    <Card className="min-w-[16rem] max-w-sm max-h-[26rem] flex-1 w-full relative">
      <div className="flex flex-col">
        {last_accessed_at && (
          <span className="text-xs font-normal mb-2 mx-auto text-gray-900/70 dark:text-white/70 ">
            Last access: {last_accessed_at.substring(0, 10)}
          </span>
        )}
        <span className="my-2 w-fit mx-auto items-center capitalize text-xs font-bold px-2.5 py-0.5 rounded shadow-md">
          {category.replaceAll('_', ' ')}
        </span>
        <div className="flex justify-between text-sm font-medium ">
          <div className="flex flex-col items-center justify-center mb-2">
            <Label htmlFor="available" value="Available:" className="" />
            <span name="available" className=" font-normal">
              $ {(available - current).toFixed(2) + ' ' + currency}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mb-2">
            <Label htmlFor="available" value="Total:" className="" />
            <span name="available" className=" font-normal">
              $ {current.toFixed(2) + ' ' + currency}
            </span>
          </div>
        </div>
        <Progress progress={(100 * available) / current} color="blue" />

        <span className="text-xs font-semibold mt-1 text-gray-900/70 dark:text-white/70 ">
          Balance used: ${' '}
          {(current - (available - current)).toFixed(2) + ' ' + currency}
        </span>

        {children}
      </div>
    </Card>
  )
}
