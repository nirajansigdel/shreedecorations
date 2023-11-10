"use client";

import Link from "next/link";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { NavRoutes } from "@/components/navbar/nav-route";

const socialMedias = [
  {
    id: 1,
    icon: <BsFacebook className=" w-6 h-6 md:w-9 md:h-9" />,
  },
  {
    id: 2,
    icon: <AiFillInstagram className="w-7 h-7 md:w-10 md:h-10" />,
  },
  {
    id: 3,
    icon: <AiFillYoutube className="w-7 h-7 md:w-10 md:h-10" />,
  },
  { id: 4, icon: <FaTiktok className="w-5 h-5 md:w-8 md:h-8" /> },
];

const navRoutes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Service",
    href: "/",
  },
  {
    title: "Gallery",
    href: "/",
  },
  {
    title: "About us",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

export const Footer = () => {
  return (
    <div className="mt-8 mb-4 p-4 rounded w-full  bg-primary text-white flex flex-col gap-y-4">
      {/* footer top  */}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-x-4">
          {socialMedias.map((social) => (
            <Link
              href="/"
              key={social.id}
              className="hover:text-red-100 transition"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <NavRoutes isFooter />
      </div>

      <div className=" w-full border-b-2 rounded text-white " />

      <p className="text-center font-medium"> &copy; Copyright 2023 </p>
    </div>
  );
};
