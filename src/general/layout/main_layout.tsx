import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { SearchProvider } from "../context/SearchContext";

const MainLayout = () => {
  return (
    <SearchProvider>
      <div className="flex min-h-screen flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SearchProvider>
  );
};


export default MainLayout;
