"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-full  bg-geen-500  my-8  mx-auto">
      <div className="relative max-[480px] h-[520px]">
        <Image src="/404_error.svg" fill alt="404" />
      </div>

      <div className="w-full flex items-center justify-center mt-8 font-medium ">
        <Button className=" hover:bg-red-500" onClick={() => router.push("/")}>
          {" "}
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Home
        </Button>
      </div>
    </div>
  );
}
