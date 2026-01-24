import { FileText, Download as DownloadIcon } from "lucide-react";

const Download = () => {
  return (
    <div className="bg-[#F6F7F9] py-16 px-4 font-inter">
      <div className="container mx-auto">
        <div className="bg-[#F6F7F9] rounded-2xl border border-[#0B2545] p-12">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#0B2545] flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-medium text-gray-900 mb-3 text-center">
            Download Our Institutional Profile
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
            Get detailed information about our programs, faculty, facilities,
            and student outcomes in our comprehensive institutional profile
            document.
          </p>

          {/* Download Button */}
          <div className="flex justify-center mb-4">
            <button className="bg-[#D4A34A] hover:bg-[#C09340] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2">
              <DownloadIcon className="w-4 h-4" />
              Download PDF Profile
            </button>
          </div>

          {/* File Info */}
          <div className="text-lg text-[#0B2545] text-center">
            PDF • 2.4 MB • Updated November 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
