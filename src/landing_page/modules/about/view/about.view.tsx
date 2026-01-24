import AboutHero from "../components/about_hero"
import AboutUs from "../components/about_us"
import AccreditationCards from "../components/accreditation"
import Download from "../components/downlaod"
import LeadershipTeam from "../components/leadership_team/leadership_team"
import WhatDrivesUs from "../components/what_drives_us"

const AboutView = () => {
  return (
    <section>
      <div id="our-story">
        <AboutHero />
      </div>

      <div id="our-journey">
        <AboutUs />
      </div>

      <div id="what-drives-us">
        <WhatDrivesUs />
      </div>

      <div id="accreditation">
        <AccreditationCards />
      </div>

      <div id="leadership">
        <LeadershipTeam />
      </div>

      <div id="download-institutional-profile">
        <Download />
      </div>
    </section>
  );
}

export default AboutView
