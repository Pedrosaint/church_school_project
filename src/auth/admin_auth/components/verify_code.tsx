import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
// import { toast } from "react-toastify";


const VerifyCode: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleBackToLogin = () => {
    navigate("/admin/portal");
  };

    
    const handleVerify = () => {
        navigate("/admin/portal/reset-password");
    }
  
  // Toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full max-w-xl p-5 lg:mt- lg:p-0 font-inter">
      {/* Large Screen Gradient */}
      <div className="custom-gradient hidden sm:block"></div>
      {/* Small Screen Gradient */}
      <div className="sm-custom-gradient sm:hidden"></div>

      {/* Left Section - Login Form */}
      <button onClick={handleBackToLogin} className="cursor-pointer flex items-center gap-2">
        <IoIosArrowBack size={20} />
        <span className="text-sm"> Back to login</span>
      </button>

      <h2 className="text-3xl font-semibold text-gray-900 mt-3">Verify code</h2>
      <p className="text-base text-gray-500 mt-3">
        An authentication code has been sent to your email.
      </p>

      <form className="mt-6 space-y-5">
        {/* Password Field */}
        <div className="relative password-field main">
          <div className="flex items-center relative mt-6">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder=" "
              required
              onChange={(e) => setPassword(e.target.value)}
              className=""
            />
            <label className="block text-sm font-medium mb-1">Enter Code</label>
            <button
              type="button"
              className="absolute right-2 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600">
            Didn't recieve a code?{" "}
            <button className="text-[#0B2545] hover:underline font-bold cursor-pointer">Resend</button>
          </p>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-[#D4A95E] text-white py-3 rounded-sm font-semibold hover:bg-[#D4A95E]/90 cursor-pointer transition"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyCode;
