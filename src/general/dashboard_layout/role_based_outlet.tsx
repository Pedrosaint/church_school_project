/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RoleBasedOutlet = () => {
  const user = useSelector((state: any) => state.auth.user);

  if (!user) return <Navigate to="/student/portal/login" />;

  // Student home page
  if (user.role === "student") {
    return <Outlet context={{ role: "student" }} />;
  }

  // Admin home page
  if (user.role === "admin") {
    return <Outlet context={{ role: "admin" }} />;
  }
};

export default RoleBasedOutlet;
