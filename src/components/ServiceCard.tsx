"use client";

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { DotMark } from "./brand/DotMark";
import { featureIcons } from "./icons";
import type { Service } from "@/lib/services";
import { easeOut, inView } from "@/lib/motion";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = featureIcons[service.icon];

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.55, ease: easeOut, delay: (index % 3) * 0.06 }}
      className={`card spotlight group relative flex flex-col overflow-hidden rounded-2xl p-6 sm:p-7 ${service.span}`}
    >
      {service.featured && (
        <>
          <DotMark
            size={230}
            className="pointer-events-none absolute -right-10 -top-12 text-white/[0.04]"
          />
          <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-line-strong bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted">
            Most popular
          </span>
        </>
      )}

      <div className="flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-strong bg-white/[0.03] text-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs text-faint">
          {String(service.id).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-medium tracking-tight text-foreground">
        {service.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{service.tagline}</p>

      <ul
        className={`mt-5 grid gap-2.5 ${
          service.featured ? "sm:grid-cols-2 sm:gap-x-6" : ""
        }`}
      >
        {service.points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
