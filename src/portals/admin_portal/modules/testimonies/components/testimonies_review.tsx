import { useState } from "react";
import { Eye, Check, Trash2, User } from "lucide-react";
import ViewModal from "../modal/view.modal";
import DeleteModal from "../modal/delete.modal";
import { EmptyState } from "../../../../../general/ui/empty_state";

interface Testimony {
  id: number;
  name: string;
  degree: string;
  content: string;
  submittedDate: string;
  status: "pending" | "approved";
  avatar: string | null;
}

export default function TestimoniesReviews() {
  const [testimonies, setTestimonies] = useState<Testimony[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      degree: "B.A. Theology Graduate",
      content:
        "My time at WAGSEM transformed my life and ministry. The theological foundation I received...",
      submittedDate: "Dec 1, 2024",
      status: "pending",
      avatar: null,
    },
    {
      id: 2,
      name: "Michael Chen",
      degree: "Master's in Missions",
      content:
        "The missions program equipped me with practical skills and biblical knowledge that I use daily...",
      submittedDate: "Nov 28, 2024",
      status: "pending",
      avatar: null,
    },
    {
      id: 3,
      name: "Ruth Adeleke",
      degree: "M.A. Christian Education",
      content:
        "The Christian Education program challenged me to think deeply about pedagogy and ministry...",
      submittedDate: "Nov 15, 2024",
      status: "pending",
      avatar: null,
    },
  ]);

  // Toggle state
  const [activeTab, setActiveTab] = useState<"pending" | "approved">("pending");

  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTestimony, setSelectedTestimony] = useState<Testimony | null>(
    null
  );

  const pendingCount = testimonies.filter((t) => t.status === "pending").length;
  const approvedCount = testimonies.filter(
    (t) => t.status === "approved"
  ).length;

  // Filter results based on active tab
  const filteredTestimonies = testimonies.filter((t) => t.status === activeTab);

  const handleView = (testimony: Testimony) => {
    setSelectedTestimony(testimony);
    setShowViewModal(true);
  };

  const handleApprove = (id: number) => {
    setTestimonies(
      testimonies.map((t) => (t.id === id ? { ...t, status: "approved" } : t))
    );
  };

  const handleDelete = (testimony: Testimony) => {
    setSelectedTestimony(testimony);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedTestimony) {
      setTestimonies(testimonies.filter((t) => t.id !== selectedTestimony.id));
    }
    setShowDeleteModal(false);
    setSelectedTestimony(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Testimony Reviews
        </h1>
        <p className="text-gray-600">Review and manage students Testimonies</p>
      </div>

      {/* Toggle Tabs */}
      <div className="flex items-center justify-center p-1 rounded-full gap-3 mb-4 bg-gray-200 w-72">
        <button
          onClick={() => setActiveTab("pending")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition ${
            activeTab === "pending" ? "bg-white shadow" : "text-gray-600"
          }`}
        >
          <span className="text-sm font-medium">Pending</span>
          <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {pendingCount}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("approved")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition ${
            activeTab === "approved" ? "bg-white shadow" : "text-gray-600"
          }`}
        >
          <span className="text-sm font-medium">Approved</span>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {approvedCount}
          </span>
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredTestimonies.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            {/* General Empty State */}
            <EmptyState type="general" tab={activeTab} />
          </div>
        ) : (
          filteredTestimonies.map((testimony) => (
            <div
              key={testimony.id}
              className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Avatar */}
                <div className="shrink-0 flex sm:block">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-700 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 sm:text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {testimony.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    {testimony.degree}
                  </p>

                  <p className="text-sm text-gray-700 mb-3 line-clamp-2 sm:line-clamp-3">
                    {testimony.content}
                  </p>

                  <p className="text-xs text-gray-500">
                    Submitted {testimony.submittedDate}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:items-start sm:justify-end">
                  <button
                    onClick={() => handleView(testimony)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>

                  {activeTab === "pending" && (
                    <button
                      onClick={() => handleApprove(testimony.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm text-green-600 bg-green-50 rounded-md hover:bg-green-100"
                    >
                      <Check className="w-4 h-4" />
                      Approve
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(testimony)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modals */}
      {showViewModal && selectedTestimony && (
        <ViewModal
          selectedTestimony={selectedTestimony}
          handleApprove={handleApprove}
          setShowViewModal={setShowViewModal}
        />
      )}

      {showDeleteModal && selectedTestimony && (
        <DeleteModal
          selectedTestimony={selectedTestimony}
          setShowDeleteModal={setShowDeleteModal}
          confirmDelete={confirmDelete}
        />
      )}
    </div>
  );
}
