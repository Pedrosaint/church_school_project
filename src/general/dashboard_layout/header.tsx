/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu } from "lucide-react";
import React from "react";

const Header: React.FC<{ role?: string; user?: any; setMobileOpen?: any }> = ({
  role = "student",
  user,
  setMobileOpen,
}) => {
  const displayName = user?.name ?? (role === "admin" ? "Admin" : "John Doe");

  // derive avatar initials from email local-part or name
  const emailLocal = String(user?.email || "").split("@")[0] || "";
  let initials = "JD";
  if (emailLocal) {
    const parts = emailLocal.split(/[._-]/).filter(Boolean);
    if (parts.length >= 2) {
      initials = (parts[0][0] + parts[1][0]).toUpperCase();
    } else {
      initials = emailLocal.slice(0, 2).toUpperCase();
    }
  } else if (user?.name) {
    const nameParts = String(user.name).split(" ").filter(Boolean);
    if (nameParts.length >= 2)
      initials = (nameParts[0][0] + nameParts[1][0]).toUpperCase();
    else initials = String(user.name).slice(0, 2).toUpperCase();
  }

  const today = new Date();
  const formatted = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-white border-b border-slate-200 font-inter">
      <div className="px-4 py-4 flex items-start justify-between gap-4">
        <button className="md:hidden p-3" onClick={() => setMobileOpen(true)}>
          <Menu className="w-6 h-6 text-slate-800" />
        </button>

        <div className="flex-1">
          <h2 className="text-lg font-semibold text-slate-800">
            Welcome back, {displayName}
          </h2>
          <p className="text-xs text-slate-500 mt-1">{formatted}</p>
        </div>

        {/* Right: avatar */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium">Waggom Admin</div>
            <div className="text-xs text-slate-500">Admin</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden flex items-center justify-center">
            {/* Replace with <img src={user.avatar} /> */}
            <span className="text-sm font-medium text-white">{initials}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
