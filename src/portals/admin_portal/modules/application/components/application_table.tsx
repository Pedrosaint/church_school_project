import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const ApplicationsTable = () => {
const navigate = useNavigate();
  const data = [
    {
      id: "APP-2024-001",
      name: "Sarah Okonkwo",
      level: "Master of Divinity",
      programme: "Systematic Theology",
      date: "Dec 10, 2024",
      status: "Under Review",
      reviewer: "Dr. Emmanuel Akintola",
    },
    {
      id: "APP-2024-001",
      name: "Sarah Okonkwo",
      level: "Master of Divinity",
      programme: "Systematic Theology",
      date: "Dec 10, 2024",
      status: "Rejected",
      reviewer: "Dr. Emmanuel Akintola",
    },
    {
      id: "APP-2024-001",
      name: "Sarah Okonkwo",
      level: "Master of Divinity",
      programme: "Systematic Theology",
      date: "Dec 10, 2024",
      status: "Approved",
      reviewer: "Dr. Emmanuel Akintola",
    },
    {
      id: "APP-2024-001",
      name: "Sarah Okonkwo",
      level: "Master of Divinity",
      programme: "Systematic Theology",
      date: "Dec 10, 2024",
      status: "Resubmission Required",
      reviewer: "Dr. Emmanuel Akintola",
    },
    {
      id: "APP-2024-001",
      name: "Sarah Okonkwo",
      level: "Master of Divinity",
      programme: "Systematic Theology",
      date: "Dec 10, 2024",
      status: "Pending",
      reviewer: "Dr. Emmanuel Akintola",
    },
  ];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="font-semibold mb-4">Applications (8)</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-200 text-gray-500 whitespace-nowrap">
            <tr className="">
              <th className="py-3 px-4">Application ID</th>
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
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 last:border-0 whitespace-nowrap"
              >
                <td className="py-4 px-4 font-medium">{row.id}</td>
                <td className="px-4">{row.name}</td>
                <td className="px-4">{row.level}</td>
                <td className="px-4">{row.programme}</td>
                <td className="px-4">{row.date}</td>
                <td className="px-4">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4">{row.reviewer}</td>
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
      </div>
    </div>
  );
};

export default ApplicationsTable;
