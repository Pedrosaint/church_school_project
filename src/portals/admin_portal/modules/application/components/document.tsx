import { Eye, Download, Upload } from "lucide-react";

type DocStatus = "Verified" | "Issue";

const statusStyles: Record<DocStatus, string> = {
  Verified: "bg-green-100 text-green-700",
  Issue: "bg-yellow-100 text-yellow-700",
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UploadedDocuments = ({
  certificates = [],
  passportPhotos = [],
}: {
  certificates?: { id: string; fileUrl: string }[];
  passportPhotos?: { id: string; fileUrl: string }[];
}) => {
  const files = [
    ...passportPhotos.map((f) => ({
      id: f.id,
      name: "Passport Photo",
      fileUrl: f.fileUrl,
    })),
    ...certificates.map((f) => ({
      id: f.id,
      name: "Certificate",
      fileUrl: f.fileUrl,
    })),
  ];

  if (files.length === 0) {
    return (
      <div className="text-sm text-gray-500 p-2">No documents uploaded</div>
    );
  }

  return (
    <div className="space-y-3 pt-2 p-2">
      {files.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
        >
          <div className="flex items-start gap-3">
            <Upload className="h-5 w-5 text-gray-500 mt-1" />
            <div>
              <p className="font-medium text-sm">{doc.name}</p>
              <p className="text-xs text-gray-500">Uploaded</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles["Verified"]}`}
            >
              Verified
            </span>

            <a
              href={`${BASE_URL}${doc.fileUrl}`}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500"
            >
              <Eye className="h-4 w-4 cursor-pointer" />
            </a>

            <a
              href={`${BASE_URL}${doc.fileUrl}`}
              download
              className="text-gray-500"
            >
              <Download className="h-4 w-4 cursor-pointer" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadedDocuments;
