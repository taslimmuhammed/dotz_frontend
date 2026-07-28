import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./anim/Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "A quick call to map your workflows, channels, goals and the questions your customers actually ask.",
  },
  {
    n: "02",
    title: "Train",
    desc: "We feed your docs, catalogs, tone and data into your agents — so every answer sounds like you.",
  },
  {
    n: "03",
    title: "Launch",
    desc: "Go live on WhatsApp, voice, web and email in days — capturing and converting from day one.",
  },
  {
    n: "04",
    title: "Optimize",
    desc: "We tune on real conversations every week — sharper answers, higher conversion, month over month.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Process"
          title="From idea to live in four steps."
          description="No drawn-out builds or endless scoping. A clear path from first call to agents answering in the wild."
        />

        <div className="relative mt-16">
          {/* dotted connector — brand dots strung across the row */}
          <div
            aria-hidden
            className="absolute inset-x-[12%] top-6 hidden h-0.5 lg:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--color-line-strong) 1.4px, transparent 1.4px)",
              backgroundSize: "14px 2px",
            }}
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative flex flex-col items-start lg:items-center lg:text-center">
                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-surface font-mono text-sm text-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-lg font-medium tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-pretty leading-relaxed text-muted lg:mx-auto">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
