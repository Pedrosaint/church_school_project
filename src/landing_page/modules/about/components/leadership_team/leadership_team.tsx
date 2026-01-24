import { LeadershipTeamCard } from "./leadership_cards";
import ProfUdoImage from "../../../../../assets/images/Prof-udo.png";




export const LeadershipTeam = () => {
  const data = [
    {
      title: "The Most Rev. Isaac Chijioke Nwaobia, Ph.D., JP, FCBA",
      desc: "Provides overall governance, policy direction, and spiritual oversight for the Seminary",
      subTitle: "Chairman, Governing Board ",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
    },
    {
      title: "Ven. Prof. Udo E. Obioma",
      desc: "Leads institutional vision, administration, and strategic development.",
      subTitle: "President ",
      image: ProfUdoImage,
    },
    {
      title: "Dr. (Mrs.) Glory C. Obioma",
      desc: "Oversees academic programs, faculty coordination, and quality assurance.",
      subTitle: "Provost",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    },
  ];

  return (
    <section className="py-1 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 pt-5 mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-inter">
            Dedicated leaders committed to academic excellence, spiritual
            formation, and the advancement of WAGGOM’s mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {data.map((item, index) => (
            <LeadershipTeamCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
