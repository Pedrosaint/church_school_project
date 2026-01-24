export const navLinks = [
  // {
  //   name: "Home",
  //   path: "/",
  // },
  // {
  //   name: "About",
  //   dropdown: [
  //     { name: "Our Story", path: "/about#our-story" },
  //     { name: "Our Journey", path: "/about#our-journey" },
  //     { name: "What drives us", path: "/about#what-drives-us" },
  //     { name: "Accreditation", path: "/about#accreditation" },
  //     { name: "Leadership", path: "/about#leadership" },
  //     { name: "Download", path: "/about#download-institutional-profile" },
  //   ],
  // },
  {
    name: "Admissions",
    dropdown: [
      { name: "Admission Process", path: "/" },
      { name: "Requirements", path: "/admission#adnmission-requirements" },
      { name: "Programs", path: "/admission#program-to-choose-from" },
      {
        name: "Online Application Form",
        path: "/admission#online-application",
      },
    ],
  },
  {
    name: "Academics",
    path: "/academic",
  },
  // {
  //   name: "News",
  //   dropdown: [{ name: "News & Updates", path: "/news-updates" }],
  // },
  {
    name: "Portal",
    dropdown: [
      { name: "Student Portal Login", path: "/student/portal/login" },
      { name: "Admin Portal Login", path: "/admin/portal" },
    ],
  },

  // This is the only part thats different from the other dropdowns
  // {
  //   name: "More",
  //   dropdown: [
  //     { name: "Support the Ministry", path: "/more#support-the-ministry" },
  //     { name: "Testimonies", path: "/more#testimonies" },
  //     { name: "Gallery", path: "/more#gallery" },
  //     { name: "Contact Us", path: "/more#contact-us" },
  //   ],
  // },
] as const;
