const activities = [
  {
    title: "Application submitted",
    actor: "System",
    time: "2024-12-16 14:30",
    description: "Application received via online portal",
  },
  {
    title: "Documents uploaded",
    actor: "Sarah Okonkwo",
    time: "2024-12-16 15:00",
    description: "All required documents submitted",
  },
  {
    title: "Reviewer assigned",
    actor: "Admin Office",
    time: "2024-12-17 09:15",
    description: "Assigned to Dr. Emmanuel Akinola",
  },
  {
    title: "Status changed",
    actor: "Dr. Emmanuel Akinola",
    time: "2024-12-17 11:30",
    description: "Changed from Pending to Under Review",
  },
  {
    title: "Notes added",
    actor: "Dr. Emmanuel Akinola",
    time: "2024-12-17 14:45",
    description: "Requested clarification on academic transcript",
  },
  {
    title: "Document verified",
    actor: "Admin Office",
    time: "2024-12-17 15:00",
    description: "Academic transcript verified",
  },
];

const ActivityTimeline = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="font-semibold text-gray-900 mb-6">Activity Timeline</h3>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            {/* Timeline indicator */}
            <div className="relative flex flex-col items-center">
              <span className="h-3 w-3 rounded-full bg-gray-800 mt-1" />
              {index !== activities.length - 1 && (
                <span className="absolute top-4 h-full w-px bg-gray-200" />
              )}
            </div>

            {/* Content */}
            <div className="text-sm">
              <p className="font-medium text-gray-900">{activity.title}</p>

              <p className="text-xs text-gray-500 mt-0.5">
                {activity.actor} • {activity.time}
              </p>

              <p className="text-gray-600 mt-1">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
