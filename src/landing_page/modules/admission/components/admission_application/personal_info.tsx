import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useAdmissionContext } from "../../context/AdmissionContext";

interface PersonalInfoProps {
  goToNext: () => void;
  goToPrev: () => void;
}

export default function PersonalInfo({
  goToNext,
  goToPrev,
}: PersonalInfoProps) {
  const { updateFormData, getFormData } = useAdmissionContext();
  const [form, setForm] = useState({
    surname: "",
    firstName: "",
    otherNames: "",
    title: "",
    placeOfBirth: "",
    dateOfBirth: "",
    gender: "",
  });

  // Load existing data on mount
  useEffect(() => {
    const data = getFormData();
    if (data.personalInfo) {
      setForm(data.personalInfo);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    updateFormData("personalInfo", form);
    goToNext();
  };

  const handlePrev = () => {
    updateFormData("personalInfo", form);
    goToPrev();
  };

  return (
    <div className="border border-gray-200 rounded-xl p-6 container mx-auto">
      <h2 className="text-lg font-semibold text-[#0C1B47] mb-6">
        Applicant's Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Surname */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Surname <span className="text-red-500">*</span>
          </label>
          <input
            name="surname"
            value={form.surname}
            onChange={handleChange}
            placeholder="SURNAME"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
          />
        </div>

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="FIRST NAME"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
          />
        </div>

        {/* Other Names */}
        <div>
          <label className="block text-sm font-medium mb-1">Other Names</label>
          <input
            name="otherNames"
            value={form.otherNames}
            onChange={handleChange}
            placeholder="OTHER NAMES"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <select
            name="title"
            value={form.title}
            onChange={handleChange}
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

        {/* Place of Birth */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Place of Birth <span className="text-red-500">*</span>
          </label>
          <input
            name="placeOfBirth"
            value={form.placeOfBirth}
            onChange={handleChange}
            placeholder="PLACE OF BIRTH"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* Gender */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Gender <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
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

          <label className="flex items-center gap-2">
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

      {/* Buttons */}
      <div
        className="mt-8 flex flex-col gap-4
             sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Previous */}
        <button
          onClick={handlePrev}
          className="flex items-center justify-center gap-2
               w-full sm:w-auto
               px-5 py-2 border border-gray-300
               rounded-lg text-sm"
        >
          <ArrowLeft /> Previous
        </button>

        {/* Save */}
        <button
          onClick={() => updateFormData("personalInfo", form)}
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
          onClick={handleNext}
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
}
