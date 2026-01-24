import { useState, useEffect } from "react";
import { TestimonyCard } from "./testimonal_cards";

export const StudentTestimonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonies = [
    {
      text: "The faculty here poured into my life and helped me discover God's calling. The theological depth combined with practical ministry experience prepared me to serve with confidence and humility.",
      name: "Sarah Mitchell",
      degree: "M.Div Graduate '24",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      text: "The community at this institution has been transformative. The blend of academic rigor and spiritual formation has equipped me for meaningful ministry.",
      name: "James Rodriguez",
      degree: "M.A. Theology '23",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    },
    {
      text: "I came seeking knowledge and found a calling. The professors mentor with wisdom and the curriculum challenged me to grow in faith and understanding.",
      name: "Rachel Kim",
      degree: "B.A. Biblical Studies '25",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonies.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [testimonies.length]);

  return (
    <section className="py-20 bg-[#0B2545] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Student Testimonies
          </h2>
          <p className="text-gray-400">
            Hear from our students about their transformational experiences
          </p>
        </div>

        <div className="mb-8">
          <TestimonyCard {...testimonies[currentIndex]} />
        </div>

        <div className="flex justify-center items-center gap-2">
          {testimonies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-12 bg-yellow-500"
                  : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonies;
