import { GraduationCap } from "lucide-react";
import { BookIcon, UserIcon, WorldIcon } from "../../../../assets/icons/svg_icons";

const items = [
  {
    icon: (
      <GraduationCap
        size={40}
        className="text-[#D4A34A] bg-[#F4E0E1] rounded-md p-2"
      />
    ),
    title: "University Affiliation",
    desc: "WAGGOM Theological Seminary is an approved affiliate of the University of Calabar, with all programs recognized by the NUC",
  },
  {
    icon: (
      <BookIcon
        width={45}
        height={35}
        fill="#0B2545"
        className="bg-[#E6E9EE] rounded-md p-2"
      />
    ),
    title: "Academics Oversight",
    desc: "Our academic standards are guided by the Chancellor/President, Governing Board, and Academic Council to ensure excellence and integrity.",
  },
  {
    icon: (
      <UserIcon
        width={45}
        height={35}
        className="bg-[#F4E0E1] rounded-md p-2"
      />
    ),
    title: "Institutional Partnership",
    desc: "WATHS partners with ministries, churches, and educational institutions to support training, conferences, and community development.",
  },
  {
    icon: (
      <WorldIcon
        width={45}
        height={35}
        className="bg-[#E6E9EE] rounded-md p-2"
      />
    ),
    title: "Mission & Ministerial Network",
    desc: "Through Dr. Glory Udo-Obioma’s ministry platforms, the seminary maintains strong mission and leadership networks that enrich student training and outreach.",
  },
];

export default function AccreditationCards() {
  return (
    <div className="py-16 bg-[#f7f7fb]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Accreditation & Partnership</h2>
        <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto">
          Strengthened by reputable academic recognition and strong
          institutional partnership
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="flex mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
