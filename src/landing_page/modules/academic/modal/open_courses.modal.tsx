/* eslint-disable @typescript-eslint/no-explicit-any */
import { Download, Clock, Award, BookOpen, X } from "lucide-react";
import { DepartmentCourseMap } from "../data/department_courses.data";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deptId: number | null;
}

const OpenCoursesModal = ({ setOpen , deptId }: ModalProps) => {
  if (deptId === null) {
    return null;
  }

  const courses = DepartmentCourseMap[deptId] ?? [];

  return (
    <div>
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
        {/* MODAL */}
        <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl relative font-inter">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-gray-100 p-5">
            <h2 className="text-2xl font-medium">
              Available Courses{" "}
              <span className="text-gray-600"> ({courses.length})</span>
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* BODY */}
          <div className="p-6 space-y-6">
            {/* DOWNLOAD BUTTON */}
            <div className="flex justify-end">
              <button className="flex items-center gap-2 px-6 py-2.5 border-2 border-gray-600 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all cursor-pointer">
                <Download className="w-5 h-5" />
                Download Syllabus
              </button>
            </div>

            {/* COURSES */}
            <div className="space-y-4">
              {courses.map((course: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-300 rounded-2xl p-6 hover:shadow-md transition-all"
                >
                  {/* HEADER */}
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{course.code}</h3>

                    <span
                      className={`px-3 py-1 rounded  text-xs font-semibold ${
                        course.level === "Undergraduate"
                          ? "bg-blue-100 border border-[#2785F9] text-[#1C82FF]"
                          : course.level === "Master's"
                          ? "bg-purple-100 border border-[#730B88] text-[#7D167E]"
                          : course.level === "Certificate"
                          ? "bg-green-100 border border-[#1C9029] text-[#1C9029]"
                          : ""
                      }`}
                    >
                      {course.level}
                    </span>

                    <span
                      className={`px-3 py-1 rounded text-xs font-semibold ${
                        course.type === "Core"
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-900 border border-gray-300"
                      }`}
                    >
                      {course.type}
                    </span>
                  </div>

                  {/* TITLE + DESCRIPTION */}
                  <h4 className="text-lg font-semibold mb-2">{course.title}</h4>

                  <p className="text-sm text-gray-500 mb-6">
                    {course.description}
                  </p>

                  {/* COURSE DETAILS */}
                  <div className="flex flex-wrap items-center gap-5 lg:gap-20 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#D4A34A]" />
                      <span className="font-medium text-gray-500">
                        {course.credits} Credits
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#D4A34A]" />
                      <span className="font-medium text-gray-500">
                        {course.semester} Semester
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#D4A34A]" />
                      <span className="font-medium text-gray-500">
                        {course.prerequisite}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PROGRAM INFO */}
            <div className="bg-[#F2EEE6] border-2 border-[#D4A34A] rounded-2xl p-6 mt-8">
              <h3 className="text-lg font-bold mb-4">Program Information</h3>

              <div className="space-y-3 text-sm">
                <p>
                  <span className="font-semibold">Entry Requirements: </span>
                  High School Diploma (Undergraduate), Bachelor's Degree
                  (Master's), or ministry experience (Certificate programs)
                </p>

                <p>
                  <span className="font-semibold">Program Duration: </span>4
                  years (B.A.), 2–4 years (Master's), 1–2 years (Certificate)
                </p>

                <p>
                  <span className="font-semibold">Mode of Study: </span>
                  Full-time, Part-time, Distance Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenCoursesModal;
