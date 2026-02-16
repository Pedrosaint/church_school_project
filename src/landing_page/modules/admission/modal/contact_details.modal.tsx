import { X } from "lucide-react";
import { useAdmissionContext } from "../context/AdmissionContext";
import { useState } from "react";

interface ContactDetailsModalProps {
  onClose: () => void;
}

export default function ContactDetailsModal({
  onClose,
}: ContactDetailsModalProps) {
  const { formData, updateFormData } = useAdmissionContext();
  const [form, setForm] = useState(formData.contactDetails || {
    presentAddress: "",
    phone: "",
    email: "",
    permanentAddress: "",
    postalAddress: "",
    nationality: "",
    nativeLanguage: "",
    placeDiffNationality: false,
    maritalStatus: "",
    religion: "",
    denomination: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p: any) => ({ ...p, [name]: value }));
  };

  const handleSave = () => {
    updateFormData("contactDetails", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4 text-[#0B2545]">
          <h2 className="text-lg font-semibold">
            Edit Contact & Background Details
          </h2>
          <button onClick={onClose} className="cursor-pointer hover:text-red-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto h-full max-h-[70vh] pr-4 space-y-6">
          {/* Present Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Present Residential Address{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="presentAddress"
              value={form.presentAddress}
              onChange={handleChange}
              placeholder="PRESENT RESIDENTIAL ADDRESS"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
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
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 XXX XXX XXXX"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
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
              value={form.permanentAddress}
              onChange={handleChange}
              placeholder="PERMANENT HOME ADDRESS"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
            />
          </div>

          {/* Postal Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Postal Address
            </label>
            <textarea
              name="postalAddress"
              value={form.postalAddress}
              onChange={handleChange}
              placeholder="POSTAL ADDRESS"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
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
                value={form.nationality}
                onChange={handleChange}
                placeholder="NATIONALITY"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Native Language <span className="text-red-500">*</span>
              </label>
              <input
                name="nativeLanguage"
                value={form.nativeLanguage}
                onChange={handleChange}
                placeholder="NATIVE LANGUAGE"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
              />
            </div>
          </div>

          {/* Place of Birth */}
          <div className="mt-2">
            <label className="block text-sm font-medium mb-2">
              Is Place of Birth Different from Nationality?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="placeDiffNationality"
                  checked={form.placeDiffNationality === true}
                  onChange={() => setForm((p: any) => ({ ...p, placeDiffNationality: true }))}
                  className="custom-radio"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="placeDiffNationality"
                  checked={form.placeDiffNationality === false}
                  onChange={() => setForm((p: any) => ({ ...p, placeDiffNationality: false }))}
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
                  <label key={status} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="maritalStatus"
                      value={status}
                      checked={form.maritalStatus === status}
                      onChange={handleChange}
                      className="custom-radio"
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
                  value={form.religion}
                  onChange={handleChange}
                  placeholder="RELIGION"
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Denomination <span className="text-red-500">*</span>
                </label>
                <input
                  name="denomination"
                  value={form.denomination}
                  onChange={handleChange}
                  placeholder="DENOMINATION"
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#D4A34A]"
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
    </div>
  );
}

