"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Whatsapp = () => {
  const [popupShow, setpopupShow] = useState(false);

  const Hrs = new Date().getHours();
  const Min = new Date().getMinutes();

  const hours = Hrs <= 9 ? "0" + Hrs : Hrs;
  const minuts = Min <= 9 ? "0" + Min : Min;
  const ampm = Hrs <= 12 ? "am" : "pm";

  useEffect(() => {
    const whatsappMessage = document.querySelector(".whatsappMain");
    const div = document.createElement("div");
    div.classList = "whatsapp";
    div.innerHTML = `
      <div>
         <h5 style="font-weight: 600"> Dhhirendra Kumar</h5>
         <div style="display:flex; align-itmes:center; justify-content:space-between;"> <p>Hii their!</p> <span style="font-size: 12px; display:flex; align-items:center"> ${hours}:${minuts} ${ampm} </span> </div>
      </div>`;
    whatsappMessage.appendChild(div);
  }, []);

  return (
    <>
      {popupShow && (
        <div className="whatsappOverlay fixed w-full h-full z-20 top-0 left-0 bg-[#00000045]" onClick={()=>setpopupShow(false)}></div>
      )}
      <div className="fixed flex flex-col items-end gap-4 justify-end  right-5 bottom-5  z-30">
        <div className={` ${popupShow === true ? "block ": "hidden "}whatsappPop w-96 rounded-xl overflow-hidden`}>
          <div className="whatsappHeader p-6 bg-[#095e54] flex gap-4 items-center">
            <Image
              src={"/dk.jpg"}
              className="rounded-full"
              width={52}
              height={52}
              alt="Dhhirendra Kumar"
            />
            <div>
              <h4 className="text-white text-lg">Dhhirendra Kumar</h4>
              <p className="text-white">Typically replies within a day</p>
            </div>
          </div>
          <div className="whatsappMain h-24 flex p-2 flex-col gap-2"></div>
          <div className="whatsappFooter p-2 bg-white w-full">
            <Link
              href={"https://wa.me/918700914459"}
              className="bg-[#4fce5d] py-3 flex justify-center items-center rounded-full text-xl gap-2 text-white"
            >
              {" "}
              <FaWhatsapp className="text-xl" /> Start Chat
            </Link>
          </div>
        </div>
        <div
          className="h-[74px] w-[74px] bg-white rounded-full border-[3px] border-[#bebfbe]  flex justify-center items-center"
          onClick={() => setpopupShow(!popupShow)}
        >
          <FaWhatsapp className="text-[46px] text-[#4fce5d]" />
        </div>{" "}
      </div>
    </>
  );
};

export default Whatsapp;
