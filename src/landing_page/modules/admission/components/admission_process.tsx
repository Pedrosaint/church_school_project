import { CheckCircle } from "lucide-react";
import { FileIcon, UploadUp, UserIcon } from "../../../../assets/icons/svg_icons";

const steps = [
  {
    icon: <FileIcon fill="#D4A34A" width={30} height={30} />,
    title: "Fill Application Form",
    text: "Complete the online application with your personal, academic, and program information.",
  },
  {
    icon: <UploadUp width={30} height={30} />,
    title: "Submit Required Document",
    text: "Upload certificates, transcripts, ID, and pastoral recommendation letters.",
  },
  {
    icon: <UserIcon />,
    title: "Screening / Interview",
    text: "Participate in our admission screening process and interview with faculty.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#D4A34A]" />,
    title: "Admission Decision & Acceptance",
    text: "Receive your admission decision and confirm your acceptance to begin your journey.",
  },
];

export const AdmissionProcess = () => {
  return (
    <section className="py-20 px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-[#0B2545] mb-3">
          Admission Process
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg font-inter">
          Follow these simple steps to complete your application and join our
          community of scholars
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 relative"
          >
            <div className="absolute -top-6 -left-3 font-inter w-12 h-12 bg-[#0B2545] text-[#D4A34A] rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <div className="w-16 h-16 flex items-center justify-center rounded-md bg-[#D4A34A21] mx-auto mb-4">
              {step.icon}
            </div>

            <h3 className="font-semibold text-center text-[#0B2545] text-lg mb-2">
              {step.title}
            </h3>

            <p className="text-gray-500 text-sm text-center leading-relaxed">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionProcess;
