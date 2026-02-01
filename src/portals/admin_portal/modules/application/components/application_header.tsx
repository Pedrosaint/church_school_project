import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const statusStyles: Record<string, string> = {
  pending: "bg-gray-100 text-gray-700",
  "under review": "bg-blue-100 text-blue-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

const formatDate = (d?: string) => (d ? new Date(d).toLocaleDateString() : "—");

const ApplicationHeader = ({
  id,
  firstname,
  surname,
  status,
  createdAt,
  programme,
  isLoading = false,
}: {
  id?: string;
  firstname?: string;
  surname?: string;
  status?: string;
  createdAt?: string;
  programme?: string;
  isLoading?: boolean;
}) => {
  const navigate = useNavigate();
  const fullName = isLoading
    ? "Loading..."
    : `${firstname ?? ""} ${surname ?? ""}`.trim() || "—";
  const normalizedStatus = (status ?? "").toLowerCase();

  return (
    <div className="space-y-2 px-3">
      <button
        onClick={() => navigate("/dashboard/application")}
        className="text-sm text-gray-600 flex gap-2 items-center cursor-pointer"
      >
        <ArrowLeft /> Back to Applications
      </button>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{fullName}</h1>
          <p className="text-sm text-gray-500">
            {id ?? "—"} • {programme ?? "—"} • {formatDate(createdAt)}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles[normalizedStatus] ?? "bg-gray-100 text-gray-700"}`}
        >
          {status
            ? status.charAt(0).toUpperCase() + status.slice(1)
            : "Pending"}
        </span>
      </div>
    </div>
  );
};

export default ApplicationHeader;
