"use client";

import { Separator } from "@/components/ui/separator";
import { ServiceCard } from "./service-card";
import { services } from "@/lib/services";
import { Button } from "../ui/button";

export const OurSerive = () => {
  return (
    <div className=" w-full border-2  border-gray-300 rounded p-4 flex flex-col gap-y-4">
      <div className="text-center text-primary ">
        <p>Enjoy</p>
        <h1 className="text-xl uppercase font-semibold mb-2">our service</h1>
        <Separator />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            href={service.href}
            src={service.src}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button className="bg-[#004a46] hover:bg-[#00504c] ">See More</Button>
      </div>
    </div>
  );
};
