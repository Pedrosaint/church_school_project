/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import { useState } from "react";

const DashboardLayout = () => {
  const user = useSelector((state: any) => state.auth.user);

  // Mobile Sidebar State
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar role={user?.role} />
      </div>

      {/* Mobile Sidebar Drawer */}
      <div className="md:hidden">
        <Sidebar
          role={user?.role}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header role={user?.role} setMobileOpen={setMobileOpen} user={user} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-full px-3 py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
