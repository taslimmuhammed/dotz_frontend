import { Reveal } from "./anim/Reveal";
import { featureIcons } from "./icons";

const reasons = [
  {
    icon: "bolt",
    title: "Live in days, not months",
    desc: "Most builds go live inside a week — so you start capturing leads while competitors are still scoping a spec.",
  },
  {
    icon: "layers",
    title: "Trained on your business",
    desc: "Your docs, menus, catalogs and tone feed every agent — answers are yours, not generic AI fluff.",
  },
  {
    icon: "globe",
    title: "Speaks your customer's language",
    desc: "Each reply matches the language the customer wrote in — automatically, with no extra setup.",
  },
  {
    icon: "clock",
    title: "Always on, never off sick",
    desc: "24/7 across WhatsApp, voice, web and email — every message answered in seconds, day or night.",
  },
  {
    icon: "shield",
    title: "Your data stays yours",
    desc: "Secure by design. Your data trains your agents and nobody else's — no leaks, no reselling.",
  },
];

export function Why() {
  const ArrowRight = featureIcons.arrowRight;

  return (
    <section id="why" className="relative border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* left — sticky pitch */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="flex flex-col items-start">
            <span className="chip mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Why DOTZ
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Not another chatbot.
              <br />
              An AI team that ships.
            </h2>
            <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted sm:text-lg">
              We handle the strategy, build, training and tuning — you get
              agents that sound like your best employee and never clock out.
            </p>
            <a href="#contact" className="btn btn-ghost mt-7">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* right — differentiators list */}
        <ul className="flex flex-col">
          {reasons.map((r, i) => {
            const Icon = featureIcons[r.icon];
            return (
              <Reveal key={r.title} delay={i * 0.05}>
                <li className="group flex gap-5 border-b border-line py-6 first:pt-0">
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-white/[0.03] text-foreground transition-colors group-hover:border-white/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-pretty leading-relaxed text-muted">
                      {r.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
