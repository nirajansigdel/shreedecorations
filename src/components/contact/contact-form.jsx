"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ContactInfo } from "./contact-info";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  fullName: z
    .string({
      required_error: "Please enter full name.",
    })
    .refine((value) => value.trim() !== "", {
      message: "Full name cannot be empty.",
    }),
  contactNumber: z
    .string({
      required_error: "Please enter contact number.",
    })
    .refine((value) => value.trim() !== "", {
      message: "Contact Number cannot be empty.",
    }),
  email: z
    .string({
      required_error: "Please enter your email.",
    })
    .refine((value) => /^\S+@\S+\.\S+$/.test(value), {
      message: "Please enter a valid email address.",
    }),
  message: z
    .string({
      required_error: "Please enter your message",
    })
    .refine((value) => value.trim() !== "", {
      message: "Message cannot be empty.",
    }),
});

function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    const mailtoLink = `mailto:ushree000@gmail.com?subject=Contact%20Form&body=Full%20Name:%20${encodeURIComponent(
      data.fullName
    )}%0D%0AContact%20Number:%20${encodeURIComponent(
      data.contactNumber
    )}%0D%0AEmail:%20${encodeURIComponent(
      data.email
    )}%0D%0AMessage:%20${encodeURIComponent(data.message)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 w-full  items-center md:justify-between mt-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 w-full  "
      >
        <div className="flex flex-col gap-y-1">
          <Label htmlFor="name" className="font-semibold">
            Full name
          </Label>
          <input
            {...register("fullName")}
            placeholder="Full Name..."
            className="px-3 py-2 rounded-md text-black"
          />
          {errors.fullName && <p className="text-xs mt-1">Cannot be empty</p>}
        </div>

        <div className="flex flex-col gap-y-2">
          <Label htmlFor="number" className="font-semibold">
            Contact number
          </Label>
          <input
            {...register("contactNumber")}
            type="number"
            placeholder="Contact number"
            className="px-3 py-2 rounded-md text-black"
          />
          {errors.contactNumber && (
            <p className="text-xs mt-1">Cannot be empty</p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email" className="font-semibold">
            Email address
          </Label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className="px-3 py-2 rounded-md text-black"
          />
          {errors.email && <p className="text-xs mt-1">Cannot be empty</p>}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email" className="font-semibold">
            Message
          </Label>
          <textarea
            {...register("message")}
            id=""
            rows={4}
            placeholder="Message"
            className="rounded focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black placeholder:text-gray-600 p-2"
          />
          {errors.message && <p className="text-xs mt-1">Cannot be empty</p>}
        </div>

        <button
          className="w-full text-center font-semibold bg-primary hover:bg-red-500 h py-2 px-4 rounded transition"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="flex flex-col gap-y-8 w-full bg-[#13605C] rounded p-4">
        <p className="text-sm">
          Feel free to connect with us through the contact details provided
          below for any type of enquiry or to establish a connection. We are
          here to assist you in a positive and helpful manner.
        </p>

        <div className="bg-[#004A46] p-4 flex flex-col gap-y-4 rounded ">
          <p className="text-lg font-medium">Contact</p>
          <div className="flex flex-col gap-y-2">
            <ContactInfo
              title="+571 474 9074"
              icon={<AiOutlinePhone className="w-5 h-5" />}
            />
            <ContactInfo
              title="ushree000@gmail.com"
              icon={<HiOutlineMail className="w-5 h-5" />}
            />
          </div>
        </div>

        <div className="bg-[#004A46] p-4 flex flex-col gap-y-4 rounded ">
          <p className="text-lg font-medium">Location</p>
          <div className="flex flex-col gap-y-2">
            <ContactInfo
              title="42011 bushclover terrace"
              // icon={<IoLocationOutline className="w-5 h-5" />}
            />
            <ContactInfo title=" Aldie Virginia 20105,USA " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
