import { ContactForm } from "@/components/contact/contact-form";

const Contact = () => {
  return (
    <div className="bg-[#004A46] w-full p-4 text-white flex flex-col gap-y-6 rounded">
      <div className="flex flex-col gap-y-4 ">
        <h1 className="text-2xl font-semibold text-center">Connect with us</h1>
        <p>
          Are you ready to embark on a journey of self-discovery, inner peace,
          and holistic well-being? Join our Yoga and Meditation class, and
          connect with us to explore the transformative power of mindfulness and
          movement.
        </p>
      </div>
      {/* form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
