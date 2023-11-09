"use client";

import Image from "next/image";
export const Connect = () => {
  return (
    <div className="  w-full   h-[480px] rounded overflow-hidden   bg-[url('https://images.pexels.com/photos/18897196/pexels-photo-18897196/free-photo-of-indian-wedding-ceremony-with-petals.jpeg?auto=compress&cs=tinysrgb&w=300')]  ">
      <div className="w-full h-full bg-black/10">
        <div className=" text-white flex flex-col items-center justify-center h-full gap-y-4">
          <p className="capitalize font-bold text-4xl">
            {" "}
            lets celebrate your love
          </p>

          <button className="px-6 py-4 rounded-lg bg-primary text-lg font-semibold text-white hover:bg-red-500 transition ">
            {" "}
            Lets Connect
          </button>
        </div>
      </div>
    </div>
  );
};
