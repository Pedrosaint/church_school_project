import { ProgramCard } from "./program_cards";
import FeaturedImg1 from "../../../../../assets/images/featured-img-1.jpg";
import FeaturedImg2 from "../../../../../assets/images/featured-img-2.jpg";
import FeaturedImg3 from "../../../../../assets/images/featured-img-3.jpg";

export const FeaturedPrograms = () => {
  const data = [
    {
      title: "Bachelor of Art in Religious & Cultural Studies",
      desc: "Focus: Socio-Cultural Studies, Social-Psychological Studies, Christian Studies, Islamic Studies.....",
      duration: "4 Years",
      mode: "On-Campus",
      image: FeaturedImg3,
    },
    {
      title: "Short & Specialised Ministry Program",
      desc: "Pastoral leadership, counseling, marriage enrichment, women’s empowerment, and Christian education.....",
      duration: "1-2 Years",
      mode: "On-Campus",
      image: FeaturedImg2,
    },
    {
      title: "Master’s Degree Program",
      desc: "Concentrations: Biblical Studies (Old/New Testament), Theology, Missions, Christian Education......",
      duration: "2 Years(Full-time)",
      durationTwo: "3-4 Years(Part-time)",
      mode: "On-Campus",
      image: FeaturedImg1,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover programs designed to deepen your faith, sharpen your mind,
            and prepare you for faithful ministry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {data.map((item, index) => (
            <ProgramCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium transition-colors">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
