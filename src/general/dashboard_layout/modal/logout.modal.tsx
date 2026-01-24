import { AlertCircle } from "lucide-react";

interface LogoutModalProps {
  showLogoutModal: boolean;
  setShowLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
}

const LogoutModal = ({
  showLogoutModal,
  setShowLogoutModal,
  handleLogout,
}: LogoutModalProps) => {
  if (!showLogoutModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fadeIn">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Confirm Logout
          </h3>

          {/* Message */}
          <p className="text-gray-600 mb-8">
            Are you sure you want to logout? You will need to sign in again to
            access your account.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 w-full">
            <button
              onClick={() => setShowLogoutModal(false)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-all cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleLogout}
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
