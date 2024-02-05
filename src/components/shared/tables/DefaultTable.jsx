'use client'

import { Table } from 'flowbite-react'

export function DefaultTable({ headers, data }) {
  return (
    <div className="relative mx-auto max-w-full md:max-w-[calc(100vw-18rem)] max-h-[28rem] overflow-auto ">
      <Table striped hoverable>
        <Table.Head className="sticky top-0">
          {headers.map((header, index) => (
            <Table.HeadCell key={index}>{header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body>
          {data.map((row) => (
            <Table.Row
              key={'ROW-' + new Date().getTime() + row.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              {Object.keys(row).map((key) =>
                key === 'id' ? null : (
                  <Table.Cell
                    key={new Date().getTime() + row.id}
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  >
                    {row[key]}
                  </Table.Cell>
                )
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
