import { X } from "lucide-react";

interface ContactDetailsModalProps {
  onClose: () => void;
}

export default function ContactDetailsModal({
  onClose,
}: ContactDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Edit Contact & Background Details
          </h2>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>


        <div className="overflow-y-auto h-full max-h-[700px]">
          {/* Present Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Present Residential Address{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="presentAddress"
              placeholder="PRESENT RESIDENTIAL ADDRESS"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                placeholder="+234 XXX XXX XXXX"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none"
              />
            </div>
          </div>

          {/* Permanent Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Permanent Home Address (No P.O. Box){" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="permanentAddress"
              placeholder="PERMANENT HOME ADDRESS"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none"
            />
          </div>

          {/* Postal Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Postal Address
            </label>
            <textarea
              name="postalAddress"
              placeholder="POSTAL ADDRESS"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none"
            />
          </div>

          {/* Nationality & Language */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Nationality <span className="text-red-500">*</span>
              </label>
              <input
                name="nationality"
                placeholder="NATIONALITY"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Native Language <span className="text-red-500">*</span>
              </label>
              <input
                name="nativeLanguage"
                placeholder="NATIVE LANGUAGE"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none"
              />
            </div>
          </div>

          {/* Place of Birth */}
          <div className="mt-2">
            <label className="block text-sm font-medium mb-2">
              Is Place of Birth Different from Nationality?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="placeOfBirthDiff"
                  value="Yes"
                  className="custom-radio"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="placeOfBirthDiff"
                  value="No"
                  className="custom-radio"
                />
                No
              </label>
            </div>
          </div>

          <div className="flex justify-between items-start gap-6 mt-2">
            {/* Marital Status */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">
                Marital Status <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 gap-4 text-sm">
                {["Single", "Married", "Widowed", "Divorced"].map((status) => (
                  <label key={status} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="maritalStatus"
                      value={status}
                      className="custom-radio "
                    />
                    {status}
                  </label>
                ))}
              </div>
            </div>

            {/* Religion & Denomination */}
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Religion <span className="text-red-500">*</span>
                </label>
                <input
                  name="religion"
                  placeholder="RELIGION"
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Denomination <span className="text-red-500">*</span>
                </label>
                <input
                  name="denomination"
                  placeholder="DENOMINATION"
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none"
                />
              </div>
            </div>
          </div>
          <button className="mt-6 w-full bg-[#D4A34A] text-white p-2 rounded-lg font-inter cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
