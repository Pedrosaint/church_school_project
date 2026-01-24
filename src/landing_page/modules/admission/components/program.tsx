import {
  BookIcon,
  CertIcon,
  GraduationCapIcon,
} from "../../../../assets/icons/svg_icons";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCapIcon,
      title: "Undergraduate Program",
      duration: "4 Years",
      durationColor: "text-[#1C82FF] border-[#2785F9] bg-[#2785F91F]",
      mode: "On-Campus & Online",
      modeColor: "text-[#1C82FF] border-[#2785F9] bg-[#2785F91F]",
      tuition: "₦100,000",
      courses: [
        "B.A. Religious & Cultural Studies",
        "B.A. Theology",
        "B.Th. Pastoral Ministry",
      ],
      charges: [
        "Application Fee: ₦5,000",
        "Examination Fee: ₦5,000",
        "Library & ICT Fee: ₦5,000",
        "Hostel Fee (Optional): ₦5,000 / semester",
      ],
    },
    {
      icon: BookIcon,
      title: "Masters Program",
      duration: "2–4 Years",
      durationColor: "text-[#7D167E] border-[#730B88] bg-[#E549FD1F]",
      mode: "On-Campus & Online",
      modeColor: "text-[#7D167E] border-[#730B88] bg-[#E549FD1F]",
      tuition: "₦200,000",
      courses: [
        "M.A. Theology",
        "M.A. Biblical Studies",
        "M.A. Missions & Evangelism",
        "M.A. Christian Education",
        "M.A. Pastoral Counseling",
      ],
      charges: [
        "Application Fee: ₦5,000",
        "Examination Fee: ₦5,000",
        "Library & ICT Fee: ₦5,000",
        "Hostel Fee (Optional): ₦5,000 / semester",
      ],
    },
    {
      icon: CertIcon,
      title: "Certificate Program",
      duration: "1–2 Years",
      durationColor: "text-[#1C9029] border-[#1C9029] bg-[#1C90290A]",
      mode: "Flexible",
      modeColor: "text-[#1C9029] border-[#1C9029] bg-[#1C90290A]",
      tuition: "₦150,000",
      courses: [
        "Certificate in Ministry Leadership",
        "Certificate in Missions & Church Planting",
        "Certificate in Biblical Studies",
        "Certificate in Pastoral Training",
        "Certificate in Christian Counseling",
      ],
      charges: [
        "Application Fee: ₦5,000",
        "Examination Fee: ₦5,000",
        "Library & ICT Fee: ₦5,000",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        {/* Notice Banner */}
        <div className="bg-[#FCAF2314] border-2 border-[#D4A34A] rounded-2xl p-6 mb-16 font-inter text-lg">
          <p className="text-center text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">
              Application Deadline:
            </span>{" "}
            Rolling admissions throughout the year. Early application is
            encouraged. For specific intake dates, please contact the admissions
            office.
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Programs to Choose From
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Select the program that aligns with your calling and educational
            goals
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#F6F7F9] rounded-2xl p-8 border border-[#E6E9EE] hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0A2240]">
                  <program.icon />
                </div>

                {/* Badges */}
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`px-3 py-1.5 rounded-md text-sm font-semibold border font-inter ${program.durationColor}`}
                  >
                    {program.duration}
                  </span>

                  <span
                    className={`px-3 py-1.5 rounded-md text-xs font-medium font-inter border ${program.modeColor}`}
                  >
                    {program.mode}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {program.title}
              </h3>

              {/* Course List */}
              <ul className="space-y-3 list-disc pl-5 text-gray-700">
                {program.courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>

              {/* Tuition */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Tuition Fee
                </h4>
                <p className="text-[#F59E0B] font-semibold text-lg">
                  {program.tuition}
                </p>
              </div>

              {/* Additional Charges */}
              <div className="mt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Additional Charges
                </h4>
                <ul className="space-y-2 list-disc pl-5 text-gray-600">
                  {program.charges.map((charge, idx) => (
                    <li key={idx}>{charge}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
