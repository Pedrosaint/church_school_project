/* eslint-disable react-hooks/set-state-in-effect */
import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useAdmissionContext } from "../../context/AdmissionContext";

interface Props {
  goToNext: () => void;
  goToPrev: () => void;
}

const inputBase =
  "w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 " +
  "focus:outline-none focus:ring-1 focus:ring-[#D4A34A] focus:border-[#D4A34A]";

const FinancialReference = ({ goToNext, goToPrev }: Props) => {
  const { updateFormData, getFormData } = useAdmissionContext();
  const [formState, setFormState] = useState({
    financeInfo: "",
    healthInfo: "",
    academicReferee: "",
    academicProfession: "",
    academicInstitution: "",
    academicAddress: "",
    academicPhone: "",
    academicEmail: "",
    clergyReferee: "",
    clergyPosition: "",
    clergyChurch: "",
    clergyAddress: "",
    clergyPhone: "",
    clergyEmail: "",
    applicantSignature: "",
    applicantDate: "",
  });

  useEffect(() => {
    const data = getFormData();
    if (data.financialReference) {
      setFormState(data.financialReference);
    }
  }, []);

  const handleNext = () => {
    updateFormData("financialReference", formState);
    goToNext();
  };

  const handlePrev = () => {
    updateFormData("financialReference", formState);
    goToPrev();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-8 px-4 space-y-8 font-inter">
      {/* ================= FINANCIAL & HEALTH ================= */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-6">
        <h2 className="font-semibold text-[#0B2545]">
          Financial and Health Information
        </h2>

        {/* Financing */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            How do you intend to finance your studies?{" "}
            <span className="text-red-500">*</span>
          </p>

          <div className="space-y-2">
            {[
              "Self-sponsored",
              "Church-sponsored",
              "Scholarship",
              "Other (specify)",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-3 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="financing"
                  value={item}
                  checked={formState.financeInfo === item}
                  onChange={(e) =>
                    handleInputChange("financeInfo", e.target.value)
                  }
                  className="custom-radio"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Health Condition */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-semibold text-[#0B2545] mb-2">
            Special Needs / Health Condition
          </h3>

          <p className="text-sm font-medium text-gray-700 mb-3">
            Do you have any special needs or health condition?{" "}
            <span className="text-red-500">*</span>
          </p>

          <div className="flex gap-6">
            {["Yes", "No"].map((val) => (
              <label
                key={val}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="health"
                  value={val}
                  checked={formState.healthInfo === val}
                  onChange={(e) =>
                    handleInputChange("healthInfo", e.target.value)
                  }
                  className="custom-radio"
                />
                {val}
              </label>
            ))}
          </div>

          <div className="mt-4 bg-amber-50 border border-amber-200 text-amber-800 text-sm px-4 py-2 rounded">
            Note: This form is valid for one academic year only.
          </div>
        </div>
      </div>

      {/* ================= REFEREES ================= */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-8">
        <h2 className="font-semibold text-[#0B2545]">Referees</h2>
        <p className="text-sm text-gray-600">
          Please provide details of two referees (one academic and one clergy).
        </p>

        {/* Academic Referee */}
        <div className="space-y-4 border border-gray-200 p-4 rounded-lg">
          <h3 className="font-medium text-gray-800">1. Academic Referee</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                className={inputBase}
                placeholder="Enter full name"
                value={formState.academicReferee}
                onChange={(e) =>
                  handleInputChange("academicReferee", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Profession <span className="text-red-500">*</span>
              </label>
              <input
                className={inputBase}
                placeholder="e.g Lecturer"
                value={formState.academicProfession}
                onChange={(e) =>
                  handleInputChange("academicProfession", e.target.value)
                }
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution / Organization{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                className={inputBase}
                placeholder="Enter institution or organization"
                value={formState.academicInstitution}
                onChange={(e) =>
                  handleInputChange("academicInstitution", e.target.value)
                }
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                className={`${inputBase} resize-none`}
                placeholder="Enter full address"
                value={formState.academicAddress}
                onChange={(e) =>
                  handleInputChange("academicAddress", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={11}
                placeholder="08012345678"
                className={inputBase}
                value={formState.academicPhone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  handleInputChange("academicPhone", val);
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                className={inputBase}
                placeholder="example@email.com"
                value={formState.academicEmail}
                onChange={(e) =>
                  handleInputChange("academicEmail", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        {/* Clergy Referee */}
        <div className="space-y-4 border border-gray-200 p-4 rounded-lg">
          <h3 className="font-medium text-gray-800">2. Clergy Referee</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                className={inputBase}
                placeholder="Enter full name"
                value={formState.clergyReferee}
                onChange={(e) =>
                  handleInputChange("clergyReferee", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position <span className="text-red-500">*</span>
              </label>
              <input
                className={inputBase}
                placeholder="e.g Pastor"
                value={formState.clergyPosition}
                onChange={(e) =>
                  handleInputChange("clergyPosition", e.target.value)
                }
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Church / Ministry <span className="text-red-500">*</span>
              </label>
              <input
                className={inputBase}
                placeholder="Enter church or ministry name"
                value={formState.clergyChurch}
                onChange={(e) =>
                  handleInputChange("clergyChurch", e.target.value)
                }
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                className={`${inputBase} resize-none`}
                placeholder="Enter full address"
                value={formState.clergyAddress}
                onChange={(e) =>
                  handleInputChange("clergyAddress", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={11}
                placeholder="08012345678"
                className={inputBase}
                value={formState.clergyPhone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  handleInputChange("clergyPhone", val);
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                className={inputBase}
                placeholder="example@email.com"
                value={formState.clergyEmail}
                onChange={(e) => handleInputChange("clergyEmail", e.target.value)}
              />
            </div>
          </div>
        </div>

      </div>

      {/* ================= DECLARATION ================= */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
        <h2 className="font-semibold text-[#0B2545]">Declaration</h2>

        <div className="bg-blue-50 border border-blue-200 text-xs text-blue-900 p-4 rounded leading-relaxed">
          I, the undersigned, hereby declare that all information provided above
          is true and accurate to the best of my knowledge.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Applicant’s Signature <span className="text-red-500">*</span>
            </label>
            <input
              className={`italic ${inputBase}`}
              placeholder="Enter full name"
              value={formState.applicantSignature}
              onChange={(e) =>
                handleInputChange("applicantSignature", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className={inputBase}
              value={formState.applicantDate}
              onChange={(e) =>
                handleInputChange("applicantDate", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* ================= ACTION BUTTONS ================= */}
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
          onClick={() => updateFormData("financialReference", formState)}
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
  );
};

export default FinancialReference;
