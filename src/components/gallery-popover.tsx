import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const galleryContents = [
  "marriage",
  "anniversary",
  "gunau choli",
  "meditation class",
  "birthday",
  "baby shower",
  "bratabandha",
  "sweet 16",
  "puja",
  "rental services",
  "pasni and nwaran",
  "other service",
];

export const GalleryPopover = ({ children }: { children: React.ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="p-4 grid grid-cols-3 gap-y-2  gap-x-8 w-full bg-primary text-white border-primary">
        {galleryContents.map((content) => (
          <div
            role="button"
            className="truncate p-2 w-full hover:bg-red-400/50 transition  rounded-md"
            key={content}
          >
            {content}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
