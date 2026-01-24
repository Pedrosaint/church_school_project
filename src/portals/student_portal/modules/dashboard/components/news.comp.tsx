import { useState } from "react";
import { Bell, BookOpen, Megaphone, X } from "lucide-react";

export default function NewsUpdatesComponent() {
  const [showReminder, setShowReminder] = useState(true);

  const newsItems = [
    {
      id: 1,
      title: "Spring 2025 Registration Now Open",
      excerpt:
        "Complete your course registration before the deadline to secure your spot in all classes.",
      date: "December 1, 2025",
      tag: "Academics",
      tagColor: "bg-[#0B25452E] text-[#0B2545",
      icon: BookOpen,
      iconBg: "bg-[#0B2545]",
    },
    {
      id: 2,
      title: "Special Chapel Service this Friday",
      excerpt:
        "Join us for a special chapel service with guest speaker Rev. Dr. Sarah Johnson at 10:00 AM.",
      date: "December 15, 2025",
      tag: "Events",
      tagColor: "bg-[#D4A34A2E] text-[#D4A34A]",
      icon: Megaphone,
      iconBg: "bg-[#D4A34A]",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Welcome back, John Doe
          </h1>
          <p className="text-gray-600">Wednesday, December 3, 2025</p>
        </div>

        {/* Important Reminder Banner */}
        {showReminder && (
          <div className="bg-[#D4A34A1F] border border-[#D4A34A] rounded-2xl p-4 mb-8 relative">
            <button
              onClick={() => setShowReminder(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#D4A34A] rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1 pr-8">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Important Reminder
                </h3>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">
                    Late Registration Deadline:
                  </span>{" "}
                  January 15, 2025. Complete your course registration to avoid
                  additional fees.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* News & Updates Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              News & Updates
            </h2>
            <button className="text-[#0B2545] text-sm font-medium">
              View all
            </button>
          </div>

          <div className="space-y-4">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div
                      className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-gray-900 text-base">
                        {item.title}
                      </h3>
                      <span
                        className={`${item.tagColor} px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
