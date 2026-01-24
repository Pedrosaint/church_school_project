import { Eye, Download, Upload } from "lucide-react";

type DocStatus = "Verified" | "Issue";

const statusStyles: Record<DocStatus, string> = {
  Verified: "bg-green-100 text-green-700",
  Issue: "bg-yellow-100 text-yellow-700",
};

const documents = [
  { name: "Passport Photograph", date: "12/10/2024", status: "Verified" },
  { name: "Statement of Purpose", date: "12/10/2024", status: "Verified" },
  {
    name: "Medical Fitness Certificate",
    date: "12/10/2024",
    status: "Verified",
  },
  { name: "Birth Certificate", date: "12/10/2024", status: "Verified" },
  { name: "Admission Form Receipt", date: "12/10/2024", status: "Verified" },
  { name: "Academic Transcripts", date: "12/10/2024", status: "Verified" },
  { name: "Professional Certificates", date: "12/11/2024", status: "Issue" },
];

const UploadedDocuments = () => {
  return (
    <div className="space-y-3 pt-2 p-2">
      {documents.map((doc) => (
        <div
          key={doc.name}
          className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
        >
          <div className="flex items-start gap-3">
            <Upload className="h-5 w-5 text-gray-500 mt-1" />
            <div>
              <p className="font-medium text-sm">{doc.name}</p>
              <p className="text-xs text-gray-500">Uploaded {doc.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                statusStyles[doc.status as DocStatus]
              }`}
            >
              {doc.status}
            </span>

            <Eye className="h-4 w-4 text-gray-500 cursor-pointer" />
            <Download className="h-4 w-4 text-gray-500 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadedDocuments;
