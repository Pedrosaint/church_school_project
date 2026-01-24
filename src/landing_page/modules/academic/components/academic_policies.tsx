import {
  FileCheck,
  GraduationCap,
  Shield,
  BookMarked,
  Laptop,
  Library,
  HeartPulse,
  Download,
  HelpCircle,
  UserPlus,
  Scale,
  Gavel,
} from "lucide-react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { LuListChecks } from "react-icons/lu";

const AcademicPolicies = () => {
  const policies = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "A. Admission Policies",
      items: [
        "Eligibility requirements",
        "Application process rules",
        "Document submission",
        "Transfer student guidelines",
        "Readmission & Deferred admission",
      ],
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "B. Academic Regulations",
      items: [
        "Course registration & Add/Drop",
        "Class attendance & probation",
        "Course load limits",
        "Grading system & GPA rules",
      ],
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "C. Examination Policies",
      items: [
        "Exam eligibility & conduct",
        "Make-up exam rules",
        "Academic dishonesty / consequences for violations",
      ],
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "D. Graduation Policies",
      items: [
        "Required credit units",
        "Final clearance rules",
        "Fees & obligations",
        "Convocation attendance",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "E. Code of Conduct & Ethics",
      items: [
        "Expected student behavior",
        "Respect and decorum",
        "Dress code requirements",
        "Community life expectations",
      ],
    },
    {
      icon: <LuListChecks className="w-6 h-6" />,
      title: "F. Attendance & Participation",
      items: [
        "Class attendance percentage",
        "Chapel attendance",
        "Ministry practicum",
      ],
    },
    {
      icon: <BookMarked className="w-6 h-6" />,
      title: "G. Plagiarism & Integrity",
      items: [
        "Definition of plagiarism",
        "Rules on citation",
        "Penalties for dishonesty",
      ],
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "H. Disciplinary Policies",
      items: [
        "Levels of violations",
        "Disciplinary procedures",
        "Appeal process",
      ],
    },
    {
      icon: <FaMoneyBillAlt className="w-6 h-6" />,
      title: "I. Financial Policies",
      items: [
        "Tuition payment timelines",
        "Refund policy",
        "Scholarships & financial aid",
        "Late registration fees",
      ],
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "J. Technology & Data Privacy",
      items: [
        "Use of student portal",
        "Use of seminary resources",
        "Student data privacy",
      ],
    },
    {
      icon: <Library className="w-6 h-6" />,
      title: "K. Library Policies",
      items: ["Borrowing rules & fines", "Access to digital resources"],
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "L. Health, Safety & Security",
      items: [
        "Emergency procedures",
        "Campus access rules",
        "Field ministry conduct",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header Section */}
      <div className="bg-[#0B2545] text-white py-6 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Policies
          </h1>
          <p className="text-blue-100 text-lg">
            Standards that uphold excellence, integrity, and spiritual formation
          </p>
        </div>
      </div>

      {/* Policies Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg shrink-0 text-[#0B2545]">
                  {policy.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {policy.title}
                </h3>
              </div>

              {/* Policy Items */}
              <ul className="space-y-2 list-disc pl-5">
                {policy.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 list-item items-start"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button className="flex items-center gap-2 bg-[#D4A34A] hover:bg-[#C09340] text-white cursor-pointer px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
            <Download className="w-5 h-5" />
            Download Full Policy (PDF)
          </button>
          <button className="flex items-center gap-2 bg-[#0B2545] hover:bg-[#0A2240] text-white px-6 py-3 cursor-pointer rounded-lg font-semibold transition-colors shadow-md">
            <HelpCircle className="w-5 h-5" />
            Ask a Question (Help Desk)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicPolicies;
