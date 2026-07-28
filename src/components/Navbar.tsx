"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DotMark } from "./brand/DotMark";
import { featureIcons } from "./icons";
import { site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ArrowUpRight = featureIcons.arrowUpRight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on resize to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-line bg-black/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="group flex items-center gap-2.5">
            <DotMark
              size={24}
              className="text-foreground transition-transform duration-500 group-hover:rotate-[60deg]"
            />
            <span className="text-[15px] font-semibold tracking-[0.24em] text-foreground">
              DOTZ
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-muted transition-colors hover:text-foreground sm:inline-flex"
            >
              Talk to us
            </a>
            <a href="#contact" className="btn btn-primary hidden sm:inline-flex">
              Book a demo
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-foreground md:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-px w-full bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary mt-2 w-full"
                >
                  Book a demo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
