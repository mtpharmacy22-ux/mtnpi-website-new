import { trustBadges } from "@/data/site-content";

export function TrustStrip() {
  const items = [...trustBadges, ...trustBadges];

  return (
    <section className="overflow-hidden border-y border-forest-700/10 bg-cream-50 py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="font-mono text-xs uppercase tracking-[0.15em] text-forest-700/60"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
