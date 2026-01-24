/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const StudentVerifyCode = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", ""]); // 5 digits

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }

    if (!value && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  };

  const handleVerify = (e: any) => {
    e.preventDefault();

    const code = otp.join("");

    if (code.length < 5) {
      toast.error("Enter the 5-digit code");
      return;
    }

    toast.success("Code verified!");
    navigate("/student/portal/reset-password");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-[#0A2240] text-2xl font-semibold font-inter">
        <Link to="/">Return to Home</Link>
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Verify Code</h1>
          <p className="text-gray-600 font-inter">
            Enter the verification code sent to your email
          </p>
        </div>

        <form onSubmit={handleVerify} className="font-inter">
          <div className="mb-6 flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                value={digit}
                maxLength={1}
                placeholder="-"
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp[index] && index > 0) {
                    const prev = document.getElementById(`otp-${index - 1}`);
                    prev?.focus();
                  }
                }}
                className="md:w-16 md:h-16 w-12 h-12 border border-gray-300 rounded-2xl
                  text-center text-xl font-bold
                  focus:outline-none focus:border-primary-color"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4A34A] hover:bg-[#C09340] text-white px-8 py-3 rounded-lg font-medium cursor-pointer"
          >
            Verify
          </button>

          <div className="mt-6 text-center">
            <Link
              to="/forgot-password"
              className="text-gray-700 hover:text-amber-600 text-sm font-medium underline"
            >
              Resend Code
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentVerifyCode;
