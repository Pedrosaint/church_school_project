type Course = {
  code: string;
  level: string;
  type: string;
  title: string;
  description: string;
  credits: number;
  semester: number;
  prerequisite: string;
};

type DepartmentCourseMap = Record<number, Course[]>;

export const DepartmentCourseMap: DepartmentCourseMap = {
  1: [
    {
      code: "THE 101",
      level: "Undergraduate",
      type: "Core",
      title: "Introduction to Systematic Theology",
      description:
        "Foundational study of Christian doctrines and theological methods.",
      credits: 3,
      semester: 1,
      prerequisite: "No Prerequisites",
    },
    {
      code: "THE 201",
      level: "Undergraduate",
      type: "Core",
      title: "Old Testament Exegesis",
      description:
        "Critical study of Old Testament texts and interpretation methods.",
      credits: 3,
      semester: 1,
      prerequisite: "THE 101",
    },
    {
      code: "THE 301",
      level: "Undergraduate",
      type: "Elective",
      title: "New Testament Greek",
      description: "Introduction to biblical Greek for textual study.",
      credits: 3,
      semester: 1,
      prerequisite: "LIS 201",
    },
    {
      code: "LIS 501",
      level: "Master's",
      type: "Core",
      title: "Advance Systematic Theology",
      description: "In-depth exploration of contemporary theological issues.",
      credits: 4,
      semester: 1,
      prerequisite: "Bachelors in theology or Related...",
    },
    {
      code: "LIS 601",
      level: "Master's",
      type: "Core",
      title: "Pastoral Theology & Practice",
      description:
        "Integration of theological knowledge with pastoral ministry.",
      credits: 3,
      semester: 1,
      prerequisite: "THE 501",
    },
  ],

  2: [
    {
      code: "REL 101",
      level: "Undergraduate",
      type: "Core",
      title: "Introduction to World Religions",
      description: "Study of major world religions and their belief systems.",
      credits: 3,
      semester: 1,
      prerequisite: "No Prerequisites",
    },
  ],

  3: [
    {
      code: "PSY 201",
      level: "Undergraduate",
      type: "Core",
      title: "Christian Counseling Foundations",
      description: "Principles of counseling based on Christian worldview.",
      credits: 3,
      semester: 1,
      prerequisite: "No Prerequisites",
    },
  ],

  4: [
    {
      code: "LIS 301",
      level: "Undergraduate",
      type: "Core",
      title: "Introduction to Library Science",
      description:
        "Fundamentals of library organization and information management.",
      credits: 3,
      semester: 1,
      prerequisite: "No Prerequisites",
    },
    {
      code: "LIS 301",
      level: "Undergraduate",
      type: "Core",
      title: "Cataloging & Classification",
      description: "System for organizing and classifying library materials.",
      credits: 3,
      semester: 1,
      prerequisite: "LIS 201",
    },
    {
      code: "LIS 201",
      level: "Undergraduate",
      type: "Elective",
      title: "Digital information System",
      description: "Managing digital resources and electronic libraries.",
      credits: 3,
      semester: 1,
      prerequisite: "LIS 301",
    },
    {
      code: "LIS 411",
      level: "Master's",
      type: "Elective",
      title: "Theological Research Methods",
      description: "Advanced research methodologies for theological studies.",
      credits: 3,
      semester: 1,
      prerequisite: "Bachelors degree",
    },
  ],

  5: [
    {
      code: "LAW 101",
      level: "Certificate",
      type: "Core",
      title: "Introduction to Civil Law",
      description: "Basic study of civil law and legal principles.",
      credits: 3,
      semester: 1,
      prerequisite: "English 101",
    },
  ],
};
