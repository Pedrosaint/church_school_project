import { Outlet } from "react-router-dom";
import  Header  from "./header";
import Footer from "./footer";


const MainLayout = () => {
  return (
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
  );
};

export default MainLayout;
