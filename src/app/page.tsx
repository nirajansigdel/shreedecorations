import { Connect } from "@/components/home/connect";
import { Hero } from "@/components/home/hero";
import { OurSerive } from "@/components/home/our-service";
import { OurWork } from "@/components/home/our-work";
import { Quote } from "@/components/home/quote";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-14 my-4">
      <Hero />
      <OurSerive />
      <Quote />
      <OurWork />
      <Connect />
    </div>
  );
}
