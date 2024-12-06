"use client"
import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'
import { IoRocketSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { LuServerCog } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";
import { IoBriefcaseSharp } from "react-icons/io5";
import { GiClockwork } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import Aos from 'aos';
import 'aos/dist/aos.css';

const BusinessBrief = () => {
    Aos.init({
        duration: 2000,
    })
  return (
    <>
      <div className='py-20 bg-[#e7e7ff]'>
        <div className="max-w-7xl m-auto grid gap-y-20  grid-cols-4 ">

            <div className='business flex items-center gap-5' data-aos="zoom-in">
                <div className='busi-icon w-20 h-20 bg-white rounded-lg rounded-tr-[30px] rounded-bl-[30px] flex justify-center items-center border-[1px] border-red-500'>
                <IoRocketSharp className='busi-icons text-3xl text-blue-800' />

                </div>
                <div className=''>
                     <h3 className='text-3xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={7}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Years In Business</p>
                </div>

            </div>
            <div className='business flex items-center gap-5' data-aos="zoom-in" data-aos-delay="100">
                <div className='busi-icon w-20 h-20 bg-white rounded-lg rounded-tr-[30px] rounded-bl-[30px] flex justify-center items-center border-[1px] border-red-500 transition-all duration-500'>
                <MdGroups className='busi-icons text-4xl text-blue-800 transition-all duration-500' />

                </div>
                <div className=''>
                     <h3 className='text-3xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={150}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Team Members</p>
                </div>

            </div>
            <div className='business flex items-center gap-5' data-aos="zoom-in" data-aos-delay="200">
                <div className='busi-icon w-20 h-20 bg-white rounded-lg rounded-tr-[30px] rounded-bl-[30px] flex justify-center items-center border-[1px] border-red-500 transition-all duration-500'>
                <FaGlobeAmericas className='busi-icons text-3xl text-blue-800 transition-all duration-500' />

                </div>
                <div className=''>
                     <h3 className='text-3xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={110}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Countries Served</p>
                </div>

            </div>
            <div className='business flex items-center gap-5' data-aos="zoom-in" data-aos-delay="300">
                <div className='busi-icon w-20 h-20 bg-white rounded-lg rounded-tr-[30px] rounded-bl-[30px] flex justify-center items-center border-[1px] border-red-500 transition-all duration-500'>
                <LuServerCog className='busi-icons text-3xl text-blue-800 transition-all duration-500' />

                </div>
                <div className=''>
                     <h3 className='text-3xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={130}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Technologies Covered</p>
                </div>

            </div>
            <div className='business flex items-center gap-5' data-aos="zoom-in" data-aos-delay="0">
                <div className='busi-icon w-20 h-20 bg-white rounded-lg rounded-tr-[30px] rounded-bl-[30px] flex justify-center items-center border-[1px] border-red-500 transition-all duration-500'>
                <FaHandsHelping className='busi-icons text-3xl text-blue-800  transition-all duration-500' />

                </div>
                <div className=''>
                     <h3 className='text-3xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={2000}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Clients Worldwide</p>
                </div>

            </div>
            <div className='business flex items-center gap-5' data-aos="zoom-in" data-aos-delay="100">
                <div className='busi-icon w-20 h-20 bg-white rounded-lg rounded-tr-[30px] rounded-bl-[30px] flex justify-center items-center border-[1px] border-red-500 transition-all duration-500'>
                <IoBriefcaseSharp className='busi-icons text-3xl text-blue-800 transition-all duration-500' />

                </div>
                <div className=''>
                     <h3 className='text-3xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={5000}
                        />+
                     </h3>
                     <p className='text-xl opacity-85'>Projects Delivered</p>
                </div>

            </div>

            <div className='business flex items-center gap-5' data-aos="zoom-in" data-aos-delay="200">
                <div className='busi-icon w-20 h-20 bg-white rounded-lg rounded-tr-[30px] rounded-bl-[30px] flex justify-center items-center border-[1px] border-red-500 transition-all duration-500'>
                <GiClockwork className='busi-icons text-4xl text-blue-800 transition-all duration-500' />

                </div>
                <div className=''>
                     <h3 className='text-3xl font-semibold pb-2'>
                        <CountUp
                        start={0}
                        end={70}
                        />M+
                     </h3>
                     <p className='text-xl opacity-85'>Hours Worked</p>
                </div>

            </div>
            <div className='business flex items-center gap-5' data-aos="zoom-in" data-aos-delay="300">
                <div className='busi-icon w-20 h-20 bg-white rounded-lg rounded-tr-[30px] rounded-bl-[30px] flex justify-center items-center border-[1px] border-red-500 transition-all duration-500'>
                <RiCustomerService2Line className='busi-icons text-4xl text-blue-800 transition-all duration-500'/>

                </div>
                <div className=''>
                     <h3 className='text-3xl font-semibold pb-2'>
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
