import { toast } from "sonner";
import {
  useApproveApplicationMutation,
  useRejectApplicationMutation,
} from "../api/application.api";

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

  const handleApprove = async () => {
    if (!id) return;
    if ((currentStatus ?? "").toLowerCase() === "approved") {
      toast.error("Application is already approved");
      return;
    }

    try {
      await approveApplication(id).unwrap();
      toast.success("Application approved");
    } catch (err) {
      console.error(err);
      toast.error("Failed to approve application");
    }
  };

  const handleReject = async () => {
    if (!id) return;
    if ((currentStatus ?? "").toLowerCase() === "rejected") {
      toast.error("Application is already rejected");
      return;
    }

    try {
      await rejectApplication(id).unwrap();
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
        disabled={isApproving}
        className="w-full rounded-xl bg-green-600 py-2 text-white font-medium cursor-pointer disabled:opacity-50"
      >
        {isApproving ? "Approving..." : "Approve Application"}
      </button>

      <button
        onClick={handleReject}
        disabled={isRejecting}
        className="w-full rounded-xl bg-red-600 py-2 text-white font-medium cursor-pointer disabled:opacity-50"
      >
        {isRejecting ? "Rejecting..." : "Reject Application"}
      </button>

      <button className="w-full rounded-xl border border-gray-200 py-2 text-sm cursor-pointer">
        Request Clarification
      </button>
    </div>
  );
};

export default ReviewPanel;
