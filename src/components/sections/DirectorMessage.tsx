"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Quote } from "lucide-react";
import { directorMessage } from "@/data/site-content";

export function DirectorMessage() {
  return (
    <section className="bg-skyline-200 py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
        <Reveal className="mx-auto w-full max-w-xs overflow-hidden rounded-sm border border-forest-700/10 shadow-card">
          <ImageSlot
            src="/images/director/director-photo.jpg"
            alt={directorMessage.name}
            label="Director Photo"
            path="/public/images/director/director-photo.jpg"
            aspect="aspect-[3/4]"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <Quote className="text-gold-500" size={36} strokeWidth={1.5} />
          <p className="mt-4 font-display text-xl font-medium leading-relaxed text-forest-800 sm:text-2xl">
            {directorMessage.message}
          </p>
          <p className="mt-6 text-sm font-semibold text-forest-800">{directorMessage.name}</p>
          <p className="text-xs uppercase tracking-wide text-forest-700/60">{directorMessage.role}</p>
        </Reveal>
      </div>
    </section>
  );
}
