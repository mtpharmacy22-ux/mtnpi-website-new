"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Bus, ShieldCheck, MapPinned } from "lucide-react";

export function Transport() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Transport</span>
          <h2 className="section-heading mt-3">Safe, Convenient Campus Transport</h2>
          <p className="mt-4 text-sm leading-relaxed text-forest-700/70">
            Institute transport helps students commute safely and reliably to campus and clinical
            postings.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-forest-800">
            <li className="flex items-center gap-2.5">
              <Bus size={17} className="text-sage-500" />
              Dedicated institute bus service
            </li>
            <li className="flex items-center gap-2.5">
              <ShieldCheck size={17} className="text-sage-500" />
              Safety-focused commute for students
            </li>
            <li className="flex items-center gap-2.5">
              <MapPinned size={17} className="text-sage-500" />
              Routes covering key areas of Jaipur [Update with exact routes]
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card">
          <ImageSlot
            src="/images/transport/mtnpi-bus.jpg"
            alt="Institute transport bus"
            label="Transport Photo"
            path="/public/images/transport/mtnpi-bus.jpg"
            aspect="aspect-[4/3]"
          />
        </Reveal>
      </div>
    </section>
  );
}
