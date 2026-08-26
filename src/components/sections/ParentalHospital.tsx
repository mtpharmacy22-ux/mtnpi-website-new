"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Stethoscope, HeartPulse, Building2 } from "lucide-react";

export function ParentalHospital() {
  return (
    <section className="bg-forest-800 py-20 text-cream-100 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow text-gold-400/80">Clinical Training Partner</span>
          <h2 className="section-heading mt-3 text-cream-100">Health Line Hospital</h2>
          <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
            Students gain real, supervised clinical exposure through our associated hospital —
            bridging classroom learning with hands-on patient care experience.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-4 text-center">
              <Stethoscope className="mx-auto text-gold-400" size={20} />
              <p className="mt-2 text-xs text-cream-100/70">Clinical Rotations</p>
            </div>
            <div className="rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-4 text-center">
              <HeartPulse className="mx-auto text-gold-400" size={20} />
              <p className="mt-2 text-xs text-cream-100/70">Patient Care Practice</p>
            </div>
            <div className="rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-4 text-center">
              <Building2 className="mx-auto text-gold-400" size={20} />
              <p className="mt-2 text-xs text-cream-100/70">Hospital-Linked Campus</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="overflow-hidden rounded-sm border border-cream-100/12 shadow-lift">
          <ImageSlot
            src="/images/hospital/health-line-hospital.jpg"
            alt="Health Line Hospital"
            label="Hospital Photo"
            path="/public/images/hospital/health-line-hospital.jpg"
            aspect="aspect-[4/3]"
          />
        </Reveal>
      </div>
    </section>
  );
}
