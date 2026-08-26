type VitalsDividerProps = {
  tone?: "gold" | "forest" | "sage";
};

export function VitalsDivider({ tone = "gold" }: VitalsDividerProps) {
  const toneClass =
    tone === "forest"
      ? "opacity-70 saturate-0 brightness-50"
      : tone === "sage"
        ? "hue-rotate-90"
        : "";

  return (
    <div className="w-full bg-cream-100" aria-hidden="true">
      <div className={`vitals-divider bg-vitals-line mx-auto max-w-4xl ${toneClass}`} />
    </div>
  );
}
