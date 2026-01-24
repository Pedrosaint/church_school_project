import { GraduationCap, ChevronRight } from "lucide-react";
import admissionImage from "../../../../assets/images/admissionImage.png";
import { useNavigate } from "react-router-dom";

const AdmissionHero = () => {
  const navigate = useNavigate();
  const stats = [
    { number: "500+", label: "Students Enrolled" },
    { number: "25+", label: "Programs Offered" },
    { number: "34+", label: "Years of Excellence" },
  ];

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
    <section className="bg-[#0B2545] mt-25 md:mt-9 lg:mt-35 py-15 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#D4A34A] text-[#D4A34A] rounded-full bg-[#FCAF2314]">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold text-sm font-inter">
                Now Accepting Applications
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-lg font-medium text-white leading-relaxed">
              Begin Your Journey at WAGGOM Theological Seminary
            </h2>

            {/* Description */}
            <p className="text-lg font-medium text-white leading-relaxed">
              Apply for Undergraduate, Master's, and Certificate Programs. Equip
              yourself for transformative ministry and servant leadership.
            </p>

            {/* CTA Button */}
            <button 
            onClick={() => handleScrollNavigation("/admission#online-application")}
            className="group flex items-center gap-2 bg-[#D4A34A] border border-[#D4A34A] text-gray-900 p-2 rounded-xl font-bold text-lg transition-all transform hover:scale-105 cursor-pointer">
              <span>Start Application</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Stats */}
            <div className="pt-8 border-t border-gray-200 font-inter">
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-lg text-[#D4A34A] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 ">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image/Form Placeholder */}
          {/* Right Image/Form Placeholder */}
          <div className="relative flex justify-center lg:justify-end w-full">
            {/* Top Dot */}
            <div className="absolute -top-3 left-3 w-2 h-2 sm:w-3 sm:h-3 bg-[#D4A34A] rounded-full" />

            <svg
              className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] 
               h-auto"
              viewBox="0 0 550 330"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="clip">
                  {/* 1 */}
                  <rect
                    x="20"
                    y="46"
                    width="230"
                    height="70"
                    rx="35"
                    transform="rotate(-25 120 20)"
                  />

                  {/* 2 */}
                  <rect
                    x="-5"
                    y="130"
                    width="440"
                    height="75"
                    rx="38"
                    transform="rotate(-26 125 100)"
                  />

                  {/* 3 */}
                  <rect
                    x="80"
                    y="223"
                    width="340"
                    height="75"
                    rx="38"
                    transform="rotate(-26 120 185)"
                  />

                  {/* 4 */}
                  <rect
                    x="190"
                    y="315"
                    width="220"
                    height="70"
                    rx="35"
                    transform="rotate(-26 120 270)"
                  />
                </clipPath>
              </defs>

              <image
                href={admissionImage}
                x="0"
                y="0"
                width="550"
                height="400"
                clipPath="url(#clip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>

            {/* Bottom Dot */}
            <div className="absolute bottom-2 right-5 w-2 h-2 sm:w-3 sm:h-3 bg-[#D4A34A] rounded-full" />
          </div>
        </div>
      </div>
      {/* 
      <div className="h-[400px] w-[500px] relative">
        <img src={admissionImage} className="h-[400px] w-[500px] absolute" />
        <div className="h-20 w-[300px] rounded-full absolute top-24 rotate-150 border border-b-gray-950 bg-transparent" />
        <div className="h-20 w-[500px] rounded-full absolute top-36 rotate-150 border border-b-gray-950 bg-transparent" />
        <div className="h-20 w-[250px] rounded-full absolute top-52 right-10 rotate-150 border border-b-gray-950 bg-transparent" />
      </div> */}
    </section>
  );
};

export default AdmissionHero;
