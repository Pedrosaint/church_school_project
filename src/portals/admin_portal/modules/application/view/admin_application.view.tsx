import { Outlet } from "react-router-dom";

export default function AdminApplicationView() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Outlet />
    </div>
  );
}
