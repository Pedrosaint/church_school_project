import { GraduationCapIcon } from "../../../../../assets/icons/svg_icons";
import ActivityTimeline from "./activity_timeline";
import ApplicationHeader from "./application_header";
import Declaration from "./decleration";
import UploadedDocuments from "./document";
import InfoCard from "./info_card";
import Referees from "./refereers";
import ReviewPanel from "./review_panel";
import { motion } from "framer-motion";

const ViewApplication = () => {
  return (
    <motion.section 
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "-20%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6">
      <ApplicationHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <InfoCard title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pt-2 p-2">
              <div>
                <p className="text-gray-500 mb-1">FULL NAME</p>
                <p className="font-medium">Sarah Okonkwo</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">DATE OF BIRTH</p>
                <p className="font-medium">March 15, 1995</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">NATIONALITY</p>
                <p className="font-medium">Nigerian</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">FINANCING TYPE</p>
                <p className="font-medium">Church</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Contact & Background Details">
            <div className="space-y-4 text-sm pt-2 p-2">
              <div>
                <p className="text-gray-500 mb-1">EMAIL</p>
                <p className="font-medium">sarah.okonkwo@email.com</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">PHONE</p>
                <p className="font-medium">+234 803 456 7890</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">ADDRESS</p>
                <p className="font-medium">45 Church Road, Lagos, Nigeria</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Emergency Contact ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pt-2 p-2">
              <div>
                <p className="text-gray-500 mb-1">GAURDIAN NAME</p>
                <p className="font-medium">Emmanuel Akintola</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">GAURDIAN PHONE</p>
                <p className="font-medium">+234 803 456 7890</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">EMERGENCY CONTACT</p>
                <p className="font-medium">Sarah Okonkwo</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">EMERGENCY PHONE</p>
                <p className="font-medium">+234 803 456 7890</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Education qualifications">
            <div className="space-y-4 text-sm pt-2 p-2">
              <div>
                <p className="text-gray-500 mb-1">BACKGROUND</p>
                <div className="flex gap-3 items-center">
                  <GraduationCapIcon width={20} fill="black"/>
                  <p className="font-medium">
                    BA Theology, University of Lagos
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-500 mb-1">PROGRAMME APPLIED FOR</p>
                <p className="font-medium">Master of Divinity</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Documents">
            <UploadedDocuments />
          </InfoCard>

          <InfoCard title="Referees">
            <Referees />
          </InfoCard>

          <InfoCard title="Declaration">
            <Declaration />
          </InfoCard>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <ReviewPanel />
          <ActivityTimeline />
        </div>
      </div>
    </motion.section>
  );
};

export default ViewApplication;
