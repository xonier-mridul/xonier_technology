"use client"
import React from 'react'

import { usePathname } from 'next/navigation'

const notFound = () => {
    const pathname = usePathname()
  return (
    <>
      <div className='min-h-screen '>
          <div className='max-w-7xl m-auto flex justify-center items-center'>
               <h1 className='text-4xl font-semibold'> {pathname} page is not found </h1>
          </div>
      </div>
    </>
  )
}

export default notFound
