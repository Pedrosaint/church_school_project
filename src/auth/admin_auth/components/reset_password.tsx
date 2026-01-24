import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
// import { toast } from "react-toastify";


const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [, setPassword] = useState<string>("");
  const navigate = useNavigate();


  const handleBackToLogin = () => {
    navigate("/admin/portal");
  };

  const handleReset = () => {
    navigate("/admin/portal");
  };

  // Toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full masx-w-xl p-5 lg:mt-14 max-w-md font-inter">
      {/* Large Screen Gradient */}
      <div className="custom-gradient hidden sm:block"></div>
      {/* Small Screen Gradient */}
      <div className="sm-custom-gradient sm:hidden"></div>

      {/* Left Section - Login Form */}
      <p
        onClick={handleBackToLogin}
        className="text-md text-gray-800 flex items-center gap-1 cursor-pointer"
      >
        <button className="cursor-pointer">
          <IoIosArrowBack size={20} />
        </button>
        Back to login
      </p>

      <h2 className="text-3xl font-semibold text-gray-900 mt-3">
        Set a Password
      </h2>
      <p className="text-base text-gray-500 mt-3">
        Your previous password has been reseted. Please set a new password for
        your account
      </p>

      <form className="mt-6 space-y-5">
        {/* Password Field-1 */}
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
            <label className="block text-sm font-medium mb-1">
              Create Password
            </label>
            <button
              type="button"
              className="absolute right-2 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        {/* Password Field-2 */}
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
            <label className="block text-sm font-medium mb-1">
              Re-Enter Password
            </label>
            <button
              type="button"
              className="absolute right-2 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleReset}
          className="w-full bg-[#D4A95E] text-white py-3 rounded-sm font-semibold hover:bg-[#D4A95E]/90 transition cursor-pointer"
        >
          Set password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
