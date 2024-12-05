import Image from "next/image";
import React from "react";
import { FaMedal } from "react-icons/fa";
import { AiOutlineAim } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { PiOfficeChairBold } from "react-icons/pi";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <div className="max-w-7xl m-auto flex items-center py-10 pb-14 gap-5">
        <div className="w-1/2">
          <h3 className="about-sub relative w-fit text-red-500 font-semibold">ABOUT US</h3>
          <h2 className="text-[48px] font-semibold">
            About <span className="text-blue-800"> Xonier. </span>
          </h2>
          <p className="text-lg pb-6">
            Xonier Technologies is a digital engineering services provider to
            emerging businesses that are seeking to transform operations,
            leveraging Open Source software, Mobile devices, and the
            public/private cloud.
          </p>
          <div className="grid grid-cols-2 gap-4 pb-4">
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
          </div>
          <div className="flex items-start gap-3 pb-8">
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
          </div>

          <Link href={"/"} className="capitalize text-lg bg-blue-800 rounded-tl-sm rounded-br-sm rounded-tr-xl rounded-bl-xl px-6 py-[13px] text-white border-2 border-blue-800 hover:bg-white hover:text-blue-700 transition-all duration-500">Get in Touch</Link>
        </div>
        <div className="w-1/2flex justify-end items-center">
          <Image
            src={"/aboutImg.png"}
            width={570}
            height={570}
            alt="About Image"
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
