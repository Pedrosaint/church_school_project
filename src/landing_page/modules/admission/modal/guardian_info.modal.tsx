import { X } from "lucide-react";

interface GuardianInfoModalProps {
  onClose: () => void;
}

export default function GuardianInfoModal({ onClose }: GuardianInfoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Gaurdian Information</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-full max-h-[650px] overflow-auto border border-gray-200 rounded-xl p-5 md:p-8 bg-white">
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
              name="parentAddress"
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
              name="emergencyNameAddress"
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
              name="nextOfKinNameAddress"
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
              placeholder="+234 XXX XXX XXXX"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#D4A34A]"
            />
          </section>
        </div>
        <button className="mt-6 w-full bg-[#D4A34A] text-white p-2 rounded-lg font-inter cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}
