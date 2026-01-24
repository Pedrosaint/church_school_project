/* eslint-disable react-hooks/static-components */

interface SemesterData {
  date: string;
  event: string;
}

interface SemesterCardProps {
  title: string;
  data: {
    preSemester: SemesterData[];
    academic: SemesterData[];
    examinations: SemesterData[];
  };
}

 const events = [
   {
     date: "Nov 10 -14, 2025",
     event: "Missions Emphasis Week",
   },
   {
     date: "Feb 16 -20, 2026",
     event: "Spiritual Emphasis Week",
   },
   {
     date: "Mar 30 - Apr 2, 2026",
     event: "Founder's Week Celebrations",
   },
   {
     date: "May 21, 2026",
     event: "Alumni Homecoming",
   },
 ];


const AcademicCalendar = () => {
  const firstSemester = {
    preSemester: [
      {
        date: "Aug 18-22, 2025",
        event: "Faculty Pre-Semester Retreat & Planning",
      },
      { date: "Aug 25-29, 2025", event: "Student Registration & Orientation" },
    ],
    academic: [
      { date: "Sep 1, 2025", event: "Lectures Begin" },
      { date: "Oct 20-24, 2025", event: "Mid-Semester Examinations" },
      { date: "Oct 27-31, 2025", event: "Mid-Semester Break" },
    ],
    examinations: [
      { date: "Dec 8-12, 2025", event: "Final Examinations" },
      { date: "Dec 15, 2025", event: "Semester Break Begins" },
    ],
  };

  const secondSemester = {
    preSemester: [{ date: "Jan 12-16, 2026", event: "Student Registration" }],
    academic: [
      { date: "Jan 19, 2026", event: "Lectures Begin" },
      { date: "Mar 9-13, 2026", event: "Mid-Semester Examinations" },
      { date: "Apr 3-6, 2026", event: "Easter Break" },
    ],
    examinations: [
      { date: "May 11-15, 2026", event: "Final Examinations" },
      {
        date: "May 22, 2026",
        event: "End of Academic Year / Graduation Ceremony",
      },
    ],
  };


const SemesterCard = ({ title, data }: SemesterCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-8 mb-6 font-inter">
    <h2
      className={`text-2xl font-bold mb-6 text-[#1a5194]`}
    >
      {title}
    </h2>

    {/* Pre-Semester Activities */}
    <div className="mb-6">
      <h3 className="text-base font-bold text-gray-600 mb-4">
        Pre-Semester Activities
      </h3>
      {data.preSemester.map((item, index) => (
        <div key={index} className="flex mb-3">
          <span className="text-sm text-gray-600 w-36 shrink-0">
            {item.date}
          </span>
          <span className="text-sm text-gray-800">{item.event}</span>
        </div>
      ))}
    </div>

    {/* Academic Activities */}
    <div className="mb-6">
      <h3 className="text-base font-bold text-gray-600 mb-4">
        Academic Activities
      </h3>
      {data.academic.map((item, index) => (
        <div key={index} className="flex mb-3">
          <span className="text-sm text-gray-600 w-36 shrink-0">
            {item.date}
          </span>
          <span className="text-sm text-gray-800">{item.event}</span>
        </div>
      ))}
    </div>

    {/* Examinations */}
    <div>
      <h3 className="text-base font-bold text-gray-600 mb-4">
        Examinations & Wrap-Up
      </h3>
      {data.examinations.map((item, index) => (
        <div key={index} className="flex mb-3">
          <span className="text-sm text-gray-600 w-36 shrink-0">
            {item.date}
          </span>
          <span className="text-sm text-gray-800">{item.event}</span>
        </div>
      ))}
    </div>
  </div>
);


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Academic Calendar
          </h1>
          <p className="text-gray-600 font-inter text-lg">
            2025 / 2026 Academic Year
          </p>
        </div>

        {/* First Semester */}
        <SemesterCard title="First Semester" data={firstSemester} />

        {/* Second Semester */}
        <SemesterCard title="Second Semester" data={secondSemester} />

        {/* Special Seminary Events */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 font-inter">
          {/* Title */}
          <h2 className="text-2xl font-bold text-[#B88A2F]">
            Special Seminary Events
          </h2>
          <p className="text-sm text-gray-500 mt-1">(Year-Round)</p>

          {/* Events List */}
          <div className="mt-6 space-y-4">
            {events.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-3 border-b border-gray-200 last:border-b-0"
              >
                <span className="text-[#0A2240] text-sm font-medium w-40">
                  {item.date}
                </span>
                <span className="text-gray-700 text-sm">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
