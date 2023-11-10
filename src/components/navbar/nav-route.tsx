"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navRoutes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Service",
    href: "/service",
  },
  {
    title: "Gallery",
    href: "/gallery",
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

  return (
    <div
      className={cn(
        "font-medium mt-4 md:mt-0 flex flex-col  md:flex-row gap-x-6 gap-y-2",

        isFooter && "items-center justify-center"
      )}
    >
      {navRoutes.map((route) => (
        <Link
          href={route.href}
          key={route.title}
          className={cn(
            isNavbar &&
              "text-gray-600 hover:text-primary transition hover:underline",
            pathname === route.href && isNavbar && " text-primary underline",
            isMobile &&
              " p-2 rounded-md text-center text-gray-600 hover:bg-muted  hover:text-primary transition",

            pathname === route.href && isMobile && "text-primary bg-muted"
          )}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};
