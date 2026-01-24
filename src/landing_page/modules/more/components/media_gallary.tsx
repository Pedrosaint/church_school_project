const mediaImages = [
  "/src/assets/images/media-img-1.jpg",
  "/src/assets/images/media-img-2.jpg",
  "/src/assets/images/media-img-3.jpg",
  "/src/assets/images/media-img-4.jpg",
  "/src/assets/images/media-img-5.jpg",
  "/src/assets/images/media-img-6.jpg",
  "/src/assets/images/media-img-7.jpg",
  "/src/assets/images/media-img-8.jpg",
];

const MediaGallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Media Gallery
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {mediaImages.map((src, index) => (
            <div
              key={index}
              className="w-full h-40 rounded-lg overflow-hidden shadow"
            >
              <img
                src={src}
                alt="Gallery item"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
