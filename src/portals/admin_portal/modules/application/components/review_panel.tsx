import { useState } from "react";
import { toast } from "sonner";
import {
  useApproveApplicationMutation,
  useRejectApplicationMutation,
} from "../api/application.api";

type Status = "PENDING" | "APPROVED" | "REJECTED";

const ReviewPanel = ({
  id,
  currentStatus,
}: {
  id: string;
  currentStatus?: string;
}) => {
  const [approveApplication, { isLoading: isApproving }] =
    useApproveApplicationMutation();
  const [rejectApplication, { isLoading: isRejecting }] =
    useRejectApplicationMutation();

  // 🔥 Local status for instant UI update
  const [status, setStatus] = useState<Status>(
    (currentStatus?.toUpperCase() as Status) || "PENDING"
  );

  const isApproved = status === "APPROVED";
  const isRejected = status === "REJECTED";
  const isFinalized = isApproved || isRejected;

  const handleApprove = async () => {
    if (!id || isFinalized) return;

    try {
      await approveApplication(id).unwrap();
      setStatus("APPROVED"); // 🔥 Instant UI update
      toast.success("Application approved");
    } catch (err) {
      console.error(err);
      toast.error("Failed to approve application");
    }
  };

  const handleReject = async () => {
    if (!id || isFinalized) return;

    try {
      await rejectApplication(id).unwrap();
      setStatus("REJECTED"); // 🔥 Instant UI update
      toast.success("Application rejected");
    } catch (err) {
      console.error(err);
      toast.error("Failed to reject application");
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
      <h3 className="font-semibold">Review Actions</h3>

      <button
        onClick={handleApprove}
        disabled={isApproving || isFinalized}
        className={`w-full rounded-xl py-2 text-white font-medium transition
          ${isApproved ? "bg-green-400 cursor-not-allowed disabled:opacity-50" : "bg-green-600 hover:scale-105 "}
          `}
      >
        {isApproved
          ? "Approved"
          : isApproving
            ? "Approving..."
            : "Approve Application"}
      </button>

      <button
        onClick={handleReject}
        disabled={isRejecting || isFinalized}
        className={`w-full rounded-xl py-2 text-white font-medium transition 
          ${isRejected ? "bg-red-400 cursor-not-allowed disabled:opacity-50" : "bg-red-600 hover:scale-105 cursor-pointer"}
         `}
      >
        {isRejected
          ? "Rejected"
          : isRejecting
            ? "Rejecting..."
            : "Reject Application"}
      </button>
    </div>
  );
};

export default ReviewPanel;