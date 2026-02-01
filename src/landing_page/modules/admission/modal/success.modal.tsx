import { X } from "lucide-react";

interface SuccessModalProps {
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  admission?: {
    id?: string;
    firstname?: string;
    surname?: string;
    programmeChoice?: string;
    createdAt?: string;
  } | null;
}

const SuccessModal = ({
  setShowSuccessModal,
  admission,
}: SuccessModalProps) => {
  const appNumber = admission?.id || "—";
  const applicantName =
    `${admission?.firstname ?? ""} ${admission?.surname ?? ""}`.trim() ||
    "Applicant";
  const programme = admission?.programmeChoice || "N/A";
  const submittedOn = admission?.createdAt
    ? new Date(admission.createdAt).toLocaleDateString()
    : "N/A";

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Application Submitted Successfully!
          </h3>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 font-inter">
          {/* Application Number */}
          <div className="bg-amber-50 border-2 border-[#D4A34A] rounded-lg p-4 mb-6 text-center">
            <p className="text-sm text-gray-600 mb-1">
              Your Application Number:
            </p>
            <p className="md:text-xl font-bold text-gray-900">{appNumber}</p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Submission Summary */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">
                Submission Summary
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">Applicant Name:</p>
                  <p className="text-gray-700">{applicantName}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Program:</p>
                  <p className="text-gray-700">{programme}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Submitted On:</p>
                  <p className="text-gray-700">{submittedOn}</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Next Steps</h4>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-900 shrink-0">
                    1.
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Initial Screening:
                    </p>
                    <p className="text-gray-700">
                      Our team will review your application.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-900 shrink-0">
                    2.
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Interview (if selected):
                    </p>
                    <p className="text-gray-700">
                      You will be invited for a faculty interview.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-gray-900 shrink-0">
                    3.
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Notifications:
                    </p>
                    <p className="text-gray-700">
                      Expect updates via email within 2-3 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-[#D4A34A] hover:bg-[#C09340] text-[#0B2545] rounded-lg font-medium transition-colors shadow-md cursor-pointer">
              Download/Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
