"use client";

import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <div
      id="service"
      className=" w-full rounded p-4 flex flex-col gap-y-8 border mt-4"
    >
      <div className="text-center ">
        <h1 className="text-xl uppercase font-semibold mb-2">about us</h1>
        <Separator />
      </div>

      <div className="flex flex-col gap-y-6">
        <p className="text-lg font-medium text-center">
          Welcome to Shree Decore - Your Premier Ceremony Specialist!
        </p>

        <div className="flex w-full flex-col text-gray-800 gap-y-6 ">
          <p>
            At Shree Decore, we take pride in turning your special moments into
            magical memories. As the proud owner, I am dedicated to creating
            enchanting settings for a variety of occasions, including weddings,
            pujas, birthdays, anniversaries, and more.
          </p>

          <p>
            Our passion lies in transforming spaces into breathtaking canvases
            that reflect the uniqueness of your celebration. Whether it &apos; s
            the sacred ambiance of a wedding, the joyous vibrancy of a birthday,
            or the solemnity of a puja, we bring a touch of elegance to every
            event.
          </p>
          <p>
            With a keen eye for detail and a commitment to excellence, Shree
            Decore offers a range of decor services to suit your individual
            style and preferences. From exquisite floral arrangements to
            personalized thematic decor, we ensure that your ceremony is a
            visual masterpiece.
          </p>
          <p>
            Join us in making your special day truly extraordinary. Contact
            Shree Decore for an enchanting blend of creativity and meticulous
            execution. Let&apos;s create moments that last a lifetime!
          </p>
          <p>
            Feel free to tailor this to better fit your style and the specific
            services you offer at Shree Decore. We are an all-in-one center that
            provides services such as photography, videography, and customized
            packages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
