import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { useState } from "react";
import { useAdmissionContext } from "../../context/AdmissionContext";

interface GuardianInfoProps {
  goToNext: () => void;
  goToPrev: () => void;
}

const ParentGuardianForm = ({ goToNext, goToPrev }: GuardianInfoProps) => {
  const { updateFormData, getFormData } = useAdmissionContext();
  const [formData, setFormData] = useState(() => {
    const saved = getFormData();
    const g = saved?.guardianInfo ?? {};
    return {
      parentGuardian: g.parentGuardian ?? "",
      emergencyContact: g.emergencyContact ?? "",
      emergencyPhone: g.emergencyPhone ?? "",
      nextOfKin: g.nextOfKin ?? "",
      nextOfKinPhone: g.nextOfKinPhone ?? "",
    } as const;
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    updateFormData("guardianInfo", formData);
    goToNext();
  };

  const handlePrev = () => {
    updateFormData("guardianInfo", formData);
    goToPrev();
  };

  return (
    <div className="py-8">
      <div className="border border-gray-200 rounded-xl p-5 md:p-8 bg-white">
        {/* ================= PARENT / GUARDIAN ================= */}
        <section className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">
            Parent / Guardian / Next of Kin Information
          </h3>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name and Address of Parent/Guardian{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="parentGuardian"
            value={formData.parentGuardian}
            onChange={handleChange}
            placeholder="NAME AND FULL ADDRESS"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
          />
        </section>

        {/* ================= EMERGENCY CONTACT ================= */}
        <section className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">
            Emergency Contact
          </h3>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name and Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            placeholder="NAME AND FULL ADDRESS"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleChange}
            placeholder="+234 XXX XXX XXXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
          />
        </section>

        {/* ================= NEXT OF KIN ================= */}
        <section className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Next of Kin</h3>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name and Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="nextOfKin"
            value={formData.nextOfKin}
            onChange={handleChange}
            placeholder="NAME AND FULL ADDRESS"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="nextOfKinPhone"
            value={formData.nextOfKinPhone}
            onChange={handleChange}
            placeholder="+234 XXX XXX XXXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
          />
        </section>

        {/* ================= BUTTONS ================= */}
        <div
          className="mt-8 flex flex-col gap-4
             sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Previous */}
          <button
            onClick={handlePrev}
            className="flex items-center justify-center gap-2
               w-full sm:w-auto
               px-5 py-2 border border-gray-300
               rounded-lg text-sm"
          >
            <ArrowLeft /> Previous
          </button>

          {/* Save */}
          <button
            onClick={() => updateFormData("guardianInfo", formData)}
            className="flex items-center justify-center gap-2
               w-full sm:w-auto
               px-5 py-2 border border-[#0B2545]
               text-[#0B2545] rounded-lg text-sm"
          >
            <Save size={16} />
            <span>Save & Continue Later</span>
          </button>

          {/* Next */}
          <button
            onClick={handleNext}
            className="w-full sm:w-auto
               bg-[#D4A34A] px-6 py-3
               rounded-xl text-[#0B2545]
               font-semibold flex items-center justify-center"
          >
            Next <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParentGuardianForm;
