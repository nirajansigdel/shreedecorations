"use client";

import { SingleImageDropzone } from "../../components/SingleUpload";
import { useEdgeStore } from "../../lib/edgestore";
import { useState } from "react";

function SingleImageDropzoneUsage() {
  const [file, setFile] = useState();
  const { edgestore } = useEdgeStore();

  return (
    <div className=" h-screen border flex items-center justify-center">
      <div className=" flex items-center flex-col gap-4">
        <SingleImageDropzone
          width={200}
          height={200}
          value={file}
          onChange={(file) => {
            setFile(file);
          }}
        />
        <button
          className="text-red border px-4 rounded-md py-2"
          onClick={async () => {
            if (file) {
              const res = await edgestore.publicFiles.upload({
                file,
                onProgressChange: (progress) => {
                  // you can use this to show a progress bar
                  console.log(progress);

                  if (progress == 100) {
                    alert("image uploaded");
                    setFile();
                  }
                },
              });
              // you can run some server action or api here
              // to add the necessary data to your database
              console.log(res);
            }
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default SingleImageDropzoneUsage;
