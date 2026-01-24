import { ArrowLeft, ArrowRight, Save, X } from "lucide-react";
import { useState } from "react";

interface AcademicHistoryProps {
  goToNext: () => void;
  goToPrev: () => void;
}

interface Institution {
  institutionName: string;
  from: string;
  to: string;
  qualification: string;
}

const Education = ({ goToNext, goToPrev }: AcademicHistoryProps) => {
  const [institutions, setInstitutions] = useState<Institution[]>([
    {
      institutionName: "",
      from: "",
      to: "",
      qualification: "",
    },
  ]);

  const [, setCertificates] = useState<File | null>(null);
  const [certificateDescription, setCertificateDescription] = useState("");

  const handleInstitutionChange = (
    index: number,
    field: keyof Institution,
    value: string
  ) => {
    const updated = [...institutions];
    updated[index][field] = value;
    setInstitutions(updated);
  };

  const addInstitution = () => {
    setInstitutions([
      ...institutions,
      {
        institutionName: "",
        from: "",
        to: "",
        qualification: "",
      },
    ]);
  };

  const removeInstitution = (index: number) => {
    setInstitutions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="py-8 px-4 font-inter">
      <div className="space-y-8">
        {/* ================= EDUCATIONAL QUALIFICATIONS ================= */}
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#0B2545] mb-1">
            Educational Qualifications
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Please list all institutions attended, beginning with the most
            recent.
          </p>

          {institutions.map((inst, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-5 mb-6 relative"
            >
              {/* Remove Button */}
              {institutions.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeInstitution(index)}
                  className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  title="Remove institution"
                >
                  <X size={18} />
                </button>
              )}

              <h4 className="font-medium text-gray-800 mb-4">
                Institution {index + 1}
              </h4>

              {/* Institution Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institution Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="INSTITUTION NAME"
                  value={inst.institutionName}
                  onChange={(e) =>
                    handleInstitutionChange(
                      index,
                      "institutionName",
                      e.target.value
                    )
                  }
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm
                             focus:outline-none focus:ring-1 focus:ring-[#D4A34A] focus:border-[#D4A34A]"
                />
              </div>

              {/* Dates */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    From <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={inst.from}
                    onChange={(e) =>
                      handleInstitutionChange(index, "from", e.target.value)
                    }
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm
                               focus:outline-none focus:ring-1 focus:ring-[#D4A34A] focus:border-[#D4A34A]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    To <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={inst.to}
                    onChange={(e) =>
                      handleInstitutionChange(index, "to", e.target.value)
                    }
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm
                               focus:outline-none focus:ring-1 focus:ring-[#D4A34A] focus:border-[#D4A34A]"
                  />
                </div>
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification / Certificate Obtained{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="QUALIFICATION OBTAINED"
                  value={inst.qualification}
                  onChange={(e) =>
                    handleInstitutionChange(
                      index,
                      "qualification",
                      e.target.value
                    )
                  }
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm
                             focus:outline-none focus:ring-1 focus:ring-[#D4A34A] focus:border-[#D4A34A]"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addInstitution}
            className="bg-[#0B2545] text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
          >
            + Add Another Institution
          </button>
        </div>

        {/* ================= PROFESSIONAL CERTIFICATES ================= */}
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#0B2545] mb-4">
            Professional Certificates (if any)
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Certificates
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={(e) => setCertificates(e.target.files?.[0] || null)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload PDF, JPG, or PNG files
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (optional)
            </label>
            <textarea
              rows={4}
              placeholder="DESCRIBE YOUR PROFESSIONAL CERTIFICATES"
              value={certificateDescription}
              onChange={(e) => setCertificateDescription(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm
                         focus:outline-none focus:ring-1 focus:ring-[#D4A34A] focus:border-[#D4A34A]"
            />
          </div>
        </div>
      </div>

      {/* ================= BUTTONS ================= */}
      <div
        className="mt-8 flex flex-col gap-4
             sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Previous */}
        <button
          onClick={goToPrev}
          className="flex items-center justify-center gap-2
               w-full sm:w-auto
               px-5 py-2 border border-gray-300
               rounded-lg text-sm"
        >
          <ArrowLeft /> Previous
        </button>

        {/* Save */}
        <button
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
          onClick={goToNext}
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

export default Education;
