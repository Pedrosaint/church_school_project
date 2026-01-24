import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { useState } from "react";

interface AcademicHistoryProps {
  goToNext: () => void;
  goToPrev: () => void;
}

const ContactDetails = ({ goToNext, goToPrev }: AcademicHistoryProps) => {
  const [form, setForm] = useState({
    presentAddress: "",
    phone: "",
    email: "",
    permanentAddress: "",
    postalAddress: "",
    nationality: "",
    nativeLanguage: "",
    placeOfBirthDiff: "",
    maritalStatus: "",
    religion: "",
    denomination: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  return (
    <div className="border border-gray-200 rounded-xl p-6 font-inter space-y-6">
      <h2 className="text-xl font-semibold text-[#0C1B47]">
        Contact & Background Details
      </h2>

      {/* Present Address */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Present Residential Address <span className="text-red-500">*</span>
        </label>
        <textarea
          name="presentAddress"
          value={form.presentAddress}
          onChange={handleChange}
          placeholder="PRESENT RESIDENTIAL ADDRESS"
          className="w-full border border-gray-300 rounded-lg p-3"
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
            className="w-full border border-gray-300 rounded-lg p-3"
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
            className="w-full border border-gray-300 rounded-lg p-3"
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
          className="w-full border border-gray-300 rounded-lg p-3"
        />
      </div>

      {/* Postal Address */}
      <div>
        <label className="block text-sm font-medium mb-1">Postal Address</label>
        <textarea
          name="postalAddress"
          value={form.postalAddress}
          onChange={handleChange}
          placeholder="POSTAL ADDRESS"
          className="w-full border border-gray-300 rounded-lg p-3"
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
            className="w-full border border-gray-300 rounded-lg p-3"
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
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>
      </div>

      {/* Place of Birth */}
      <div>
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

      <div className="flex justify-between items-start gap-6">
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
              className="w-full border border-gray-300 rounded-lg p-3"
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
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <div
        className="mt-8 flex flex-col gap-4
             sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Previous */}
        <button
          onClick={goToPrev}
          className="flex items-center justify-center gap-2
               w-full sm:w-auto
               px-5 py-2 border border-gray-300
               rounded-lg text-sm"
        >
          <ArrowLeft /> Previous
        </button>

        {/* Save */}
        <button
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
          onClick={goToNext}
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
};

export default ContactDetails;
