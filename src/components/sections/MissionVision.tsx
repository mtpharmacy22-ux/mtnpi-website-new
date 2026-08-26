"use client";

import { RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { missionVision } from "@/data/site-content";

export function MissionVision() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          <motion.div variants={revealItem} className="card-surface p-8">
            <Target className="text-forest-700" size={28} />
            <h3 className="mt-4 font-display text-xl font-semibold text-forest-800">
              {missionVision.mission.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-forest-700/70">
              {missionVision.mission.text}
            </p>
          </motion.div>
          <motion.div variants={revealItem} className="card-surface p-8">
            <Eye className="text-forest-700" size={28} />
            <h3 className="mt-4 font-display text-xl font-semibold text-forest-800">
              {missionVision.vision.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-forest-700/70">
              {missionVision.vision.text}
            </p>
          </motion.div>
        </RevealGroup>

        <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {missionVision.values.map((v) => (
            <motion.div
              key={v.title}
              variants={revealItem}
              className="rounded-sm border border-forest-700/10 bg-cream-50 p-6"
            >
              <HeartHandshake className="text-sage-500" size={22} />
              <p className="mt-3 font-display text-sm font-semibold text-forest-800">{v.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-forest-700/60">{v.text}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
