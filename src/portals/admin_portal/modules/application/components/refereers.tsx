import { Mail, Phone } from "lucide-react";

type RefStatus = "Verified" | "Pending";

interface Referee {
  name: string;
  role: string;
  institution: string;
  position: string;
  phone: string;
  email: string;
  note: string;
  status: RefStatus;
}


const statusStyles: Record<RefStatus, string> = {
  Verified: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const referees: Referee[] = [
  {
    name: "Prof. Chinua Okafor",
    role: "Academic Referee",
    institution: "University of Lagos",
    position: "Professor of Theology",
    phone: "+234 803 111 2222",
    email: "c.okafor@unilag.edu.ng",
    note: "Excellent recommendation provided",
    status: "Verified",
  },
  {
    name: "Rev. Michael Adebayo",
    role: "Clergy Referee",
    institution: "Redeemed Christian Church",
    position: "Senior Pastor",
    phone: "+234 802 333 4444",
    email: "rev.adebayo@rccg.org",
    note: "Awaiting response",
    status: "Pending",
  },
];

const Referees = () => {
  return (
    <div className="space-y-4 pt-2 p-2">
      {referees.map((ref) => (
        <div
          key={ref.name}
          className="rounded-xl border border-gray-200 px-5 py-4 space-y-2"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold">{ref.name}</p>
              <p className="text-sm text-gray-500">{ref.role}</p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[ref.status]}`}
            >
              {ref.status}
            </span>
          </div>

          {/* Body */}
          <div className="text-sm space-y-1 pt-1">
            <p>
              <span className="text-gray-500">Institution:</span>{" "}
              {ref.institution}
            </p>
            <p>
              <span className="text-gray-500">Position:</span>{" "}
              {ref.position}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 text-sm pt-1">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              {ref.phone}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              {ref.email}
            </div>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 italic pt-1">
            Note: {ref.note}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Referees;
