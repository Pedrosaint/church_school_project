import { Calendar, File, Newspaper,type LucideIcon } from "lucide-react";
import { CiChat1 } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";

export const adminMenu = [
  { label: "Dashboard", path: "/dashboard/overview", icon: MdOutlineDashboard },
  { label: "News", path: "/dashboard/admin-news", icon: Newspaper },
  { label: "Events", path: "/dashboard/events",icon: Calendar },
  { label: "Testimonies", path: "/dashboard/testimonies", icon: CiChat1 },
  { label: "Application", path: "/dashboard/application", icon: File },
];

export interface MenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const userMenu: MenuItem[] = [
  { label: "News", path: "/dashboard/news", icon: Newspaper },
  { label: "Academic Calendar", path: "/dashboard/calendar", icon: Calendar },
];
