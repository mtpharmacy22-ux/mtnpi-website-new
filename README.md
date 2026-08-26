# Mother Teresa Nursing & Paramedical Institute — Website

A modern, animated, fully responsive website built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide icons**, for Mother Teresa Nursing & Paramedical Institute, Jaipur.

All text content is sourced strictly from the institute's official brochure. Nothing (fees, duration, eligibility, seats, statistics) has been invented — anything not present in the brochure is marked `[Information to be updated]`.

---

## 1. Install dependencies

```bash
npm install
```

## 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 3. Production build

```bash
npm run build
npm run start
```

> **Note:** The build fetches Space Grotesk, Inter and IBM Plex Mono from Google Fonts via `next/font/google`. This requires normal internet access at build time (any laptop, CI runner, or hosting provider like Vercel/Netlify will have this). It will fail only in network-locked sandboxes.

## 4. Deployment

The easiest path is **Vercel** (built by the makers of Next.js):

1. Push this project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Framework preset: Next.js (auto-detected). Click Deploy.

Also works on Netlify, Render, or any Node.js host that supports Next.js 14.

---

## Project structure

```
mtnpi/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── logo/
│       ├── hero/
│       ├── campus/
│       ├── labs/
│       ├── students/
│       ├── gallery/
│       ├── director/
│       ├── achievers/
│       ├── library/
│       ├── transport/
│       └── hospital/
├── src/
│   ├── app/
│   │   ├── layout.tsx        → fonts, global SEO metadata
│   │   ├── page.tsx           → assembles all homepage sections
│   │   ├── globals.css        → design tokens / utility classes
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/             Navbar.tsx, Footer.tsx
│   │   ├── sections/           Hero, TrustStrip, About, DirectorMessage,
│   │   │                       MissionVision, Courses, ParentalHospital,
│   │   │                       Labs, AcademicExcellence, Library,
│   │   │                       Transport, Achievers, CampusLife, Gallery,
│   │   │                       AdmissionsCTA, EnquiryForm, Contact
│   │   └── ui/                 Icon.tsx, ImageSlot.tsx, Reveal.tsx,
│   │                           VitalsDivider.tsx (signature animated divider)
│   └── data/
│       └── site-content.ts     ← single source of truth for all copy/data
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

To edit any text on the site (courses, achievers, contact details, lab descriptions, etc.), edit **`src/data/site-content.ts`** — nothing else needs to change.

---

## Design system

- **Colors:** deep forest green (`forest-700` `#123B31`), fresh green (`sage-500` `#3A7D5C`), warm cream background (`cream-100` `#FAF6EC`), light blue section tint (`skyline-200` `#E7F1F3`), soft gold accent (`gold-500` `#C99A3E`) — all taken from the brochure's own palette.
- **Type:** Space Grotesk (headings), Inter (body), IBM Plex Mono (labels/eyebrows/data).
- **Signature element:** a thin gold "vitals line" (heartbeat-monitor motif) used as a section divider — a nod to clinical monitoring that ties back to the nursing subject matter, used sparingly.
- **Motion:** scroll-triggered fade-ups, staggered card reveals, hover lifts, sticky navbar transition, animated mobile menu, gallery lightbox transitions. All motion respects `prefers-reduced-motion`.

---

## Images — status

All image slots are now filled with real photos and the site renders them (no more placeholder boxes):

- **Logo:** extracted from the brochure cover, background removed, used in the navbar, footer, and browser favicon.
- **Hero / About:** institute building photo (from brochure) + a real classroom/lab photo you supplied.
- **Director:** Dr. I. B. Khan's photograph, cropped cleanly from the brochure.
- **7 labs:** photos pulled from the brochure's lab-photos page (anatomy/physiology, pre-clinical sciences, classroom/AV) plus your supplied nutrition & community lab photo, reused sensibly where the brochure didn't have a distinct shot for every lab.
- **Library, transport (bus), Health Line Hospital (exterior/signage/clinical):** all sourced directly from the brochure.
- **Campus life & gallery (Sports Week, Educational Trip, Cultural Event, Campus, Students, Events):** sourced from the brochure and your supplied photos.

**Two of your uploaded WhatsApp photos were *not* used** — the Mother Teresa College of **Pharmacy** entrance group photo and its logo. That's a different unit (Pharmacy, not Nursing) under the same society, so mixing it into this Nursing Institute site would misrepresent the campus. Let me know if you'd like a separate pass on the MTCP site using those.

If you'd like to swap any photo for a better one later, just drop the new file into the matching folder under `public/images/...` using the same filename — the `ImageSlot` component (`src/components/ui/ImageSlot.tsx`) will pick it up automatically since `src` is already wired through every section.

---

## Other things to confirm before launch

- **Contact details discrepancy:** the brochure's back page lists email as `mtnpi@yahoo.com` and website as `www.mtnpi.com` (used throughout this site). Please confirm these are still current.
- **Course details:** duration, eligibility criteria, seat count and fees are not in the brochure — currently shown as `[Information to be updated]` in the Courses section. Send these over and I'll fill them in.
- **Enquiry form:** currently validates on the client side only and does not send data anywhere. Before going live, wire `src/components/sections/EnquiryForm.tsx` to an email service (e.g. Resend, EmailJS) or an API route that saves to a database/CRM.
- **Google Map embed:** currently generated from the campus address text. Swap in your exact Google Maps place link for a pin-accurate embed.
- **Social media links:** none were found in the brochure — add real links in `Footer.tsx` if you'd like icons there.
