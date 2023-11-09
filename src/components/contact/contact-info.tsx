"use client";

interface ContactInfoProps {
  title: string;
  icon?: React.ReactNode;
}
export const ContactInfo = ({ title, icon }: ContactInfoProps) => {
  return (
    <div className=" flex gap-x-2 items-center font-medium ">
      {icon}
      <p>{title}</p>
    </div>
  );
};
