"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { BookOpenCheck, Users2, FlaskConical, Award } from "lucide-react";

const points = [
  {
    icon: BookOpenCheck,
    title: "Structured Curriculum",
    text: "Syllabus aligned with INC/RUHS/RNC standards, refreshed to match current healthcare practice.",
  },
  {
    icon: Users2,
    title: "Experienced Faculty",
    text: "Qualified nursing and paramedical faculty with a focus on mentorship.",
  },
  {
    icon: FlaskConical,
    title: "Hands-On Practicals",
    text: "Well-equipped labs and hospital-linked clinical postings for real skill-building.",
  },
  {
    icon: Award,
    title: "Outcome Focused",
    text: "Preparation for licensing exams and placement-ready professional skills.",
  },
];

export function AcademicExcellence() {
  return (
    <section className="bg-skyline-200 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Academics</span>
          <h2 className="section-heading mt-3">Academic Excellence</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <motion.div
              key={p.title}
              variants={revealItem}
              className="rounded-sm border border-forest-700/10 bg-cream-50 p-6"
            >
              <p.icon className="text-forest-700" size={24} />
              <p className="mt-3 font-display text-sm font-semibold text-forest-800">{p.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-forest-700/60">{p.text}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
