"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

/** Client-only wrapper around thinking-orbs' canvas indicator. Loaded with
 *  ssr:false so the canvas only ever paints on the client. */
const ThinkingOrb = dynamic(
  () => import("thinking-orbs").then((m) => m.ThinkingOrb),
  {
    ssr: false,
    loading: () => (
      <span
        aria-hidden
        className="inline-block rounded-full bg-white/10"
        style={{ width: 20, height: 20 }}
      />
    ),
  }
);

type OrbProps = Omit<ComponentProps<typeof ThinkingOrb>, "ref">;

export function Orb(props: OrbProps) {
  return <ThinkingOrb theme="dark" {...props} />;
}
