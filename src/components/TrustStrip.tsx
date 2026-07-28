const INDUSTRIES = [
  "Restaurants",
  "Clinics",
  "Schools",
  "E-commerce",
  "Real Estate",
  "Salons & Spas",
  "Gyms",
  "Agencies",
  "Hotels",
  "Coaching",
  "Automotive",
  "Logistics",
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-line bg-surface/40 py-10">
      <p className="label mx-auto mb-7 max-w-6xl px-6 text-center">
        Put to work by teams across
      </p>

      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-3 pr-3">
          {[...INDUSTRIES, ...INDUSTRIES].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap text-lg font-medium text-faint transition-colors"
            >
              {name}
              <span className="text-line-strong">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
