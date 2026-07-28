import type { SVGProps } from "react";
import { Wordmark } from "./brand/DotMark";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const company = [
  { label: "Why DOTZ", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a demo", href: "#contact" },
];

/* Inline brand marks (lucide dropped these). */
function XIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8-9.1L.9 2h7l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z" />
    </svg>
  );
}
function LinkedInIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
    </svg>
  );
}
function InstagramIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function GitHubIcon(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.3 6.8-5.1 6.8-9.6C22 6.6 17.5 2 12 2Z" />
    </svg>
  );
}

const socials = [
  { label: "X", href: site.socials.x, Icon: XIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_0.7fr_0.7fr]">
          {/* brand */}
          <div>
            <Wordmark size={24} />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* services */}
          <div>
            <p className="label mb-4">Services</p>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <p className="label mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="label mb-4">Contact</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-sm text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-faint">
            Built with AI · shipped by humans.
          </p>
        </div>
      </div>
    </footer>
  );
}
