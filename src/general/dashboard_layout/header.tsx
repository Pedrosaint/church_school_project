import { Menu } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface HeaderProps {
  setMobileOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setMobileOpen }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const displayName = user?.name ?? "Guest";
  const role = user?.role ?? "";

  // 🔥 Generate initials from name
  let initials = "GU";

  if (user?.name) {
    const nameParts = user.name.split(" ").filter(Boolean);

    if (nameParts.length >= 2) {
      initials = (nameParts[0][0] + nameParts[1][0]).toUpperCase();
    } else {
      initials = user.name.slice(0, 2).toUpperCase();
    }
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
        {/* Mobile Menu */}
        <button className="md:hidden p-3" onClick={() => setMobileOpen?.(true)}>
          <Menu className="w-6 h-6 text-slate-800" />
        </button>

        {/* Welcome Section */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-slate-800">
            Welcome back, {displayName}
          </h2>
          <p className="text-xs text-slate-500 mt-1">{formatted}</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {user && (
            <div className="text-right hidden md:block">
              <div className="text-sm font-medium capitalize">
                {displayName}
              </div>
              <div className="text-xs text-slate-500 capitalize">{role}</div>
            </div>
          )}

          <div className="w-10 h-10 rounded-full bg-[#0A2240] flex items-center justify-center">
            <span className="text-sm font-medium text-white">{initials}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
