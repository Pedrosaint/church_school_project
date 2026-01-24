import CommunityTestimonies from "../components/community_testimonies";
import GetInTouch from "../components/get_in_touch";
import MediaGallery from "../components/media_gallary";
import SupportMinistry from "../components/support_ministry";

const MoreView = () => {
  return (
    <section>
      <div id="support-the-ministry">
        <SupportMinistry />
      </div>

      <div id="testimonies">
        <CommunityTestimonies />
      </div>

      <div id="gallery">
        <MediaGallery />
      </div>

      <div id="contact-us"><GetInTouch /></div>
    </section>
  );
};

export default MoreView;
