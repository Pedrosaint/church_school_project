/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";

interface DeleteModalProps {
  selectedTestimony: any;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  confirmDelete: () => void;
}

const DeleteModal = ({selectedTestimony, setShowDeleteModal, confirmDelete}: DeleteModalProps) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Delete Testimony
            </h3>

            <p className="text-gray-600 mb-8">
              Are you sure you want to delete the testimony from "
              {selectedTestimony.name}"? This action cannot be undone.
            </p>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal
