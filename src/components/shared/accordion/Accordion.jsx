'use client'

import { Accordion as FAccordion } from 'flowbite-react'

export function Accordion({ collapseAll = true, data = [], className }) {
  return (
    <FAccordion collapseAll={collapseAll} className={className}>
      {data.map(({ title, content }) => (
        <FAccordion.Panel key={title}>
          <FAccordion.Title>{title}</FAccordion.Title>
          <FAccordion.Content>{content}</FAccordion.Content>
        </FAccordion.Panel>
      ))}
    </FAccordion>
  )
}
