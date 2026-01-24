import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LogOut, X } from "lucide-react";
import { adminMenu, userMenu } from "../../lib/sidebar_links";
import LogoutModal from "./modal/logout.modal";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/icons/WATHS LOGO 2.svg";

type MenuItem = {
  label: string;
  path: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Sidebar({
  role,
  mobileOpen,
  setMobileOpen,
}: {
  role: string;
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const menu: MenuItem[] = role === "admin" ? adminMenu : userMenu;

  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate(role === "admin" ? "/admin/portal" : "/student/portal/login");
  };

  // Sidebar body content (we reuse for desktop + mobile)
  const SidebarContent = (
    <div className="w-66 bg-[#0B2545] min-h-screen flex flex-col font-inter p-3">
      {/* Logo */}
      <div className="mb-8 relative">
        <div className="w-30 h-30 bg-white rounded-full absolute -top-10 right-39 flex items-center justify-center shadow-md">
          <span className="text-slate-900 text-lg font-medium">
            <img src={Logo} alt="WAGGOM Logo" />
          </span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2 mt-20">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setMobileOpen && setMobileOpen(false)} // Close on select
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-white text-slate-900 font-semibold shadow-sm"
                  : "text-white hover:bg-slate-600"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.icon && (
                  <item.icon
                    className={`w-5 h-5 ${
                      isActive ? "text-[#D4A34A]" : "text-white"
                    }`}
                  />
                )}
                <span className="text-sm">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-4 md:static sticky bottom-0 bg-[#0B2545]">
        <button
          onClick={() => setLogoutModal(true)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#0B2545] bg-white hover:bg-gray-100 transition shadow-lg"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>

      {logoutModal && (
        <LogoutModal
          showLogoutModal={logoutModal}
          setShowLogoutModal={setLogoutModal}
          handleLogout={handleLogout}
        />
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">{SidebarContent}</div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen?.(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 z-50 md:hidden"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setMobileOpen?.(false)}
              >
                <X className="w-6 h-6" />
              </button>

              {SidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
