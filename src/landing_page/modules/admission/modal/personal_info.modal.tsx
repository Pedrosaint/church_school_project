import { X } from "lucide-react";

interface PersonalInfoModalProps {
  onClose: () => void;
}

export default function PersonalInfoModal({ onClose }: PersonalInfoModalProps) {

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Personal Information</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-3 font-inter">
          <div>
            <label className="text-sm font-semibold">Firsr Name</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="First Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Surname Name</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Middle Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Other Names</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Last Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <select
              name="title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold">Place of Birth</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Place of Birth"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Date of Birth</label>
            <input
              type="date"
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Date of Birth"
            />
          </div>

          <div className="">
            <label className="block text-sm font-medium mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="custom-radio"
                />
                <span>Male</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="custom-radio"
                />
                <span>Female</span>
              </label>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full bg-[#D4A34A] text-white p-2 rounded-lg font-inter cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}
