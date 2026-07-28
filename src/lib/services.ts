export type Service = {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  points: string[];
  /** Key into the icon registry in components/icons.tsx */
  icon: string;
  /** Tailwind column span on the lg bento grid (grid-cols-6). */
  span: string;
  /** Featured cards render a richer layout + inline visual. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: 1,
    slug: "whatsapp-chatbots",
    name: "WhatsApp AI Chatbots",
    tagline: "Conversations that never sleep.",
    icon: "chat",
    span: "lg:col-span-4",
    featured: true,
    points: [
      "Replies in seconds, 24/7 — no lead ever waits",
      "Handles bookings, orders, FAQs & admissions — zero human effort",
      "Talks to customers in their own language",
      "Trained on your business, not generic scripts",
    ],
  },
  {
    id: 2,
    slug: "payment-reminders",
    name: "Automated Fee & Payment Reminders",
    tagline: "Get paid, minus the awkward chase.",
    icon: "bell",
    span: "lg:col-span-2",
    points: [
      "No more awkward \u201Cplease pay\u201D calls",
      "Auto-nudges on WhatsApp until it's settled",
      "Synced with your records — no manual entry, ever",
    ],
  },
  {
    id: 3,
    slug: "voice-agents",
    name: "AI Voice Agents",
    tagline: "A human-sounding voice on every call.",
    icon: "mic",
    span: "lg:col-span-2",
    points: [
      "Answers every call, even when your team's slammed",
      "Books appointments & handles FAQs — sounds genuinely human",
      "Makes outbound calls for promos & offers (English only, for now)",
    ],
  },
  {
    id: 4,
    slug: "support-desk",
    name: "AI Customer Support Desk",
    tagline: "One inbox. Every channel. Zero chaos.",
    icon: "inbox",
    span: "lg:col-span-2",
    points: [
      "One inbox for WhatsApp, email & web chat — no more tab-switching",
      "Auto-routes every ticket to the right person, instantly",
      "Trained on your docs — accurate answers, not generic AI fluff",
    ],
  },
  {
    id: 5,
    slug: "tutoring-grading",
    name: "AI Tutoring & Auto-Grading",
    tagline: "A patient tutor for every student.",
    icon: "cap",
    span: "lg:col-span-2",
    points: [
      "Doubts solved instantly, any time of day",
      "Essays & quizzes graded automatically, with real feedback",
      "Teachers get their time back for actual teaching",
    ],
  },
  {
    id: 6,
    slug: "apps-websites",
    name: "Mobile Apps & Websites",
    tagline: "Live in days, built to convert.",
    icon: "screen",
    span: "lg:col-span-3",
    points: [
      "Live in days, not months",
      "Built to convert, not just look pretty",
      "Mobile-first, fast & SEO-ready from day one",
    ],
  },
  {
    id: 7,
    slug: "whatsapp-ecommerce",
    name: "WhatsApp-Integrated E-commerce",
    tagline: "Your whole store, inside the chat.",
    icon: "bag",
    span: "lg:col-span-3",
    points: [
      "Browse, order & track — all inside the chat",
      "No app downloads, no friction, higher conversions",
      "Abandoned carts get auto-recovered, automatically",
    ],
  },
  {
    id: 8,
    slug: "branding-creative",
    name: "Branding & Creative Packs",
    tagline: "An identity as sharp as you are.",
    icon: "palette",
    span: "lg:col-span-2",
    points: [
      "Logo, colors & templates — a full identity, fast",
      "Social content that looks like you, not stock photos",
      "Consistent branding across every touchpoint",
    ],
  },
  {
    id: 9,
    slug: "performance-ads",
    name: "Performance Ads (Meta / Google)",
    tagline: "Ads that pay for themselves.",
    icon: "target",
    span: "lg:col-span-2",
    points: [
      "AI-optimized targeting — less spend wasted",
      "Ad copy tested & refined on autopilot",
      "Every lead flows straight into your WhatsApp",
    ],
  },
  {
    id: 10,
    slug: "custom-ai-agents",
    name: "Custom AI Agents",
    tagline: "Automation built around you.",
    icon: "orbit",
    span: "lg:col-span-2",
    points: [
      "Automates entire workflows — not just conversations",
      "Built around your business, not off-the-shelf",
      "The natural next step once the basics are working",
    ],
  },
];
