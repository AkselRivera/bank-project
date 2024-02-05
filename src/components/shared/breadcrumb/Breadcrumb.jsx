'use client'

import { Breadcrumb as FBreadcrumb } from 'flowbite-react'

export function Breadcrumb({ breadcrumb }) {
  return (
    <FBreadcrumb aria-label="Breadcrumb" className="mb-4">
      {breadcrumb?.map((breadcrumb, index) => (
        <FBreadcrumb.Item
          key={index}
          href={breadcrumb.href ?? '#'}
          icon={breadcrumb.icon}
          className="capitalize"
        >
          {breadcrumb.title}
        </FBreadcrumb.Item>
      ))}
    </FBreadcrumb>
  )
}
