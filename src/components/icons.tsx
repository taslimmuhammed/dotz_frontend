import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Shared wrapper — 24px grid, currentColor stroke, rounded joins. */
function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---- Service icons ---- */
const chat = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 5.5h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z" />
    <path d="M8 9.5h8M8 12h5" />
  </Icon>
);

const bell = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </Icon>
);

const mic = (p: IconProps) => (
  <Icon {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </Icon>
);

const inbox = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 13l3-7a2 2 0 0 1 1.9-1.3h8.2A2 2 0 0 1 18 6l3 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Z" />
    <path d="M3 13h5l1.5 2.2h5L16 13h5" />
  </Icon>
);

const cap = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 4 2 9l10 5 10-5-10-5Z" />
    <path d="M6 11.5V16c0 1.4 2.7 2.8 6 2.8s6-1.4 6-2.8v-4.5M21 9.4v5" />
  </Icon>
);

const screen = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="12.5" rx="1.6" />
    <path d="M3 12.5h18M9 20.5h6M12 16.5v4" />
  </Icon>
);

const bag = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 8h12l-.9 11.2a1 1 0 0 1-1 .9H7.9a1 1 0 0 1-1-.9L6 8Z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
  </Icon>
);

const palette = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3a9 9 0 1 0 0 18 2.4 2.4 0 0 0 2-3.7c-.5-.8 0-1.8 1-1.8h1.2A3.8 3.8 0 0 0 21 12 9 9 0 0 0 12 3Z" />
    <circle cx="7.5" cy="12" r=".9" fill="currentColor" stroke="none" />
    <circle cx="10" cy="8" r=".9" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="8" r=".9" fill="currentColor" stroke="none" />
  </Icon>
);

const target = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </Icon>
);

const orbit = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="2.4" />
    <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(45 12 12)" />
    <circle cx="18.4" cy="5.6" r="1.1" fill="currentColor" stroke="none" />
  </Icon>
);

/* ---- Feature / UI icons ---- */
const bolt = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13 2 4 13h6l-1 9 9-11h-6l1-9Z" />
  </Icon>
);

const globe = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.5 2.6 15 0 18M12 3c-2.6 2.5-2.6 15 0 18" />
  </Icon>
);

const shield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 5 6v5c0 4.4 3 8 7 10 4-2 7-5.6 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

const clock = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
);

const spark = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </Icon>
);

const layers = (p: IconProps) => (
  <Icon {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </Icon>
);

const check = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12.5 4.2 4.2L19 7" />
  </Icon>
);

const arrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Icon>
);

const arrowUpRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

const plus = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

const whatsapp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.2.84 5.73 2.37a8.06 8.06 0 0 1 2.38 5.74c0 4.47-3.64 8.11-8.12 8.11a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.82.83-3.04-.19-.31a8.05 8.05 0 0 1-1.24-4.29c0-4.47 3.64-8.11 8.12-8.11Zm-2.86 4.3c-.14 0-.36.05-.55.26-.19.2-.72.71-.72 1.72s.74 1.99.84 2.13c.1.14 1.44 2.29 3.58 3.12 1.78.7 2.14.56 2.53.53.39-.04 1.26-.52 1.44-1.02.18-.5.18-.92.13-1.02-.05-.09-.19-.14-.4-.24-.21-.11-1.26-.62-1.45-.69-.19-.07-.34-.11-.48.11-.14.21-.55.68-.67.82-.12.14-.25.16-.46.05-.21-.11-.9-.33-1.71-1.05-.63-.56-1.06-1.26-1.18-1.47-.12-.21-.01-.32.09-.43.09-.09.21-.25.32-.37.11-.12.14-.21.21-.35.07-.14.04-.26-.02-.37-.05-.1-.47-1.16-.66-1.58-.16-.36-.33-.36-.48-.37h-.42Z" />
  </svg>
);

export const featureIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  chat,
  bell,
  mic,
  inbox,
  cap,
  screen,
  bag,
  palette,
  target,
  orbit,
  bolt,
  globe,
  shield,
  clock,
  spark,
  layers,
  check,
  arrowRight,
  arrowUpRight,
  plus,
  whatsapp,
};
