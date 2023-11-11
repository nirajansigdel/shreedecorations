"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { works } from "@/lib/works";
import { contents } from "@/lib/galleyTitle";
import { redirect } from "next/navigation";
const GallerySlugPage = ({
  params,
}: {
  params: {
    gallerySlug: string;
  };
}) => {
  const isGallery = contents.find(
    (contents) => contents === params.gallerySlug.replace("%20", " ")
  );

  if (!isGallery) return redirect("/not-found");
  return (
    <div className=" rounded-sm p-4  mt-6">
      <div className="text-center ">
        <p>Collection</p>
        <h1 className="text-xl uppercase font-semibold mb-2">
          {params.gallerySlug.replace("%20", " ")}
        </h1>
        <Separator />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-8">
        {works.map((src) => (
          <div className=" relative w-full h-[320px] bg-red-200 " key={src}>
            <Image src={src} alt="image" fill objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlugPage;
