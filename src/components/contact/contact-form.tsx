"use client";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

import { ContactInfo } from "./contact-info";

export const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full  items-center md:justify-between mt-6">
      <div className="flex flex-col gap-y-6 w-full  ">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="name" className="font-semibold">
            Full name
          </Label>
          <Input name="name" placeholder="Full Name..." />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label htmlFor="number" className="font-semibold">
            Contact number
          </Label>
          <Input name="number" type="number" placeholder="Phone number" />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email" className="font-semibold">
            Email address
          </Label>
          <Input name="email" type="email" placeholder="Email address" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email" className="font-semibold">
            Message
          </Label>
          <textarea
            name=""
            id=""
            rows={4}
            placeholder="Message"
            className="rounded focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black placeholder:text-gray-600 p-2"
          />
        </div>

        <button
          className="w-full text-center font-semibold bg-primary hover:bg-red-500 h py-2 px-4 rounded transition"
          type="submit"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col gap-y-6 w-full bg-[#13605C] rounded p-4">
        <p className="text-sm">
          Feel free to connect with us through the contact details provided
          below for any type of enquiry or to establish a connection. We are
          here to assist you in a positive and helpful manner.
        </p>

        <div className="bg-[#004A46] p-4 flex flex-col gap-y-4 rounded ">
          <p className="text-lg font-medium">Contact</p>
          <div className="flex flex-col gap-y-2">
            <ContactInfo
              title="817 715 3823"
              icon={<AiOutlinePhone className="w-5 h-5" />}
            />
            <ContactInfo
              title="cksoli66@gmail.com"
              icon={<HiOutlineMail className="w-5 h-5" />}
            />
          </div>
        </div>

        <div className="bg-[#004A46] p-4 flex flex-col gap-y-4 rounded ">
          <p className="text-lg font-medium">Location</p>
          <div className="flex flex-col gap-y-2">
            <ContactInfo
              title="Fourth worth dallas"
              icon={<IoLocationOutline className="w-5 h-5" />}
            />
            <ContactInfo title="North road 435673Kth street" />
          </div>
        </div>
      </div>
    </div>
  );
};
