import { Edit, FileText } from "lucide-react";
import { useState } from "react";
import SuccessModal from "../../modal/success.modal";
import PersonalInfoModal from "../../modal/personal_info.modal";
import AdmissionReferenceModal from "../../modal/finance.modal";
import ProgrammeInfoModal from "../../modal/programme_info.modal";
import ContactDetailsModal from "../../modal/contact_details.modal";
import GuardianInfoModal from "../../modal/guardian_info.modal";
import EducationQualificationModal from "../../modal/education_qualification.modal";

const ReviewSubmitApplication = () => {
   const [showProgrammeInformationModal, setShowProgrammeInformationModal] =
     useState(false);
  const [showContactDetailsModal, setShowContactDetailsModal] = useState(false);
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFinanceModal, setShowFinanceModal] = useState(false);
  const [showGaurdianInfoModal, setShowGaurdianInfoModal] = useState(false);
  const [showEducationQualificationModal, setShowEducationQualificationModal] = useState(false);

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
              <p className="font-medium text-gray-900">Certificate</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Programme of Choice
              </label>
              <p className="font-medium text-gray-900">Theology</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FileText className="w-4 h-4" />
              Result_Slip.jpg
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FileText className="w-4 h-4" />
              Transcript.pdf
            </div>
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
              <p className="font-medium">Nkechi</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Surname</label>
              <p className="font-medium">Chibuzor</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Other Names</label>
              <p className="font-medium">Blessing</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Title</label>
              <p className="font-medium">Mr</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Place of Birth</label>
              <p className="font-medium">Anambra</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Date of Birth</label>
              <p className="font-medium">4-03-2025</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Gender</label>
              <p className="font-medium">Male</p>
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
              <p className="font-medium">No 20 Joshua Williams Abia</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone Number</label>
              <p className="font-medium">+234 904 452 3113</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Email Address</label>
              <p className="font-medium">Blessing43@gmail.com</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Permanent Home Address
              </label>
              <p className="font-medium">No 20 Joshua Williams Abia</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Postal Address</label>
              <p className="font-medium">10011</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Nationality</label>
              <p className="font-medium">Nigeria</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Native Language</label>
              <p className="font-medium">Igbo</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Religion</label>
              <p className="font-medium">Christian</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Marital Status</label>
              <p className="font-medium">Single</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Denomination</label>
              <p className="font-medium">RCCG</p>
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
              Mr Kingsley Obinna.
            </p>
            <p className="text-sm text-gray-600">No 20 francis Uti street</p>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-800">
            Emergency Contact
          </div>

          <div className="px-6 py-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">
                Name & Address of Parent / Guardian
              </p>
              <p className="text-sm font-medium text-gray-900">
                Mr Kingsley Obinna.
              </p>
              <p className="text-sm text-gray-600">No 20 francis Uti street</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Phone Number</p>
              <p className="text-sm font-medium text-gray-900">On Campus</p>
            </div>
          </div>

          {/* Next of Kin */}
          <div className="bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-800">
            Next of Kin
          </div>

          <div className="px-6 py-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">
                Name & Address of Parent / Guardian
              </p>
              <p className="text-sm font-medium text-gray-900">
                Mr Kingsley Obinna.
              </p>
              <p className="text-sm text-gray-600">No 20 francis Uti street</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Phone Number</p>
              <p className="text-sm font-medium text-gray-900">
                +234 9044523113
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
          <div className="px-6 py-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-500 mb-1">Institution Name</p>
              <p className="text-sm font-medium text-gray-900">OAU</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">From</p>
              <p className="text-sm font-medium text-gray-900">12-02-2021</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">To</p>
              <p className="text-sm font-medium text-gray-900">12-02-2024</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FileText className="w-4 h-4 text-gray-400" />
              <span>Bsc Certificate.jpg</span>
            </div>
          </div>

          {/* Professional Certificate */}
          <div className="bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-800">
            Professional Certificate
          </div>

          <div className="px-6 py-4 grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FileText className="w-4 h-4 text-gray-400" />
              <span>Bsc Certificate.jpg</span>
            </div>

            <div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Description</p>
                <div className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 bg-gray-50">
                  Bachelor of Science certificate obtained after completing a
                  four-year undergraduate program in the chosen field of study.
                </div>
              </div>
            </div>
          </div>
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
              <p className="font-medium text-gray-900">Scholarship</p>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Do you have any special need / health conditions
              </label>
              <p className="font-medium text-gray-900">Yes</p>
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
              <p className="font-medium">Joshua Williams</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Profession</label>
              <p className="font-medium">Lecturer</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Institution</label>
              <p className="font-medium">OAU</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Address</label>
              <p className="font-medium">No 20 Joshua Williams Osun state</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone Number</label>
              <p className="font-medium">+234 904 452 3113</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Email</label>
              <p className="font-medium">epraiz85@gmail.com</p>
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
              <p className="font-medium">Joshua Williams</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Position</label>
              <p className="font-medium">Pastor</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Church</label>
              <p className="font-medium">RCCG</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Address</label>
              <p className="font-medium">No 20 Joshua Williams Osun state</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone Number</label>
              <p className="font-medium">+234 904 452 3113</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Email</label>
              <p className="font-medium">epraiz85@gmail.com</p>
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
              <p className="font-medium">E.D</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Phone Number</label>
              <p className="font-medium">12-02-2025</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center gap-4 font-inter">
          <button
            onClick={() => setShowSuccessModal(true)}
            className="w-full px-8 py-2 bg-[#D4A34A] hover:bg-[#C09340] text-[#0B2545] rounded-lg font-medium transition-colors cursor-pointer"
          >
            Submit Application
          </button>

          <button className="px-6 py-2 border-2 border-[#D4A34A] text-[#D4A34A] rounded-lg font-medium transition-colors cursor-pointer">
            Download/Print Preview
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal setShowSuccessModal={setShowSuccessModal} />
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
        <AdmissionReferenceModal
          onClose={() => setShowFinanceModal(false)}
        />
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
