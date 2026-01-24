import { Dot } from "lucide-react";
import { useState, useEffect } from "react";

export interface NewsItem {
  title: string;
  date: string;
}

interface Props {
  items: NewsItem[];
  interval?: number; // default 5 seconds
}

export default function NewsTickerCarousel({ items, interval = 5000 }: Props) {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:gap-3 pt-2">
        {/* News Title */}
        <p className="text-lg font-medium">{items[current].title}</p>

        {/* Date */}
        <span className="text-lg opacity-80 flex gap-1 items-center"><Dot /> {items[current].date}</span>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center md:ml-70 gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`
              transition-all
              ${
                i === current
                  ? "w-6 h-1 bg-yellow-500 pt-2 rounded-full"
                  : "w-2 h-2 bg-gray-400/50 rounded-full"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
