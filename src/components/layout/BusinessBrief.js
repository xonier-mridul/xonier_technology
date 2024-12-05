"use client"
import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'

const BusinessBrief = () => {
  return (
    <>
      <div className='py-20 bg-[#e7e7ff]'>
        <div className="max-w-7xl m-auto grid gap-y-16  grid-cols-4 ">

            <div className='flex items-center gap-5'>
                <div className='w-20 h-20 bg-white rounded-lg rounded-tr-[40px] rounded-bl-[40px] flex justify-center items-center'>
                   <Image
                     src={"/startup.svg"}
                     width={50}
                     height={50}
                     alt=''
                   />

                </div>
                <div className=''>
                     <h3 className='text-4xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={7}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Years In Business</p>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <div className='w-20 h-20 bg-white rounded-lg rounded-tr-[40px] rounded-bl-[40px] flex justify-center items-center'>
                   <Image
                     src={"/team.svg"}
                     width={50}
                     height={50}
                     alt=''
                   />

                </div>
                <div className=''>
                     <h3 className='text-4xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={150}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Team Members</p>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <div className='w-20 h-20 bg-white rounded-lg rounded-tr-[40px] rounded-bl-[40px] flex justify-center items-center'>
                   <Image
                     src={"/countries-served.png"}
                     width={50}
                     height={50}
                     alt=''
                   />

                </div>
                <div className=''>
                     <h3 className='text-4xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={110}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Countries Served</p>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <div className='w-20 h-20 bg-white rounded-lg rounded-tr-[40px] rounded-bl-[40px] flex justify-center items-center'>
                   <Image
                     src={"/technologies-covered.png"}
                     width={50}
                     height={50}
                     alt=''
                   />

                </div>
                <div className=''>
                     <h3 className='text-4xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={130}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Technologies Covered</p>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <div className='w-20 h-20 bg-white rounded-lg rounded-tr-[40px] rounded-bl-[40px] flex justify-center items-center'>
                   <Image
                     src={"/deal.svg"}
                     width={50}
                     height={50}
                     alt=''
                   />

                </div>
                <div className=''>
                     <h3 className='text-4xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={2000}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Clients Worldwide</p>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <div className='w-20 h-20 bg-white rounded-lg rounded-tr-[40px] rounded-bl-[40px] flex justify-center items-center'>
                   <Image
                     src={"/computers.svg"}
                     width={50}
                     height={50}
                     alt=''
                   />

                </div>
                <div className=''>
                     <h3 className='text-4xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={5000}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Projects Delivered</p>
                </div>

            </div>

            <div className='flex items-center gap-5'>
                <div className='w-20 h-20 bg-white rounded-lg rounded-tr-[40px] rounded-bl-[40px] flex justify-center items-center'>
                   <Image
                     src={"/worker.svg"}
                     width={50}
                     height={50}
                     alt=''
                   />

                </div>
                <div className=''>
                     <h3 className='text-4xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={70}
                        />M+
                     </h3>
                     <p className='text-xl opacity-85'>Hours Worked</p>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <div className='w-20 h-20 bg-white rounded-lg rounded-tr-[40px] rounded-bl-[40px] flex justify-center items-center'>
                   <Image
                     src={"/worker.svg"}
                     width={50}
                     height={50}
                     alt=''
                   />

                </div>
                <div className=''>
                     <h3 className='text-4xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={24}
                        />/<CountUp
                        start={0}
                        end={7}
                        />
                     </h3>
                     <p className='text-xl opacity-85'>Support Available</p>
                </div>

            </div>
        </div>

      </div>
    </>
  )
}

export default BusinessBrief
