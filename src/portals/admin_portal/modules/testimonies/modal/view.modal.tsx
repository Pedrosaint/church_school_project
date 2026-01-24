/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "lucide-react";
import { IoCheckmarkSharp } from "react-icons/io5";


interface TestimonyProps {
  selectedTestimony: any;
  handleApprove: (id: number) => void;
  setShowViewModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const ViewModal = ({
  selectedTestimony,
  handleApprove,
  setShowViewModal,
}: TestimonyProps) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-5 sm:p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-700 rounded-full flex items-center justify-center">
              <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>

            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">
                {selectedTestimony.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {selectedTestimony.degree}
              </p>
            </div>
          </div>

          {/* Testimony Content */}
          <div className="mb-6">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
              Testimony
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {selectedTestimony.content}
            </p>
          </div>

          {/* Date */}
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            Submitted {selectedTestimony.submittedDate}
          </p>

          {/* Actions */}
          {selectedTestimony.status === "pending" ? (
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                onClick={() => {
                  handleApprove(selectedTestimony.id);
                  setShowViewModal(false);
                }}
                className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 w-full sm:w-auto"
              >
                <IoCheckmarkSharp size={22} />
                Approve
              </button>

              <button
                onClick={() => setShowViewModal(false)}
                className="flex items-center justify-center border-2 border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-semibold w-full sm:w-auto"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex justify-center sm:justify-end">
              <button
                onClick={() => setShowViewModal(false)}
                className="border-2 border-gray-400 text-gray-700 py-3 px-4 rounded-lg font-semibold w-full sm:w-auto"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewModal
