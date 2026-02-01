/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Newspaper, Calendar, Users, Plus, CheckCircle } from "lucide-react";
import { CiChat1 } from "react-icons/ci";
import { useGetNewsQuery } from "../../news/api/news.api";
import { useGetEventsQuery } from "../../events/api/event.api";
import { useGetTestimoniesQuery } from "../../testimonies/api/testimonies.api";
import { useGetApplicationsQuery } from "../../application/api/application.api";

export default function DashboardOverview() {
  const navigate = useNavigate();
  // fetch counts and recent items
  const { data: newsResp } = useGetNewsQuery();
  const { data: eventsResp } = useGetEventsQuery();
  const { data: pendingTestimoniesResp } = useGetTestimoniesQuery({
    status: "pending",
  });
  const { data: allTestimoniesResp } = useGetTestimoniesQuery();

  const newsCount = newsResp?.data?.length ?? 0;
  const eventsCount = eventsResp?.data?.length ?? 0;
  const pendingTestimoniesCount = pendingTestimoniesResp?.data?.length ?? 0;
  const { data: applicationsResp } = useGetApplicationsQuery();
  const activeStudentsCount = applicationsResp?.data?.length ?? 0;

  const stats = [
    {
      id: 1,
      value: String(newsCount),
      label: "Published News",
      icon: Newspaper,
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      id: 2,
      value: String(eventsCount),
      label: "Upcoming Events",
      icon: Calendar,
      bgColor: "bg-[#0B254521]",
      iconColor: "text-[#0B2545]",
    },
    {
      id: 3,
      value: String(pendingTestimoniesCount),
      label: "Pending Testimonies",
      icon: CiChat1,
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      id: 4,
      value: String(activeStudentsCount),
      label: "Active Students",
      icon: Users,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  const quickActions = [
    {
      id: 1,
      label: "Create New News Post",
      icon: Plus,
      path: "/dashboard/admin-news/create",
    },
    {
      id: 2,
      label: "Add New Event",
      icon: Plus,
      path: "/dashboard/events/create",
    },
    {
      id: 3,
      label: "Review Pending Testimonies",
      icon: CheckCircle,
      path: "/dashboard/testimonies",
    },
  ];

  // build recent activity list from fetched data
  const newsItems = (newsResp?.data || []).map((n: any) => ({
    id: `news-${n.id}`,
    title: n.title,
    date: n.createdAt,
    type: "news",
  }));

  const eventItems = (eventsResp?.data || []).map((e: any) => ({
    id: `event-${e.id}`,
    title: e.title,
    date: e.date || e.createdAt,
    type: "event",
  }));

  const testimonyItems = (allTestimoniesResp?.data || []).map((t: any) => ({
    id: `testimony-${t.id}`,
    title: `${t.name} submitted a testimony`,
    date: t.createdAt,
    type: "testimony",
  }));

  const allActivities = [...newsItems, ...eventItems, ...testimonyItems]
    .filter((a) => a.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  const currentTime = useMemo(() => Date.now(), []);

  const timeAgo = (dateStr: string | undefined) => {
    if (!dateStr) return "";
    const d = new Date(dateStr).getTime();
    const diff = currentTime - d;
    const mins = Math.floor(diff / (1000 * 60));
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Dashboard Overview
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={action.id}
                    whileHover={{ x: 5 }}
                    onClick={() => navigate(action.path)}
                    className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {action.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4 max-h-44 overflow-y-auto pr-2">
              {allActivities.map((activity) => {
                const color =
                  activity.type === "news"
                    ? "bg-blue-500"
                    : activity.type === "event"
                      ? "bg-red-500"
                      : "bg-purple-500";
                return (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 ${color} rounded-full mt-2 shrink-0`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 font-medium">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {timeAgo(activity.date)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
