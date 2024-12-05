import React from "react";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer  ">
        <div className="max-w-7xl m-auto gap-6  pt-12 pb-20 flex">
          <div className="w-[25%]">
            <Image
              src={"/xonier-logo-light.png"}
              className="pb-6"
              width={200}
              height={200}
              alt="xonier-logo"
              quality={100}
            />
            <p className="text-white pb-4">
              We are moving towards an ecosystem responsible business, with a
              view to keeping alive the DNA of an "Always in Startup Mode"
              entity.
            </p>

            <form
              className="flex w-full rounded-sm overflow-hidden mb-4"
              action=""
            >
              <input
                className=" py-[14px] px-4 w-[80%] bg-white border-none outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
              <button className="bg-black text-white p-3 px-4" type="submit">
                <FaPaperPlane className="text-lg" />
              </button>
            </form>
            <div className="flex gap-3 items-center">
              <Link
                href={"https://www.linkedin.com/company/xoniertechinc/"}
                title="linkedin"
                target="_blank"
                className="bg-[#0047FF] h-8 w-8 flex items-center rounded-md justify-center"
              >
                <FaLinkedin className="text-white" />
              </Link>
              <Link
                href={"https://www.facebook.com/xoniertechInc/"}
                title="facebook"
                target="_blank"
                className="bg-[#0047FF] h-8 w-8 flex items-center rounded-md justify-center"
              >
                <FaFacebookSquare className="text-white" />
              </Link>
              <Link
                href={"https://www.instagram.com/xoniertechinc/"}
                title="instagram"
                target="_blank"
                className="bg-[#0047FF] h-8 w-8 flex items-center rounded-md justify-center"
              >
                <FaInstagram className="text-white" />
              </Link>
              <Link
                href={"https://twitter.com/xonier_tech"}
                title="twitter"
                target="_blank"
                className="bg-[#0047FF] h-8 w-8 flex items-center rounded-md justify-center"
              >
                <FaXTwitter className="text-white" />
              </Link>
            </div>
          </div>
          <div className="w-[20%]">
            <h4 className="text-white underline text-lg font-semibold pb-5">
              Services
            </h4>

            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Software Development
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Mobile Application
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Consulting
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Web Development
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Remote Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[20%]">
            <h4 className="text-white underline text-lg font-semibold pb-5">
              Useful Links
            </h4>

            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Blog
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Clients
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Career
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] flex gap-1 items-center"
                >
                  <FaAngleRight className="text-lg" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[35%]">
          <h4 className="text-white underline text-lg font-semibold pb-5">
              India Offices
            </h4>
            <h5 className="text-white text-lg font-semibold pb-1">Development Center:</h5>
            <p className="text-white pb-1">H-161, Office No: 202, Second Floor, H Block, Sector 63, Noida</p>
            <p className="text-white pb-1">Contact - <Link href={"tel:+918700914459"} className=""> +91 87009 14459 </Link></p>
            <p className="text-white pb-3">USA - <Link href={"tel:+13475808770"} className=""> +1 347 580 8770 </Link></p>
            <h5 className="text-white text-lg font-semibold pb-1"> Sales Office: </h5>
            <p  className="text-white">H-187, Office No: 1.2, First Floor, H Block, Sector 63, Noida</p>
          </div>
        </div>
        <div className="w-full border-t-[1px] border-[#ffffff60]">
            <div className="max-w-7xl mx-auto py-2 flex">
                <div className="w-1/2"><p className="text-white text-lg capitalize">Copyright &copy; 2025 all rights reserved</p></div>
                <div className="w-1/2 flex justify-end ">
                <ul className="flex items-center text-white flex-end gap-3 text-lg">
                    <li><Link href={""}>Tearms of Use</Link></li>  | 
                    <li><Link href={""}>Privacy Policy</Link></li>
                </ul>
                </div>

            </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
