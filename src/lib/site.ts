/**
 * Central brand + contact details for DOTZ.
 * Edit these once and they update across the whole site.
 */
export const site = {
  name: "DOTZ",
  tagline: "AI automation, shipped in days.",
  description:
    "DOTZ builds WhatsApp AI chatbots, human-sounding voice agents, auto-support desks and custom AI agents — trained on your business, live in days, replying in seconds.",
  // Your production URL — used for canonical links and social share cards.
  url: "https://dotz.studio",
  email: "hello@dotz.studio",
  // Replace with your number in international format, e.g. https://wa.me/15551234567
  whatsapp: "https://wa.me/15551234567",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why DOTZ", href: "#why" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
  socials: {
    // Replace the # placeholders with your real profile URLs.
    x: "#",
    linkedin: "#",
    instagram: "#",
    github: "#",
  },
} as const;
