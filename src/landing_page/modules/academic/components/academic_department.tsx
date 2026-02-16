import { useState } from "react";
import {
  ChevronDown,
  Download,
  ExternalLink,
} from "lucide-react";
import { BalanceIcon, BookIcon, CalenderIcon, CrossIcon, FileIcon, LoveIcon, SheiveIcon } from "../../../../assets/icons/svg_icons";
import OpenCoursesModal from "../modal/open_courses.modal";
import { DepartmentCourseMap } from "../data/department_courses.data";

interface AcademicDepartmentProps {
  searchQuery: string;
  selectedLevel: string;
  selectedDept: string;
}

const AcademicDepartment = ({
  searchQuery,
  selectedLevel,
  selectedDept,
}: AcademicDepartmentProps) => {
  const [openCourses, setOpenCourses] = useState(false);
  const [selectedDeptId, setSelectedDeptId] = useState<number | null>(null);

  const departments = [
    {
      id: 1,
      icon: CrossIcon,
      title: "Theology",
      description:
        "Comprehensive study of systematic theology, biblical interpretation, and pastoral ministry.",
      tags: [
        "Pastoral Theology",
        "Old Testament Studies",
        "New Testament Studies",
        "Church Leadership & Governance",
      ],
    },
    {
      id: 2,
      icon: BookIcon,
      title: "Religion & Religious Studies",
      description:
        "Exploration of world religions, religious education, ethics, and pastoral care in diverse contexts.",
      tags: [
        "Religious Education",
        "African Traditional Religion",
        "Ethics",
        "Pastoral Counselling",
      ],
    },
    {
      id: 3,
      icon: LoveIcon,
      title: "Christian Education & Psychology",
      description:
        "Integrating Christian principles with educational theory, counseling psychology, and guidance.",
      tags: [
        "Counselling Psychology",
        "Christian Education",
        "Guidance & Counselling",
      ],
    },
    {
      id: 4,
      icon: SheiveIcon,
      title: "Library & Information Studies",
      description:
        "Professional training in library management, information systems, and theological research resources.",
      tags: [
        "Library Management",
        "Information Sciences",
        "Theological Research Methods",
      ],
    },
    {
      id: 5,
      icon: BalanceIcon,
      title: "Law & English",
      description:
        "Study of civil law, legal principles, and English language & literary studies for ministry and society.",
      tags: ["Civil Law", "English & Literary Studies", "Legal Ethics"],
    },
  ];

  const quickLinks = [
    {
      icon: CalenderIcon,
      title: "Academic Calendar",
      subtitle: "View important dates and deadlines",
      isBook: false,
      path: "/academic-calendar",
    },
    {
      icon: FileIcon,
      title: "Academic Policies",
      subtitle: "Rules and regulations for students",
      isBook: false,
      path: "/academic-policies",
    },
    {
      icon: BookIcon,
      title: "Student Handbook",
      subtitle: "Comprehensive guide for students",
      isBook: true,
      path: "/student-handbook",
    },
  ];

  const programs = [
    {
      title: "B.A. in Religious & Cultural Studies",
      duration: "4-year program",
      type: "Full-time",
      level: "Undergraduate",
      description:
        "Comprehensive undergraduate degree combining theology, cultural studies and practical ministry training",
    },
    {
      title: "Master's Degree",
      duration: "2-4 year program",
      type: "Multiple specialization",
      level: "Masters",
      description:
        "Advanced degree in Biblical Studies, Theology, Missions, Christian Education, and Counselling Psychology.",
    },
    {
      title: "Short/Certificate Programs",
      duration: "1-2 years program",
      type: "Focused ministry training",
      level: "Certificate",
      description:
        "Intensive certificate programs for working pastors and ministry leaders seeking specialized skills.",
    },
  ];

  const filteredDepartments = departments.filter((dept) => {
    const matchesDept =
      selectedDept === "All Departments" || dept.title === selectedDept;

    // Filter by Level: Check if the department offers courses at the selected level
    const deptCourses = DepartmentCourseMap[dept.id] || [];
    const matchesLevel =
      selectedLevel === "All Levels" ||
      deptCourses.some((course) => {
        if (selectedLevel === "Masters") {
          return course.level === "Master's" || course.level === "Masters";
        }
        return course.level === selectedLevel;
      });

    const matchesSearch =
      dept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesDept && matchesLevel && matchesSearch;
  });


  const filteredPrograms = programs.filter((program) => {
    const matchesLevel =
      selectedLevel === "All Levels" || program.level === selectedLevel;
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <section className="bg-[#F6F7F9] py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-8">
          {/* Left Column - Departments */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5">
              <h2 className="text-3xl font-bold text-gray-900">
                Academic Departments
              </h2>
              <span className="text-gray-600 font-medium font-inter">
                {filteredDepartments.length} Departments
              </span>
            </div>

            {/* Department Cards */}
            {filteredDepartments.length > 0 ? (
              filteredDepartments.map((dept) => (
                <div key={dept.id}>
                  <div className="bg-[#0B2545] p-7 text-white">
                    <div className="flex items-start gap-4 mb-2 lg:mb-4">
                      <div
                        className={`bg-[#D4A34A] w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0`}
                      >
                        <dept.icon fill="white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold">{dept.title}</h3>
                        <p className="text-blue-100 text-sm leading-relaxed font-inter hidden lg:block">
                          {dept.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed font-inter lg:hidden mb-2">
                      {dept.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 font-inter mb-4">
                      {dept.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-[#203c5f] border border-[#FFFFFF] rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => {
                        setSelectedDeptId(dept.id);
                        setOpenCourses(true);
                      }}
                      className="flex items-center gap-2 bg-[#D4A34A] text-white px-4 py-2.5 rounded-lg font-semibold transition-all cursor-pointer font-inter"
                    >
                      <span>View Courses</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="rounded-b-2xl bg-white border-2 border-gray-100 py-5 mb-6 shadow-md" />
                </div>
              ))
            ) : (
              <div className="bg-white p-12 rounded-2xl text-center shadow-md">
                <p className="text-gray-500 text-lg">
                  No departments found matching your criteria.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900 mb-6 font-inter">
                Quick Links
              </h3>
              <div className="space-y-4">
                {quickLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 bg-[#D4A34A] rounded-lg flex items-center justify-center shrink-0">
                      {link.isBook ? (
                        <BookIcon width={18} height={20} fill="white" />
                      ) : (
                        <link.icon className="w-5 h-5 text-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 font-inter">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {link.title}
                      </h4>
                      <p className="text-xs text-gray-600">{link.subtitle}</p>
                    </div>
                    <button
                      onClick={() => window.open(link.path, "_blank")}
                      className="cursor-pointer"
                    >
                      <ExternalLink className="w-6 h-6 text-gray-400 shrink-0" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Brochure */}
            <div className="bg-[#D4A34A1C] rounded-3xl p-6 border border-[#D4A34A]">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#0B2545] rounded-full flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl text-[#0B25459E] text-center mb-3 font-inter">
                Request Academic Brochure
              </h3>

              <p className="text-lg text-[#0B25459E] text-center mb-6 leading-relaxed font-inter">
                Get detailed information about all our programs, admission
                requirements, and campus life.
              </p>

              <button className="w-full flex items-center justify-center gap-2 bg-[#D4A34A] text-white px-6 font-inter py-3 shadow rounded-xl font-semibold transition-all">
                <Download className="w-5 h-5" />
                Request Brochure
              </button>

              <p className="text-lg text-gray-500 text-center mt-4 font-inter">
                Instant download • Updated Nov 2024
              </p>
            </div>

            {/* Program Highlights */}
            <div className="bg-[#0B2545] rounded-2xl p-6 text-white font-inter">
              <h3 className="text-xl font-medium mb-6">Program Highlights</h3>

              <div className="space-y-6">
                {filteredPrograms.length > 0 ? (
                  filteredPrograms.map((program, idx) => (
                    <div
                      key={idx}
                      className="pb-6 border-b border-white last:border-0 last:pb-0"
                    >
                      <h4 className={`font-medium mb-2 text-[#D4A34A]`}>
                        {program.title}
                      </h4>
                      <p className="text-sm text-blue-100 mb-2">
                        {program.duration} • {program.type}
                      </p>
                      <p className="text-xs text-blue-200 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-blue-200">No programs match your search.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Modal */}
      {openCourses && (
        <OpenCoursesModal
          open={openCourses}
          setOpen={setOpenCourses}
          deptId={selectedDeptId}
        />
      )}
    </section>
  );
};


export default AcademicDepartment;
