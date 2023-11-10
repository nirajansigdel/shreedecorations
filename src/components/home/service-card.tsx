"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface ServiceCardProps {
  href: string;
  title: string;
  src: string;
}

export const ServiceCard = ({ src, title, href }: ServiceCardProps) => {
  return (
    <div className="relative w-full  group">
      <div className="relative w-full  h-[290px]  rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden">
        <Image src={src} fill objectFit="cover" alt={title} />{" "}
      </div>

      <Button
        variant="outline"
        className="absolute -bottom-4 left-[50%] ml-[-70px]   px-8 py-2  transition font-semibold rounded-lg  hover:shadow-sm"
      >
        <Link className="flex text-primary" href={href}>{title}</Link>
      </Button>
    </div>
  );
};
