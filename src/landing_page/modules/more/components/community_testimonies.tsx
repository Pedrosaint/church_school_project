import { Dot } from "lucide-react";
import { useState } from "react";

import Image_1 from "../../../../assets/images/img_test_1.png";
import Image_2 from "../../../../assets/images/img_test_2.png";
import Image_3 from "../../../../assets/images/img_test_3.png";
import Image_4 from "../../../../assets/images/img_test_4.png";
import Image_5 from "../../../../assets/images/img_test_5.png";
import Image_6 from "../../../../assets/images/img_test_6.png";
import Image_7 from "../../../../assets/images/img_test_7.png";
import Image_8 from "../../../../assets/images/img_test_8.png";
import Image_9 from "../../../../assets/images/img_test_9.png";

import ShareTestimonyModal from "../modal/share_testimony";

const testimonies = [
  {
    img: Image_1,
    name: "James Lister",
    date: "June 2025",
    text: "My perspective on ministry was completely transformed.",
  },
  {
    img: Image_2,
    name: "Kingsley Lawson",
    date: "Aug 2025",
    text: "I'm so grateful for what the church has become.",
  },
  {
    img: Image_3,
    name: "James Lister",
    date: "June 2025",
    text: "My perspective on ministry was completely transformed.",
  },
  {
    img: Image_4,
    name: "James Lister",
    date: "June 2025",
    text: "My perspective on ministry was completely transformed.",
  },
  {
    img: Image_5,
    name: "Mary Wilson",
    date: "July 2025",
    text: "The community here is a true blessing, a family in Christ.",
  },
  {
    img: Image_6,
    name: "James Lister",
    date: "June 2025",
    text: "My perspective on ministry was completely transformed.",
  },
  {
    img: Image_7,
    name: "Janet Law",
    date: "June 2025",
    text: "My perspective on ministry was completely transformed.",
  },
  {
    img: Image_8,
    name: "James Lister",
    date: "June 2025",
    text: "My perspective on ministry was completely transformed.",
  },
  {
    img: Image_9,
    name: "James Lister",
    date: "June 2025",
    text: "My perspective on ministry was completely transformed.",
  },
];

const CommunityTestimonies = () => {
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <section id="testimonies" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-2 md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Community Testimonies
            </h2>
            <p className="text-gray-600 text-sm">
              Read and share stories of transformation and encouragement from
              our community
            </p>
          </div>

          <button
            onClick={() => setShowShareModal(true)}
            className="bg-[#D4A34A] text-white px-5 py-2 rounded-md font-medium font-inter cursor-pointer"
          >
            Share your testimony
          </button>
        </div>

        {/* Pinterest Masonry Grid */}
        {/* <div className="masonry md:masonry-4  masonry-1">
          {testimonies.map((item, idx) => (
            <div key={idx} className="break-inside mb-6 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full object-cover rounded-xl"
              />
              <div className="p-4 font-inter">
                <p className="text-gray-700 font-semibold text-[15px] leading-relaxed mb-1">
                  {item.text}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  {item.name} <Dot size={14} /> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
          {testimonies.map((item, idx) => (
            <div
              key={idx}
              className="mb-6 break-inside-avoid rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full object-cover"
              />

              <div className="p-4 font-inter">
                <p className="text-gray-700 font-semibold text-[15px] leading-relaxed mb-1">
                  {item.text}
                </p>

                <p className="text-xs text-gray-500 flex items-center gap-1">
                  {item.name}
                  <Dot size={14} />
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Share Testimony Modal */}
      {showShareModal && (
        <ShareTestimonyModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </section>
  );
};

export default CommunityTestimonies;
