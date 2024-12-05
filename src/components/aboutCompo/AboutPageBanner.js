import React from "react";
import Image from "next/image";
const AboutPageBanner = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        <div className="w-1/2">
          <h3 className="about-sub relative w-fit text-red-500 font-semibold">
            ABOUT US
          </h3>
          <h2 className="text-[48px] font-semibold">
          Xonier <span className="text-blue-800"> Technologies <Image 
          src={"underline.svg"}
          width={200}
          height={200}
          alt="underline"
          /> </span>
          </h2>
          <p className="text-lg pb-6">
          Xonier Technologies is a digital engineering services provider to emerging businesses that are seeking to transform operations, leveraging Open Source software, Mobile devices, and the public/private cloud.
          </p>
          <p className="text-lg pb-6">
          We are moving towards an ecosystem sustainable and responsible world of digital businesses on the Cloud and Xonier Technologies is your partner in that journey.
          </p>
          <p className="text-lg pb-6">
          Receive real-time business analytics Cross-browser Compatible Design Completely Gutenberg Ready Highly Responsive Tools
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>
    </>
  );
};

export default AboutPageBanner;
