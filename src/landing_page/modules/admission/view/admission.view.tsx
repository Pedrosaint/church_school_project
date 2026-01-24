import AdmissionApplication from "../components/admission_application/admission_application"
import AdmissionHero from "../components/admission_hero"
import AdmissionProcess from "../components/admission_process"
import AdmissionRequirement from "../components/admission_requirement"
import ProgramsSection from "../components/program"

const AdmissionView = () => {
  return (
    <section>
      <div id="admission-process">
        <AdmissionHero />
        <AdmissionProcess />
      </div>

      <div id="adnmission-requirements">
        <AdmissionRequirement />
      </div>

      <div id="program-to-choose-from">
        <ProgramsSection />
      </div>

      <div id="online-application">
        <AdmissionApplication />
      </div>
    </section>
  );
}

export default AdmissionView
