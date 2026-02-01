import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface ProgrammeInfoModalProps {
  onClose: () => void;
}

export default function ProgrammeInfoModal({
  onClose,
}: ProgrammeInfoModalProps) {
  const [form, setForm] = useState({
    programmeLevel: "",
    programmeChoice: "",
    passport1: null as File | null,
    passport2: null as File | null,
  });

  // Small helper to safely preview a File/Blob or remote file object
  function FilePreview({ file }: { file: any }) {
    const [url, setUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
      let objUrl: string | undefined;

      if (!file) {
        setUrl(undefined);
        return;
      }

      if (file instanceof Blob) {
        objUrl = URL.createObjectURL(file);
        setUrl(objUrl);
        return () => {
          if (objUrl) URL.revokeObjectURL(objUrl);
        };
      }

      if (typeof file === "string") {
        setUrl(file);
        return;
      }

      if (file && typeof file === "object" && file.fileUrl) {
        const base = import.meta.env.VITE_API_BASE_URL ?? "";
        setUrl(base + file.fileUrl);
        return;
      }

      setUrl(undefined);
    }, [file]);

    if (!url) {
      return (
        <div className="w-16 h-16 rounded-md bg-gray-100 border flex items-center justify-center text-xs text-gray-400">
          No preview
        </div>
      );
    }

    return <img src={url} alt="Passport preview" className="w-16 h-16 rounded-md object-cover border" />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 relative font-inter overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-bold text-slate-800">
            Programme Information<span className="text-red-500">*</span>
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 cursor-pointer transition"
          >
            <X size={20} />
          </button>
        </div>

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

          <div className="relative w-full">
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
                    <div className="relative border border-gray-300 rounded-xl p-4 flex items-center gap-4 bg-white">
                      <FilePreview file={file} />

                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-700 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-slate-400">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                      </div>

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

        <button className="mt-6 w-full bg-[#D4A34A] text-white p-2 rounded-lg font-inter cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}
