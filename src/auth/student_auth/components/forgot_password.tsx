/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const StudentForgotPassword = () => {
  const navigate = useNavigate();
  const [matricNumber, setMatricNumber] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Mock API call
    toast.success("Verification code sent to your email!");
    navigate("/student/portal/verify-code");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-[#0A2240] text-2xl font-semibold font-inter">
        <Link to="/">Return to Home</Link>
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Forgot Password
          </h1>
          <p className="text-gray-600 font-inter">
            Enter your Email to receive a reset code
          </p>
        </div>

        <form onSubmit={handleSubmit} className="font-inter">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
             Email
            </label>
            <input
              type="text"
              value={matricNumber}
              onChange={(e) => setMatricNumber(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4A34A] hover:bg-[#C09340] text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Send Code
          </button>

          <div className="mt-6 text-center">
            <Link
              to="/student/portal/login"
              className="text-gray-700 hover:text-amber-600 text-sm font-medium underline"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForgotPassword;
