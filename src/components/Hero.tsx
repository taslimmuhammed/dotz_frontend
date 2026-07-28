"use client";

import { motion } from "framer-motion";
import { OrbitField } from "./brand/OrbitField";
import { Orb } from "./Orb";
import { featureIcons } from "./icons";
import { site } from "@/lib/site";
import { easeOut, staggerContainer, staggerItem } from "@/lib/motion";

const trust = [
  "Live in days",
  "Trained on your data",
  "Replies 24/7",
  "In your language",
];

export function Hero() {
  const ArrowRight = featureIcons.arrowRight;
  const Whats = featureIcons.whatsapp;
  const Check = featureIcons.check;

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24">
      {/* background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade absolute inset-0 opacity-[0.55]" />
        <div className="bg-dots mask-fade absolute inset-0 opacity-40" />
        <div className="glow-pulse absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.22),rgba(56,189,248,0.08)_45%,transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="mx-auto flex min-h-svh max-w-3xl flex-col pt-28 text-center sm:pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="my-auto flex flex-col items-center"
        >
          <motion.a
            href="#services"
            variants={staggerItem}
            className="chip group hover:border-line-strong"
          >
            <Orb state="working" size={20} aria-label="AI agents online" />
            <span className="text-muted">
              Ten AI services, one team
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-faint transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            variants={staggerItem}
            className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Automation that
            <br />
            <span className="text-gradient">replies in seconds.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            {site.name} builds WhatsApp chatbots, human-sounding voice agents,
            support desks and custom AI — trained on your business, live in
            days, working around the clock.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a href="#contact" className="btn btn-primary w-full sm:w-auto">
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
          </motion.div>

          <motion.ul
            variants={staggerItem}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-sm text-faint">
                <Check className="h-3.5 w-3.5 text-foreground/70" />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* hero stage — the DOTZ orbit system + a live agent read-out */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.35 }}
        className="relative mx-auto mt-10 max-w-4xl sm:mt-14"
      >
        <div className="card spotlight relative overflow-hidden rounded-4xl p-6 sm:p-10">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="mx-auto aspect-square w-full max-w-[360px] animate-float">
              <OrbitField className="h-full w-full" />
            </div>

            <div className="flex flex-col gap-3">
              <MessageChip
                role="user"
                text="Hi! Are you open this Sunday? Can I book a table for 4?"
              />
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/70 p-4">
                <Orb state="listening" size={64} aria-label="Agent listening" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    DOTZ agent
                  </p>
                  <p className="text-sm text-muted">
                    Checking hours &amp; availability…
                  </p>
                </div>
              </div>
              <MessageChip
                role="agent"
                text="Yes — open 10am–11pm Sunday. I've held a table for 4 at 7:30pm. Confirm? ✅"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function MessageChip({ role, text }: { role: "user" | "agent"; text: string }) {
  const isUser = role === "user";
  return (
    <div
      className={`max-w-[92%] rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
        isUser
          ? "self-start border-line bg-elevated text-foreground"
          : "self-end border-white/15 bg-white text-black"
      }`}
    >
      {text}
    </div>
  );
}
