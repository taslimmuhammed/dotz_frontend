"use client";

import { useEffect, useState } from "react";
import { Orb } from "./Orb";

/** First-load splash — features the thinking-orbs "searching" indicator at
 *  64px over a black stage, then fades away. Rendered on the server too, so
 *  it covers content before hydration (no flash of unstyled page). */
export function Splash() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const hold = window.setTimeout(() => setFading(true), 1000);
    return () => window.clearTimeout(hold);
  }, []);

  useEffect(() => {
    if (!fading) return;
    const done = window.setTimeout(() => setGone(true), 620);
    document.documentElement.style.overflow = "";
    return () => window.clearTimeout(done);
  }, [fading]);

  // Lock scroll while the splash is up.
  useEffect(() => {
    document.documentElement.style.overflow = gone ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-black transition-opacity duration-[600ms] ease-out ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-7">
        <Orb state="searching" size={64} aria-label="Loading DOTZ" />
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-semibold tracking-[0.42em] text-foreground">
            DOTZ
          </span>
          <span className="relative h-px w-40 overflow-hidden bg-white/10">
            <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent [animation:sheen_1.1s_ease-in-out_infinite]" />
          </span>
        </div>
      </div>
    </div>
  );
}
