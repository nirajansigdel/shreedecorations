"use client";
import Image from "next/image";
import { Seperator } from "../ui/seperator";

export const Quote = () => {
  return (
    <div className="w-full px-4 py-6 bg-primary rounded flex flex-col md:flex-row items-center text-white justify-between gap-10 ">
      <div className="flex-1 ">
        <div className="relative h-[320px] w-[320px] rounded-full overflow-hidden ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1682090795093-9b9434a455ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZyUyMGluJTIwaGluZHV8ZW58MHx8MHx8fDA%3D"
            fill
            objectFit="cover"
            alt="image"
          />
        </div>
      </div>

      <div className="sm:w-[70%] lg:w-[50%] flex flex-col gap-y-6 ">
        <div className="flex flex-col gap-y-1 text-center">
          <h1 className="font-semibold text-xl">
            What <span className="uppercase">loves gives</span>
          </h1>

          <Seperator color="border-white" />
        </div>

        <div className="">
          <p>
            “The real act of marriage takes place in the heart, not in the
            ballroom or church or synagogue. It’s a choice you make not just on
            your wedding day, but over and over again— and that choice is
            reflected in the way you treat your husband or wife.”
          </p>
          <p className="text-end mt-2 font-medium">— Barbara de Angelis</p>
        </div>
      </div>
    </div>
  );
};
