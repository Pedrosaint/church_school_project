import NewsTickerCarousel from "../../../../general/ui/carousel";

const newsItems = [
  {
    title: "Financial Aid Workshop – DECEMBER 25",
    date: "Dec 30, 2025",
  },
  {
    title: "Spring Semester Enrollment Now Open",
    date: "Jan 12, 2026",
  },
  {
    title: "Guest Lecture with Dr. Jonathan Reid",
    date: "Feb 4, 2026",
  },
];

export default function NewsSection() {
  return (
    <div className="bg-[#0B2545] text-white py-6 px-6">
      <div className="bg-[#D4A34A] text-[#0B2545] py-1 rounded-md font-semibold md:hidden w-1/4 px-3">
        NEWS
      </div>
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Allow carousel to shrink and share space */}
        <div className="flex-1 min-w-0 flex gap-2 items-center">
          <div className="bg-[#D4A34A] text-[#0B2545] px-3 py-1 rounded-md font-semibold hidden md:block">
            NEWS
          </div>
          <NewsTickerCarousel items={newsItems} />
        </div>

        {/* Button stays on the right */}
        <button className="hover:text-yellow-400 transition text-sm md:flex items-center gap-1 whitespace-nowrap hidden">
          See All News <span>&rarr;</span>
        </button>
      </div>

      <div className="md:hidden flex justify-center items-center mt-5">
        <button className="hover:text-yellow-400 transition text-sm flex items-center gap-1 whitespace-nowrap">
          See All News <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
