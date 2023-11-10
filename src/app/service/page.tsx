"use client";

import { ServiceCard } from "@/components/home/service-card";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/services";
import router from "next/router";
import { Button } from "@/components/ui/button";

const ServicePage = () => {
  return (
    <div id="service" className=" w-full rounded p-4 flex flex-col gap-y-4">
      <div className="text-center text-primary ">
        <h1 className="text-xl uppercase font-semibold mb-2">our service</h1>
        <Separator />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 ">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            href={service.href}
            src={service.src}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
