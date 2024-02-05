import React from 'react'
import { CardsLoader } from '../components/CardsLoader'

export function LayoutCardsLoading() {
  return (
    <div className="w-full max-h-[calc(100vh-10rem)] p-4 overflow-hidden">
      <div className="  ">
        <div className=" w-96 h-4 mt-4  mb-3 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"></div>
        <div className="w-48 h-2.5 mb-12 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"></div>

        <div className=" w-full h-auto flex flex-wrap items-strech justify-center gap-6 my-4">
          {Array(10)
            .fill()
            .map((_, index) => (
              <CardsLoader key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}
