'use client'

import Image from 'next/image'

export function NotFound() {
  return (
    <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
      <Image
        src="/not-found.svg"
        className=""
        width={1200}
        height={1200}
        alt="Page not found"
      />
    </div>
  )
}
