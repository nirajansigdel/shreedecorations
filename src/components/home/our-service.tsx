"use client";

import { Seperator } from "@/components/ui/seperator";
import { ServiceCard } from "./service-card";
import { services } from "@/lib/services";

export const OurSerive = () => {
  return (
    <div className=" w-full border-2  border-primary/10 rounded p-4 flex flex-col gap-y-4">
      <div className="text-center text-primary ">
        <p>Enjoy</p>
        <h1 className="text-xl uppercase font-semibold mb-2">our service</h1>
        <Seperator />
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
        <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 transition font-medium text-white">
          Current
        </button>
        <button className="px-6 py-2 bg-primary hover:bg-red-500 transition font-medium text-white">
          Next
        </button>
      </div>
    </div>
  );
};
