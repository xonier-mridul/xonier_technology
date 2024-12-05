import React from "react";
import HeadingDivider from "./HeadingDivider";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
const Services = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        <div className="flex w-full items-center">
          <div className="w-[57%]">
            <h3 className="about-sub relative w-fit text-red-500 font-semibold ">
              SERVICES
            </h3> 
            <h2 className="text-[48px] font-semibold capitalize">services we offer</h2>
            <HeadingDivider  />
            <p className="text-lg pb-6 pt-6 opacity-75">
              WE DELIVER ROBUST, SCALABLE, AND RELIABLE SOFTWARE PRODUCT
              SOLUTIONS TO CLIENTS ACROSS THE GLOBE DRIVEN BY THE TOP 1% OF
              SOFTWARE ENGINEERING TALENT IN INDIA.
            </p>
          </div>
          <div className="w-[43%] flex justify-end items-center">
          <Link href={"/"} className="capitalize text-lg bg-blue-800 flex items-center justify-center gap-3 rounded-tl-sm rounded-br-sm rounded-tr-xl rounded-bl-xl px-6 py-[13px] text-white border-2 border-blue-800 hover:bg-white hover:text-blue-700 transition-all duration-500">See All Services <FaArrowRightLong className="text-lg"/> </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 pt-14">
            <div className="service-box p-12 rounded-2xl shadow-[0px_0px_20px_#00000020] hover:translate-y-[-6px] duration-500 hover:bg-blue-800 ">
                <h3 className="text-3xl pb-3 transition-all duration-500">Software <br/> Development</h3>
                <p className="text-lg mb-4 text-justify transition-all duration-500">We provide complete end-to-end software development services with mission to provide a critical software solution with superior performance.</p>
                <Link className="service-link flex items-center  gap-2 text-lg text-blue-800 transition-all duration-500" href={"/"}>More about software development <FaArrowRightLong className="text-lg"/> </Link>

            </div>
            <div className="service-box p-12 rounded-2xl shadow-[0px_0px_20px_#00000020] hover:translate-y-[-6px] duration-500 bg-blue-800 ">
                <h3 className="text-3xl pb-3 transition-all duration-500 text-white">Digital  <br/> Transformation </h3>
                <p className="text-lg mb-4 text-justify transition-all duration-500 text-white">Digitalization is changing business models and way it functions, it has given them a way to be more customer centric.</p>
                <Link className="service-link flex items-center  gap-2 text-lg  transition-all duration-500 text-white" href={"/"}>More about digital transformation<FaArrowRightLong className="text-lg"/> </Link>

            </div>
            <div className="service-box p-12 rounded-2xl shadow-[0px_0px_20px_#00000020] hover:translate-y-[-6px] duration-500 hover:bg-blue-800 ">
                <h3 className="text-3xl pb-3 transition-all duration-500">Web
                <br/>  Development</h3>
                <p className="text-lg mb-4 text-justify transition-all duration-500">Xonier offers cost-effective and web development services using extensible architectures for a wide range of industries to suit your business needs.</p>
                <Link className="service-link flex items-center  gap-2 text-lg text-blue-800 transition-all duration-500" href={"/"}>More about web development<FaArrowRightLong className="text-lg"/> </Link>

            </div>
            <div className="service-box p-12 rounded-2xl shadow-[0px_0px_20px_#00000020] hover:translate-y-[-6px] duration-500 hover:bg-blue-800 ">
                <h3 className="text-3xl pb-3 transition-all duration-500">App
                
                <br/>  Development</h3>
                <p className="text-lg mb-4 text-justify transition-all duration-500">Xonier can help you with building the application so that your desired customers can access your services on the go.</p>
                <Link className="service-link flex items-center  gap-2 text-lg text-blue-800 transition-all duration-500" href={"/"}>More about mobile app development<FaArrowRightLong className="text-lg"/> </Link>

            </div>
            <div className="service-box p-12 rounded-2xl shadow-[0px_0px_20px_#00000020] hover:translate-y-[-6px] duration-500 hover:bg-blue-800 ">
                <h3 className="text-3xl pb-3 transition-all duration-500">Remote
                <br/>  Team </h3>
                <p className="text-lg mb-4 text-justify transition-all duration-500">We have a team of Developers, Project Managers around the expertise you're looking for to empower your technological capabilities.</p>
                <Link className="service-link flex items-center  gap-2 text-lg text-blue-800 transition-all duration-500" href={"/"}>More about remote team<FaArrowRightLong className="text-lg"/> </Link>

            </div>
            <div className="service-box p-12 rounded-2xl shadow-[0px_0px_20px_#00000020] hover:translate-y-[-6px] duration-500 hover:bg-blue-800 ">
                <h3 className="text-3xl pb-3 transition-all duration-500">Consulting
               
                <br/>  Service</h3>
                <p className="text-lg mb-4 text-justify transition-all duration-500">Xonier can help you with our team of industry experts.Our team will help you from auditing to strategize for experience and automation.</p>
                <Link className="service-link flex items-center  gap-2 text-lg text-blue-800 transition-all duration-500" href={"/"}>More about consulting<FaArrowRightLong className="text-lg"/> </Link>

            </div>

        </div>
      </div>
    </>
  );
};

export default Services;
