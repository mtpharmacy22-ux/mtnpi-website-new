"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { motion } from "framer-motion";
import { labs } from "@/data/site-content";

export function Labs() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Infrastructure</span>
          <h2 className="section-heading mt-3">Labs Built for Practical Learning</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <motion.div
              key={lab.slug}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card"
            >
              <ImageSlot
                src={`/images/labs/${lab.slug}.jpg`}
                alt={lab.name}
                label={lab.name}
                path={`/public/images/labs/${lab.slug}.jpg`}
                aspect="aspect-[4/3]"
              />
              <div className="bg-cream-50 p-4">
                <p className="font-display text-sm font-semibold text-forest-800">{lab.name}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
