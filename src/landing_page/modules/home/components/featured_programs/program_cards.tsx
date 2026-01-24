import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  desc: string;
  duration: string;
  durationTwo?: string;
  mode: string;
  image: string;
}

export const ProgramCard = ({
  title,
  desc,
  duration,
  durationTwo,
  mode,
  image,
}: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div className="relative h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
          {/* durationTwo on TOP (if available) */}
          {durationTwo && (
            <span className="px-3 py-1 bg-[#FFFFFF]/10 backdrop-blur-md rounded-md text-lg font-medium text-white w-fit">
              {durationTwo}
            </span>
          )}

          {/* duration + mode BELOW */}
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-[#FFFFFF]/10 backdrop-blur-md rounded-md text-lg font-medium text-white">
              {duration}
            </span>

            <span className="px-3 py-1 bg-[#FFFFFF]/10 backdrop-blur-md rounded-md text-lg font-medium text-white">
              {mode}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#f7f7fb] h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-[#0B2545] text-lg leading-relaxed mb-4">{desc}</p>

        <button className="flex items-center gap-2 text-[#0B2545] font-medium text-sm">
          Learn More
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
