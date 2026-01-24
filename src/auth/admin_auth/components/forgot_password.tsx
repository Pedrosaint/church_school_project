import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ForgotPassword: React.FC = () => {
    const [, setEmail] = useState<string>("");
    const navigate = useNavigate()

    const handleBackToLogin = () => {
        navigate("/admin/portal")
    }

    const handleSubmit = () => {
      navigate("/admin/portal/verify-code");
    };


  return (
    <div className="w-full max-w-xl p-5 lg:mt-14 lg:p-8 font-inter">
      {/* Large Screen Gradient */}
      <div className="custom-gradient hidden sm:block"></div>
      {/* Small Screen Gradient */}
      <div className="sm-custom-gradient sm:hidden"></div>

      {/* Left Section - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
          <button onClick={handleBackToLogin} className="flex items-center cursor-pointer">
            <IoIosArrowBack size={15} />
            Back to login
          </button>
      </motion.div>

      <h2 className="text-3xl font-semibold text-gray-900 mt-3">
        Forgot your password ?
      </h2>
      <p className="text-base text-gray-500 mt-3">
        Don't worry, happens to all of us. Enter your email below to recover
        your password
      </p>

      <motion.form
        className="mt-6 space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Email Field */}
        <div className="main mt-5">
          <div className="flex items-center relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#D4A95E] text-white py-3 rounded-sm font-semibold hover:bg-[#D4A95E]/90 cursor-pointer transition"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
};

export default ForgotPassword;
