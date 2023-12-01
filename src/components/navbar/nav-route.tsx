"use client";

import { cn } from "@/lib/utils";
import { Link } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { GalleryPopover } from "../gallery-popover";

const navRoutes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Service",
    href: "/service",
    label: "service",
  },
  {
    title: "Gallery",
    href: "/gallery",
    disable: false,
  },
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

interface NavRoutesProps {
  isFooter?: boolean;
  isMobile?: boolean;
  isNavbar?: boolean;
}
export const NavRoutes = ({ isFooter, isMobile, isNavbar }: NavRoutesProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const onClick = (name: string, href: string) => {
    router.push(href);
  };

  return (
    <div
      className={cn(
        "font-medium mt-4 md:mt-0 flex flex-col  md:flex-row gap-x-6 gap-y-2",

        isFooter && "items-center justify-center"
      )}
    >
      {navRoutes.map((route) => {
        return (
          <div
            role="button"
            onClick={() => onClick(route.title, route.href)}
            key={route.title}
            className={cn(
              isNavbar && "text-gray-600 hover:text-primary transition ",
              pathname === route.href && isNavbar && " text-primary ",
              isMobile &&
                " p-2 rounded-md text-center text-gray-600 hover:bg-muted  hover:text-primary transition",

              pathname === route.href && isMobile && "text-primary bg-muted"
            )}
          >
            {route.title === "Gallery" && isNavbar ? (
              <GalleryPopover key="gallery">
                <div className="">{route.title}</div>
              </GalleryPopover>
            ) : route.title == "Gallery" && isFooter ? (
              <>{route.title}</>
            ) : (
              <>{route.title}</>
            )}
          </div>
        );
      })}
    </div>
  );
};
