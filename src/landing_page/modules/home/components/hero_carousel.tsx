import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import HeroImage1 from "../../../../assets/images/featured-img-1.jpg";
import HeroImage2 from "../../../../assets/images/featured-img-3.jpg";
import HeroImage3 from "../../../../assets/images/featured-img-2.jpg";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: HeroImage1,
    title1: "Train.",
    title2: "Serve.",
    title3: "Lead.",
    subtitle: "Serve the Church",
    description: "train and raise end-time diplomats",
  },
  {
    id: 2,
    image: HeroImage2,
    title1: "Train.",
    title2: "Serve.",
    title3: "Lead.",
    subtitle: "Serve the Church",
    description: "train and raise end-time diplomats",
  },
  {
    id: 3,
    image: HeroImage3,
    title1: "Train.",
    title2: "Serve.",
    title3: "Lead.",
    subtitle: "Serve the Church",
    description: "train and raise end-time diplomats",
  },
];

export default function HeroCarousel() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleScrollNavigation = (path: string) => {
    const [route, hash] = path.split("#");

    navigate(route);

    setTimeout(() => {
      if (hash) {
        const section = document.getElementById(hash);
        if (!section) return;

        const yOffset = -160;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div className="relative w-full h-screen md:h-[85vh] lg:h-[95vh] xl:h-screen overflow-hidden">
      {/* IMAGE */}
      <img
        src={slides[currentSlide].image}
        alt="hero"
        className="w-full h-full object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B2545E6] to-[#0B254533]"></div>

      {/* CONTROL BAR */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition"
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* DOTS */}
        <div className="flex items-center gap-2 md:gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`transition-all rounded-full ${
                currentSlide === index
                  ? "w-8 md:w-12 h-3 bg-yellow-500"
                  : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition"
        >
          <ChevronRight className="text-white" />
        </button>

        {/* Play button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="hidden md:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md items-center justify-center hover:bg-white/30 transition cursor-pointer scale-100 hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="text-white" />
          ) : (
            <Play className="text-white" />
          )}
        </button>
      </div>

      {/* TEXT CONTENT */}
      <div className="absolute top-1/2 left-4 md:left-10 lg:left-20 -translate-y-1/2 text-white space-y-3 md:space-y-6 max-w-[90%] sm:max-w-[70%] lg:max-w-[45%]">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {slides[currentSlide].title1}{" "}
          <span className="inline-block">{slides[currentSlide].title2}</span>{" "}
          <span className="inline-block">{slides[currentSlide].title3}</span>
        </h1>

        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#D4A34A]">
          {slides[currentSlide].subtitle}
        </h2>

        <p className="text-sm sm:text-lg md:text-xl opacity-90">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() =>
              handleScrollNavigation("/admission#online-application")
            }
            className="bg-[#D4A34A] text-black px-5 py-3 rounded-md font-semibold hover:bg-[#D4A34A]/80 transition text-sm sm:text-base cursor-pointer"
          >
            Apply Now
          </button>

          <button
            onClick={() => navigate("/student/portal/login")}
            className="border border-white px-5 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition text-sm sm:text-base cursor-pointer"
          >
            Visit Student Portal
          </button>
        </div>
      </div>
    </div>
  );
}
