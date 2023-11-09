"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  href: string;
  title: string;
  src: string;
}

export const ServiceCard = ({ src, title, href }: ServiceCardProps) => {
  return (
    <div className="relative w-full  group">
      <div className="relative w-full  h-[290px]  rounded-lg  bg-red-300 group-hover:border border-black transition overflow-hidden">
        <Image src={src} fill objectFit="cover" alt={title} />{" "}
      </div>

      <button className="absolute -bottom-4 left-[50%] ml-[-70px]   px-8 py-2 bg-primary hover:bg-red-600  transition text-white font-semibold rounded-lg  hover:shadow-sm">
        <Link href={href}>{title}</Link>
      </button>
    </div>
  );
};
