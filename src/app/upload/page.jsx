"use client";

import { SingleImageDropzone } from "../../components/SingleUpload";
import { useEdgeStore } from "../../lib/edgestore";

import { useState } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { addImageToAlbum, createFolder } from "../../components/action";

const FormSchema = z.object({
  album: z.string({
    required_error: "Please select an album.",
  }),
});

function SingleImageDropzoneUsage() {
  const [imageId, setImageId] = useState("");
  const [open, setOpen] = useState(false);
  const [album, setAlbum] = useState("");

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    console.log({ data });
    if (data) {
      setAlbum(data.album);
      createFolder(data.album);

      setOpen(false);
    }
  };

  return (
    <div className=" h-screen border flex items-center justify-center">
      <div className=" flex items-center flex-col gap-4 ">
        {imageId && <CldImage width="600" height="600" src={imageId} />}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Select Album</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload Image</DialogTitle>
              <DialogDescription>
                Upload pictures here. Click upload when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="album"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className=" ">Album</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select an album name" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="border w-full">
                            <SelectGroup>
                              <SelectItem value="Wedding">Wedding</SelectItem>
                              <SelectItem value="Marriage">Marriage</SelectItem>
                              <SelectItem value="Meditation Class">
                                Meditation Class
                              </SelectItem>
                              <SelectItem value="Rental Services">
                                Rental Services
                              </SelectItem>
                              <SelectItem value="Anniversary">
                                Anniversary
                              </SelectItem>
                              <SelectItem value="Birthday">Birthday</SelectItem>
                              <SelectItem value="Sweet 16">Sweet 16</SelectItem>
                              <SelectItem value="Pasni">Pasni</SelectItem>
                              <SelectItem value="Gunau Choli">
                                Gunau Choli
                              </SelectItem>
                              <SelectItem value="Bratabandha">
                                Bratabandha
                              </SelectItem>
                              <SelectItem value="Puja">Puja</SelectItem>
                              <SelectItem value="Other Service">
                                Other Service
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          You can manage email addresses in your{" "}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="w-full" variant="secondary" type="submit">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>

        {album && (
          <CldUploadButton
            className="px-4 py-2 rounded-md border-2 border-red-800"
            uploadPreset="uuubxijp"
            onUpload={(result) => {
              setImageId(result.info.public_id);

              addImageToAlbum(result.info.public_id, album);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default SingleImageDropzoneUsage;
