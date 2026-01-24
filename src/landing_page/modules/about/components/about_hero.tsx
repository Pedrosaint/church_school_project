import { ArrowRight } from "lucide-react";
// import ChurchBuilding from "../../../../assets/images/church.png";
import AboutHeroImg1 from "../../../../assets/images/featured-img-1.jpg";
import AboutHeroImg2 from "../../../../assets/images/featured-img-2.jpg";
import AboutHeroImg3 from "../../../../assets/images/featured-img-3.jpg";
import { CircleIcon } from "../../../../assets/icons/svg_icons";
import { GoArrowDownRight } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";

const AboutHero = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden mt-35">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* LEFT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B2545] leading-tight">
            About Our Seminary
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed w-[90%]">
            Equipping men and women for servant leadership in the church and
            world through rigorous theological education grounded in Scripture,
            shaped by tradition, and responsive to the contemporary challenges
            of ministry.
          </p>

          <button className="bg-[#D4A34A] hover:bg-[#c29344] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-md transition">
            Our Story
            <ArrowRight className="w-5" />
          </button>
        </div>

        {/* RIGHT — EXACT COPY POSITIONING */}
        <div className="flex-1 relative h-[520px]">
          {/* TOP LEFT - LARGE */}
          <div className="absolute top-10 left-0 w-70 h-[290px] rounded-3xl overflow-hidden">
            <img src={AboutHeroImg3} className="w-full h-full object-cover" />
          </div>

          {/* STAR - TOP LEFT */}
          <IoStarSharp className="absolute -left-12 top-72 text-[#D4A34A] w-7 h-7 fill-[#D4A34A]" />

          {/* CIRCLE */}
          <div className="absolute top-2.5 right-73 w-[70px] h-[70px] bg-[#0B2545] rounded-full border-6 border-white flex items-center justify-center z-10">
            <GoArrowDownRight color="white" size={30} />
          </div>

          {/* TOP RIGHT - LARGE */}
          <div className="absolute top-30 right-6 w-70 h-[290px] rounded-3xl overflow-hidden">
            <img src={AboutHeroImg2} className="w-full h-full object-cover" />
          </div>

          {/* BOTTOM LEFT - MEDIUM */}
          <div className="absolute -bottom-12 -left-10 w-100 h-[220px] rounded-3xl overflow-hidden">
            <img src={AboutHeroImg1} className="w-full h-full object-cover" />
          </div>

          {/* CIRCLE - CENTER */}
          <div className="absolute top-83 right-25 -translate-x-1/2 bg-[#D4A34A] rounded-l-full rounded-tr-full w-[210px] h-25 flex items-center justify-center gap-1 px-2 border-16 border-white">
            <CircleIcon />
          </div>

          {/* STAR - BOTTOM RIGHT */}
          <IoStarSharp className="absolute bottom-[50px] right-42 text-[#D4A34A] w-8 h-8 fill-[#D4A34A]" />

          {/* SMALL NAVY CIRCLE - BOTTOM RIGHT */}
          <div className="absolute bottom-2 right-[60px] w-5 h-5 bg-[#0B2545] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
