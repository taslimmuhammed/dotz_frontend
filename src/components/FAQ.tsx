"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { featureIcons } from "./icons";
import { easeOut } from "@/lib/motion";

const faqs = [
  {
    q: "How fast can we actually go live?",
    a: "Most builds go live within a week — simple WhatsApp bots in a few days, larger multi-channel setups in two to three weeks. You start capturing leads while the rest is still being tuned.",
  },
  {
    q: "Which channels do you support?",
    a: "WhatsApp, voice calls, web chat and email out of the box, with Instagram DM and SMS available. Everything lands in one place so nothing slips through.",
  },
  {
    q: "Will the AI actually sound like us?",
    a: "Yes. Every agent is trained on your docs, catalogs, FAQs and tone of voice — not a generic script. Answers stay accurate and on-brand.",
  },
  {
    q: "What languages can it handle?",
    a: "Chat and text agents reply in whatever language the customer writes in, automatically. Outbound voice campaigns are English-only for now.",
  },
  {
    q: "Do you handle setup, training and tuning?",
    a: "End to end. We map your workflows, build and train the agents, launch across your channels and keep tuning on real conversations every week.",
  },
  {
    q: "Is our data secure?",
    a: "Your data trains your agents and nobody else's. We build with security in mind and never resell or share your information.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const Plus = featureIcons.plus;

  return (
    <section id="faq" className="relative border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader label="FAQ" title="Questions, answered." />

        <div className="mt-14">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-line first:border-t">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-foreground sm:text-lg">
                    {f.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-pretty leading-relaxed text-muted">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
