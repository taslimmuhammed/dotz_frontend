import { Reveal } from "./anim/Reveal";
import { Orb } from "./Orb";
import { featureIcons } from "./icons";

const steps = [
  { label: "Understanding the request", state: "done" as const },
  { label: "Searching your knowledge base", state: "active" as const },
  { label: "Checking Sunday delivery zones", state: "pending" as const },
  { label: "Drafting a reply in the customer's language", state: "pending" as const },
];

export function DemoStrip() {
  const Check = featureIcons.check;

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="card relative overflow-hidden rounded-4xl p-8 sm:p-12">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_70%_at_50%_0%,#000,transparent)]" />

            <div className="relative flex flex-col items-center text-center">
              <Orb state="composing" size={64} aria-label="Agent composing" />
              <span className="label mt-6">See it think</span>
              <h2 className="mt-4 max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Every reply is reasoned, not guessed.
              </h2>
              <p className="mt-3 max-w-md text-pretty text-muted">
                Watch a DOTZ agent resolve a real question — grounded in your
                data, answered in seconds.
              </p>
            </div>

            <div className="relative mx-auto mt-9 max-w-md rounded-2xl border border-line bg-surface/60 p-5">
              <p className="mb-4 text-sm text-muted">
                <span className="text-faint">Incoming ·</span> “Do you deliver
                to 560001 on Sundays?”
              </p>
              <ul className="flex flex-col gap-3">
                {steps.map((s) => (
                  <li key={s.label} className="flex items-center gap-3 text-sm">
                    {s.state === "done" && (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-line-strong text-foreground/70">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                    {s.state === "active" && (
                      <Orb state="working" size={20} aria-label="Working" />
                    )}
                    {s.state === "pending" && (
                      <span className="inline-flex h-5 w-5 items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
                      </span>
                    )}
                    <span
                      className={
                        s.state === "pending" ? "text-faint" : "text-foreground"
                      }
                    >
                      {s.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
