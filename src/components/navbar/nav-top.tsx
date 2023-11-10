"use client";

import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const officeInfos = [
  {
    icon: <HiOutlineMail className="w-4 h-4 md:w-5 md:h-5 font-medium " />,
    title: "ushree000@gmail.com",
  },
  {
    icon: (
      <LiaPhoneVolumeSolid className="w-4 h-4 md:w-5 md:h-5 font-medium " />
    ),
    title: "+571 474 9074",
  },
  {
    icon: (
      <HiOutlineLocationMarker className=" w-4 h-4 md:w-5 md:h-5 font-medium " />
    ),
    title: "Aldie Virginia 20105 ,USA",
  },
];

const socialMedias = [
  {
    id: 1,
    icon: <BsFacebook className="w-4 h-4 md:w-7 md:h-7" />,
    link: "https://www.facebook.com/people/Shree-Auspicious-Decoration/61552178642930/?mibextid=LQQJ4d",
  },
  {
    id: 2,
    icon: <AiFillInstagram className="w-5 h-5 md:w-8 md:h-8" />,
    link: "https://www.facebook.com/people/Shree-Auspicious-Decoration/61552178642930/?mibextid=LQQJ4d",
  },
  {
    id: 3,
    icon: <AiFillYoutube className="w-5 h-5  md:w-8 md:h-8" />,
    link: "https://www.youtube.com/watch?v=ZugxJqbiMo0&list=PL9r_RvNjFlEZgT5KhPxjswtLBPZbP6Wqx",
  },
];

export const NavTop = () => {
  return (
    <div className="bg-primary px-6">
      <div className="hidden md:flex  md:h-[70px]  w-full py-2 mt-4  flex-col md:flex-row items-center justify-between  text-white max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
          {officeInfos.map((info) => (
            <div
              key={info.title}
              className="flex items-center gap-x-1 text-[10px] md:text-base"
            >
              {info.icon}
              <p className="font-medium truncate md:text base">{info.title}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-x-4">
          {socialMedias.map((social) => (
            <Link href={social.link} key={social.id} className="">
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
