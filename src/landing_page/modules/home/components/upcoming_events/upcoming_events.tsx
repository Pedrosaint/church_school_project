import { ChevronRight } from "lucide-react";
import { EventCard } from "./event_cards";


export const UpcomingEvents = () => {
  const events = [
    {
      date: "05",
      month: "DEC",
      title: "Open House & campus Tour",
      category: "Admission",
      categoryColor: "bg-[#B3313726] text-[#D4A34A]",
      time: "10:00AM - 2:00PM",
      location: "Main Campus",
    },
    {
      date: "08",
      month: "DEC",
      title: "Christmas Chapel Service",
      category: "Chapel",
      categoryColor: "bg-[#B3313726] text-[#D4A34A]",
      time: "10:00PM",
      location: "Chapel Auditorium",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-600">
              Join us for upcoming events and experience our vibrant community
            </p>
          </div>
          <button className="flex items-center gap-2 text-gray-700 font-medium">
            View Full Calendar
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
