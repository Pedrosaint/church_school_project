/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../slice/auth.slice";
import { useAdminLoginMutation } from "../api/authApi";
import { setSecureItem } from "../../../utils/secureStorage";
import { toast } from "sonner";

const AdminLogin: React.FC = () => {
  const dispatch = useDispatch();
  const [adminLogin, { isLoading }] = useAdminLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const result = await adminLogin({
        email,
        password,
      }).unwrap();

      // Store token in secure storage
      setSecureItem("token", result.data.accessToken);

      // Dispatch login success to Redux
      dispatch(
        loginSuccess({
          role: "admin",
          email,
          token: result.data.accessToken,
        }),
      );

      navigate("/dashboard/overview");
      toast.success("Login successful!");
    } catch (err: any) {
      toast.error(err?.data?.message || "Login failed. Please try again.");
      setError(err?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl p-4 font-inter">
      {/* <div className="custom-gradient hidden sm:block"></div>
      <div className="sm-custom-gradient sm:hidden"></div> */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-[#333333]">Login</h2>
        <p className="text-base text-gray-500 mt-3">
          Login to access the admin account
        </p>
      </motion.div>

      <motion.form
        className="mt-6 space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleLogin}
      >
        {/* Email Field */}
        {error && <p className="text-red-500">{error}</p>}

        <div className="main mt-5">
          <div className="flex items-center relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label className="block text-sm font-medium mb-1">Email</label>
          </div>
        </div>

        {/* Password Field */}
        <div className="relative password-field main">
          <div className="flex items-center relative mt-6">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label className="block text-sm font-medium mb-1">Password</label>
            <button
              type="button"
              className="absolute right-2 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          {/* <button
            type="button"
            className="text-[#0B2545] hover:underline cursor-pointer"
            onClick={() => navigate("forgot-password")}
          >
            Forgot Password?
          </button> */}
        </div>

        {/* AdminLogin Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#D4A95E] text-white py-3 rounded-sm font-semibold hover:bg-[#D4A95E]/90 cursor-pointer transition disabled:opacity-50"
        >
          {isLoading ? "Logging in..." : "AdminLogin"}
        </button>
      </motion.form>

      {/* Sign Up Link */}
      <p className="text-sm text-gray-600 mt-6 text-center">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("signup")}
          className="text-[#0B2545] hover:underline cursor-pointer"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default AdminLogin;
