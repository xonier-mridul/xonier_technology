"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'



const AboutBanner = () => {
    const router  = useRouter();
    const pathname = usePathname()

  return (
    <>
      <div className='aboutBanner pt-44 py-20 '>
         <div className="max-w-7xl mx-auto">
            <h1 className='text-center text-5xl font-semibold pb-8'>About Us</h1>
            <ul className='flex justify-center items-center gap-2'>
                <li className=' text-lg font-medium' onClick={()=>router.push('/')}> Home </li>
                <li className=' text-lg font-medium'> {pathname} </li>
            </ul>
         </div>

      </div>
    </>
  )
}

export default AboutBanner
