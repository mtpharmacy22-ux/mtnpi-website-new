"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { heroContent, trustStats } from "@/data/site-content";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream-100 pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">{heroContent.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-forest-800 sm:text-5xl lg:text-[3.25rem]">
            {heroContent.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-forest-700/70 sm:text-lg">
            {heroContent.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={heroContent.ctaPrimary.href}
              className="btn-primary"
            >
              {heroContent.ctaPrimary.label}
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href={heroContent.ctaSecondary.href}
              className="btn-secondary"
            >
              <PlayCircle size={16} />
              {heroContent.ctaSecondary.label}
            </motion.a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {trustStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-forest-800">{s.value}</p>
                <p className="mt-1 text-xs text-forest-700/60">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-sm border border-forest-700/10 shadow-lift"
        >
          <ImageSlot
            src="/images/hero/mtnpi-campus.jpg"
            alt="Mother Teresa Nursing & Paramedical Institute campus"
            label="Campus Photo"
            path="/public/images/hero/mtnpi-campus.jpg"
            aspect="aspect-[4/3]"
          />
        </motion.div>
      </div>
    </section>
  );
}
