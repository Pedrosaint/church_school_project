import { useState } from "react";
import { useSelector } from "react-redux";
import { Bell, BookOpen, Megaphone, X, Eye } from "lucide-react";
import { useGetNewsQuery, type NewsItem } from "../api/dashboard.api";
import type { RootState } from "../../../../../redux/store";

export default function NewsUpdatesComponent() {
  const [showReminder, setShowReminder] = useState(true);

  const { data, isLoading, isError } = useGetNewsQuery();
  const user = useSelector((state: RootState) => state.auth.user);

  const newsItems = data?.data || [];
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Welcome back, {user?.name || "Student"}
          </h1>
          <p className="text-gray-600">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Important Reminder Banner */}
        {showReminder && (
          <div className="bg-[#D4A34A1F] border border-[#D4A34A] rounded-2xl p-4 mb-8 relative">
            <button
              onClick={() => setShowReminder(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#D4A34A] rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1 pr-8">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Important Reminder
                </h3>
                <p className="text-gray-700 text-sm">
                  Late Registration Deadline: January 15, 2025.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* News & Updates Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              News & Updates
            </h2>
          </div>

          {isLoading && (
            <p className="text-gray-500 text-sm">Loading news...</p>
          )}

          {isError && (
            <p className="text-red-500 text-sm">
              Failed to load news. Please try again.
            </p>
          )}

          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-[#0B2545] rounded-xl flex items-center justify-center">
                      {item.category === "student" ? (
                        <BookOpen className="w-7 h-7 text-white" />
                      ) : (
                        <Megaphone className="w-7 h-7 text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-gray-900 text-base">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2">
                        <span className="bg-[#0B25452E] text-[#0B2545] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                          {item.category}
                        </span>

                        <button
                          onClick={() => setSelectedItem(item)}
                          aria-label="View announcement"
                          title="View"
                          className="p-2 rounded-md text-[#0B2545] bg-[#0B25452E] hover:bg-[#0B2545] hover:text-white transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {item.summary}
                    </p>

                    <p className="text-gray-500 text-sm">
                      {formatDate(item.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {newsItems.length === 0 && !isLoading && (
            <p className="text-gray-500 text-sm">No announcements available.</p>
          )}
        </div>
        {/* Modal: View Announcement */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setSelectedItem(null)}
            />

            <div className="relative z-10 w-full max-w-2xl mx-4 bg-white rounded-2xl p-6 shadow-lg">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {selectedItem.title}
              </h3>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">
                  {selectedItem.category}
                </span>
                <span className="text-sm text-gray-500">
                  {formatDate(selectedItem.createdAt)}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{selectedItem.summary}</p>

              {selectedItem.body && (
                <div className="text-gray-600 text-sm leading-relaxed">
                  {selectedItem.body}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
