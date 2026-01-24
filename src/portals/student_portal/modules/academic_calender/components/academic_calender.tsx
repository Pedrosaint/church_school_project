import { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays, Clock } from "lucide-react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameDay,
  isToday,
} from "date-fns";

export default function AcademicsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate all calendar days dynamically
  const generateCalendar = (date: Date) => {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(monthStart);
    const weekStart = startOfWeek(monthStart);
    const weekEnd = endOfWeek(monthEnd);

    const days = [];
    let day = weekStart;

    while (day <= weekEnd) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(day);
        day = addDays(day, 1);
      }
      days.push(week);
    }

    return days;
  };

  const calendarDays = generateCalendar(currentDate);

  const upcomingEvents = [
    {
      id: 1,
      title: "Late Registration Deadline",
      date: "Jan 15",
      tag: "Deadline",
      tagColor: "bg-red-100 text-red-700",
    },
    {
      id: 2,
      title: "Assignment Due: Theology",
      date: "Jan 15",
      tag: "Academics",
      tagColor: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Welcome back, John Doe
          </h1>

          <p className="text-gray-600">
            {format(new Date(), "EEEE, MMMM d, yyyy")}
          </p>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Calendar Header */}
          <div className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Academics Calendar</h2>
            </div>
            <button className="p-1 hover:bg-slate-700 rounded">
              <CalendarDays className="w-5 h-5" />
            </button>
          </div>

          {/* Month Navigation */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <button
              onClick={() => setCurrentDate(subMonths(currentDate, 1))}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <h3 className="text-lg font-semibold text-gray-900">
              {format(currentDate, "MMMM yyyy")}
            </h3>

            <button
              onClick={() => setCurrentDate(addMonths(currentDate, 1))}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="px-6 py-4">
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {["S", "M", "T", "W", "TH", "F", "S"].map((day, idx) => (
                <div
                  key={idx}
                  className="text-center text-sm font-medium text-gray-600 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="space-y-2">
              {calendarDays.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-cols-7 gap-2">
                  {week.map((day, idx) => {
                    const isCurrentMonth =
                      day.getMonth() === currentDate.getMonth();

                    return (
                      <div
                        key={idx}
                        className={`
                          text-center py-3 text-sm rounded-lg
                          ${
                            isSameDay(day, currentDate)
                              ? "bg-[#D4A34A] text-white font-semibold"
                              : isToday(day)
                              ? "bg-gray-200 text-gray-900 font-medium"
                              : isCurrentMonth
                              ? "text-gray-700 hover:bg-gray-100 cursor-pointer"
                              : "text-gray-300"
                          }
                        `}
                      >
                        {format(day, "d")}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Dates */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-gray-600" />
              <h3 className="text-base font-semibold text-gray-900">
                Upcoming Dates
              </h3>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-600">{event.date}</p>
                  </div>

                  <span
                    className={`${event.tagColor} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {event.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* View Full Calendar */}
          <div className="px-6 py-4 border-t border-gray-200">
            <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
