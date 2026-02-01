/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { useGetNewsQuery, useDeleteNewsMutation } from "../api/news.api";
import { toast } from "sonner";

export default function NewsManagement() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState<any | null>(null);

  const navigate = useNavigate();
  const { data: newsResponse, isLoading, error } = useGetNewsQuery();
  const [deleteNews, { isLoading: isDeleting }] = useDeleteNewsMutation();

  const newsItems = newsResponse?.data || [];

  const handleDelete = (news: any) => {
    setSelectedNews(news);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteNews(selectedNews.id).unwrap();
      toast.success("News deleted successfully!");
      setShowDeleteModal(false);
      setSelectedNews(null);
    } catch (err: any) {
      toast.error(
        err?.data?.message || "Failed to delete news. Please try again.",
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
              News Management
            </h1>
            <p className="text-gray-600">
              Create and manage news posts for students
            </p>
          </div>
          <button
            onClick={() => navigate("create")}
            className="bg-[#D4A34A] text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            Add News
          </button>
        </div>

        {/* Published Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            Published News ({newsItems.length})
          </p>
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
            Failed to load news. Please try again.
          </div>
        )}

        {/* Empty State */}
        {!isLoading && newsItems.length === 0 && (
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h9l5 5v9a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              No news posts yet
            </h3>
            <p className="text-sm text-gray-500 mb-5 max-w-xs">
              News updates you publish will appear here. Keep your school
              community informed by posting your first update.
            </p>
          </div>
        )}

        {/* News List */}
        <div className="space-y-4">
          {newsItems.map((news: any) => (
            <div
              key={news.id}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              {/* Title and Actions */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {news.title}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {news.category}
                  </span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => navigate(`edit/${news.id}`)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <FaRegEdit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(news)}
                    disabled={isDeleting}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Summary */}
              <p className="text-gray-600 text-sm mb-2">{news.body}</p>

              {/* Published Date */}
              <p className="text-gray-500 text-sm mb-4">
                Published on {new Date(news.createdAt).toLocaleDateString()}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Content */}
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {news.summary}
              </p>
            </div>
          ))}
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
                Delete News Post
              </h3>

              {/* Message */}
              <p className="text-gray-600 mb-8">
                Are you sure you want to delete "{selectedNews?.title}"? This
                action cannot be undone.
              </p>

              {/* Buttons */}
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 cursor-pointer transition-all"
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
