import { ChevronRight, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  date: string;
  month: string;
  title: string;
  category: string;
  categoryColor: string;
  time?: string;
  location: string;
}

export const EventCard = ({
  date,
  month,
  title,
  category,
  categoryColor,
  time,
  location,
}: EventCardProps) => {
  return (
    <div className="flex bg-[#F6F7F9] rounded-2xl shadow-md overflow-hidden border border-[#E6E9EE]">
      <div className="bg-[#0a1e3f] text-white p-6 flex flex-col items-center justify-center min-w-[140px]">
        <p className="text-yellow-500 text-sm font-medium uppercase tracking-wider">
          {month}
        </p>
        <p className="text-6xl font-bold mt-1">{date}</p>
      </div>

      <div className="flex-1 p-4 md:p-6">
        <div className="flex items-start justify-end md:justify-between mb-2 md:mb-4">
          <h3 className="text-xl font-bold text-gray-900 hidden md:block">
            {title}
          </h3>
          <span
            className={`px-4 py-1 rounded-full text-sm font-medium ${categoryColor}`}
          >
            {category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 md:hidden">{title}</h3>

        <div className="space-y-2 mb-4">
          {time && (
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={16} />
              <span className="text-sm">{time}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <button className="text-[#0B2545] font-medium text-sm flex items-center gap-1">
          Learn More
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
