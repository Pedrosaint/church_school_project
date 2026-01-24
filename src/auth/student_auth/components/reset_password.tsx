/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const StudentResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Password reset successful!");
    console.log("Resetting password");
    navigate("/student/portal/login");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-[#0A2240] text-2xl font-semibold font-inter">
        <Link to="/">Return to Home</Link>
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Reset Password
          </h1>
          <p className="text-gray-600 font-inter">
            Enter your new password to continue
          </p>
        </div>

        <form onSubmit={handleReset} className="font-inter">
          {/* New Password */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2">
              New Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-14 -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>

            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-12 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-14 -translate-y-1/2 text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4A34A] hover:bg-[#C09340] text-white px-8 py-3 rounded-lg font-medium cursor-pointer"
          >
            Reset Password
          </button>

          <div className="mt-6 text-center">
            <Link
              to="/student/portal/login"
              className="text-gray-700 hover:text-amber-600 text-sm font-medium underline cursor-pointer"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentResetPassword;
