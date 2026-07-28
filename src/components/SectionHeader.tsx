import type { ReactNode } from "react";
import { Reveal } from "./anim/Reveal";

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex max-w-2xl flex-col ${
        isCenter ? "mx-auto items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="chip mb-5">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
        {label}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
