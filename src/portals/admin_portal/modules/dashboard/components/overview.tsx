import {
  Newspaper,
  Calendar,
  Users,
  Plus,
  CheckCircle,
} from "lucide-react";
import { CiChat1 } from "react-icons/ci";

export default function DashboardOverview() {
  const stats = [
    {
      id: 1,
      value: "24",
      label: "Published News",
      icon: Newspaper,
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      id: 2,
      value: "8",
      label: "Upcoming Events",
      icon: Calendar,
      bgColor: "bg-[#0B254521]",
      iconColor: "text-[#0B2545]",
    },
    {
      id: 3,
      value: "9",
      label: "Pending Testimonies",
      icon: CiChat1,
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      id: 4,
      value: "224",
      label: "Active Students",
      icon: Users,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  const quickActions = [
    { id: 1, label: "Create New News Post", icon: Plus },
    { id: 2, label: "Add New Event", icon: Plus },
    { id: 3, label: "Review Pending Testimonies", icon: CheckCircle },
  ];

  const recentActivity = [
    {
      id: 1,
      title: "New news post published",
      time: "2 hours ago",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: 'Event "Chapel Service" updated',
      time: "5 hours ago",
      color: "bg-red-500",
    },
    {
      id: 3,
      title: "Testimony approved",
      time: "1 day ago",
      color: "bg-purple-500",
    },
  ];

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
              <div
                key={stat.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
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
              </div>
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
                  <button
                    key={action.id}
                    className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {action.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div
                    className={`w-2 h-2 ${activity.color} rounded-full mt-2 shrink-0`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 font-medium">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
