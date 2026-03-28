import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Planung und Ausführung von Elektroinstallationen",
    text: "Wir entwickeln individuelle elektrotechnische Konzepte für Wohn- und Gewerbeobjekte. Von der Grundinstallation bis hin zu komplexen Systemlösungen sorgen wir für eine sichere, normgerechte und zukunftssichere Umsetzung – abgestimmt auf Ihre Anforderungen.",
  },
  {
    number: "02",
    title: "Installation und Inbetriebnahme elektrischer Anlagen",
    text: "Wir übernehmen die fachgerechte Montage und Inbetriebnahme sämtlicher elektrischer Anlagen. Dabei legen wir großen Wert auf Qualität, Sicherheit und eine reibungslose Integration in bestehende Systeme.",
  },
  {
    number: "03",
    title: "Photovoltaikanlagen inklusive fachgerechter Integration",
    text: "Von der Planung bis zur Inbetriebnahme realisieren wir Photovoltaikanlagen zur nachhaltigen Energiegewinnung. Wir sorgen für die optimale Einbindung in Ihre bestehende Elektroinstallation und unterstützen Sie auf dem Weg zu mehr Energieunabhängigkeit.",
  },
  {
    number: "04",
    title: "Wartungs- und Reparaturarbeiten",
    text: "Regelmäßige Wartung und schnelle Reparaturen gewährleisten die langfristige Funktionsfähigkeit und Sicherheit Ihrer elektrischen Anlagen. Im Störungsfall stehen wir Ihnen zuverlässig und zeitnah zur Verfügung.",
  },
  {
    number: "05",
    title: "Geräte- und Anlagenprüfung nach geltenden Vorschriften",
    text: "Wir führen fachgerechte Prüfungen elektrischer Geräte und Anlagen gemäß den aktuellen Normen und Vorschriften durch. So stellen wir die Sicherheit, Betriebssicherheit und den ordnungsgemäßen Zustand Ihrer Technik sicher.",
  },
  {
    number: "06",
    title: "Moderne Lösungen für Energieeffizienz und nachhaltige Gebäudetechnik",
    text: "Mit innovativen Technologien optimieren wir den Energieverbrauch Ihrer Gebäude. Ziel ist es, Betriebskosten zu senken, Ressourcen zu schonen und zukunftssichere Lösungen zu schaffen.",
  },
];

const highlights = [
  "Elektroinstallationen in Neu- und Bestandsbauten",
  "Lösungen für Wohn- und Gewerbeobjekte",
  "Sichere, normgerechte und fachgerechte Ausführung",
  "Nachhaltige Gebäudetechnik und moderne Energieeffizienz",
];

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Leistungen
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Unsere Leistungen im Überblick
              </h1>

              <p className="mt-6 text-base leading-8 text-zinc-600 md:text-lg">
                Wir sind spezialisiert auf Elektroinstallationen im Bereich der
                Energie- und Gebäudetechnik – sowohl im Massivbau als auch im
                Holzbau. Von der ersten Planung bis zur finalen Inbetriebnahme
                begleiten wir unsere Kunden zuverlässig, fachgerecht und
                zukunftsorientiert.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Jetzt anfragen
                </Link>

                <Link
                  href="/#uber-uns"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Mehr über uns
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Schwerpunkte
              </p>

              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-red-600" />
                    <p className="text-sm leading-7 text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Leistungsangebot
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Fachgerechte Lösungen für moderne Elektrotechnik
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-600 md:text-lg">
            Unser Leistungsangebot umfasst alle wichtigen Bereiche moderner
            Energie- und Gebäudetechnik – von der Planung über die Ausführung
            bis zur Wartung und Prüfung.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-bold text-white">
                  {service.number}
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                  Service
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Unser Anspruch
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Sicherheit, Qualität und Zukunftssicherheit
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
                Unser Ziel ist es, für jeden Kunden die optimale
                elektrotechnische Lösung zu finden – effizient, nachhaltig und
                auf höchstem handwerklichen Niveau.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <p className="text-sm font-semibold text-white">
                  Präzise Planung
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Durchdachte Konzepte für private und gewerbliche Projekte.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <p className="text-sm font-semibold text-white">
                  Fachgerechte Ausführung
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Saubere, sichere und normgerechte Umsetzung.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <p className="text-sm font-semibold text-white">
                  Nachhaltige Technik
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Moderne Lösungen für Energieeffizienz und Zukunftssicherheit.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <p className="text-sm font-semibold text-white">
                  Zuverlässiger Service
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Wartung, Prüfung und schnelle Unterstützung im Bedarfsfall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Sie planen ein Projekt?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600 md:text-lg">
                Wir beraten Sie persönlich, planen sorgfältig und entwickeln die
                passende elektrotechnische Lösung für Ihr Vorhaben.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Jetzt Kontakt aufnehmen
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
              >
                Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}