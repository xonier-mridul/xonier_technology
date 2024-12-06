"use client"
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import 'aos/dist/aos.css';


const TechnologySec = () => {

   const [activeTab, setactiveTab] = useState(1);


  //  Aos.init({
  //   duration: 2000
  //  })

  return (
    <>
      <div className="max-w-7xl mx-auto pb-20">
        <div className="flex justify-center items-center pb-10">
        
         
            <h2 className="text-[48px] font-semibold">
              Our leading <span className="text-blue-800"> Tech Stack </span>
            </h2>
         
        </div>
        <div className="w-full">
            <ul className="tabs grid grid-cols-5 items-center p-5 gap-5 rounded-lg shadow-[0_0_20px_#00000015] mb-20">
              <li className={`${activeTab === 1 ? "bg-blue-800 hover:bg-blue-800 text-white" : "bg-white text-blue-800 hover:bg-gray-50"} p-3 rounded-lg border-2  text-lg border-blue-800 text-center cursor-pointer  transition-all duration-300`} onClick={()=>setactiveTab(1)}>FrontEnd Development </li>
              <li className={`${activeTab === 2 ? "bg-blue-800 hover:bg-blue-800 text-white" : "bg-white text-blue-800 hover:bg-gray-50"} p-3 rounded-lg border-2  text-lg border-blue-800 text-center cursor-pointer  transition-all duration-300`} onClick={()=>setactiveTab(2)}>BackEnd Development </li>
              <li className={`${activeTab === 3 ? "bg-blue-800 hover:bg-blue-800 text-white" : "bg-white text-blue-800 hover:bg-gray-50"} p-3 rounded-lg border-2  text-lg border-blue-800 text-center cursor-pointer  transition-all duration-300`} onClick={()=>setactiveTab(3)}>Mobile Development </li>
              <li className={`${activeTab === 4 ? "bg-blue-800 hover:bg-blue-800 text-white" : "bg-white text-blue-800 hover:bg-gray-50"} p-3 rounded-lg border-2  text-lg border-blue-800 text-center cursor-pointer  transition-all duration-300`} onClick={()=>setactiveTab(4)}>Cloud Development </li>
              <li className={`${activeTab === 5 ? "bg-blue-800 hover:bg-blue-800 text-white" : "bg-white text-blue-800 hover:bg-gray-50"} p-3 rounded-lg border-2  text-lg border-blue-800 text-center cursor-pointer  transition-all duration-300`} onClick={()=>setactiveTab(5)}>Artificial Intelligence </li>
                
            </ul>

            {activeTab === 1 && <div className="max-w-6xl mx-auto">
              <ul className="hexgrid">
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/angular-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200" >
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-native.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/node-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/flutter.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="500">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/python.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/django.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/aws.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/laravel.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/php.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/pwa.png)"}}></div></Link> 
                  </div>
                </li>

              </ul>

            </div>}
            {activeTab === 2 && <div className="max-w-6xl mx-auto">
              <ul className="hexgrid">
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/angular-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200" >
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-native.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/node-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/flutter.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="500">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/python.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/django.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/aws.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/laravel.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/php.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/pwa.png)"}}></div></Link> 
                  </div>
                </li>

              </ul>

            </div>}
            {activeTab === 3 && <div className="max-w-6xl mx-auto">
              <ul className="hexgrid">
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/angular-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200" >
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-native.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/node-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/flutter.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="500">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/python.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/django.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/aws.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/laravel.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/php.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/pwa.png)"}}></div></Link> 
                  </div>
                </li>

              </ul>

            </div>}
            {activeTab === 4 && <div className="max-w-6xl mx-auto">
              <ul className="hexgrid">
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/angular-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200" >
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-native.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/node-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/flutter.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="500">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/python.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/django.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/aws.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/laravel.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/php.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/pwa.png)"}}></div></Link> 
                  </div>
                </li>

              </ul>

            </div>}
            {activeTab === 5 && <div className="max-w-6xl mx-auto">
              <ul className="hexgrid">
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/angular-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200" >
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/react-native.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/node-js.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/flutter.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="500">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/python.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="0">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/django.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="100">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/aws.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="200">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/laravel.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="300">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/php.png)"}}></div></Link> 
                  </div>
                </li>
                <li className="hexa" data-aos="fade-up" data-aos-delay="400">
                  <div className="hexIn">
                    <Link className="hexLink" href={""}>
                    <div className="img" style={{backgroundImage:"url(/pwa.png)"}}></div></Link> 
                  </div>
                </li>

              </ul>

            </div>}
        </div>





        {/* <div className="flex flex-col justify-center items-center gap-9">

        
        <div className="flex justify-center items-center gap-5 w-full">
          <div className="w-[25%] ">
            <div className="flex items-center gap-5 rounded-tr-full   bg-blue-800 p-3">
              <Image
                src={"/front-end.png"}
                width={50}
                height={50}
                alt="frontend"
              />

              <p className="text-white font-semibold text-lg">
                Front-End Development
              </p>
            </div>
          </div>
          <div className="w-[75%] grid grid-cols-6 gap-[30px] items-center">
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/react-js-logo.svg"} 
            width={50}
            height={50}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/angular-logo.svg"} 
            width={100}
            height={100}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/vuejs-logo.svg"} 
            width={50}
            height={50}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/html.svg"} 
            width={40}
            height={40}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/flutter-logo.svg"} 
            width={100}
            height={100}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/js.svg"} 
            width={40}
            height={40}
            alt="js"
            />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 w-full">
          <div className="w-[25%] ">
            <div className="flex items-center gap-5 rounded-tr-full   bg-blue-800 p-3">
              <Image
                src={"/front-end.png"}
                width={50}
                height={50}
                alt="frontend"
              />

              <p className="text-white font-semibold text-lg">
                Back-End Development
              </p>
            </div>
          </div>
          <div className="w-[75%] grid grid-cols-6 gap-[30px] items-center">
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/net.svg"} 
            width={50}
            height={50}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/java-logo-vertical.svg"} 
            width={35}
            height={35}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/python_1.svg"} 
            width={100}
            height={100}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/node-js-logo-small.svg"} 
            width={90}
            height={90}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/php-logo-small.svg"} 
            width={100}
            height={100}
            alt="js"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/laravel.png"} 
            width={80}
            height={80}
            alt="js"
            />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 w-full">
          <div className="w-[25%] ">
            <div className="flex items-center gap-5 rounded-tr-full   bg-blue-800 p-3">
              <Image
                src={"/front-end.png"}
                width={50}
                height={50}
                alt="frontend"
              />

              <p className="text-white font-semibold text-lg">
                Mobile Development
              </p>
            </div>
          </div>
          <div className="w-[75%] grid grid-cols-6 gap-[30px] items-center">
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/flutter-logo.svg"} 
            width={100}
            height={100}
            alt="flutter-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/react-native-logo.svg"} 
            width={60}
            height={60}
            alt="react-native-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/android-logo.svg"} 
            width={75}
            height={75}
            alt="android-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/xamarin-logo-vertical.svg"} 
            width={70}
            height={70}
            alt="xamarin-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/cordova-logo.svg"} 
            width={70}
            height={70}
            alt="cordova-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/pwa-logo.svg"} 
            width={100}
            height={100}
            alt="pwa-logo"
            />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 w-full">
          <div className="w-[25%] ">
            <div className="flex items-center gap-5 rounded-tr-full   bg-blue-800 p-3">
              <Image
                src={"/front-end.png"}
                width={50}
                height={50}
                alt="frontend"
              />

              <p className="text-white font-semibold text-lg">
                Cloud Development
              </p>
            </div>
          </div>
          <div className="w-[75%] grid grid-cols-6 gap-6 items-center">
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/aws.svg"} 
            width={90}
            height={90}
            alt="flutter-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/azure-full.svg"} 
            width={110}
            height={110}
            alt="react-native-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/google-cloud-logo.svg"} 
            width={75}
            height={75}
            alt="android-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/digital-ocean.svg"} 
            width={80}
            height={80}
            alt="xamarin-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/rackspace-horizontal.svg"} 
            width={100}
            height={100}
            alt="cordova-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/google_cloud.png"} 
            width={110}
            height={110}
            alt="pwa-logo"
            />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 w-full">
          <div className="w-[25%] ">
            <div className="flex items-center gap-[30px] rounded-tr-full   bg-blue-800 p-3">
              <Image
                src={"/front-end.png"}
                width={50}
                height={50}
                alt="frontend"
              />

              <p className="text-white font-semibold text-lg">
                Artificial Intelligence
              </p>
            </div>
          </div>
          <div className="w-[75%] grid grid-cols-6 gap-[30px] items-center">
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/matlab.jpg"} 
            width={50}
            height={50}
            alt="flutter-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/octave-full.svg"} 
            width={110}
            height={110}
            alt="react-native-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/r_logo.svg"} 
            width={75}
            height={75}
            alt="android-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/mahout-logo.svg"} 
            width={110}
            height={110}
            alt="xamarin-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/caffe-logo.svg"} 
            width={100}
            height={100}
            alt="cordova-logo"
            />
            </div>
            <div className="shadow-[0px_0px_20px_#00000015] p-2 flex items-center justify-center h-20">
            <Image
            src={"/mxnet-logo.svg"} 
            width={110}
            height={110}
            alt="pwa-logo"
            />
            </div>
          </div>
        </div>
        </div> */}
      </div>
    </>
  );
};

export default TechnologySec;
