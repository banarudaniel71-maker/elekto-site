"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./components/Reveal";

const quickFacts = [
  "Seit 2004",
  "Innungsbetrieb",
  "3 Generationen",
  "Privat & Gewerbe",
];

const strengths = [
  {
    title: "Innungsbetrieb mit Standards",
    text: "Arbeiten nach aktuellen technischen Regeln und Vorschriften.",
  },
  {
    title: "Über 20 Jahre Erfahrung",
    text: "Verlässlichkeit und Qualität seit 2004.",
  },
  {
    title: "Know-how aus 3 Generationen",
    text: "Traditionelles Handwerk trifft moderne Technik.",
  },
  {
    title: "Individuelle Beratung",
    text: "Persönliche Betreuung und passende Lösungen für jedes Projekt.",
  },
];

const services = [
  {
    number: "01",
    title: "Elektroinstallationen",
    text: "Planung und Ausführung von Elektroinstallationen in Neu- und Bestandsbauten.",
    image: "/services/elektroinstallation.jpg",
  },
  {
    number: "02",
    title: "Photovoltaik",
    text: "Nachhaltige Energiegewinnung mit fachgerechter Integration in bestehende Systeme.",
    image: "/services/photovoltaik.jpg",
  },
  {
    number: "03",
    title: "Wartung & Reparatur",
    text: "Regelmäßige Wartung und schnelle Hilfe im Störungsfall für mehr Sicherheit.",
    image: "/services/wartung.jpg",
  },
  {
    number: "04",
    title: "Anlagenprüfung",
    text: "Prüfungen nach geltenden Normen und Vorschriften für Betriebssicherheit.",
    image: "/services/pruefung.jpg",
  },
  {
    number: "05",
    title: "Inbetriebnahme",
    text: "Fachgerechte Montage und zuverlässige Inbetriebnahme elektrischer Anlagen.",
    image: "/services/inbetriebnahme.jpg",
  },
  {
    number: "06",
    title: "Energieeffizienz",
    text: "Moderne Lösungen für nachhaltige Gebäudetechnik und optimierten Energieverbrauch.",
    image: "/services/energieeffizienz.jpg",
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-zinc-200 bg-white"
      >
        <motion.div
          style={{ y: glowY }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.08),transparent_24%)]"
        />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-8 md:py-20 xl:py-24">
          <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <Reveal className="max-w-4xl">
              <div className="flex flex-wrap gap-2">
                {quickFacts.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-red-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-red-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-[68px]">
                Elektrotechnik vom
                <span className="block">Fachbetrieb seit 2004</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
                Zuverlässige Elektroinstallationen, Photovoltaik, Wartung und
                moderne Gebäudetechnik für Privat- und Gewerbekunden.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Jetzt unverbindlich anfragen
                </Link>

                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-50"
                >
                  Leistungen ansehen
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm font-semibold text-zinc-900">
                    Höchste Qualität
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Fachgerechte Ausführung als eingetragener Innungsbetrieb.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm font-semibold text-zinc-900">
                    Langjährige Erfahrung
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Über 20 Jahre Erfahrung im Elektrohandwerk.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:col-span-2 xl:col-span-1">
                  <p className="text-sm font-semibold text-zinc-900">
                    Persönliche Betreuung
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Individuelle Beratung und Lösungen für jedes Projekt.
                  </p>
                </div>
              </div>
            </Reveal>

            <motion.div style={{ y: cardY }} className="xl:justify-self-end">
              <Reveal delay={0.12}>
                <div className="grid gap-5">
                  <div className="relative overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-950 shadow-[0_28px_90px_rgba(0,0,0,0.18)]">
                    <motion.div style={{ y: imageY }} className="absolute inset-0">
                      <Image
                        src="/hero-elektro.jpg"
                        alt="Elektrotechnik"
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_30%)]" />

                    <div className="relative z-10 p-7 text-white md:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                        Ihr Vorteil
                      </p>

                      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                        Beratung, Planung
                        <br />
                        und Ausführung
                      </h2>

                      <p className="mt-5 max-w-md text-base leading-8 text-zinc-200">
                        Als familiengeführtes Unternehmen in dritter Generation
                        verbinden wir traditionelle Werte mit modernen
                        Technologien und zukunftssicheren Lösungen.
                      </p>

                      <div className="mt-8 grid gap-4 border-t border-white/10 pt-6">
                        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-red-500" />
                          <p className="text-sm leading-7 text-zinc-200">
                            Persönliche Beratung und sorgfältige Planung
                          </p>
                        </div>

                        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-red-500" />
                          <p className="text-sm leading-7 text-zinc-200">
                            Präzise Umsetzung für private und gewerbliche Kunden
                          </p>
                        </div>

                        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-red-500" />
                          <p className="text-sm leading-7 text-zinc-200">
                            Nachhaltige Lösungen mit Blick auf Zukunft und
                            Effizienz
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                      <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                        Kunden
                      </p>
                      <p className="mt-2 text-sm font-semibold text-zinc-900">
                        Privat & Gewerbe
                      </p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                      <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                        Fokus
                      </p>
                      <p className="mt-2 text-sm font-semibold text-zinc-900">
                        Energie & Gebäude
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
                  Telefon
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">
                  +49 000 0000000
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
                  E-Mail
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">
                  info@ihre-elektrofirma.de
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
                  Einsatzbereich
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-900">
                  Wohn- & Gewerbeobjekte
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-600">
                  Über uns
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                  Tradition trifft moderne Elektrotechnik
                </h2>
              </div>

              <div className="space-y-5">
                <p className="text-base leading-8 text-zinc-600 md:text-lg">
                  Unser Handwerksbetrieb steht seit 2004 für Qualität,
                  Zuverlässigkeit und fachgerechte Ausführung im Elektrohandwerk.
                  Als familiengeführtes Unternehmen in dritter Generation
                  verbinden wir traditionelles Handwerk mit modernen
                  Technologien und innovativen Lösungen.
                </p>

                <p className="text-base leading-8 text-zinc-600 md:text-lg">
                  Wir betreuen private und gewerbliche Kunden und legen großen
                  Wert auf persönliche Beratung, sorgfältige Planung und präzise
                  Umsetzung aller Projekte.
                </p>

                <div className="pt-2">
                  <Link
                    href="/uber-uns"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                  >
                    Mehr über uns
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 md:py-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-600">
                Leistungen
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Unsere Leistungen im Überblick
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-600 md:text-lg">
                Von der ersten Planung bis zur finalen Inbetriebnahme begleiten
                wir unsere Kunden mit sicheren und zukunftssicheren Lösungen.
              </p>
            </div>

            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Alle Leistungen ansehen
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 0.08} y={60}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.08, y: 40, opacity: 0 }}
                      whileInView={{ scale: 1, y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.9,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full w-full"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-sm font-bold text-zinc-950 shadow-sm">
                      {service.number}
                    </div>

                    <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      Service
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-2xl font-bold leading-tight text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-7 text-zinc-600 md:text-base">
                      {service.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-600">
                Unsere Stärken
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Warum Kunden auf uns vertrauen
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {strengths.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="mt-5 text-lg font-semibold leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-y border-zinc-200 bg-zinc-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-400">
                  Unser Anspruch
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Effizient, nachhaltig und auf höchstem Niveau
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
                  Unser Ziel ist es, für jeden Kunden die optimale
                  elektrotechnische Lösung zu finden – effizient, nachhaltig und
                  auf höchstem handwerklichen Niveau.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                  <p className="text-sm font-semibold text-white">Effizient</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Durchdachte Planung und saubere Umsetzung.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                  <p className="text-sm font-semibold text-white">Nachhaltig</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Zukunftssichere Lösungen für Gebäude und Energie.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                  <p className="text-sm font-semibold text-white">Persönlich</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Individuelle Beratung für private und gewerbliche Kunden.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                  <p className="text-sm font-semibold text-white">Verlässlich</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Klare Kommunikation und termingerechte Realisierung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-600">
                Karriere
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Karriere mit Zukunft im Elektrohandwerk
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-600 md:text-lg">
                Als Ausbildungsbetrieb geben wir unser Wissen an die nächste
                Generation weiter und bieten langfristige Perspektiven.
              </p>
              <div className="mt-6">
                <Link
                  href="/karriere"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-red-600 p-8 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-100">
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Jetzt unverbindlich beraten lassen
              </h2>
              <p className="mt-5 text-base leading-8 text-red-50 md:text-lg">
                Schnell, zuverlässig und persönlich – wir finden die passende
                Lösung für Ihr Projekt.
              </p>
              <div className="mt-6">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-zinc-100"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}