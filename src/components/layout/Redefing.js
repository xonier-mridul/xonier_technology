"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Redefing = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="py-20 bg-[#F3F5FB]">
        <div className="max-w-7xl m-auto">
          <div className="flex flex-col justify-center items-center pb-6">
            <h2 className="text-[48px] font-semibold w-1/2 text-center capitalize ">
              Redefining Industries with{" "}
              <span className="text-blue-800"> Software Development </span>
            </h2>
          </div>
          <div className="w-full">
            <Slider {...settings}>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/construction.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p  className="text-lg">Constuction</p>
              </div>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/truck.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p className="text-lg text-center">Travel, Transportation & Logistics (TTL)</p>
              </div>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/box.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p className="text-lg text-center">Media & Publishing</p>
              </div>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/logisticss.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p className="text-lg text-center">Logistics</p>
              </div>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/Manufacturing.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p className="text-lg text-center">Manufacturing</p>
              </div>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/energy.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p className="text-lg text-center">Energy</p>
              </div>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/Healthcare.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p className="text-lg text-center">Health Care & Pharmaceuitical</p>
              </div>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/education.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p className="text-lg text-center">Education</p>
              </div>
              <div
                style={{ display: "flex" }}
                className="flex items-center flex-col justify-start gap-4"
              >
                <Image
                  src={"/constructions.png"}
                  width={100}
                  height={100}
                  alt=" aaxel-logo "
                />
                <p className="text-lg text-center">Construction & Real Estate</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redefing;
