"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

import { contents } from "@/lib/galleyTitle";
import { useState } from "react";

export const GalleryPopover = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const onClick = (slug: string) => {
    router.push(`/gallery/${slug}`);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </PopoverTrigger>
      <PopoverContent className="p-4 grid grid-cols-3 gap-y-2  gap-x-8 w-full bg-primary text-white border-primary">
        {contents.map((content) => (
          <div
            role="button"
            className=" capitalize truncate p-2 w-full hover:bg-red-400/50 transition  rounded-md"
            key={content}
            onClick={() => onClick(content)}
          >
            {content}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
