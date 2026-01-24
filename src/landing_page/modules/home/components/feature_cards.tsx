import { GraduationCap, BookOpen, User, Heart } from "lucide-react";

const items = [
  {
    icon: (
      <GraduationCap
        size={38}
        className="text-[#D4A34A] bg-[#F4E0E1] rounded-md p-3"
      />
    ),
    title: "Admission",
    desc: "Start your journey with us",
  },
  {
    icon: (
      <BookOpen size={38} className="text-[#0B2545] bg-[#E6E9EE] rounded-md p-3" />
    ),
    title: "Academics",
    desc: "Explore our programs",
  },
  {
    icon: (
      <User size={38} className="text-[#D4A34A] bg-[#F4E0E1] rounded-md p-3" />
    ),
    title: "Student portal",
    desc: "Access your resources",
  },
  {
    icon: <Heart size={38} className="text-[#0B2545] bg-[#E6E9EE] rounded-md p-3" />,
    title: "Online giving",
    desc: "Support our mission",
  },
];

export default function FeatureCards() {
  return (
    <div className="py-16 bg-[#f7f7fb]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
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
