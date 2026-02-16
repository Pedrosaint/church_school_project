import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

interface AcademicSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  selectedDept: string;
  setSelectedDept: (dept: string) => void;
}

import { levelOptions, departmentOptions } from "../../../../general/context/SearchOptions";

const AcademicSearch = ({
  searchQuery,
  setSearchQuery,
  selectedLevel,
  setSelectedLevel,
  selectedDept,
  setSelectedDept,
}: AcademicSearchProps) => {
  const [levelOpen, setLevelOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  return (
    <div className="bg-white py-8 px-4 mt-32 md:mt-39">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center relative">
            {/* Search Input */}
            <div className="flex-1 w-full relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, programs or keywords..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A34A] focus:border-transparent text-sm"
              />
            </div>

            {/* ALL LEVELS DROPDOWN */}
            <div className="w-full sm:w-auto relative">
              <button
                onClick={() => setLevelOpen((p) => !p)}
                className="w-full sm:w-40 px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-between text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                  <span>{selectedLevel}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {levelOpen && (
                <div className="absolute mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-full sm:w-40 z-20">
                  {levelOptions.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSelectedLevel(item);
                        setLevelOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ALL DEPARTMENTS DROPDOWN */}
            <div className="w-full sm:w-auto relative">
              <button
                onClick={() => setDeptOpen((p) => !p)}
                className="w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-between text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                <span>{selectedDept}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {deptOpen && (
                <div className="absolute mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-full sm:w-48 z-20">
                  {departmentOptions.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSelectedDept(item);
                        setDeptOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicSearch;
