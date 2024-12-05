"use client";
import React,{ Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ClientsSay = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true
  };
  
  return (
    <>
      <div className="bg-[#F3F5FB]">
        <div className="max-w-7xl m-auto py-20">
          <div className="flex flex-col justify-center items-center gap-4 pb-8">
            <h2 className="text-[48px] font-semibold">
              What our <span className="text-blue-800"> clients say </span>
            </h2>
            <p className="text-lg pb-6 text-center w-1/2">
              We are delivering strong results and outcomes for some of the
              world leading new age digital challengers and businesses.
            </p>
          </div>
          <div>
            <Slider {...settings}>
              <div className="w-full">
                <Image
                  src={"/biol.png"}
                  className="w-full"
                  width={300}
                  height={300}
                  alt="biol"
                />
                <div className="w-full flex items-center bg-blue-800 px-5 py-4 gap-3">
                  <Image
                    src={"/user-icon.png"}
                    width={50}
                    height={50}
                    alt="user icon"
                  />
                  <div>
                    <h4 className="text-white text-xl font-bold">Offir Manor</h4>
                    <p className="text-white ">CEO - Bio-Lead</p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src={"/valor1.png"}
                  className="w-full"
                  width={300}
                  height={300}
                  alt="biol"
                />
                <div className="w-full flex items-center bg-blue-800 px-5 py-4 gap-3">
                  <Image
                    src={"/user-icon.png"}
                    width={50}
                    height={50}
                    alt="user icon"
                  />
                  <div>
                    <h4 className="text-white text-xl font-bold">David Nyurenberg</h4>
                    <p className="text-white "> Founder & CEO - Valor digital </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src={"/playvdo.png"}
                  className="w-full"
                  width={300}
                  height={300}
                  alt="biol"
                />
                <div className="w-full flex items-center bg-blue-800 px-5 py-4 gap-3">
                  <Image
                    src={"/user-icon.png"}
                    width={50}
                    height={50}
                    alt="user icon"
                  />
                  <div>
                    <h4 className="text-white text-xl font-bold">Darren Webster </h4>
                    <p className="text-white "> Founder & CEO - Goalster </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsSay;
