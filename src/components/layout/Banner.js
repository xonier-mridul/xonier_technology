"use client"
import React, {useEffect} from "react";
import Image from "next/image";
import HeadingDivider from "./HeadingDivider";
import Link from "next/link";
import Aos from "aos";
import 'aos/dist/aos.css';



const Banner = () => {
    useEffect(() => {
      Aos.init({
        duration:2000,
        
      })
    }, [])
    
  return (
    <>
      <div className="py-20 pt-52 banner">
        <div className="max-w-7xl m-auto flex items-center justify-center">
          <div className="w-1/2">
            <h1
              style={{ letterSpacing: "-1.5px" }}
              className="text-[62px] font-medium leading-none pb-5 "
            >
              EXECUTE YOUR NEXT BIG BUSINESS IDEA
            </h1>
            <HeadingDivider className="pb-4" />
            <p className="text-xl pt-5 leading-relaxed max-w-[83.33%] pb-10">
              Xonier Technologies is a software development company. Our
              strength lies in software development as per customer needs. We
              operate globally.We are a Young, Vibrant, and experienced business
              house with a strong focus on customized software development, and
              mobile application development.
            </p>
            <Link
              href={"/"}
              className="w-fit border-2 border-blue-800 text-blue-800 px-[34px] py-3 text-lg rounded-bl-2xl  rounded-tr-2xl hover:bg-blue-800 hover:text-white transition-[0.6s]"
            >
              
              Schedule Your Free Consultation
            </Link>
          </div>

          <div className="w-1/2 flex justify-end">
            {/* <Image
              className="max-w-full"
              src={"/sidebar1.png"}
              quality={100}
              width={600}
              height={600}
              alt="sidebar"
            /> */}

            <ul className="hexgrid pl-0">
              <li className="hex" data-aos="fade-up" data-aos-delay="0">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/node-js.png)"}}></div>
                  </Link>

                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="100">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/react-js.png)"}}></div>
                  </Link>

                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="200">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/laravel.png)"}}></div>
                  </Link>


                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="300">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/php.png)"}}></div>
                  </Link>


                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="400">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/pwa.png)"}}></div>
                  </Link>


                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="0">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/flutter.png)"}}></div>
                  </Link>
                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="100">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/angular-js.png)"}}></div>
                  </Link>
                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="200">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/react-native.png)"}}></div>
                  </Link>
                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="300">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/python.png)"}}></div>
                  </Link>
                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="0">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/django.png)"}}></div>
                  </Link>
                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="100">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/aws.png)"}}></div>
                  </Link>
                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="200">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/go-logo.png)"}}></div>
                  </Link>
                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="300">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/java.jpg)"}}></div>
                  </Link>
                 </div>
              </li>
              <li className="hex" data-aos="fade-up" data-aos-delay="400">
                 <div className="hexIn">
                  <Link href={'/'} className="hexLink">
                   <div className="img" style={{backgroundImage:"url(/tensor-flow.png)"}}></div>
                  </Link>
                 </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;