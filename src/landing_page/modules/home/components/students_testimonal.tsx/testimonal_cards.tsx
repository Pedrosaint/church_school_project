import { QuoteIcon } from "../../../../../assets/icons/svg_icons";


interface TestimonyCardProps {
  text: string;
  name: string;
  degree: string;
  image: string;
}

export const TestimonyCard = ({ text, name, degree, image }: TestimonyCardProps) => {
  return (
    <div className="border-2 border-gray-400/30 rounded-2xl p-10 bg-[#0B2545] text-white max-w-3xl mx-auto">
      <div className="text-yellow-500 text-7xl font-serif leading-none mb-6">
        <QuoteIcon />
      </div>
      <p className="text-lg text-gray-100 leading-relaxed mb-8">{text}</p>

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-white text-lg">{name}</p>
          <p className="text-sm text-gray-400">{degree}</p>
        </div>
      </div>
    </div>
  );
};