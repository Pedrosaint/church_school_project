interface ProgramCardProps {
  title: string;
  desc: string;
  subTitle: string;
  image: string;
}

export const LeadershipTeamCard = ({
  title,
  desc,
  subTitle,
  image,
}: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        {/* Blurred background image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-40"
        />

        {/* Sharp foreground image */}
        <img
          src={image}
          alt={title}
          className="relative z-10 w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-[#f7f7fb] h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

        <div className="flex flex-col">
          <span className="text-[#D4A34A] text-lg">{subTitle}</span>
          <p className="text-[#0B2545] text-lg leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};
