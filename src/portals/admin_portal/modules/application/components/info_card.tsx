import { ChevronDown } from "lucide-react";
import { useState } from "react";

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`border border-gray-200 bg-white transition-all rounded-2xl`}
    >
      <div
        className={`flex items-center justify-between cursor-pointer border border-gray-100 bg-gray-100 px-3 py-3 ${
          open ? "rounded-t-2xl" : "rounded-2xl"
        }`}
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold">{title}</h3>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && <div className="p-4">{children}</div>}
    </div>
  );
};

export default InfoCard;
