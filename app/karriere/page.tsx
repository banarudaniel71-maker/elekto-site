import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Familienunternehmen mit Werten",
    text: "Als familiengeführtes Unternehmen in dritter Generation stehen wir für Verlässlichkeit, Qualität und ein respektvolles Miteinander im Arbeitsalltag.",
  },
  {
    number: "02",
    title: "Praxisnahe Ausbildung",
    text: "Als Ausbildungsbetrieb geben wir unser Wissen und unsere Erfahrung an die nächste Generation weiter und fördern qualifizierten Nachwuchs mit einer fundierten und praxisnahen Ausbildung.",
  },
  {
    number: "03",
    title: "Langfristige Perspektiven",
    text: "Wir bieten ein stabiles Arbeitsumfeld mit Zukunft in einer Branche, die durch moderne Gebäudetechnik, Energieeffizienz und Photovoltaik immer wichtiger wird.",
  },
  {
    number: "04",
    title: "Moderne Elektrotechnik",
    text: "Bei uns arbeiten Sie an zeitgemäßen Lösungen im Bereich Energie- und Gebäudetechnik – mit Blick auf Qualität, Sicherheit und Zukunftsfähigkeit.",
  },
];

const values = [
  "Persönliche Betreuung und klare Kommunikation",
  "Saubere, fachgerechte und termintreue Arbeitsweise",
  "Weitergabe von Wissen und Erfahrung",
  "Zukunftssichere Perspektiven im Elektrohandwerk",
];

export default function KarrierePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Karriere
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Karriere mit Zukunft im Elektrohandwerk
              </h1>

              <p className="mt-6 text-base leading-8 text-zinc-600 md:text-lg">
                Als Ausbildungsbetrieb übernehmen wir Verantwortung für die
                Zukunft des Handwerks. Wir geben unser Wissen und unsere
                Erfahrung an die nächste Generation weiter und fördern
                qualifizierten Nachwuchs mit einer praxisnahen und fundierten
                Ausbildung.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Jetzt Kontakt aufnehmen
                </Link>

                <Link
                  href="/uber-uns"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Mehr über uns
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Warum wir
              </p>

              <div className="mt-6 space-y-4">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                    <p className="text-sm leading-7 text-zinc-300">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Arbeiten bei uns
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Ein starkes Unternehmen mit klaren Perspektiven
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-8 text-zinc-600 md:text-lg">
              Wir stehen seit 2004 für Qualität, Zuverlässigkeit und
              fachgerechte Ausführung im Elektrohandwerk. Als
              familiengeführtes Unternehmen in dritter Generation verbinden wir
              traditionelle Werte mit moderner Technik und innovativen
              Lösungen.
            </p>
            <p className="text-base leading-8 text-zinc-600 md:text-lg">
              Wer bei uns arbeitet, wird Teil eines Teams, das auf
              handwerkliche Qualität, saubere Arbeit, persönliche Verantwortung
              und eine strukturierte Umsetzung setzt.
            </p>
            <p className="text-base leading-8 text-zinc-600 md:text-lg">
              Gleichzeitig bieten wir ein Umfeld, in dem Entwicklung,
              Wissensweitergabe und langfristige Perspektiven im Mittelpunkt
              stehen.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Ihre Vorteile
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Was Sie bei uns erwartet
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-bold text-white">
                    {item.number}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
                    Karriere
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
                Ausbildung
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Nachwuchs fördern, Wissen weitergeben
              </h2>
              <p className="mt-6 text-base leading-8 text-zinc-600 md:text-lg">
                Als Ausbildungsbetrieb sehen wir es als Teil unserer
                Verantwortung, die Zukunft des Handwerks aktiv mitzugestalten.
                Wir vermitteln praktische Kenntnisse, begleiten junge Menschen
                im Berufsalltag und fördern eine fundierte fachliche
                Entwicklung.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Praxisnah
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Lernen direkt im echten Arbeitsalltag.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Fundiert
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Solide Ausbildung mit fachlichem Anspruch.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Persönlich
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Direkte Begleitung in einem Familienunternehmen.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-sm font-semibold text-zinc-900">
                  Zukunftssicher
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  Chancen in moderner Elektro- und Gebäudetechnik.
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
                Bewerbung
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Interesse an einer Zusammenarbeit?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-red-50 md:text-lg">
                Wir freuen uns über motivierte Bewerberinnen und Bewerber, die
                mit uns die Zukunft des Elektrohandwerks gestalten möchten.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-red-600 transition hover:bg-zinc-100"
              >
                Jetzt bewerben
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