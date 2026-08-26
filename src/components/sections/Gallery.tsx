"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/site-content";

export function Gallery() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-heading mt-3">Moments from Campus</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img) => (
            <motion.div
              key={img.slug}
              variants={revealItem}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card"
            >
              <ImageSlot
                src={`/images/gallery/${img.slug}.jpg`}
                alt={img.caption}
                label={img.caption}
                path={`/public/images/gallery/${img.slug}.jpg`}
                aspect="aspect-square"
              />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
