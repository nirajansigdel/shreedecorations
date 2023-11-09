"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <div className=" relative w-full   h-[680px] rounded overflow-hidden ">
      <Image
        src="https://images.unsplash.com/photo-1616165415772-f5b95c3ae135?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image"
        fill
        objectFit="cover"
      />
    </div>
  );
};
