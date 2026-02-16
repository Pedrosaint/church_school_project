import { useState } from "react";
import { X } from "lucide-react";
import { useAdmissionContext } from "../context/AdmissionContext";

interface Institution {
  institution: string;
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
  const { formData, updateFormData } = useAdmissionContext();
  const [eduData, setEduData] = useState(formData.education || {
    institutions: [{ institution: "", from: "", to: "", qualification: "" }],
    certificates: [] as File[],
    description: "",
  });

  const addInstitution = () => {
    setEduData((prev: any) => ({
      ...prev,
      institutions: [
        ...prev.institutions,
        { institution: "", from: "", to: "", qualification: "" },
      ],
    }));
  };

  const removeInstitution = (index: number) => {
    setEduData((prev: any) => ({
      ...prev,
      institutions: prev.institutions.filter((_: any, i: number) => i !== index),
    }));
  };

  const handleInstitutionChange = (
    index: number,
    field: keyof Institution,
    value: string
  ) => {
    setEduData((prev: any) => ({
      ...prev,
      institutions: prev.institutions.map((inst: any, i: number) =>
        i === index ? { ...inst, [field]: value } : inst
      ),
    }));
  };

  const handleSave = () => {
    updateFormData("education", eduData);
    onClose();
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
        <div className="flex justify-between items-center mb-4 text-[#0B2545]">
          <h2 className="text-lg font-semibold">
            Edit Education Qualification
          </h2>
          <button onClick={onClose} className="cursor-pointer hover:text-red-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-8">
          {/* ================= EDUCATIONAL QUALIFICATIONS ================= */}
          <div className="border border-gray-300 rounded-lg p-6">
            {eduData.institutions.map((inst: any, index: number) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-5 mb-6 relative"
              >
                {eduData.institutions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInstitution(index)}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                  >
                    <X size={18} />
                  </button>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Institution Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={inst.institution}
                    placeholder="INSTITUTION NAME"
                    onChange={(e) =>
                      handleInstitutionChange(
                        index,
                        "institution",
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:border-[#D4A34A] outline-none"
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
                      className="border border-gray-300 px-3 py-2 rounded-md w-full focus:border-[#D4A34A] outline-none"
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
                      className="border border-gray-300 px-3 py-2 rounded-md w-full focus:border-[#D4A34A] outline-none"
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
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:border-[#D4A34A] outline-none"
                    placeholder="Qualification Obtained"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={addInstitution}
              className="bg-[#0B2545] text-white px-4 py-2 rounded-md cursor-pointer text-sm hover:opacity-90 transition-opacity"
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
                multiple
                accept=".pdf,.jpg,.png"
                onChange={(e) => {
                  const files = e.target.files ? Array.from(e.target.files) : [];
                  setEduData((p: any) => ({ ...p, certificates: files }));
                }}
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
              />
              {eduData.certificates.length > 0 && (
                <div className="mt-2 text-sm text-gray-600">
                  {eduData.certificates.length} file(s) selected
                </div>
              )}
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
                value={eduData.description}
                onChange={(e) => setEduData((p: any) => ({ ...p, description: e.target.value }))}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:border-[#D4A34A] outline-none"
                placeholder="Certificate description (optional)"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-6 w-full bg-[#D4A34A] text-[#0B2545] p-3 rounded-lg font-bold font-inter cursor-pointer hover:bg-[#C09340] transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

