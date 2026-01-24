import { User, FileText, Calendar, Inbox, Search } from "lucide-react";

const emptyStates = {
  testimonies: {
    icon: User,
    title: (tab: string) => `No ${tab} testimonies found`,
    description:
      "When students submit testimonies, they will appear here for review.",
    action: "Refresh Page",
  },
  news: {
    icon: FileText,
    title: () => "No news posts yet",
    description: "Start creating engaging news content for your students.",
    action: "Create First Post",
  },
  events: {
    icon: Calendar,
    title: () => "No upcoming events",
    description: "Schedule your first event to keep students informed.",
    action: "Add New Event",
  },
  general: {
    icon: Inbox,
    title: () => "Nothing here yet",
    description: "Check back later for updates.",
    action: null,
  },
  search: {
    icon: Search,
    title: () => "No results found",
    description: "Try adjusting your search or filter criteria.",
    action: "Clear Filters",
  },
};

export const EmptyState = ({
  type = "general",
  tab = "",
}: {
  type?: keyof typeof emptyStates;
  tab?: string;
}) => {
  const state = emptyStates[type];
  const Icon = state.icon;

  return (
    <div className="flex items-center justify-center min-h-[300px] px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <Icon className="w-10 h-10 text-gray-400" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {state.title(tab)}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {state.description}
        </p>

        {state.action && (
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
            {state.action}
          </button>
        )}
      </div>
    </div>
  );
};
