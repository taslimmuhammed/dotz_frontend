import type { SVGProps } from "react";

/** Pointy-top hexagon ring of 6 dots around 1 centre — the DOTZ mark.
 *  Coordinates on a 100×100 grid, centre (50,50), ring radius 30. */
const OUTER: Array<[number, number]> = [
  [50, 20], // top
  [75.98, 35], // upper-right
  [75.98, 65], // lower-right
  [50, 80], // bottom
  [24.02, 65], // lower-left
  [24.02, 35], // upper-left
];

type DotMarkProps = SVGProps<SVGSVGElement> & {
  size?: number;
  /** Sequential "breathing" pulse around the ring. */
  animated?: boolean;
  dotRadius?: number;
};

export function DotMark({
  size = 28,
  animated = false,
  dotRadius = 8.6,
  ...props
}: DotMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {OUTER.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={dotRadius}
          className={animated ? "dot-pulse" : undefined}
          style={animated ? ({ "--d": `${i * 0.18}s` } as React.CSSProperties) : undefined}
        />
      ))}
      <circle cx={50} cy={50} r={dotRadius} />
    </svg>
  );
}

/** Mark + "DOTZ" wordmark lockup. */
export function Wordmark({
  className,
  size = 26,
  animated = false,
}: {
  className?: string;
  size?: number;
  animated?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <DotMark size={size} animated={animated} className="text-foreground" />
      <span
        className="font-semibold tracking-[0.28em] text-foreground"
        style={{ fontSize: size * 0.66 }}
      >
        DOTZ
      </span>
    </span>
  );
}
