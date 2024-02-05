'use client'

import { Badge, Button, Card } from 'flowbite-react'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

export function BankCard({
  id,
  title,
  img,
  country,
  status,
  type,
  resources = [],
}) {
  return (
    <Card
      className="min-w-[20rem] max-w-sm flex-1"
      renderImage={() => (
        <Image
          width={200}
          height={200}
          src={img ?? '/default-image.svg'}
          alt={title}
          className="m-auto pt-4 max-h-[200px] min-h-[100px] rounded text-white"
        />
      )}
    >
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <div className="flex items-center justify-center gap-x-4 ">
        <span className="text-xs font-bold px-2.5 py-0.5 rounded shadow-md">
          {country}
        </span>
        <span className="inline-flex items-center capitalize text-xs font-bold px-2.5 py-0.5 rounded shadow-md">
          {type}
        </span>
        <span className="inline-flex items-center capitalize bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          <span className="w-2 h-2 me-1 bg-green-500 rounded-full animate-pulse "></span>
          {status}
        </span>
      </div>
      <h6 className="font-semibold">Resources:</h6>
      <div className="inline-flex h-full flex-wrap gap-2 justify-center items-center ">
        {resources.length === 0 ? (
          <Badge color="info" className="text-xs">
            No resources
          </Badge>
        ) : (
          resources.map((resource) => (
            <Badge
              key={`${resource}-${new Date().getTime()}`}
              color="info"
              className="text-xs"
            >
              {resource.replaceAll('_', ' ')}
            </Badge>
          ))
        )}
      </div>

      <Link href={`/private/banks/${id}`}>
        <Button color="blue" className="w-full">
          Read more <FaArrowRight className="ml-2" />
        </Button>
      </Link>
    </Card>
  )
}
