export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#campus", label: "Campus" },
  { href: "#achievers", label: "Achievers" },
  { href: "#contact", label: "Contact" },
];

export const brand = {
  name: "Mother Teresa Nursing & Paramedical Institute",
  shortName: "MTNPI",
  city: "Jaipur",
  tagline: "Compassionate Care. Confident Careers.",
};

export const heroContent = {
  eyebrow: "Nursing & Paramedical Education, Jaipur",
  headline: "Compassionate Care Begins With Confident Training",
  subheadline:
    "Mother Teresa Nursing & Paramedical Institute prepares students for real healthcare careers with hands-on clinical training, modern laboratories and dedicated faculty support.",
  ctaPrimary: { label: "Apply Now", href: "#admissions" },
  ctaSecondary: { label: "Explore Courses", href: "#courses" },
};

export const trustStats = [
  { value: "INC · RUHS · RNC", label: "Affiliated Programs" },
  { value: "[Update]", label: "Years of Excellence" },
  { value: "[Update]", label: "Students Trained" },
  { value: "Hospital-Linked", label: "Clinical Training" },
];

export const trustBadges = [
  "INC Affiliated",
  "RUHS Recognised",
  "RNC Approved",
  "Hospital-Linked Clinical Training",
  "Modern Laboratories",
  "Experienced Faculty",
];

export const about = {
  eyebrow: "About Us",
  heading: "A Trusted Name in Nursing & Paramedical Education",
  paragraphs: [
    "Mother Teresa Nursing & Paramedical Institute, Jaipur, is committed to shaping skilled, compassionate healthcare professionals through rigorous academics and hands-on clinical exposure.",
    "Affiliated with INC, RUHS and RNC, the institute combines experienced faculty, modern laboratories and a caring campus culture to prepare students for real-world healthcare careers.",
  ],
  highlights: [
    "INC / RUHS / RNC affiliated programs",
    "Experienced nursing & paramedical faculty",
    "Modern labs and hospital-linked clinical training",
    "Student-focused, values-driven campus culture",
  ],
};

export const directorMessage = {
  eyebrow: "Director's Message",
  name: "[Director's name to be updated]",
  role: "Director",
  message:
    "“Our mission is to nurture every student into a confident, compassionate healthcare professional — one who is ready to serve with both skill and heart. At Mother Teresa Nursing & Paramedical Institute, we invest in people, not just curriculum.”",
};

export const missionVision = {
  mission: {
    title: "Our Mission",
    text: "To provide quality, affordable nursing and paramedical education that produces skilled, ethical and compassionate healthcare professionals ready to serve society.",
  },
  vision: {
    title: "Our Vision",
    text: "To be a leading institute in Rajasthan for nursing and paramedical education, recognised for academic excellence, clinical competence and care-driven values.",
  },
  values: [
    { title: "Compassion", text: "Care for patients and each other with empathy." },
    { title: "Excellence", text: "Pursue high academic and clinical standards." },
    { title: "Integrity", text: "Act with honesty and professional ethics." },
    { title: "Service", text: "Contribute meaningfully to community health." },
  ],
};

export type Course = {
  name: string;
  duration: string;
  eligibility: string;
  seats: string;
  description: string;
};

export const courses: Course[] = [
  {
    name: "GNM — General Nursing & Midwifery",
    duration: "[Update needed]",
    eligibility: "[Update needed]",
    seats: "[Update needed]",
    description:
      "A diploma program preparing students for a career as a registered nurse, covering general nursing care, midwifery and community health.",
  },
  {
    name: "ANM — Auxiliary Nurse Midwifery",
    duration: "[Update needed]",
    eligibility: "[Update needed]",
    seats: "[Update needed]",
    description:
      "A foundational diploma focused on basic nursing, maternal and child healthcare, and community health support.",
  },
  {
    name: "B.Sc Nursing",
    duration: "[Update needed]",
    eligibility: "[Update needed]",
    seats: "[Update needed]",
    description:
      "A degree program combining advanced nursing theory with extensive clinical practice for leadership-ready nursing careers.",
  },
  {
    name: "Paramedical Programs",
    duration: "[Update needed]",
    eligibility: "[Update needed]",
    seats: "[Update needed]",
    description:
      "Diploma-level paramedical courses preparing students for allied healthcare roles across labs, imaging and patient care support.",
  },
];

export type LabItem = { name: string; slug: string };

export const labs: LabItem[] = [
  { name: "Anatomy & Physiology Lab", slug: "anatomy-physiology" },
  { name: "Pre-Clinical Sciences Lab", slug: "pre-clinical-sciences" },
  { name: "Nursing Foundations Lab", slug: "nursing-foundations" },
  { name: "Nutrition & Community Health Lab", slug: "nutrition-community" },
  { name: "Classroom & AV Lab", slug: "classroom-av" },
  { name: "Computer Lab", slug: "computer-lab" },
];

export type CampusLifeImage = { caption: string; category: string };

export const campusLifeImages: CampusLifeImage[] = [
  { caption: "Sports Week", category: "Events" },
  { caption: "Educational Trip", category: "Events" },
  { caption: "Cultural Event", category: "Events" },
  { caption: "Campus Life", category: "Campus" },
  { caption: "Student Activities", category: "Students" },
];

export type GalleryImage = { slug: string; caption: string };

export const galleryImages: GalleryImage[] = [
  { slug: "campus-view", caption: "Campus View" },
  { slug: "classroom", caption: "Classroom Session" },
  { slug: "lab-practical", caption: "Lab Practical" },
  { slug: "sports-week", caption: "Sports Week" },
  { slug: "cultural-event", caption: "Cultural Event" },
  { slug: "convocation", caption: "Convocation" },
  { slug: "library", caption: "Library" },
  { slug: "student-group", caption: "Student Group" },
];

export const achievements = [
  {
    title: "Academic Toppers",
    text: "Recognising students with outstanding results each academic year. [Names & details to be updated]",
  },
  {
    title: "Clinical Excellence",
    text: "Awarded to students showing exceptional clinical skill and patient care during hospital postings.",
  },
  {
    title: "Placement Success",
    text: "Celebrating alumni placed in hospitals and healthcare institutions after graduation. [Details to be updated]",
  },
];

export const contact = {
  headOffice: "Jaipur, Rajasthan — [Full address to be updated]",
  campus: "Jaipur, Rajasthan",
  email: "mtnpi@yahoo.com",
  phones: ["0000000000"],
};
