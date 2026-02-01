/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGetEventsQuery, useDeleteEventMutation } from "../api/event.api";
import { toast } from "sonner";

export default function EventManagement() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const { data: eventsResponse, isLoading, error } = useGetEventsQuery();
  const [deleteEvent, { isLoading: isDeleting }] = useDeleteEventMutation();

  const events = eventsResponse?.data || [];

  const handleDelete = (event: any) => {
    setSelectedEvent(event);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteEvent(selectedEvent.id).unwrap();
      toast.success("Event deleted successfully!");
      setShowDeleteModal(false);
      setSelectedEvent(null);
    } catch (err: any) {
      toast.error(
        err?.data?.message || "Failed to delete event. Please try again.",
      );
    }
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
            className="bg-[#D4A34A] text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors cursor-pointer"
          >
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
                {events.map((event: any) => (
                  <tr
                    key={event.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {event.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(event.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(event.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {event.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 line-clamp-2">
                      {event.description}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => navigate(`edit/${event.id}`)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                        >
                          <FaRegEdit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(event)}
                          disabled={isDeleting}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer disabled:opacity-50"
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

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4A34A]"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            Failed to load events. Please try again.
          </div>
        )}

        {/* Empty State */}
        {!isLoading && events.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              No events yet
            </h3>
            <p className="text-sm text-gray-500 mb-5 max-w-xs">
              Events you create will appear here. Start by adding your first
              school event.
            </p>
          </div>
        )}
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
                Are you sure you want to delete "{selectedEvent?.title}"? This
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
                  disabled={isDeleting}
                  className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
