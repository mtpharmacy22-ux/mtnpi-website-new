"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { BookOpen, Wifi, Clock3 } from "lucide-react";

export function Library() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card lg:order-2">
          <ImageSlot
            src="/images/library/mtnpi-library.jpg"
            alt="Institute library"
            label="Library Photo"
            path="/public/images/library/mtnpi-library.jpg"
            aspect="aspect-[4/3]"
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:order-1">
          <span className="eyebrow">Library</span>
          <h2 className="section-heading mt-3">A Resource-Rich Reading Space</h2>
          <p className="mt-4 text-sm leading-relaxed text-forest-700/70">
            A dedicated library stocked with nursing and paramedical textbooks, reference material
            and journals to support focused study.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-forest-800">
            <li className="flex items-center gap-2.5">
              <BookOpen size={17} className="text-sage-500" />
              Curated nursing & paramedical collection
            </li>
            <li className="flex items-center gap-2.5">
              <Clock3 size={17} className="text-sage-500" />
              Extended study hours
            </li>
            <li className="flex items-center gap-2.5">
              <Wifi size={17} className="text-sage-500" />
              Quiet, well-lit reading environment
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
