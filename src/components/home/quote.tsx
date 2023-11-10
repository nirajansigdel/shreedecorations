"use client";
import Image from "next/image";
import { Separator } from "../ui/separator";

export const Quote = () => {
  return (
    <div className="w-full p-4 md:py-8 md:px-10 bg-primary rounded flex flex-col md:flex-row items-center text-white justify-evenly gap-8 ">
      <div className="flex-1 ">
        <div className="relative h-[420px] w-[420px] rounded-full overflow-hidden ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1682092018999-2c8fcfe944f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZyUyMGhpbmR1fGVufDB8fDB8fHww"
            fill
            objectFit="cover"
            alt="image"
          />
        </div>
      </div>

      <div className="sm:w-[70%] lg:w-[50%] flex flex-col gap-y-2 ">
        <div className="flex flex-col gap-y-1 text-center">
          <h1 className="font-semibold text-xl">
             <span className="uppercase">What loves gives</span>
          </h1>

          <Separator color="border-white" />
        </div>

        <div className="w-4/5">
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
