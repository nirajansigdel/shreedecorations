"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";

import { useRouter } from "next/navigation";

export const Connect = () => {
  const router = useRouter();

  return (
    <div className="  w-full   h-[480px] rounded overflow-hidden   bg-[url('https://images.pexels.com/photos/18897196/pexels-photo-18897196/free-photo-of-indian-wedding-ceremony-with-petals.jpeg?auto=compress&cs=tinysrgb&w=300')]  ">
      <div className="w-full h-full bg-black/10">
        <div className=" text-white flex flex-col items-center justify-center h-full gap-y-4">
          <p className="capitalize font-bold text-4xl  text-center ">
            {" "}
            lets celebrate your love
          </p>

          <Button
            onClick={() => router.push("/contact")}
            size="lg"
            className="hover:bg-red-500 font-semibold text-lg "
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </div>
  );
};
