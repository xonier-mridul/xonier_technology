"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
  const [PrimaryNavShow, setPrimaryNavShow] = useState(true);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setPrimaryNavShow(false);
      } else {
        setPrimaryNavShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname()

  return (
    <>
      {PrimaryNavShow ? (
        <div className="bg-transparent fixed top-0 w-full left-0 z-20">
          <div className="bg-blue-800 py-2">
            <Marquee
              className="marquees text-white flex items-center gap-3"
              direction="right"
              speed={60}
            >
              
              <FaSearch className="text-white x-rotate-anim" />
              <p className="pl-2">We are hiring </p>
            </Marquee>
          </div>

          <div className="flex items-center py-4 max-w-7xl m-auto gap-5">
            <div className="w-[20%]">
              <Image
                src="/xonier-logo.png"
                height={200}
                width={200}
                alt="Xonier Logo"
              />
            </div>
            <div className="w-[60%] flex justify-end items-center">
              <nav>
                <ul className="flex items-center gap-6 ">
                  <li>
                    <Link className="text-lg" href={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className="relative">
                    <Link className="text-lg" href={"/about"}>
                      About Us
                    </Link>
                    <div className="dropdown">

                    </div>
                  </li>
                  <li>
                    <Link className="text-lg" href={"/"}>
                      Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg" href={"/"}>
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg" href={"/"}>
                      Client
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg" href={"/"}>
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg" href={"/"}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-[20%] flex justify-end">
              <Link
                className="btn  text-lg bg-red-500 py-3 px-7 text-white rounded-lg flex justify-center items-center gap-2"
                href={"/"}
              >
               
                Get Free Estimation <FaAngleRight className="btn-icon transition-all duration-500"/>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-blue-800 py-2 fixed top-0 left-0 w-full z-20">
          <div className="flex items-center py-4 max-w-7xl m-auto gap-5">
            <div className="w-[20%]">
              <Image
                src="/xonier-logo-light.png"
                height={180}
                width={180}
                alt="Xonier Logo"
              />
            </div>
            <div className="w-[60%] flex justify-end items-center">
              <nav>
                <ul className="flex items-center gap-6 ">
                  <li>
                    <Link className="text-lg text-white" href={"/"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg text-white" href={"/"}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg text-white" href={"/"}>
                      Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg text-white" href={"/"}>
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg text-white" href={"/"}>
                      Client
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg text-white" href={"/"}>
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link className="text-lg text-white" href={"/"}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-[20%] flex justify-end">
            <Link
                className="btn  text-lg bg-red-500 py-3 px-7 text-white rounded-lg flex justify-center items-center gap-2"
                href={"/"}
              >
               
                Get Free Estimation <FaAngleRight className="btn-icon transition-all duration-500"/>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
