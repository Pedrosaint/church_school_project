import { X } from "lucide-react";
import { useAdmissionContext } from "../context/AdmissionContext";
import { useState } from "react";

interface PersonalInfoModalProps {
  onClose: () => void;
}

export default function PersonalInfoModal({ onClose }: PersonalInfoModalProps) {
  const { formData, updateFormData } = useAdmissionContext();
  const [form, setForm] = useState(formData.personalInfo || {
    firstName: "",
    surname: "",
    otherNames: "",
    title: "",
    placeOfBirth: "",
    dateOfBirth: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateFormData("personalInfo", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 text-[#0B2545]">
          <h2 className="text-lg font-semibold">Edit Personal Information</h2>
          <button onClick={onClose} className="cursor-pointer hover:text-red-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-3 font-inter">
          <div>
            <label className="text-sm font-semibold">First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none focus:border-[#D4A34A]"
              placeholder="First Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Surname</label>
            <input
              name="surname"
              value={form.surname}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none focus:border-[#D4A34A]"
              placeholder="Surname"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Other Names</label>
            <input
              name="otherNames"
              value={form.otherNames}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none focus:border-[#D4A34A]"
              placeholder="Other Names"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <select
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#D4A34A]"
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
              name="placeOfBirth"
              value={form.placeOfBirth}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none focus:border-[#D4A34A]"
              placeholder="Place of Birth"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Date of Birth</label>
            <input
              name="dateOfBirth"
              type="date"
              value={form.dateOfBirth}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none focus:border-[#D4A34A]"
              placeholder="Date of Birth"
            />
          </div>

          <div className="">
            <label className="block text-sm font-medium mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={form.gender === "Male"}
                  onChange={handleChange}
                  className="custom-radio"
                />
                <span>Male</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={form.gender === "Female"}
                  onChange={handleChange}
                  className="custom-radio"
                />
                <span>Female</span>
              </label>
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

