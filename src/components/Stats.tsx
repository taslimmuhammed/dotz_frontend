import { Reveal } from "./anim/Reveal";

const stats = [
  { value: "<10s", label: "Average reply time" },
  { value: "24/7", label: "Always answering" },
  { value: "10+", label: "AI services, one team" },
  { value: "Days", label: "To launch, not months" },
];

export function Stats() {
  return (
    <section className="px-6 py-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="overflow-hidden rounded-4xl border border-line">
          <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 bg-surface px-6 py-10 text-center"
              >
                <dt className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {s.value}
                </dt>
                <dd className="label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
