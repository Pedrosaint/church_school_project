
const AboutUs = () => {
  const timelineEvents = [
    {
      year: "1991",
      title: "",
      description:
        "WAGGOM Theological Seminary was founded on July 4 as a non-denominational, gender-friendly institution committed to producing capable men and women equipped to meet the spiritual, moral, social, and economic needs of society.",
    },
    {
      year: "2012",
      title: "",
      description:
        "The seminary relocated to its serene permanent campus at 3-5 WAGGOM Avenue, Osisioma, marking a new phase of structural expansion, academic stability, and institutional growth.",
    },
    {
      year: "",
      title: "Affiliate With University of Calabar",
      description:
        "WAGGOM Theological Seminary secured official affiliation with the University of Calabar an affiliation recognized and approved by the National Universities Commission (NUC), Nigeria. This milestone granted the institution full accreditation to run degree programs in Religious and Cultural Studies and other related disciplines.",
    },
    {
      year: "Today",
      title: "",
      description:
        "The Seminary continues to train, equip, and deploy ministers across diverse spheres of service. The accomplishments of its graduates remain a testament to WAGGOM's excellence, effectiveness, and professionalism.",
    },
  ];

  return (
    <section className="bg-[#F6F7F9] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 text-lg font-inter">
            A legacy of spiritual formation, academic growth, and dedicated
            ministry since 1991
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Vertical Line */}
              {index !== timelineEvents.length - 0 && (
                <div className="absolute left-[11px] md:left-[19px] top-8 bottom-0 w-0.5 bg-[#D4A34A]"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-2 top-0 w-6 h-6 bg-[#D4A34A] rounded-full border-4 border-white shadow-md"></div>

              {/* Content */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                {/* Year/Title */}
                <h3 className="text-xl font-bold mb-3">
                  {event.title ? (
                    <span className="text-[#D4A34A]">{event.title}</span>
                  ) : (
                    <span className="text-[#D4A34A]">{event.year}</span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
