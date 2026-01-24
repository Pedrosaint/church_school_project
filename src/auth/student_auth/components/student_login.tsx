import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { loginSuccess } from "../../slice/auth.slice";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [matricNumber, setMatricNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


   const handleMockLogin = () => {
    dispatch(
      loginSuccess({
        role: "student",  // or "admin"
      })
    );
      navigate("/dashboard/news");
      toast.success("Login successful!");
  };

  // const handleLogin = (e: any) => {
  //   e.preventDefault();
  //   // Handle login logic here
  //   console.log("Login attempted with:", { matricNumber, password });
  //   navigate("/dashboard/news");
  //   toast.success("Login successful!");
  // };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <h1 className="absolute top-15 left-1/2 transform -translate-x-1/2 text-[#0A2240] text-2xl font-semibold font-inter">
        <Link to="/">Return to Home</Link>
      </h1>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Student Portal Login
          </h1>
          <p className="text-gray-600 font-inter">
            Welcome back! Please sign in to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleMockLogin} className="font-inter">
          {/* Matric Number Field */}
          <div className="mb-6">
            <label
              htmlFor="matricNumber"
              className="block text-gray-700 font-medium mb-2"
            >
              Matric Number
            </label>
            <input
              type="text"
              id="matricNumber"
              value={matricNumber}
              onChange={(e) => setMatricNumber(e.target.value)}
              placeholder="Theo/waggom/25/123"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  outline-none  transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="mynameis"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  outline-none  transition-all"
            />
          </div>

          {/* Forget Password Link */}
          <div className="text-right mb-6">
            <button
              type="button"
              onClick={() => navigate("/student/portal/forgot-password")}
              className="text-gray-700 hover:text-amber-600 text-sm font-medium transition-colors cursor-pointer"
            >
              Forget Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            onClick={handleMockLogin}
            className="w-full bg-[#D4A34A] hover:bg-[#C09340] text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Login
          </button>

          {/* Need Help Link */}
          <div className=" mt-6">
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
