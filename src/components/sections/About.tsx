"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/site-content";

export function About() {
  return (
    <section id="about" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="section-heading mt-3">{about.heading}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-forest-700/70">
              {p}
            </p>
          ))}
          <ul className="mt-6 space-y-3">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-forest-800">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-sage-500" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card">
          <ImageSlot
            src="/images/campus/mtnpi-building.jpg"
            alt="Institute building"
            label="Institute Building"
            path="/public/images/campus/mtnpi-building.jpg"
            aspect="aspect-[4/3]"
          />
        </Reveal>
      </div>
    </section>
  );
}
