/* eslint-disable @typescript-eslint/no-explicit-any */
import { Edit, FileText } from "lucide-react";
import { useState } from "react";
import SuccessModal from "../../modal/success.modal";
import PersonalInfoModal from "../../modal/personal_info.modal";
import AdmissionReferenceModal from "../../modal/finance.modal";
import ProgrammeInfoModal from "../../modal/programme_info.modal";
import ContactDetailsModal from "../../modal/contact_details.modal";
import GuardianInfoModal from "../../modal/guardian_info.modal";
import EducationQualificationModal from "../../modal/education_qualification.modal";
import { useSubmitAdmissionMutation } from "../../api/admission.api";
import { useAdmissionContext } from "../../context/AdmissionContext";

const ReviewSubmitApplication = () => {
  const [showProgrammeInformationModal, setShowProgrammeInformationModal] =
    useState(false);
  const [showContactDetailsModal, setShowContactDetailsModal] = useState(false);
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFinanceModal, setShowFinanceModal] = useState(false);
  const [showGaurdianInfoModal, setShowGaurdianInfoModal] = useState(false);
  const [showEducationQualificationModal, setShowEducationQualificationModal] =
    useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAdmission, setSubmittedAdmission] = useState<any | null>(
    null,
  );


  const [submitAdmission] = useSubmitAdmissionMutation();
  const { getFormData, resetForm } = useAdmissionContext();
  const formData = getFormData();

  const buildFormData = (): FormData => {
    const data = getFormData();
    const payload = new FormData();

    // Programme Info
    if (data.programmeInfo) {
      payload.append(
        "programmeLevel",
        data.programmeInfo.programmeLevel || "",
      );
      payload.append(
        "programmeChoice",
        data.programmeInfo.programmeChoice || "",
      );
    }

    // Personal Info
    if (data.personalInfo) {
      payload.append("surname", data.personalInfo.surname || "");
      payload.append("firstname", data.personalInfo.firstName || "");
      payload.append("otherNames", data.personalInfo.otherNames || "");
      payload.append("title", data.personalInfo.title || "");
      payload.append("dateOfBirth", data.personalInfo.dateOfBirth || "");
      payload.append("placeOfBirth", data.personalInfo.placeOfBirth || "");
      payload.append("gender", data.personalInfo.gender || "");
    }

    // Contact Details
    if (data.contactDetails) {
      payload.append("email", data.contactDetails.email || "");
      payload.append("phone", data.contactDetails.phone || "");
      payload.append(
        "presentAddress",
        data.contactDetails.presentAddress || "",
      );
      payload.append(
        "permanentAddress",
        data.contactDetails.permanentAddress || "",
      );
      payload.append("postalAddress", data.contactDetails.postalAddress || "");
      payload.append("nationality", data.contactDetails.nationality || "");
      payload.append(
        "nativeLanguage",
        data.contactDetails.nativeLanguage || "",
      );
      payload.append(
        "placeDiffNationality",
        String(data.contactDetails.placeDiffNationality || false),
      );
      payload.append("maritalStatus", data.contactDetails.maritalStatus || "");
      payload.append("religion", data.contactDetails.religion || "");
      payload.append("denomination", data.contactDetails.denomination || "");
    }

    // Guardian Info
    if (data.guardianInfo) {
      payload.append("parentGuardian", data.guardianInfo.parentGuardian || "");
      payload.append(
        "emergencyContact",
        data.guardianInfo.emergencyContact || "",
      );
      payload.append("emergencyPhone", data.guardianInfo.emergencyPhone || "");
      payload.append("nextOfKin", data.guardianInfo.nextOfKin || "");
      payload.append("nextOfKinPhone", data.guardianInfo.nextOfKinPhone || "");
    }

    // Education
    if (data.education) {
      const institutions = Array.isArray(data.education)
        ? data.education
        : (data.education.institutions || []);

      payload.append("education", JSON.stringify(institutions));

      if (!Array.isArray(data.education)) {
        // If we have certificates, append them to the 'certificates' key
        if (data.education.certificates) {
          data.education.certificates.forEach((file: File) => {
            if (file instanceof File) {
              payload.append("certificates", file);
            }
          });
        }
      }
    }

    // Financial & Reference
    if (data.financialReference) {
      payload.append("financeInfo", data.financialReference.financeInfo || "");
      payload.append("healthInfo", data.financialReference.healthInfo || "");

      // Use the 'description' field for any additional notes
      const notes = [
        data.financialReference.description,
        !Array.isArray(data.education) ? data.education.description : ""
      ].filter(Boolean).join(" | ");

      payload.append("description", notes || "");

      payload.append(
        "academicReferee",
        data.financialReference.academicReferee || "",
      );
      payload.append(
        "academicProfession",
        data.financialReference.academicProfession || "",
      );
      payload.append(
        "academicInstitution",
        data.financialReference.academicInstitution || "",
      );
      payload.append(
        "academicAddress",
        data.financialReference.academicAddress || "",
      );
      payload.append(
        "academicPhone",
        data.financialReference.academicPhone || "",
      );
      payload.append(
        "academicEmail",
        data.financialReference.academicEmail || "",
      );
      payload.append(
        "clergyReferee",
        data.financialReference.clergyReferee || "",
      );
      payload.append(
        "clergyPosition",
        data.financialReference.clergyPosition || "",
      );
      payload.append(
        "clergyChurch",
        data.financialReference.clergyChurch || "",
      );
      payload.append(
        "clergyAddress",
        data.financialReference.clergyAddress || "",
      );
      payload.append("clergyPhone", data.financialReference.clergyPhone || "");
      payload.append("clergyEmail", data.financialReference.clergyEmail || "");
      payload.append(
        "applicantSignature",
        data.financialReference.applicantSignature || "",
      );
      payload.append(
        "applicantDate",
        data.financialReference.applicantDate || "",
      );
    }

    // Files from Programme Info - append to 'passportPhotos' key
    if (data.programmeInfo?.passport1 instanceof File) {
      payload.append("passportPhotos", data.programmeInfo.passport1);
    }
    if (data.programmeInfo?.passport2 instanceof File) {
      payload.append("passportPhotos", data.programmeInfo.passport2);
    }

    return payload;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = buildFormData();
      const res = await submitAdmission(payload).unwrap();
      resetForm();
      setSubmittedAdmission(res.data ?? null);
      setShowSuccessModal(true);
    } catch (error: any) {
      // RTK Query wraps error data in a data property
      const errData = error?.data || error;
      setSubmitError(
        errData?.error || errData?.message || "Failed to submit application",
      );
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };




  return (
    <div className="py-8 md:px-4">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Review & Submit Application
          </h1>
          <p className="text-gray-600 text-sm font-inter">
            Please carefully review all the information below to ensure it's
            correct before submitting
          </p>
        </div>

        {/* ================= Programme Information ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Programme Information
            </h2>
            <button
              onClick={() => setShowProgrammeInformationModal(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] cursor-pointer"
            >
              <Edit className="w-4 h-4" /> Edit
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="text-xs text-gray-500">Programme Level</label>
              <p className="font-medium text-gray-900">
                {formData.programmeInfo?.programmeLevel || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Programme of Choice
              </label>
              <p className="font-medium text-gray-900">
                {formData.programmeInfo?.programmeChoice || "N/A"}
              </p>
            </div>

            {formData.programmeInfo?.passport1 && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="w-4 h-4" />
                <span className="truncate">Passport 1: {formData.programmeInfo.passport1.name}</span>
              </div>
            )}

            {formData.programmeInfo?.passport2 && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="w-4 h-4" />
                <span className="truncate">Passport 2: {formData.programmeInfo.passport2.name}</span>
              </div>
            )}
          </div>

        </div>

        {/* ================= Personal Info ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Personal Info
            </h2>
            <button
              onClick={() => setShowPersonalInfoModal(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] cursor-pointer"
            >
              <Edit className="w-4 h-4" /> Edit
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="text-xs text-gray-500">First Name</label>
              <p className="font-medium">
                {formData.personalInfo?.firstName || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Surname</label>
              <p className="font-medium">
                {formData.personalInfo?.surname || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Other Names</label>
              <p className="font-medium">
                {formData.personalInfo?.otherNames || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Title</label>
              <p className="font-medium">
                {formData.personalInfo?.title || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Place of Birth</label>
              <p className="font-medium">
                {formData.personalInfo?.placeOfBirth || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Date of Birth</label>
              <p className="font-medium">
                {formData.personalInfo?.dateOfBirth || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Gender</label>
              <p className="font-medium">
                {formData.personalInfo?.gender || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* ================= Contact Details ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Contact Details
            </h2>
            <button
              onClick={() => setShowContactDetailsModal(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] cursor-pointer"
            >
              <Edit className="w-4 h-4" /> Edit
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="text-xs text-gray-500">
                Present Residential Address
              </label>
              <p className="font-medium">
                {formData.contactDetails?.presentAddress || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone Number</label>
              <p className="font-medium">
                {formData.contactDetails?.phone || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Email Address</label>
              <p className="font-medium">
                {formData.contactDetails?.email || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Permanent Home Address
              </label>
              <p className="font-medium">
                {formData.contactDetails?.permanentAddress || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Postal Address</label>
              <p className="font-medium">
                {formData.contactDetails?.postalAddress || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Nationality</label>
              <p className="font-medium">
                {formData.contactDetails?.nationality || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Native Language</label>
              <p className="font-medium">
                {formData.contactDetails?.nativeLanguage || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Religion</label>
              <p className="font-medium">
                {formData.contactDetails?.religion || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Marital Status</label>
              <p className="font-medium">
                {formData.contactDetails?.maritalStatus || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Denomination</label>
              <p className="font-medium">
                {formData.contactDetails?.denomination || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* ================= Guardian Information ================= */}
        <div className="bg-white border border-gray-200 rounded-xl mb-6 shadow-sm font-inter">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-900">Guardian info</h2>
            <button
              onClick={() => setShowGaurdianInfoModal(true)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#D4A34A] cursor-pointer"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>

          {/* Guardian */}
          <div className="px-6 py-4">
            <p className="text-xs text-gray-500 mb-1">
              Name & Address of Parent / Guardian
            </p>
            <p className="text-sm text-gray-900 font-medium">
              {formData.guardianInfo?.parentGuardian || "N/A"}
            </p>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-800">
            Emergency Contact
          </div>

          <div className="px-6 py-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Name & Contact</p>
              <p className="text-sm font-medium text-gray-900">
                {formData.guardianInfo?.emergencyContact || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Phone Number</p>
              <p className="text-sm font-medium text-gray-900">
                {formData.guardianInfo?.emergencyPhone || "N/A"}
              </p>
            </div>
          </div>

          {/* Next of Kin */}
          <div className="bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-800">
            Next of Kin
          </div>

          <div className="px-6 py-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Name</p>
              <p className="text-sm font-medium text-gray-900">
                {formData.guardianInfo?.nextOfKin || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Phone Number</p>
              <p className="text-sm font-medium text-gray-900">
                {formData.guardianInfo?.nextOfKinPhone || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* ================= Educational Qualification ================= */}
        <div className="bg-white border border-gray-200 rounded-xl mb-6 shadow-sm font-inter">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-900">
              Educational Qualification
            </h2>
            <button
              onClick={() => setShowEducationQualificationModal(true)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#D4A34A] cursor-pointer"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          </div>

          {/* Qualification Details */}
          {formData.education?.institutions && formData.education.institutions.length > 0 ? (
            formData.education.institutions.map((edu: any, idx: number) => (
              <div key={idx}>
                <div className="px-6 py-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Institution Name
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {edu.institution || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">From</p>
                    <p className="text-sm font-medium text-gray-900">
                      {edu.from || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">To</p>
                    <p className="text-sm font-medium text-gray-900">
                      {edu.to || "N/A"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">Qualification</p>
                    <p className="text-sm font-medium text-gray-900">
                      {edu.qualification || "N/A"}
                    </p>
                  </div>
                </div>
                {idx < formData.education.institutions.length - 1 && (
                  <div className="border-t border-gray-200" />
                )}
              </div>
            ))
          ) : (
            <div className="px-6 py-4">
              <p className="text-sm text-gray-500">
                No education records added
              </p>
            </div>
          )}

          {/* Certificates & Description */}
          {(formData.education?.certificates?.length > 0 || formData.education?.description) && (
            <div className="border-t border-gray-200 px-6 py-4">
              {formData.education.certificates.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Uploaded Certificates</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.education.certificates.map((file: any, idx: number) => (
                      <span key={idx} className="bg-gray-100 text-[#0B2545] text-xs px-2 py-1 rounded border border-gray-200">
                        {file.name || `Certificate ${idx + 1}`}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {formData.education.description && (
                <div>
                  <p className="text-xs text-gray-500 mb-1">Education Description</p>
                  <p className="text-sm text-gray-900">{formData.education.description}</p>
                </div>
              )}
            </div>
          )}
        </div>


        {/* ================= Finance & Referee ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Finance & Referee
            </h2>
            <button
              onClick={() => setShowFinanceModal(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] cursor-pointer"
            >
              <Edit className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
          </div>

          {/* Finance & Health */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                How do you intend to finance your studies
              </label>
              <p className="font-medium text-gray-900">
                {formData.financialReference?.financeInfo || "N/A"}
              </p>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Do you have any special need / health conditions
              </label>
              <p className="font-medium text-gray-900">
                {formData.financialReference?.healthInfo || "N/A"}
              </p>
            </div>
          </div>

          {/* ================= Academic Referee ================= */}
          <div className="bg-gray-100 px-4 py-2 rounded-md mb-4">
            <h3 className="text-sm font-semibold text-gray-800">
              Academic Referee
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
            <div>
              <label className="text-xs text-gray-500">Name</label>
              <p className="font-medium">
                {formData.financialReference?.academicReferee || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Profession</label>
              <p className="font-medium">
                {formData.financialReference?.academicProfession || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Institution</label>
              <p className="font-medium">
                {formData.financialReference?.academicInstitution || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Address</label>
              <p className="font-medium">
                {formData.financialReference?.academicAddress || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone Number</label>
              <p className="font-medium">
                {formData.financialReference?.academicPhone || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Email</label>
              <p className="font-medium">
                {formData.financialReference?.academicEmail || "N/A"}
              </p>
            </div>
          </div>

          {/* ================= Clergy Referee ================= */}
          <div className="bg-gray-100 px-4 py-2 rounded-md mb-4">
            <h3 className="text-sm font-semibold text-gray-800">
              Clergy Referee
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
            <div>
              <label className="text-xs text-gray-500">Name</label>
              <p className="font-medium">
                {formData.financialReference?.clergyReferee || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Position</label>
              <p className="font-medium">
                {formData.financialReference?.clergyPosition || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Church</label>
              <p className="font-medium">
                {formData.financialReference?.clergyChurch || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Address</label>
              <p className="font-medium">
                {formData.financialReference?.clergyAddress || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone Number</label>
              <p className="font-medium">
                {formData.financialReference?.clergyPhone || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Email</label>
              <p className="font-medium">
                {formData.financialReference?.clergyEmail || "N/A"}
              </p>
            </div>
          </div>

          {/* ================= Declaration ================= */}
          <div className="bg-gray-100 px-4 py-2 rounded-md mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Declaration</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label className="text-xs text-gray-500">
                Applicant Signature
              </label>
              <p className="font-medium">
                {formData.financialReference?.applicantSignature || "N/A"}
              </p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Date</label>
              <p className="font-medium">
                {formData.financialReference?.applicantDate || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center gap-4 font-inter">
          {submitError && (
            <div className="w-full bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {submitError}
            </div>
          )}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full px-8 py-2 bg-[#D4A34A] hover:bg-[#C09340] disabled:bg-gray-400 disabled:cursor-not-allowed text-[#0B2545] rounded-lg font-medium transition-colors cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>

          <button className="px-6 py-2 border-2 border-[#D4A34A] text-[#D4A34A] rounded-lg font-medium transition-colors cursor-pointer">
            Download/Print Preview
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          setShowSuccessModal={setShowSuccessModal}
          admission={submittedAdmission}
        />
      )}

      {/* Programme Information Modal */}
      {showProgrammeInformationModal && (
        <ProgrammeInfoModal
          onClose={() => setShowProgrammeInformationModal(false)}
        />
      )}

      {/* Personal Info Modal */}
      {showPersonalInfoModal && (
        <PersonalInfoModal onClose={() => setShowPersonalInfoModal(false)} />
      )}

      {/* Contact Details Modal */}
      {showContactDetailsModal && (
        <ContactDetailsModal
          onClose={() => setShowContactDetailsModal(false)}
        />
      )}

      {/* Finance Modal */}
      {showFinanceModal && (
        <AdmissionReferenceModal onClose={() => setShowFinanceModal(false)} />
      )}

      {/* Guardian Info Modal */}
      {showGaurdianInfoModal && (
        <GuardianInfoModal onClose={() => setShowGaurdianInfoModal(false)} />
      )}

      {/* Uploaded Documents Modal */}
      {showEducationQualificationModal && (
        <EducationQualificationModal
          onClose={() => setShowEducationQualificationModal(false)}
        />
      )}
    </div>
  );
};

export default ReviewSubmitApplication;
