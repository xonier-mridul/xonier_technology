"use client"
import Image from "next/image";
import React,{useEffect} from "react";
import { FaMedal } from "react-icons/fa";

import { FaEye } from "react-icons/fa";
import { PiOfficeChairBold } from "react-icons/pi";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import Aos from "aos";
import 'aos/dist/aos.css';

const AboutSection = () => {
  
   useEffect(() => {
     
     Aos.init({
       duration:2000
     })
   }, [])
   



  return (
    <>
      <div className="max-w-7xl m-auto flex items-center py-10 pb-14 gap-5">
        <div className="w-1/2">
          <h3 className="about-sub relative w-fit text-red-500 font-semibold">
            ABOUT US
          </h3>
          <h2 className="text-[48px] font-semibold">
            About <span className="text-blue-800"> Xonier. </span>
          </h2>
          <p className="text-lg pb-6">
            Xonier Technologies is a digital engineering services provider to
            emerging businesses that are seeking to transform operations,
            leveraging Open Source software, Mobile devices, and the
            public/private cloud.
          </p>
          {/* <div className="grid grid-cols-2 gap-4 pb-4">
            <div className="flex items-start gap-3">
              <div className="w-25%">
                <span className="flex items-center justify-center p-3 bg-[#68a8da26] rounded-md">
                  <FaMedal className="text-4xl text-blue-800" />
                </span>
              </div>
              <div className="w-75%">
                <h3 className="text-2xl pb-2">Corporate</h3>
                <p className="text-lg ">
                  Working as one team associated with your internal business/IT
                  groups, we help to create end-to-end reliable technical
                  solutions for your end customers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-25%">
                <span className="flex items-center justify-center p-3 bg-[#68a8da26] rounded-md">
                  <AiOutlineAim className="text-4xl text-blue-800" />
                </span>
              </div>
              <div className="w-75%">
                <h3 className="text-2xl pb-2">Mission</h3>
                <p className="text-lg ">
                  Our mission is to serve as trusted accelerators, guiding our
                  clients through their digital transformation journey across
                  diverse industries in global markets.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-25%">
                <span className="flex items-center justify-center p-3 bg-[#68a8da26] rounded-md">
                  <FaGlobe className="text-4xl text-blue-800" />
                </span>
              </div>
              <div className="w-75%">
                <h3 className="text-2xl pb-2 capitalize">worldwide services</h3>
                <p className="text-lg ">
                  We have presence in six countries, in USA, Spain, Germany,
                  Saudi Arabia, Netherlands and India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-25%">
                <span className="flex items-center justify-center p-3 bg-[#68a8da26] rounded-md">
                  <FaEye className="text-4xl text-blue-800" />
                </span>
              </div>
              <div className="w-75%">
                <h3 className="text-2xl pb-2">Vision</h3>
                <p className="text-lg ">
                  Our vision is to become the foremost facilitators, propelling
                  our clients forward in their digital endeavours across various
                  sectors and geographic markets worldwide.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="flex items-start gap-3 pb-8">
            <div className="w-25%">
              <span className="flex items-center justify-center p-3 bg-[#68a8da26] rounded-md">
                <PiOfficeChairBold className="text-4xl text-blue-800" />
              </span>
            </div>
            <div className="w-75%">
              <h3 className="text-2xl pb-2">Experience</h3>
              <p className="text-lg ">
                We take pride in having a CEO with a proven track record of
                successfully delivering software development projects within the
                designated timeframes. With over 14+ years of industry
                experience, our CEO brings a wealth of expertise and leadership
                to ensure timely and efficient project execution.
              </p>
            </div>
          </div> */}
        </div>
        <div className="w-1/2 flex justify-end items-center">
          {/* <Image
            src={"/aboutImg.png"}
            width={570}
            height={570}
            alt="About Image"
          /> */}
          <Link
            href={"/"}
            className="btn  border-2 border-blue-800 text-blue-800 px-[34px] py-3 text-lg rounded-lg hover:bg-blue-800 hover:text-white flex gap-3 w-fit items-center "
          >
            Schedule Your Free Consultation{" "}
            <FaAngleRight className="btn-icon transition-all duration-500" />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-20 grid grid-cols-3 gap-6">
        <div className="p-10 rounded-lg border-2 border-blue-800 flex flex-col gap-2 hover:translate-y-[-12px] transition-all duration-500 hover:bg-blue-800 ab cursor-pointer hover:shadow-[0_10px_15px_#00000040]" >
          <FaMedal className=" ab-icon text-5xl text-blue-800 transition-all duration-500" />
          <h3 className="text-3xl font-semibold transition-all duration-500 mt-3">Corporate</h3>
          <p className="text-lg opcity-75 transition-all duration-500">
            Working as one team associated with your internal business/IT
            groups, we help to create end-to-end reliable technical solutions
            for your end customers.
          </p>
        </div>
        <div className="p-10 rounded-lg border-2 border-blue-800 flex flex-col gap-2 hover:translate-y-[-12px] transition-all duration-500  hover:bg-blue-800 ab cursor-pointer hover:shadow-[0_10px_15px_#00000040]" >
          <TbTargetArrow className="ab-icon text-5xl text-blue-800 transition-all duration-500 " />
          <h3 className="text-3xl font-semibold transition-all duration-500 mt-3">Mission</h3>
          <p className="text-lg opcity-75 transition-all duration-500">
          Our mission is to serve as trusted accelerators, guiding our clients through their digital transformation journey across diverse industries in global markets.
          </p>
        </div>
        <div className="p-10 rounded-lg border-2 border-blue-800 flex flex-col gap-2 hover:translate-y-[-12px] transition-all duration-500 hover:bg-blue-800 ab cursor-pointer hover:shadow-[0_10px_15px_#00000040]"  >
          <FaMedal className="ab-icon text-5xl text-blue-800 transition-all duration-500" />
          <h3 className="text-3xl font-semibold transition-all duration-500 mt-3">Worldwide Services</h3>
          <p className="text-lg opcity-75 transition-all duration-500">
          We have presence in six countries, in USA, Spain, Germany, Saudi Arabia, Netherlands and India
          </p>
        </div>
        <div className="p-10 rounded-lg border-2 border-blue-800 flex flex-col gap-2 hover:translate-y-[-12px] transition-all duration-500 hover:bg-blue-800 ab cursor-pointer hover:shadow-[0_10px_15px_#00000040]"  >
          <FaEye className="ab-icon text-5xl text-blue-800 transition-all duration-500" />
          <h3 className="text-3xl font-semibold transition-all duration-500 mt-3">Vision</h3>
          <p className="text-lg opcity-75 transition-all duration-500">
          Our vision is to become the foremost facilitators, propelling our clients forward in their digital endeavours across various sectors and geographic markets worldwide.
          </p>
        </div>
        <div className="p-10 rounded-lg border-2 border-blue-800 flex flex-col gap-2 hover:translate-y-[-12px] transition-all duration-500 hover:bg-blue-800 ab cursor-pointer hover:shadow-[0_10px_15px_#00000040]"  >
          <PiOfficeChairBold className="ab-icon text-5xl text-blue-800 transition-all duration-500" />
          <h3 className="text-3xl font-semibold transition-all duration-500 mt-3">Experience</h3>
          <p className="text-lg opcity-75 transition-all duration-500">
          Our CEO, with 14+ years of experience, ensures efficient project execution, leveraging a proven track record in delivering software projects within designated timeframes.
          </p>
        </div>
        <div className="p-10 rounded-lg border-2 border-blue-800 flex flex-col gap-2 hover:translate-y-[-12px] transition-all duration-500 hover:bg-blue-800 ab cursor-pointer hover:shadow-[0_10px_15px_#00000040]"  >
          <PiOfficeChairBold className="ab-icon text-5xl text-blue-800 transition-all duration-500" />
          <h3 className="text-3xl font-semibold transition-all duration-500 mt-3">Experience</h3>
          <p className="text-lg opcity-75 transition-all duration-500">
          Our CEO, with 14+ years of experience, ensures efficient project execution, leveraging a proven track record in delivering software projects within designated timeframes.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
