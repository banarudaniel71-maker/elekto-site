import Link from "next/link";

const strengths = [
  {
    title: "Innungsbetrieb mit höchsten Qualitätsstandards",
    text: "Als eingetragener Innungsbetrieb arbeiten wir nach den aktuellen technischen Regeln und Vorschriften. Das garantiert unseren Kunden Sicherheit, Qualität und fachgerechte Ausführung – von der Planung bis zur Fertigstellung.",
  },
  {
    title: "Über 20 Jahre Erfahrung im Elektrohandwerk",
    text: "Seit 2004 stehen wir für kontinuierliche Qualität und Verlässlichkeit. Unsere langjährige Erfahrung ermöglicht es uns, Projekte effizient zu planen, Herausforderungen frühzeitig zu erkennen und nachhaltige Lösungen umzusetzen.",
  },
  {
    title: "Fachkompetenz aus drei Generationen",
    text: "Die Verbindung aus traditionellem Handwerk und modernem Know-how ist eine unserer größten Stärken. Das Wissen und die Erfahrung aus drei Generationen bilden die Grundlage für durchdachte und zukunftssichere Lösungen.",
  },
  {
    title: "Individuelle Beratung und maßgeschneiderte Lösungen",
    text: "Jedes Projekt ist einzigartig. Deshalb nehmen wir uns Zeit für persönliche Beratung und entwickeln individuelle Konzepte, die technisch, wirtschaftlich und nachhaltig überzeugen.",
  },
  {
    title: "Zuverlässige und termingerechte Umsetzung",
    text: "Wir legen großen Wert auf strukturierte Arbeitsweise, klare Kommunikation und die Einhaltung vereinbarter Termine. Projekte werden fachgerecht, sauber und pünktlich realisiert.",
  },
];

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Über uns
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Tradition, Qualität und moderne Elektrotechnik
              </h1>

              <p className="mt-6 text-base leading-8 text-zinc-600 md:text-lg">
                Unser Handwerksbetrieb steht seit 2004 für Qualität,
                Zuverlässigkeit und fachgerechte Ausführung im Elektrohandwerk.
                Als familiengeführtes Unternehmen in dritter Generation
                verbinden wir die Werte traditionellen Handwerks mit den
                Anforderungen moderner Technik und innovativer Lösungen.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Jetzt anfragen
                </Link>

                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Leistungen ansehen
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Auf einen Blick
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                  <p className="text-sm font-semibold text-white">Seit 2004</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Mehr als zwei Jahrzehnte Erfahrung im Elektrohandwerk.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                  <p className="text-sm font-semibold text-white">
                    Familiengeführt
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Handwerksbetrieb in dritter Generation mit klaren Werten.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                  <p className="text-sm font-semibold text-white">
                    Ausbildungsbetrieb
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Verantwortung für die Zukunft des Handwerks und Förderung
                    qualifizierten Nachwuchses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Firmenprofil
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Verlässlicher Partner für private und gewerbliche Kunden
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-8 text-zinc-600 md:text-lg">
              Über die Jahre haben wir uns als kompetenter Partner für private
              und gewerbliche Kunden etabliert. Dabei legen wir großen Wert auf
              persönliche Beratung, sorgfältige Planung und präzise Umsetzung
              aller Arbeiten.
            </p>
            <p className="text-base leading-8 text-zinc-600 md:text-lg">
              Unsere langjährige Erfahrung, kombiniert mit kontinuierlicher
              Weiterbildung und dem Einsatz zeitgemäßer Technologien,
              ermöglicht es uns, auch anspruchsvolle Projekte effizient und
              nachhaltig zu realisieren.
            </p>
            <p className="text-base leading-8 text-zinc-600 md:text-lg">
              Gleichzeitig verstehen wir uns als moderner Dienstleister, der
              individuelle Kundenwünsche in den Mittelpunkt stellt und
              maßgeschneiderte Lösungen entwickelt.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Unsere Stärken
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Warum Kunden auf uns vertrauen
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                    Stärke
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Ausbildung & Verantwortung
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Zukunft des Handwerks aktiv mitgestalten
              </h2>
              <p className="mt-6 text-base leading-8 text-zinc-600 md:text-lg">
                Als Ausbildungsbetrieb übernehmen wir Verantwortung für die
                Zukunft des Handwerks. Wir geben unser Wissen und unsere
                Erfahrung an die nächste Generation weiter und fördern
                qualifizierten Nachwuchs mit einer praxisnahen und fundierten
                Ausbildung.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Praxisnah
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Lernen im echten Arbeitsalltag mit fundierter Begleitung.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Zukunftssicher
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Elektrotechnik, Energie und moderne Gebäudelösungen.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Persönlich
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Wissenstransfer in einem starken Familienunternehmen.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Fundiert
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Solide Ausbildung mit klaren Werten und hoher Qualität.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600">
        <div className="mx-auto max-w-6xl px-4 py-16 text-white sm:px-6 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
                Kontakt
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Lernen Sie unser Unternehmen kennen
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-red-50 md:text-lg">
                Sie möchten mehr über unsere Arbeitsweise, unsere Leistungen
                oder Ihr geplantes Projekt erfahren? Wir beraten Sie gern
                persönlich.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-zinc-100"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center rounded-xl border border-red-200 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}