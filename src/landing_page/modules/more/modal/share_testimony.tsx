/* eslint-disable @typescript-eslint/no-explicit-any */
import { X } from "lucide-react";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";

interface ShareTestimonyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareTestimonyModal = ({ isOpen, onClose }: ShareTestimonyModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [testimony, setTestimony] = useState("");
  const [agreeToPublish, setAgreeToPublish] = useState(false);
  const [file, setFile] = useState<any>(null);

  const handleFileUpload = (e: any) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const handleSubmit = () => {
    console.log("Testimony submitted:", {
      name,
      email,
      testimony,
      file,
      agreeToPublish,
    });

    alert("Testimony submitted successfully!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto font-inter">
        {/* HEADER */}
        <div className="flex justify-between items-start p-8 pb-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-1">
              Share Your Testimony
            </h2>
            <p className="text-gray-600">
              We would be honored to hear how God has been working in your life.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* BODY */}
        <div className="px-8 pb-8 pt-3">
          {/* NAME */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-900">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-900">
              Contact Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
            />
          </div>

          {/* TESTIMONY */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-900">
              Your Testimony
            </label>
            <textarea
              rows={6}
              placeholder="Share your story here..."
              value={testimony}
              onChange={(e) => setTestimony(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
            />
          </div>

          {/* UPLOAD */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-900">
              Photo / Video
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-500 transition">
              <input
                type="file"
                id="file-upload"
                accept="image/*,video/*,.gif"
                onChange={handleFileUpload}
                className="hidden"
              />

              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
               <MdCloudUpload className="w-12 h-12 text-gray-400 mb-3" />

                <p className="text-gray-700">
                  <span className="font-medium text-blue-600">
                    Upload a file
                  </span>{" "}
                  or drag & drop
                </p>

                <p className="text-gray-500 text-sm">
                  PNG, JPG, GIF, MP4 – max 10MB
                </p>

                {file && (
                  <p className="mt-2 text-sm text-green-600">
                    Selected: {file.name}
                  </p>
                )}
              </label>
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={agreeToPublish}
                onChange={(e) => setAgreeToPublish(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
              />
              <span className="ml-3 text-gray-700">
                I agree for this to be published on the WAGGOM website.
              </span>
            </label>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 font-semibold text-amber-600 hover:text-amber-700"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600"
            >
              Submit Testimony
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            All testimonies go through admin review before being published.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareTestimonyModal;
