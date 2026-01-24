/* eslint-disable @typescript-eslint/no-explicit-any */
import{ useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function EventManagement() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      event: "Special Chapel Service",
      date: "Jan 10, 2025",
      time: "10:00 AM",
      location: "Main Chapel",
      description: "Guest speaker: Rev. Dr. Sarah Johnson",
    },
    {
      id: 2,
      event: "Registration Deadline",
      date: "Jan 15, 2025",
      time: "5:00 PM",
      location: "Admin Office",
      description: "Last day for late registration",
    },
    {
      id: 3,
      event: "Student Orientation",
      date: "Jan 20, 2025",
      time: "9:00 AM",
      location: "Conference Hall",
      description: "Orientation for new students",
    },
  ];

  const handleDelete = (event: any) => {
    setSelectedEvent(event);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Deleting event:", selectedEvent);
    setShowDeleteModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-2">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              Event Management
            </h1>
            <p className="text-gray-600">Create and manage upcoming events</p>
          </div>
          <button 
            onClick={() => navigate("create")}
          className="bg-[#D4A34A] text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors cursor-pointer">
            <Plus className="w-5 h-5" />
            Add New Event
          </button>
        </div>

        {/* Events Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            Upcoming Events ({events.length})
          </p>
        </div>

        {/* Events Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {event.event}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {event.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {event.time}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {event.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {event.description}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button 
                        onClick={() => navigate(`edit/${event.id}`)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer">
                          <FaRegEdit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(event)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Delete Event
              </h3>

              {/* Message */}
              <p className="text-gray-600 mb-8">
                Are you sure you want to delete "{selectedEvent?.event}"? This
                action cannot be undone.
              </p>

              {/* Buttons */}
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all curser-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
