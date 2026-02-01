import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetApplicationsQuery } from "../api/application.api";
import { useEffect, useState } from "react";

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    "Under Review": "bg-blue-100 text-blue-700",
    Pending: "bg-gray-100 text-gray-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
    "Resubmission Required": "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`rounded-lg px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

const ApplicationsTable = ({ status }: { status?: string }) => {
  const navigate = useNavigate();

  // Map local dropdown values to API query values when necessary
  const queryStatus =
    status && status !== "all"
      ? status === "review"
        ? "under review"
        : status
      : undefined;
  const { data, isLoading, error } = useGetApplicationsQuery(
    queryStatus ? { status: queryStatus } : undefined,
  );

  const rows = data?.data ?? [];

  const STORAGE_KEY = "admission_applications";

  // Restore saved pagination + filter state from localStorage
  const restoreState = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          page: typeof parsed.page === "number" ? parsed.page : 1,
          pageSize: typeof parsed.pageSize === "number" ? parsed.pageSize : 10,
          savedStatus:
            typeof parsed.status === "string" ? parsed.status : undefined,
        };
      }
    } catch {
      // ignore
    }
    return { page: 1, pageSize: 10, savedStatus: undefined };
  };

  const { page: initialPage, pageSize: initialPageSize } = restoreState();

  const [page, setPage] = useState<number>(initialPage);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);

  // Persist pagination and current status to localStorage
  useEffect(() => {
    try {
      const toSave = { page, pageSize, status };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch {
      // ignore
    }
  }, [page, pageSize, status]);

  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  // Ensure current page is within range when totalPages changes
  useEffect(() => {
    if (page > totalPages) {
      // defer update to next tick to avoid synchronous setState within effect
      setTimeout(() => setPage(1));
    }
  }, [page, totalPages]);

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const paginatedRows = rows.slice(startIndex, endIndex);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="font-semibold mb-4">Applications ({total})</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm table-fixed">
          <thead className="border-b border-gray-200 text-gray-500 whitespace-nowrap">
            <tr className="text-left">
              <th className="py-3 px-4 w-48">Application ID</th>
              <th className="px-4">Applicant Name</th>
              <th className="px-4">Programme Level</th>
              <th className="px-4">Programme Choice</th>
              <th className="px-4">Submission Date</th>
              <th className="px-4">Status</th>
              <th className="px-4">Assigned Reviewer</th>
              <th className="px-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr>
                <td
                  colSpan={8}
                  className="py-6 px-4 text-center text-sm text-gray-500"
                >
                  Loading applications...
                </td>
              </tr>
            )}

            {!isLoading && error && (
              <tr>
                <td
                  colSpan={8}
                  className="py-6 px-4 text-center text-sm text-red-500"
                >
                  Error loading applications
                </td>
              </tr>
            )}

            {!isLoading && rows.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="py-6 px-4 text-center text-sm text-gray-500"
                >
                  No applications found
                </td>
              </tr>
            )}

            {paginatedRows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 last:border-0 whitespace-nowrap"
              >
                <td className="py-4 px-4 font-medium w-48 truncate overflow-hidden">
                  {row.id}
                </td>
                <td className="px-4">
                  {`${row.firstname ?? ""} ${row.surname ?? ""}`.trim()}
                </td>
                <td className="px-4">{row.programmeLevel}</td>
                <td className="px-4">{row.programmeChoice}</td>
                <td className="px-4">
                  {row.createdAt
                    ? new Date(row.createdAt).toLocaleDateString()
                    : row.applicantDate
                      ? new Date(row.applicantDate).toLocaleDateString()
                      : "-"}
                </td>
                <td className="px-4">
                  <StatusBadge
                    status={
                      row.status
                        ? row.status.charAt(0).toUpperCase() +
                          row.status.slice(1)
                        : "Pending"
                    }
                  />
                </td>
                <td className="px-4">-</td>
                <td className="px-4">
                  <button
                    onClick={() =>
                      navigate(`/dashboard/application/view/${row.id}`)
                    }
                    className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition-colors"
                  >
                    <Eye className="h-4 w-4" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {total === 0 ? (
              ""
            ) : (
              <span>
                Showing <strong>{startIndex + 1}</strong> -{" "}
                <strong>{endIndex}</strong> of <strong>{total}</strong>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="rounded border-gray-200 px-3 py-1 text-sm"
            >
              <option value={10}>10 / page</option>
              <option value={25}>25 / page</option>
              <option value={50}>50 / page</option>
            </select>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="rounded px-3 py-1 bg-white border border-gray-200 text-sm disabled:opacity-50"
              >
                Prev
              </button>

              <div className="text-sm text-gray-700">
                Page {page} of {totalPages}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="rounded px-3 py-1 bg-white border border-gray-200 text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsTable;
