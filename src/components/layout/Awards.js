import React from "react";
import Image from "next/image";

const Awards = () => {
  return (
    <>
    <div className="py-14">
      <div className="award max-w-7xl mx-auto p-10 rounded-2xl ">
        <div className="flex items-center justify-center pb-8">
          <h2 className="text-[40px] text-white font-bold  ">
            Awards And Recognition
          </h2>
        </div>
        <div className="grid grid-cols-7 items-center gap-4 pb-12">
          <Image src={"/award1.webp"} alt="award1" width={140} height={140} />
          <Image src={"/award2.png"} alt="award2" width={140} height={140} />
          <Image src={"/award3.webp"} alt="award3" width={140} height={140} />
          <Image src={"/award4.png"} alt="award4" width={140} height={140} />
          <Image src={"/award5.png"} alt="award5" width={140} height={140} />
          <Image src={"/award5.webp"} alt="award5" width={140} height={140} />
          <Image src={"/award6.png"} alt="award6" width={140} height={140} />
        </div>
        <div className="flex justify-center items-center ">
          <p className="text-white font-bold text-lg w-2/3 text-center">
            With over 14+ years of industry experience, our CEO brings a wealth
            of expertise and leadership to ensure timely and efficient project
            execution. Get In Touch
          </p>
        </div>

      </div>
      </div>
      
    </>
  );
};

export default Awards;
