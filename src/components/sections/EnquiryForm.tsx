"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { contact } from "@/data/site-content";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="enquiry" className="bg-skyline-200 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <span className="eyebrow">Enquiry</span>
          <h2 className="section-heading mt-3">Have Questions? Ask Us</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-forest-700/70">
            Fill the form and our admissions team will get back to you. You can also call or
            WhatsApp us directly at {contact.phones[0]}.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="card-surface p-7 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-6 text-center">
              <CheckCircle2 className="text-sage-500" size={36} />
              <p className="mt-3 font-display text-lg font-semibold text-forest-800">Thank you!</p>
              <p className="mt-1 text-sm text-forest-700/70">
                We&apos;ve received your enquiry and will contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  placeholder="Full Name"
                  className="rounded-sm border border-forest-700/15 bg-cream-50 px-4 py-3 text-sm text-forest-800 outline-none focus:border-forest-700"
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="rounded-sm border border-forest-700/15 bg-cream-50 px-4 py-3 text-sm text-forest-800 outline-none focus:border-forest-700"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="rounded-sm border border-forest-700/15 bg-cream-50 px-4 py-3 text-sm text-forest-800 outline-none focus:border-forest-700"
              />
              <select
                name="course"
                defaultValue=""
                className="rounded-sm border border-forest-700/15 bg-cream-50 px-4 py-3 text-sm text-forest-800 outline-none focus:border-forest-700"
              >
                <option value="" disabled>
                  Course of Interest
                </option>
                <option>GNM</option>
                <option>ANM</option>
                <option>B.Sc Nursing</option>
                <option>Paramedical</option>
              </select>
              <textarea
                name="message"
                placeholder="Message (optional)"
                rows={3}
                className="rounded-sm border border-forest-700/15 bg-cream-50 px-4 py-3 text-sm text-forest-800 outline-none focus:border-forest-700"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn-primary mt-1"
              >
                Submit Enquiry <Send size={15} />
              </motion.button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
