import { useState } from "react";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import news1 from "../../../../assets/images/featured-img-1.jpg";
import news2 from "../../../../assets/images/featured-img-2.jpg";
import news3 from "../../../../assets/images/featured-img-3.jpg";
// import Student from "../../../../assets/images/student.png";
// import Students from "../../../../assets/images/students.png";

const NewsUpdates = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // News data
  const newsData = [
    {
      id: 1,
      category: "Announcements",
      date: "Oct 24, 2025",
      title:
        "Renowned Theologian Dr. Ebuka Prince to Speak at Fall Convocation",
      description:
        "Join us for a special lecture from one of the leading voices in modern theology. His insight promises to challenge and inspire....",
      imageType: news1,
    },
    {
      id: 2,
      category: "News",
      date: "Oct 24, 2025",
      title: "WAGGOM Celebrate the Graduating Class of 2023",
      description:
        "A look back at the joyful commencement ceremony where we honored our dedicated graduate and their commitment to ministry....",
      imageType: news2,
    },
    {
      id: 3,
      category: "Press Release",
      date: "Oct 24, 2025",
      title: "Seminary Receive Accreditation Renewal with Commendation",
      description:
        "The Board of Accreditation has officially renewed WAGGOM's status praising the institution rigorous academic standards....",
      imageType: news3,
    },
    {
      id: 4,
      category: "Announcements",
      date: "Oct 24, 2025",
      title:
        "Renowned Theologian Dr. Ebuka Prince to Speak at Fall Convocation",
      description:
        "Join us for a special lecture from one of the leading voices in modern theology. His insight promises to challenge and inspire....",
      imageType: news3,
    },
    {
      id: 5,
      category: "News",
      date: "Oct 24, 2025",
      title: "WAGGOM Celebrate the Graduating Class of 2023",
      description:
        "A look back at the joyful commencement ceremony where we honored our dedicated graduate and their commitment to ministry....",
      imageType: news2,
    },
    {
      id: 6,
      category: "Press Release",
      date: "Oct 24, 2025",
      title: "Seminary Receive Accreditation Renewal with Commendation",
      description:
        "The Board of Accreditation has officially renewed WAGGOM's status praising the institution rigorous academic standards....",
      imageType: news1,
    },
  ];

  // Filters
  const filters = ["All", "News", "Announcements", "Press Release"];

  const filteredNews =
    activeFilter === "All"
      ? newsData
      : newsData.filter((item) => item.category === activeFilter);

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Helpers
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Announcements: "bg-[#D4A34A2E] text-[#D4A34A]",
      News: "bg-[#D9D9D9] text-[#0B2545]",
      "Press Release": "bg-[#D9D9D9] text-[#0B2545]",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 mt-23 md:mt-29">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            News & Updates
          </h1>
          <p className="text-gray-600 font-inter">
            Stay informed with the latest news, announcements, and press
            releases from the seminary.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-1 mb-8 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-md font-medium transition-all font-inter ${
                activeFilter === filter
                  ? "bg-[#D4A34A] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="h-60 relative">
                <img
                  src={item.imageType}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-xs font-semibold mb-3 font-inter ${getCategoryColor(
                    item.category
                  )}`}
                >
                  {item.category}
                </span>

                <div className="flex items-center text-sm text-gray-500 mb-3 font-inter">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-inter">
                  {item.description}
                </p>

                <button className="flex items-center text-[#0B2545] font-semibold transition-colors font-inter">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-30">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-full font-medium transition-all font-inter ${
                currentPage === index + 1
                  ? "bg-[#D4A34A] text-white"
                  : "text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdates;
