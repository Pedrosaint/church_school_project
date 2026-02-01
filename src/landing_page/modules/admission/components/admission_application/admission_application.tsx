import { useState } from "react";
import Stepper from "./stepper";
import ReviewSubmitApplication from "./review";
import ProgrammeInformation from "./program_info";
import PersonalInfo from "./personal_info";
import ContactDetails from "./contact_details";
import ParentGuardianForm from "./guardian_info";
import Education from "./education";
import FinancialReference from "./financial_reference";
import { AdmissionProvider } from "../../context/AdmissionContext";

export default function AdmissionApplication() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { num: 1, label: "Programme Info", completed: currentStep > 1 },
    { num: 2, label: "Personal Info", completed: currentStep > 2 },
    { num: 3, label: "Contact details", completed: currentStep > 3 },
    { num: 4, label: "Gaurdian Info", completed: currentStep > 4 },
    { num: 5, label: "Education", completed: currentStep > 5 },
    { num: 6, label: "Financial & Reference", completed: currentStep > 6 },
    { num: 7, label: "Review & Submit", completed: false },
  ];

  const next = () => setCurrentStep((p) => p + 1);
  const prev = () => setCurrentStep((p) => p - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProgrammeInformation goToNext={next} />;
      case 2:
        return <PersonalInfo goToNext={next} goToPrev={prev} />;
      case 3:
        return <ContactDetails goToNext={next} goToPrev={prev} />;
      case 4:
        return <ParentGuardianForm goToNext={next} goToPrev={prev} />;
      case 5:
        return <Education goToNext={next} goToPrev={prev} />;
      case 6:
        return <FinancialReference goToNext={next} goToPrev={prev} />;
      case 7:
        return <ReviewSubmitApplication />;
    }
  };

  return (
    <AdmissionProvider>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <Stepper steps={steps} currentStep={currentStep} />
          <div className="max-w-7xl mx-auto mt-6">{renderStep()}</div>
        </div>
      </div>
    </AdmissionProvider>
  );
}
