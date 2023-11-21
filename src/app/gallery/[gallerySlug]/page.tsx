"use client";

import { Separator } from "@/components/ui/separator";
import { CldImage } from "next-cloudinary";

import { works } from "@/lib/works";
import { contents } from "@/lib/galleyTitle";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getPicsFromFolder } from "@/components/action";

import ImageModal from "../../../components/ImageModal";

const GallerySlugPage = ({
  params,
}: {
  params: {
    gallerySlug: string;
  };
}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getPicsFromFolder(params.gallerySlug); // Assuming pics() returns a promise
        setImages(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, [params.gallerySlug]);
  const isGallery = contents.find(
    (contents) => contents === params.gallerySlug.replace("%20", " ")
  );

  if (!isGallery) return redirect("/not-found");

  if (loading) {
    return (
      <p className="border rounded-md h-full flex items-center justify-center">
        Loading...
      </p>
    );
  }

  if (images.length == 0) {
    return (
      <p className="border rounded-md h-full flex items-center justify-center">
        No images
      </p>
    );
  }

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
        {images.map((image) => (
          <div
            key={image?.public_id}
            onClick={() => {
              setOpenImageModal(true);
              setSelectedImage(image?.url);
            }}
          >
            <CldImage
              alt="image"
              width="600"
              height="600"
              src={image?.public_id}
            />
          </div>
        ))}
      </div>

      {openImageModal && (
        <ImageModal
          isOpen={openImageModal}
          setIsOpen={setOpenImageModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default GallerySlugPage;
