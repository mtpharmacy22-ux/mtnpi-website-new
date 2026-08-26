"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { GraduationCap, Clock, Users, ListChecks } from "lucide-react";
import { courses } from "@/data/site-content";

export function Courses() {
  return (
    <section id="courses" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Programs Offered</span>
          <h2 className="section-heading mt-3">Courses at MTNPI</h2>
          <p className="mt-4 text-sm leading-relaxed text-forest-700/60">
            Duration, eligibility, seats and fees below are indicative — please contact us for the
            latest admission details.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
          {courses.map((c) => (
            <motion.div
              key={c.name}
              variants={revealItem}
              whileHover={{ y: -3 }}
              className="card-surface p-7"
            >
              <GraduationCap className="text-forest-700" size={24} />
              <h3 className="mt-4 font-display text-lg font-semibold text-forest-800">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-700/70">{c.description}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-forest-700/10 pt-4 text-xs">
                <div>
                  <dt className="flex items-center gap-1 text-forest-700/50">
                    <Clock size={13} />
                    Duration
                  </dt>
                  <dd className="mt-1 font-semibold text-forest-800">{c.duration}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1 text-forest-700/50">
                    <ListChecks size={13} />
                    Eligibility
                  </dt>
                  <dd className="mt-1 font-semibold text-forest-800">{c.eligibility}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1 text-forest-700/50">
                    <Users size={13} />
                    Seats
                  </dt>
                  <dd className="mt-1 font-semibold text-forest-800">{c.seats}</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
