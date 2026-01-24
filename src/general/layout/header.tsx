import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../../lib/nav_links";
import { ChevronDown, Menu, SearchIcon, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  // Handle routes with hash scrolling logic
  const handleScrollNavigation = (path: string) => {
    const [route, hash] = path.split("#");

    navigate(route);

    setTimeout(() => {
      if (hash) {
        const section = document.getElementById(hash);
        if (!section) return;

        const yOffset = -160;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <figure
          onClick={() => navigate("/")}
          className="text-xl font-semibold cursor-pointer">
          <img src="/src/assets/icons/WATHS LOGO 2.svg" alt="Church Logo" />
        </figure>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-[#0A2240]" onClick={toggleMobile}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-8 text-[15px] text-[#0A2240]">
          {navLinks.map((link) => {
            interface NavLink {
              name: string;
              path?: string;
              dropdown?: readonly DropdownItem[];
            }

            interface DropdownItem {
              name: string;
              path: string;
            }
            const getActiveClass = (link: NavLink): string => {
              if (link.path) {
                // Special case for HOME
                if (link.path === "/") {
                  return pathname === "/" ? "active" : "";
                }

                // Normal pages
                if (pathname.startsWith(link.path)) return "active";
              }

              if (link.dropdown) {
                const isActive = link.dropdown.some((item) =>
                  pathname.startsWith(item.path.split("#")[0])
                );
                return isActive ? "active" : "";
              }

              return "";
            };

            // DROPDOWN LINKS
            if ("dropdown" in link) {
              return (
                <div key={link.name} className="relative group">
                  <span
                    className={`flex items-center gap-1 cursor-pointer ${getActiveClass(link) ? "text-[#D4A95E] font-semibold" : ""
                      }`}
                  >
                    {link.name} <ChevronDown size={18} />
                  </span>

                  <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 rounded-md w-48 z-20">
                    {link.dropdown.map((item) => (
                      <span
                        key={item.name}
                        className="block py-1 cursor-pointer"
                        onClick={() => handleScrollNavigation(item.path)}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            // NON-DROPDOWN LINKS → they must use scroll navigation too
            return (
              <span
                key={link.name}
                className={`cursor-pointer ${getActiveClass(link) ? "text-[#D4A95E] font-semibold" : ""
                  }`}
                onClick={() => handleScrollNavigation(link.path)}
              >
                {link.name}
              </span>
            );
          })}
        </nav>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden lg:flex">
          {/* <button
            onClick={() => handleScrollNavigation("/more#support-the-ministry")}
            className="px-4 py-2 border border-[#D4A95E] rounded-lg text-[#D4A95E] cursor-pointer"
          >
            Donate
          </button> */}
          <button
            onClick={() =>
              handleScrollNavigation("/admission#online-application")
            }
            className="px-4 py-2 bg-[#D4A95E] rounded-lg text-white cursor-pointer"
          >
            Apply
          </button>
        </div>
      </div>

      {/* ======================================
                MOBILE MENU
      ======================================= */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-[75%] md:w-[50%] bg-white shadow-lg z-40 transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-6 text-[#0A2240] space-y-4">
          {navLinks.map((link) => {
            const isParentActive =
              "dropdown" in link &&
              link.dropdown.some((item) =>
                pathname.startsWith(item.path.split("#")[0])
              );

            // MOBILE DROPDOWN LINKS
            if ("dropdown" in link) {
              return (
                <div key={link.name}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name
                      )
                    }
                    className={`w-full flex justify-between items-center py-2 ${isParentActive ? "text-[#D4A95E] font-semibold" : ""
                      }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${openDropdown === link.name ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {openDropdown === link.name && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <span
                          key={item.name}
                          className="block py-1 cursor-pointer"
                          onClick={() => {
                            handleScrollNavigation(item.path);
                            setMobileOpen(false);
                          }}
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // MOBILE NON-DROPDOWN LINKS
            return (
              <span
                key={link.name}
                className="block py-2 cursor-pointer"
                onClick={() => {
                  handleScrollNavigation(link.path);
                  setMobileOpen(false);
                }}
              >
                {link.name}
              </span>
            );
          })}

          {/* MOBILE BUTTONS */}
          {/* <button
            onClick={() => {
              handleScrollNavigation("/more#support-the-ministry");
              setMobileOpen(false);
            }}
            className="w-full px-4 py-2 border border-[#D4A95E] rounded-lg text-[#D4A95E] cursor-pointer"
          >
            Donate
          </button> */}
          <button
            onClick={() => {
              handleScrollNavigation("/admission#online-application");
              setMobileOpen(false);
            }}
            className="w-full px-4 py-2 bg-[#D4A95E] rounded-lg text-white cursor-pointer"
          >
            Apply
          </button>
        </div>
      </div>

      {/* SEARCH BAR UNDER HEADER */}
      <div className="w-full bg-white shadow-sm border-t border-gray-200 font-inter">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center w-full max-w-2xl self-end rounded-lg border border-gray-300 py-2 px-4 ">
            <SearchIcon className="w-7 h-7 text-[#D4A95E]" />
            <input
              type="text"
              placeholder="Search courses, programs, departments..."
              className="w-full outline-none indent-2"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
