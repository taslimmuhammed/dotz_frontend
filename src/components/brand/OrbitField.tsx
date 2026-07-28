import type { CSSProperties } from "react";

const C = 200; // centre of the 400×400 field

/** Core hexagon-ring + centre (the DOTZ mark) scaled into the field. */
const CORE: Array<[number, number]> = [
  [200, 166],
  [229.4, 183],
  [229.4, 217],
  [200, 234],
  [170.6, 217],
  [170.6, 183],
];

type RingProps = {
  count: number;
  radius: number;
  dot: number;
  /** seconds per rotation */
  duration: number;
  reverse?: boolean;
  /** where the bright arc peaks, in turns (0–1) */
  phase?: number;
};

/** A ring of dots whose opacity falls off smoothly from a bright arc,
 *  so slow rotation reads as a scanning sweep (echoes the "searching" orb). */
function Ring({ count, radius, dot, duration, reverse, phase = 0 }: RingProps) {
  // Round to fixed precision so the server and client serialise identical
  // strings (Math.cos/sin can differ by 1 ULP across engines → hydration warns).
  const r2 = (n: number) => Math.round(n * 100) / 100;
  const dots = Array.from({ length: count }, (_, i) => {
    const t = i / count;
    const angle = t * Math.PI * 2 - Math.PI / 2;
    const x = r2(C + radius * Math.cos(angle));
    const y = r2(C + radius * Math.sin(angle));
    // Smooth cosine falloff around the ring → a comet of brightness.
    const opacity = r2(
      0.16 + 0.84 * (0.5 + 0.5 * Math.cos((t - phase) * Math.PI * 2))
    );
    return <circle key={i} cx={x} cy={y} r={dot} opacity={opacity} />;
  });

  return (
    <>
      <circle
        cx={C}
        cy={C}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.06}
        strokeWidth={1}
      />
      <g
        style={
          {
            transformOrigin: "center",
            animation: `spin-slow ${duration}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          } as CSSProperties
        }
      >
        {dots}
      </g>
    </>
  );
}

/** The DOTZ orbit system — the hero's animated centrepiece. Pure CSS
 *  rotation, so it renders on the server and stays cheap. */
export function OrbitField({ className }: { className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      {/* soft halo */}
      <div className="glow-pulse pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(120,140,255,0.22),rgba(56,189,248,0.08)_38%,transparent_66%)] blur-[6px]" />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <Ring count={20} radius={182} dot={2.8} duration={64} phase={0.0} />
        <Ring count={14} radius={138} dot={3.4} duration={46} reverse phase={0.35} />
        <Ring count={10} radius={94} dot={4.2} duration={34} phase={0.6} />

        {/* core mark — the DOTZ hexagon, gently breathing */}
        {CORE.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={9}
            className="dot-pulse"
            style={{ "--d": `${i * 0.18}s` } as CSSProperties}
          />
        ))}
        <circle cx={C} cy={C} r={9} />
      </svg>
    </div>
  );
}
