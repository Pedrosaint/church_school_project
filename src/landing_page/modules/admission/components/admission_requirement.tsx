import { GraduationCap } from "lucide-react";
import { BookIcon, CertIcon } from "../../../../assets/icons/svg_icons";

export const AdmissionRequirement = () => {
  return (
    <section className="py-20 px-4 bg-[#F6F7F9]">
      <div className="text-center mb-14 ">
        <h2 className="text-4xl font-bold text-[#0B2545] mb-3">
          Admission Requirement
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto text-lg font-inter">
          Clear and straightforward requirements for each program level
        </p>
      </div>

      <div className="grid gtid-cols-1 md:grid-cols-3 gap-6 container mx-auto font-inter">
        {/* Undergraduate */}
        <div className="bg-[#F6F7F9] rounded-2xl border border-[#E6E9EE] shadow-sm p-8">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0A2240] mb-4">
            <GraduationCap className="w-10 h-10 text-[#D4A34A]" />
          </div>
          <h3 className="font-semibold text-lg text-[#0B2545] mb-4">
            Undergraduate Program
          </h3>

          <ul className="text-gray-700 text-sm space-y-2 list-disc pl-5">
            <li>SSCE/GCE O’Level with 5 credits including English</li>
            <li>Valid identification document</li>
            <li>Pastoral recommendation letter</li>
            <li>Completed application form</li>
            <li>Application fee payment</li>
          </ul>
        </div>

        {/* Masters */}
        <div className="bg-[#F6F7F9] rounded-2xl border border-[#E6E9EE] shadow-sm p-8 font-inter">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0A2240] mb-4">
            <BookIcon />
          </div>
          <h3 className="font-semibold text-lg text-[#0B2545] mb-4">
            Masters Program
          </h3>

          <ul className="text-gray-700 text-sm space-y-2 list-disc pl-5">
            <li>Bachelor's degree in related field</li>
            <li>Official academic transcripts</li>
            <li>Two academic/pastoral reference letters</li>
            <li>Statement of purpose</li>
            <li>Minimum CGPA of 2.5 or equivalent</li>
            <li>Application fee payment</li>
          </ul>
        </div>

        {/* Certificate */}
        <div className="bg-[#F6F7F9] rounded-2xl border border-[#E6E9EE] shadow-sm p-8 font-inter">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0A2240] mb-4">
            <CertIcon />
          </div>
          <h3 className="font-semibold text-lg text-[#0B2545] mb-4">
            Certificate Program
          </h3>

          <ul className="text-gray-700 text-sm space-y-2 list-disc pl-5">
            <li>Basic literacy and educational background</li>
            <li>Pastoral endorsement (recommended)</li>
            <li>Valid identification document</li>
            <li>Ministry experience (preferred)</li>
            <li>Completed application form</li>
            <li>Application fee payment</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdmissionRequirement;
