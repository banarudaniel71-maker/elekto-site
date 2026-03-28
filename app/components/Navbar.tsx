"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/uber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-zinc-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-white/85 backdrop-blur"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Firmenlogo"
              width={160}
              height={60}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-zinc-900">Elektrotechnik</p>
              <p className="text-xs text-zinc-500">Fachbetrieb seit 2004</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-700 transition hover:text-red-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-red-700"
            >
              Jetzt anfragen
            </Link>
          </div>

          <button
            type="button"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 p-3 text-zinc-900 transition hover:bg-zinc-50 md:hidden"
          >
            <div className="flex w-5 flex-col gap-1">
              <span
                className={`block h-0.5 w-5 bg-zinc-900 transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-zinc-900 transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-zinc-900 transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="border-t border-zinc-200 py-4 md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 hover:text-red-600"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/kontakt"
                  onClick={closeMenu}
                  className="mt-3 inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Jetzt anfragen
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}