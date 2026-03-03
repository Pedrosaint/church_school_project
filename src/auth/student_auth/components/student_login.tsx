/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { loginSuccess } from "../../slice/auth.slice";
import { useStudentLoginMutation } from "../../admin_auth/api/authApi";
import { setSecureItem } from "../../../utils/secureStorage";


const StudentLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [studentLogin, { isLoading }] = useStudentLoginMutation();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    try {
      const response = await studentLogin({ email }).unwrap();
      const { token, admission } = response.data;

      setSecureItem("token", token);

      // Update Redux auth state
      dispatch(
        loginSuccess({
          name: `${admission.firstname} ${admission.surname}`,
          role: "student",
          token,
        }),
      );

      toast.success(response.message || "Login successful!");

      navigate("/dashboard/news");
    } catch (error: any) {
      const message = error?.data?.message ?? "Something went wrong";

      if (message.toLowerCase().includes("pending")) {
        toast.warning(message);
      } else {
        toast.error(message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-[#0A2240] text-2xl font-semibold font-inter">
        <Link to="/">Return to Home</Link>
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Student Portal Login
          </h1>
          <p className="text-gray-600 font-inter">
            Welcome back! Please sign in to your account
          </p>
        </div>

        <form onSubmit={handleLogin} className="font-inter">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#D4A34A] hover:bg-[#C09340] text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer disabled:opacity-70"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <div className="mt-6">
            <a
              href="#"
              className="text-gray-700 hover:text-amber-600 text-sm font-medium underline transition-colors"
            >
              Need Help?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;