/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Clock, ChevronDown, Save, X } from "lucide-react";
import { useAdmissionContext } from "../../context/AdmissionContext";
import { getMediaUrl } from "../../../../../utils/media";

// Small helper to safely preview a File/Blob or remote file object
function FilePreview({ file }: { file: any }) {
  const [url, setUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    let objUrl: string | undefined;

    if (!file) {
      setUrl(undefined);
      return;
    }

    // If it's a File/Blob (File inherits from Blob)
    if (file instanceof Blob) {
      objUrl = URL.createObjectURL(file);
      setUrl(objUrl);
      return () => {
        if (objUrl) URL.revokeObjectURL(objUrl);
      };
    }

    // If it's a string (already a URL)
    if (typeof file === "string") {
      setUrl(file);
      return;
    }

    // If it's an object returned from server with fileUrl property
    if (file && typeof file === "object" && file.fileUrl) {
      setUrl(getMediaUrl(file.fileUrl));
      return;
    }

    // Otherwise, no preview available
    setUrl(undefined);
  }, [file]);

  if (!url) {
    return (
      <div className="w-16 h-16 rounded-md bg-gray-100 border flex items-center justify-center text-xs text-gray-400">
        No preview
      </div>
    );
  }

  return (
    <img
      src={url}
      alt="Passport preview"
      className="w-16 h-16 rounded-md object-cover border"
    />
  );
}

interface ProgrammeInformationProps {
  goToNext: () => void;
}

export default function ProgrammeInformation({
  goToNext,
}: ProgrammeInformationProps) {
  const { updateFormData, getFormData } = useAdmissionContext();
  const [form, setForm] = useState({
    programmeLevel: "",
    programmeChoice: "",
    passport1: null as File | null,
    passport2: null as File | null,
  });

  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    const data = getFormData();
    if (data.programmeInfo) {
      setForm(data.programmeInfo);
    }
  }, []);

  const handleNext = () => {
    updateFormData("programmeInfo", form);
    setLastSaved(new Date());
    goToNext();
  };

  const handleSave = () => {
    updateFormData("programmeInfo", form);
    setLastSaved(new Date());
  };

  return (
    <div className="px-3 font-inter">
      {/* Title */}
      <h1 className="text-2xl font-bold text-slate-800 mb-6">
        Programme Information<span className="text-red-500">*</span>
      </h1>

      {/* Programme Level */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Programme Level
        </label>

        <div className="space-y-3">
          {["Certificate", "Diploma", "Masters", "Ph.D."].map((level) => (
            <label
              key={level}
              className="flex items-center gap-3 text-sm text-slate-700 cursor-pointer"
            >
              <input
                type="radio"
                name="programmeLevel"
                value={level}
                checked={form.programmeLevel === level}
                onChange={() =>
                  setForm((p) => ({ ...p, programmeLevel: level }))
                }
                className="accent-[#0B2545]"
              />
              {level}
            </label>
          ))}
        </div>
      </div>

      {/* Programme of Choice */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Programme of Choice<span className="text-red-500">*</span>
        </label>

        <div className="relative w-full md:w-1/2">
          <select
            value={form.programmeChoice}
            onChange={(e) =>
              setForm((p) => ({ ...p, programmeChoice: e.target.value }))
            }
            className="appearance-none border border-gray-200 p-3 rounded-xl w-full outline-none text-slate-600"
          >
            <option value="">Select programme</option>
            <option value="Theology">Theology</option>
            <option value="Biblical Studies">Biblical Studies</option>
            <option value="Christian Education">Christian Education</option>
            <option value="Pastoral Studies">Pastoral Studies</option>
            <option value="Ministerial Studies">Ministerial Studies</option>
            <option value="Missions and Evangelism">
              Missions and Evangelism
            </option>
            <option value="Church Leadership">Church Leadership</option>
            <option value="Religious Studies">Religious Studies</option>
            <option value="Ministry Studies">Ministry Studies</option>
          </select>

          <ChevronDown
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
          />
        </div>
      </div>

      {/* Passport Upload */}
      <div className="mb-10">
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Two (2) Recent Passport-Sized Photographs
          <span className="text-red-500">*</span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((num) => {
            const file = num === 1 ? form.passport1 : form.passport2;

            return (
              <div key={num}>
                {!file ? (
                  /* ---------- DROP ZONE ---------- */
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 text-center text-sm text-slate-500 cursor-pointer hover:border-[#0B2545] transition">
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      hidden
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          [`passport${num}`]: e.target.files?.[0] || null,
                        }))
                      }
                    />
                    <span className="font-medium text-slate-600">
                      Drag & drop or choose file
                    </span>
                    <span className="text-xs text-slate-400 mt-1">
                      PNG or JPEG
                    </span>
                  </label>
                ) : (
                  /* ---------- FILE PREVIEW ---------- */
                  <div className="relative border border-gray-300 rounded-xl p-4 flex items-center gap-4 bg-white">
                    {/* Image Preview */}
                    <FilePreview file={file} />

                    {/* File Info */}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700 truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setForm((p) => ({
                          ...p,
                          [`passport${num}`]: null,
                        }))
                      }
                      className="absolute top-2 right-2 text-slate-400 hover:text-red-500 transition"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Important Instructions */}
      <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="font-bold text-slate-800 mb-3">
          Important Instruction:
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li>
            All text entered must be in{" "}
            <span className="text-gray-800">BLOCK LETTERS</span>
          </li>
          <li>Applicants must submit the following:</li>

          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
            <li>
              International students: One-page typed Statement of Purpose
              explaining choice of WAGGOM Theological Seminary
            </li>
            <li>Two (2) recent passport-sized photographs</li>
            <li>
              Original medical fitness certificate from a government-recognized
              hospital
            </li>
            <li>
              Birth certificate or sworn affidavit of age declaration from a
              High Court
            </li>
            <li>Photocopy of receipt of admission form purchase</li>
            <li>
              Academic transcripts to be sent directly to WATHS Admissions
              Office
            </li>
            <li>
              Full academic transcripts required if qualification is incomplete
            </li>
          </ul>
        </ul>
      </div>

      {/* Address */}
      <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 mb-8">
        <h2 className="font-bold text-slate-800 mb-2">
          On-site Admission Application Form Submission Address:
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed">
          WAGGOM Theological Seminary (WATHS)
          <br />
          3–5 WAGGOM Avenue, Osisoma, Aba
        </p>
      </div>

      {/* Footer */}
      <div
        className="mt-10 flex flex-col gap-4
                sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Last saved */}
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Clock size={16} className="text-[#D4A34A]" />
          <span>
            Last saved:{" "}
            {lastSaved ? lastSaved.toLocaleTimeString() : "Not saved"}
          </span>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          className="flex items-center justify-center gap-2
               w-full sm:w-auto
               px-5 py-2 border border-[#0B2545]
               text-[#0B2545] rounded-lg text-sm"
        >
          <Save size={16} />
          <span>Save & Continue Later</span>
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="w-full sm:w-auto
               bg-[#D4A34A] px-6 py-3
               rounded-xl text-[#0B2545]
               font-semibold flex items-center justify-center"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
