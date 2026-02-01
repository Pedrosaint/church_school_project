import { GraduationCapIcon } from "../../../../../assets/icons/svg_icons";
import ActivityTimeline from "./activity_timeline";
import ApplicationHeader from "./application_header";
import Declaration from "./decleration";
import UploadedDocuments from "./document";
import InfoCard from "./info_card";
import Referees from "./refereers";
import ReviewPanel from "./review_panel";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useGetApplicationQuery } from "../api/application.api";

const ViewApplication = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetApplicationQuery(id ?? "", {
    skip: !id,
  });
  const app = data?.data;

  // build referees array from application fields
  type RefereeObj = {
    name?: string;
    role?: string;
    institution?: string;
    position?: string;
    phone?: string;
    email?: string;
    note?: string;
    status?: "Verified" | "Pending";
  };

  const referees: RefereeObj[] = [];
  if (app) {
    if (app.academicReferee) {
      referees.push({
        name: app.academicReferee,
        role: "Academic Referee",
        institution: app.academicInstitution || "—",
        position: app.academicProfession || "—",
        phone: app.academicPhone || "—",
        email: app.academicEmail || "—",
        note: "",
        status: "Pending",
      });
    }

    if (app.clergyReferee) {
      referees.push({
        name: app.clergyReferee,
        role: "Clergy Referee",
        institution: app.clergyChurch || "—",
        position: app.clergyPosition || "—",
        phone: app.clergyPhone || "—",
        email: app.clergyEmail || "—",
        note: "",
        status: "Pending",
      });
    }
  }

  return (
    <motion.section
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "-20%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="space-y-6"
    >
      <ApplicationHeader
        id={app?.id}
        firstname={app?.firstname}
        surname={app?.surname}
        status={app?.status}
        createdAt={app?.createdAt ?? app?.applicantDate}
        programme={app?.programmeChoice}
        isLoading={isLoading}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <InfoCard title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pt-2 p-2">
              <div>
                <p className="text-gray-500 mb-1">FULL NAME</p>
                <p className="font-medium">
                  {app
                    ? `${app.firstname ?? ""} ${app.surname ?? ""}`
                    : isLoading
                      ? "Loading..."
                      : "—"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">DATE OF BIRTH</p>
                <p className="font-medium">
                  {app?.dateOfBirth
                    ? new Date(app.dateOfBirth).toLocaleDateString()
                    : "—"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">NATIONALITY</p>
                <p className="font-medium">{app?.nationality ?? "—"}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">FINANCING TYPE</p>
                <p className="font-medium">{app?.financeInfo ?? "—"}</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Contact & Background Details">
            <div className="space-y-4 text-sm pt-2 p-2">
              <div>
                <p className="text-gray-500 mb-1">EMAIL</p>
                <p className="font-medium">{app?.email ?? "—"}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">PHONE</p>
                <p className="font-medium">{app?.phone ?? "—"}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">ADDRESS</p>
                <p className="font-medium">
                  {app?.presentAddress ?? app?.permanentAddress ?? "—"}
                </p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Emergency Contact ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pt-2 p-2">
              <div>
                <p className="text-gray-500 mb-1">GAURDIAN NAME</p>
                <p className="font-medium">{app?.parentGuardian ?? "—"}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">GAURDIAN PHONE</p>
                <p className="font-medium">
                  {app?.nextOfKinPhone ?? app?.emergencyPhone ?? "—"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">EMERGENCY CONTACT</p>
                <p className="font-medium">{app?.emergencyContact ?? "—"}</p>
              </div>

              <div>
                <p className="text-gray-500 mb-1">EMERGENCY PHONE</p>
                <p className="font-medium">{app?.emergencyPhone ?? "—"}</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Education qualifications">
            <div className="space-y-4 text-sm pt-2 p-2">
              <div>
                <p className="text-gray-500 mb-1">BACKGROUND</p>
                <div className="flex gap-3 items-center">
                  <GraduationCapIcon width={20} fill="black" />
                  <p className="font-medium">
                    {app?.education && app.education.length > 0
                      ? `${app.education[0].qualification}, ${app.education[0].institution}`
                      : "—"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-500 mb-1">PROGRAMME APPLIED FOR</p>
                <p className="font-medium">{app?.programmeChoice ?? "—"}</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard title="Documents">
            <UploadedDocuments
              certificates={app?.certificates}
              passportPhotos={app?.passportPhotos}
            />
          </InfoCard>

          <InfoCard title="Referees">
            <Referees referees={referees} />
          </InfoCard>

          <InfoCard title="Declaration">
            <Declaration />
          </InfoCard>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <ReviewPanel id={id ?? ""} currentStatus={app?.status} />
          <ActivityTimeline />
        </div>
      </div>
    </motion.section>
  );
};

export default ViewApplication;
