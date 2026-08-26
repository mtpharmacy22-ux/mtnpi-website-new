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
  name: "Dr. I. B. Khan",
  role: "Director",
  message:
    "“Mother Teresa Nursing and Paramedical Institute is a dynamic college that prepares students for the future by providing them with the skills and knowledge they need to succeed in their careers. We believe that education is more than just classes and textbooks — it's an experience that shapes who you are and who you'll become. Our dedicated faculty and staff are committed to helping each student reach their full potential, and our curriculum is designed to challenge and engage them. Our campus is a vibrant hub of innovation, diversity and discovery. Take your next step here.”",
};

export const missionVision = {
  mission: {
    title: "Our Mission",
    text: "To empower aspiring healthcare professionals through quality education, hands-on training, and ethical values, enabling them to serve with compassion, competence, and dedication in the field of nursing and paramedical sciences. We aim to contribute to society by preparing skilled individuals who uphold the highest standards of patient care and community well-being.",
  },
  vision: {
    title: "Our Vision",
    text: "To become a leading center of excellence in nursing and paramedical education in Jaipur and beyond, fostering innovation, research, and holistic development. We envision creating a future-ready healthcare workforce that transforms lives and advances healthcare delivery across India and globally.",
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
    text: "Recognising our top-ranking 4th Year students — including Mohit Yadav (82%, 1st Rank), Poonam Maurya (77.42%, 2nd Rank), and Himanshu Dhakad & Khushi Choudhary (77%, 3rd Rank).",
  },
  {
    title: "Clinical Excellence",
    text: "Awarded to students showing exceptional clinical skill and patient care during hospital postings.",
  },
  {
    title: "Placement Success",
    text: "Celebrating alumni placed across India — at AIIMS Bhopal, AIIMS Delhi, AIIMS Rishikesh and SGPGI, as CHO officers in Rajasthan, UP and Haryana, and via top exam ranks such as Naveen Saini (NORCET AIR-319) and Indra Kumar Jain (GTB Hospital, Delhi).",
  },
];

export const contact = {
  headOffice: "J-180, Rajiv Gandhi Nagar, Adarsh Nagar, Jaipur",
  campus: "Himaliya Green City, Phagi Road, Renwal, Jaipur",
  email: "mtnpi@yahoo.com",
  phones: ["9352633511", "9829163952", "8290482282"],
};
