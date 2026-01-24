import { useState } from "react";
import type { DropdownOption } from "./dropdown";
import Dropdown from "./dropdown";


const ReviewPanel = () => {
      const statusOptions: DropdownOption[] = [
        { label: "All Statuses", value: "all" },
        { label: "Pending", value: "pending" },
        { label: "Under Review", value: "review" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" },
      ];
    const [status, setStatus] = useState(statusOptions[0]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4">
      <h3 className="font-semibold">Review Actions</h3>

      <div>
        <label className="text-sm font-medium mb-2 block">
          Application Status
        </label>
        <Dropdown
          label="Status"
          value={status}
          options={statusOptions}
          onChange={setStatus}
        />
      </div>

      <textarea
        placeholder="Add your review notes here (admin-only)..."
        className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm resize-none h-24 outline-none"
      />

      <button className="w-full rounded-xl bg-green-600 py-2 text-white font-medium cursor-pointer">
        Approve Application
      </button>

      <button className="w-full rounded-xl bg-red-600 py-2 text-white font-medium cursor-pointer">
        Reject Application
      </button>

      <button className="w-full rounded-xl border border-gray-200 py-2 text-sm cursor-pointer">
        Request Clarification
      </button>
    </div>
  );
};

export default ReviewPanel;
