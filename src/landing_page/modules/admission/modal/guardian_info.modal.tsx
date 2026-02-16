import { X } from "lucide-react";
import { useState } from "react";
import { useAdmissionContext } from "../context/AdmissionContext";

interface GuardianInfoModalProps {
  onClose: () => void;
}

export default function GuardianInfoModal({ onClose }: GuardianInfoModalProps) {
  const { formData, updateFormData } = useAdmissionContext();
  const [form, setForm] = useState(formData.guardianInfo || {
    parentGuardian: "",
    emergencyContact: "",
    emergencyPhone: "",
    nextOfKin: "",
    nextOfKinPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateFormData("guardianInfo", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 text-[#0B2545]">
          <h2 className="text-lg font-semibold">Edit Guardian Information</h2>
          <button onClick={onClose} className="cursor-pointer hover:text-red-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-full border border-gray-200 rounded-xl p-5 md:p-8 bg-white space-y-8">
          {/* ================= PARENT / GUARDIAN ================= */}
          <section>
            <h3 className="font-semibold text-gray-900 mb-4">
              Parent / Guardian / Next of Kin Information
            </h3>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name and Address of Parent/Guardian{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              name="parentGuardian"
              value={form.parentGuardian}
              onChange={handleChange}
              placeholder="NAME AND FULL ADDRESS"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
            />
          </section>

          {/* ================= EMERGENCY CONTACT ================= */}
          <section>
            <h3 className="font-semibold text-gray-900 mb-4">
              Emergency Contact
            </h3>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name and Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="emergencyContact"
              value={form.emergencyContact}
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
              value={form.emergencyPhone}
              onChange={handleChange}
              placeholder="+234 XXX XXX XXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
            />
          </section>

          {/* ================= NEXT OF KIN ================= */}
          <section>
            <h3 className="font-semibold text-gray-900 mb-4">Next of Kin</h3>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name and Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="nextOfKin"
              value={form.nextOfKin}
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
              value={form.nextOfKinPhone}
              onChange={handleChange}
              placeholder="+234 XXX XXX XXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
            />
          </section>
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

