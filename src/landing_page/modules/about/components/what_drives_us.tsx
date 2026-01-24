import { Eye, Heart } from "lucide-react";
import { EclippseIcon } from "../../../../assets/icons/svg_icons";


const WhatDrivesUs = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">What Drives Us</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-inter">
            Our mission, vision, and values inspire everything we do as we
            prepare spiritually grounded, academically sound leaders for kingdom
            service and societal impact.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-100 w-full md:max-w-5xl max-w-7xl h-full">
          <div className="flex flex-col items-start gap-4 mb-2">
            <div className="w-10 h-10 rounded bg-[#D4A34A] flex items-center justify-center">
              <p>
                <EclippseIcon />
              </p>
            </div>
            <h3 className="text-xl font-semibold">Mission</h3>
          </div>

          <ul className="text-sm text-gray-700 space-y-1 mt-2 list-disc pl-5">
            <li>
              Promote and advance knowledge through research and scholarship.
            </li>
            <li>
              Train competent manpower for national development through
              effective teaching.
            </li>
            <li>
              Provide meaningful service to the community through practical
              and systematic approaches.
            </li>
            <li>
              Foster creativity, discipline, self-actualization, patriotism,
              and national consciousness.
            </li>
            <li>
              Develop students’ gifts and potentials while instilling values,
              principles, and cultural awareness.
            </li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-100 max-w-3xl ml-auto h-full">
          <div className="flex flex-col items-start gap-4 mb-2">
            <div className="w-10 h-10 rounded bg-[#D4A34A] flex items-center justify-center">
              <p>
                <Eye color="white" />
              </p>
            </div>
            <h3 className="text-xl font-semibold">Vision</h3>
          </div>

          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            To raise spiritually responsible, academically sound, and morally
            upright end-time diplomats/graduates who remain relevant in both
            sacred and secular contexts, confronting life's challenges with
            God’s wisdom.
          </p>
        </div>

        {/* Core Philosophy & Objective */}
        <div className="bg-white shadow-sm rounded-xl p-8 border border-gray-100 w-full md:max-w-5xl max-w-7xl h-full">
          <div className="flex flex-col items-start gap-4 mb-2">
            <div className="w-10 h-10 rounded bg-[#D4A34A] flex items-center justify-center">
              <p>
                <Heart color="white" />
              </p>
            </div>
            <h3 className="text-xl font-semibold">
              Core Philosophy & Objective
            </h3>
          </div>

          <ul className="text-sm text-gray-700 space-y-1 mt-2 list-disc pl-5">
            <li>
              Pursuing truth through rigorous academic inquiry and research.
            </li>
            <li>
              Developing critical and objective thinking on religious,
              cultural, and philosophical issues.
            </li>
            <li>
              Enhancing the ability to distinguish facts from opinions and
              objective statements from value judgments.
            </li>
            <li>
              Broadening intellectual horizons and promoting openness, mental
              flexibility, and self-actualization.
            </li>
            <li>
              Preparing students to become responsible citizens who serve God
              and their nation.
            </li>
            <li>
              Equipping learners to navigate the complexities of religion in a
              scientific and technological age.
            </li>
            <li>
              Encouraging informed, research-based approaches to religion,
              culture, and society.
            </li>
            <li>
              Embracing modern, flexible, learner-centered curriculum trends.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
