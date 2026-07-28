import { DotMark } from "./brand/DotMark";
import { Reveal } from "./anim/Reveal";
import { featureIcons } from "./icons";
import { site } from "@/lib/site";

export function CTA() {
  const ArrowRight = featureIcons.arrowRight;
  const Whats = featureIcons.whatsapp;

  return (
    <section id="contact" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-line bg-surface px-6 py-20 text-center sm:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]" />
              <div className="glow-pulse absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.22),rgba(56,189,248,0.08)_46%,transparent)]" />
            </div>

            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <DotMark size={56} animated className="text-foreground" />
              <h2 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Ready to put your business on autopilot?
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted">
                Book a demo and see a DOTZ agent trained on your business —
                answering in seconds, live in days.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost w-full sm:w-auto"
                >
                  <Whats className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="mt-6 font-mono text-xs text-faint">
                Prefer email?{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
