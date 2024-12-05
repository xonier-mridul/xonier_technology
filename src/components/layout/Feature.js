import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <>
      <div className='max-w-7xl m-auto py-10 flex flex-col items-center justify-center gap-7'>
        <h2 className='text-[48px] font-semibold'>
        We Have Been Feature On
        </h2>

        <div className='grid grid-cols-8 gap-3 w-full'>
            <div className='bg-[#F3F5FB] rounded-lg h-24 w-36 flex items-center justify-center'>
            <Image
            src={"/featured1.png"}
            width={124}
            height={124}
            alt=''
            />
            </div>
            <div className='bg-[#F3F5FB] rounded-lg h-24 w-36 flex items-center justify-center'>
            <Image
            src={"/featured22.png"}
            width={124}
            height={124}
            alt=''
            />
            </div>
            <div className='bg-[#F3F5FB] rounded-lg h-24 w-36 flex items-center justify-center'>
            <Image
            src={"/featured3.png"}
            width={124}
            height={124}
            alt=''
            />
            </div>
            <div className='bg-[#F3F5FB] rounded-lg h-24 w-36 flex items-center justify-center'>
            <Image
            src={"/featured4.png"}
            width={124}
            height={124}
            alt=''
            />
            </div>
            <div className='bg-[#F3F5FB] rounded-lg h-24 w-36 flex items-center justify-center'>
            <Image
            src={"/featured5.png"}
            width={124}
            height={124}
            alt=''
            />
            </div>
            <div className='bg-[#F3F5FB] rounded-lg h-24 w-36 flex items-center justify-center'>
            <Image
            src={"/featured6.png"}
            width={124}
            height={124}
            alt=''
            />
            </div>
            <div className='bg-[#F3F5FB] rounded-lg h-24 w-36 flex items-center justify-center'>
            <Image
            src={"/featured7.png"}
            width={70}
            height={70}
            alt=''
            />
            </div>
            <div className='bg-[#F3F5FB] rounded-lg h-24 w-36 flex items-center justify-center'>
            <Image
            src={"/featured8.png"}
            width={90}
            height={90}
            alt=''
            />
            </div>
            
            
        </div>

      </div>
    </>
  )
}

export default Feature
