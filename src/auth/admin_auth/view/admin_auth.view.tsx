import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ImageSlider from "../../../general/ui/ImageSlider";

const AdimAuthView: React.FC = () => {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  // State to track screen size
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Listen for window resize
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col relative">
      <h1 className="absolute top-15 left-50 lg:left-60 xl:left-90 transform -translate-x-1/2 text-[#0A2240] text-2xl font-semibold font-inter">
        <Link to="/">Return to Home</Link>
      </h1>
      <div className="flex flex-1 lg:overflow-hidden">
        {/* Left Section - Login/Register Form */}
        {isLargeScreen ? (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isSignup ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full xl:w-1/2 flex items-center justify-center"
          >
            <div className="w-full max-w-xl px-4">
              <Outlet />
            </div>
          </motion.div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <Outlet />
          </div>
        )}

        {/* Right Section - Image Slider (only on large screens) */}
        {isLargeScreen && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isSignup ? "-100%" : "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-1/2 hidden xl:flex items-center justify-center"
          >
            <ImageSlider />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdimAuthView;
