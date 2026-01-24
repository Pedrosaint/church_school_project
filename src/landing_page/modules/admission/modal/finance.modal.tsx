import { X } from "lucide-react";
import { useState } from "react";

const inputBase =
  "w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 " +
  "focus:outline-none focus:ring-1 focus:ring-[#D4A34A] focus:border-[#D4A34A]";

interface AdmissionReferenceModalProps {
  onClose: () => void;
}

export default function AdmissionReferenceModal({ onClose }: AdmissionReferenceModalProps) {
    const [financing, setFinancing] = useState("");
    const [hasHealthCondition, setHasHealthCondition] = useState<string | null>(
      null
    );
    
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Finance & Referees</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>


          {/* ================= FINANCIAL & HEALTH ================= */}
          <div className="bg-white border border-gray-300 rounded-lg mb-4 p-6 space-y-6">
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
                      checked={financing === item}
                      onChange={(e) => setFinancing(e.target.value)}
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
                      checked={hasHealthCondition === val}
                      onChange={() => setHasHealthCondition(val)}
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
          <div className="bg-white border border-gray-300 rounded-lg mb-4 p-6 space-y-8">
            <h2 className="font-semibold text-[#0B2545]">Referees</h2>
            <p className="text-sm text-gray-600">
              Please provide details of two referees (one academic and one
              clergy).
            </p>

            {/* Academic Referee */}
            <div className="space-y-4 border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">1. Academic Referee</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input className={inputBase} placeholder="Enter full name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profession <span className="text-red-500">*</span>
                  </label>
                  <input className={inputBase} placeholder="e.g Lecturer" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Institution / Organization{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputBase}
                    placeholder="Enter institution or organization"
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
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
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
                  <input className={inputBase} placeholder="Enter full name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position <span className="text-red-500">*</span>
                  </label>
                  <input className={inputBase} placeholder="e.g Pastor" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Church / Ministry <span className="text-red-500">*</span>
                  </label>
                  <input
                    className={inputBase}
                    placeholder="Enter church or ministry name"
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
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
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
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= DECLARATION ================= */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
            <h2 className="font-semibold text-[#0B2545]">Declaration</h2>

            <div className="bg-blue-50 border border-blue-200 text-xs text-blue-900 p-4 rounded leading-relaxed">
              I, the undersigned, hereby declare that all information provided
              above is true and accurate to the best of my knowledge.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Applicant’s Signature <span className="text-red-500">*</span>
                </label>
                <input
                  className={`italic ${inputBase}`}
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className={inputBase}
                />
              </div>
            </div>
          </div>

        <button className="mt-4 w-full bg-[#D4A34A] text-white p-2 rounded-lg font-inter">
          Save Changes
        </button>
      </div>
    </div>
  );
}
