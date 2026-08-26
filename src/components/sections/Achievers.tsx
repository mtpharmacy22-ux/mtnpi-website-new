"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/site-content";

export function Achievers() {
  return (
    <section id="achievers" className="bg-forest-800 py-20 text-cream-100 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold-400/80">Recognition</span>
          <h2 className="section-heading mt-3 text-cream-100">Our Achievers</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3">
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={revealItem}
              className="rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-6"
            >
              <Trophy className="text-gold-400" size={24} />
              <p className="mt-3 font-display text-sm font-semibold">{a.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-cream-100/65">{a.text}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
