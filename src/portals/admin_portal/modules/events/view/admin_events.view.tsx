import { Outlet } from "react-router-dom";

export default function AdminEventsView() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Outlet />
    </div>
  );
}
