/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Calendar, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCreateEventMutation } from "../api/event.api";
import { toast } from "sonner";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [createEvent, { isLoading }] = useCreateEventMutation();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleSubmit = async () => {
    if (
      !formData.title ||
      !formData.date ||
      !formData.time ||
      !formData.location ||
      !formData.description
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      // Combine date and time into ISO string
      const dateTime = new Date(
        `${formData.date}T${formData.time}`,
      ).toISOString();

      await createEvent({
        title: formData.title,
        date: dateTime,
        location: formData.location,
        description: formData.description,
      }).unwrap();

      toast.success("Event created successfully!");
      setFormData({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
      });
      navigate("/dashboard/events");
    } catch (err: any) {
      toast.error(
        err?.data?.message || "Failed to create event. Please try again.",
      );
    }
  };

  const handleCancel = () => {
    setFormData({
      eventTitle: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
    navigate("/dashboard/events");
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
          <h1 className="text-xl font-semibold">Create New Event</h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-b-xl shadow-sm border border-gray-200 p-6 space-y-6">
          {/* Event Title Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Enter event title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition bg-gray-50"
            />
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                placeholder="dd/mm/yyyy"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition bg-gray-50"
              />
            </div>

            {/* Time Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                placeholder="--:--"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition bg-gray-50"
              />
            </div>
          </div>

          {/* Location Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="Event location"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition bg-gray-50"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Event description and details..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition resize-none bg-gray-50"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#D4A34A] hover:bg-[#C09340] disabled:opacity-50 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              {isLoading ? "Creating..." : "Create Event"}
            </button>
            <button
              onClick={handleCancel}
              className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
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
