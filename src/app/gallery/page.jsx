"use client";
import React from "react";

import Img1 from "./(pics)/img1.jpg";
import Img2 from "./(pics)/img2.jpg";
import Img3 from "./(pics)/img3.jpg";
import Img4 from "./(pics)/img4.jpg";
import Img5 from "./(pics)/img5.jpg";
import Img6 from "./(pics)/img6.jpg";
import Img7 from "./(pics)/img7.jpg";
import Img8 from "./(pics)/img8.jpg";
import Img9 from "./(pics)/img9.jpg";
import Image from "next/image";

function Page() {
  return (
    <div className="border-2 h-full rounded-md flex ">
      <div className=" w-full grid grid-cols-3 gap-4 p-2">
        {/* <div className="w-[100px] h-[100px] ">asd</div> */}
        {/* <div className="w-[100px] h-[1000px] ">asd</div> */}
        <Image src={Img2} alt="image1" className=" w-full " />
        <Image src={Img3} alt="image1" className=" w-full " />
        <Image src={Img8} alt="image1" className=" w-full " />
        <Image src={Img4} alt="image1" className=" w-full" />
        <Image src={Img5} alt="image1" className=" w-full" />
        <Image src={Img6} alt="image1" className=" w-full" />
        <Image src={Img1} alt="image1" className=" w-full" />
        <Image src={Img7} alt="image1" className=" w-full" />
      </div>
    </div>
  );
}

export default Page;
