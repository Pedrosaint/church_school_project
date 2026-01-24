import { useState } from "react";
import { X } from "lucide-react";

interface Institution {
  institutionName: string;
  from: string;
  to: string;
  qualification: string;
}

interface EducationQualificationModalProps {
  onClose: () => void;
}

export default function EducationQualificationModal({
  onClose,
}: EducationQualificationModalProps) {
  const [institutions, setInstitutions] = useState<Institution[]>([
    { institutionName: "", from: "", to: "", qualification: "" },
  ]);

  const [, setCertificates] = useState<File | null>(null);
  const [certificateDescription, setCertificateDescription] = useState("");


  const addInstitution = () => {
    setInstitutions((prev) => [
      ...prev,
      { institutionName: "", from: "", to: "", qualification: "" },
    ]);
  };

  const removeInstitution = (index: number) => {
    setInstitutions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleInstitutionChange = (
    index: number,
    field: keyof Institution,
    value: string
  ) => {
    setInstitutions((prev) =>
      prev.map((inst, i) => (i === index ? { ...inst, [field]: value } : inst))
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Edit Education Qualification
          </h2>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-8">
          {/* ================= EDUCATIONAL QUALIFICATIONS ================= */}
          <div className="border border-gray-300 rounded-lg p-6">
            {institutions.map((inst, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-5 mb-6 relative"
              >
                {institutions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInstitution(index)}
                    className="absolute top-4 right-4 text-red-500"
                  >
                    <X size={18} />
                  </button>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Institution Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={inst.institutionName}
                    placeholder="INSTITUTION NAME"
                    onChange={(e) =>
                      handleInstitutionChange(
                        index,
                        "institutionName",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                  />
                </div>

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
                      className="border border-gray-300 px-3 py-2 rounded-md w-full"
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
                      className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qualification / Certificate Obtained{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={inst.qualification}
                    onChange={(e) =>
                      handleInstitutionChange(
                        index,
                        "qualification",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                    placeholder="Qualification Obtained"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={addInstitution}
              className="bg-[#0B2545] text-white px-4 py-2 rounded-md cursor-pointer text-sm hover:opacity-90"
            >
              + Add Another Institution
            </button>
          </div>

          {/* ================= CERTIFICATES ================= */}
          <div className="border border-gray-300 rounded-lg p-6">
            <div>
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
              <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">
                Description (optional)
              </label>
              <textarea
                rows={4}
                value={certificateDescription}
                onChange={(e) => setCertificateDescription(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
                placeholder="Certificate description (optional)"
              />
            </div>
          </div>
        </div>

        <button className="mt-6 w-full bg-[#D4A34A] text-white py-2 rounded-lg">
          Save Documents
        </button>
      </div>
    </div>
  );
}
