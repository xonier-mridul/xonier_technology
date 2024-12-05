"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Partner = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <>
      <div className='w-full overflow-hidden py-4 shadow-[0px_10px_25px_#00000010]'>
      <Slider {...settings}>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
          <Image
          src={"/aaxel-logo.png"}
        
          width={130}
          height={130}
          alt=" aaxel-logo "/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/alhokair-logo.png"}
          className=""
          width={140}
          height={140}
          alt=" alhokair-logo"/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/chelsea-logo.png"}
          className=""
          width={100}
          height={100}
          alt=" chelsea-logo"/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/clean-logo.png"}
          className=""
          width={140}
          height={140}
          alt=" clean-logo"/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/concourse-logo.png"}
          className=""
          width={140}
          height={140}
          alt=" concourse-logo"/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/laststep-logo.png"}
          className=""
          width={130}
          height={130}
          alt=" laststep-logo"/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/pharma-logo.png"}
          className=""
          width={100}
          height={100}
          alt=" pharma-logo"/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/Remoie-logo.png"}
          className=""
          width={70}
          height={70}
          alt="Remoie-logo"/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/seafitness-logo.png"}
          width={70}
          height={70}
          alt=" seafitness-logo"/>
        </div>
        <div style={{display:"flex"}} className="flex items-center justify-center bg-zinc-50 h-[80px]">
        <Image
          src={"/wecare-logo.png"}
          width={130}
          height={130}
          alt=" wecare-logo"/>
        </div>
      </Slider>
      </div>
    </>
  )
}

export default Partner
