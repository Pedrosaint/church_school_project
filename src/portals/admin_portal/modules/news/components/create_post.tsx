import { useState } from "react";
import { Newspaper, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CreateNewsPost() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    category: "",
    messageBody: "",
  });

  const categories = ["Academics", "Events", "Announcements", "General"];

  const handleSubmit = () => {
    console.log("Publishing news:", formData);
    // Add your publish logic here
    navigate("/dashboard/admin-news");
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      summary: "",
      category: "",
      messageBody: "",
    });
    navigate("/dashboard/admin-news");
  };

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "-20%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-gray-50 font-inter"
    >
      <div className="">
        {/* Header */}
        <div className="bg-[#0B2545] text-white px-6 py-4 rounded-t-xl">
          <h1 className="text-xl font-semibold">Create News Post</h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-b-xl shadow-sm border border-gray-200 p-6 space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Enter news title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none transition"
            />
          </div>

          {/* Summary Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Summary
            </label>
            <input
              type="text"
              value={formData.summary}
              onChange={(e) =>
                setFormData({ ...formData, summary: e.target.value })
              }
              placeholder="Brief Summary appears in this field"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition"
            />
          </div>

          {/* Category Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Category
            </label>
            <div className="relative">
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition appearance-none bg-white cursor-pointer"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Message Body Field */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Message Body
            </label>
            <textarea
              value={formData.messageBody}
              onChange={(e) =>
                setFormData({ ...formData, messageBody: e.target.value })
              }
              placeholder="Full News Message...."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={handleSubmit}
              className="bg-[#D4A34A] hover:bg-[#C09340] cursor-pointer text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <Newspaper className="w-5 h-5" />
              Publish News
            </button>
            <button
              onClick={handleCancel}
              className="bg-white border-2 cursor-pointer border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <X className="w-5 h-5" />
              Cancel
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
