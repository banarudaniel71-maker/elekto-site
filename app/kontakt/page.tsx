export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Kontakt
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Kontakt & Impressum
              </h1>

              <p className="mt-6 text-base leading-8 text-zinc-600 md:text-lg">
                Sie haben Fragen zu Ihrem Projekt oder wünschen eine persönliche
                Beratung? Nehmen Sie unverbindlich Kontakt mit uns auf. Wir
                beraten Sie persönlich und finden die passende Lösung für Ihr
                Vorhaben.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Direkt erreichbar
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                  <p className="text-sm font-semibold text-white">Telefon</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    +49 000 0000000
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                  <p className="text-sm font-semibold text-white">E-Mail</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    info@ihre-elektrofirma.de
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                  <p className="text-sm font-semibold text-white">Adresse</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Musterstraße 1, 00000 Musterstadt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Anfrage senden
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Schreiben Sie uns
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600 md:text-lg">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich
              bei Ihnen zurück.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-800"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ihr Name"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="mb-2 block text-sm font-medium text-zinc-800"
                  >
                    Telefon
                  </label>
                  <input
                    id="telefon"
                    type="text"
                    placeholder="Ihre Telefonnummer"
                    className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-800"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="betreff"
                  className="mb-2 block text-sm font-medium text-zinc-800"
                >
                  Betreff
                </label>
                <input
                  id="betreff"
                  type="text"
                  placeholder="Worum geht es?"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="nachricht"
                  className="mb-2 block text-sm font-medium text-zinc-800"
                >
                  Nachricht
                </label>
                <textarea
                  id="nachricht"
                  rows={7}
                  placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-red-600"
                />
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <p className="text-sm leading-7 text-zinc-600">
                  Mit dem Absenden des Formulars erklären Sie sich damit
                  einverstanden, dass Ihre Angaben zur Bearbeitung Ihrer Anfrage
                  verwendet werden.
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:w-auto"
              >
                Anfrage absenden
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Kontaktinformationen
              </p>
              <h2 className="mt-3 text-2xl font-bold">So erreichen Sie uns</h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600 md:text-base">
                <p>
                  <span className="font-semibold text-zinc-900">Telefon:</span>{" "}
                  +49 000 0000000
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">E-Mail:</span>{" "}
                  info@ihre-elektrofirma.de
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">Adresse:</span>{" "}
                  Musterstraße 1, 00000 Musterstadt
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Impressum
              </p>
              <h2 className="mt-3 text-2xl font-bold">Angaben gemäß § 5 TMG</h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-600 md:text-base">
                <p>
                  <span className="font-semibold text-zinc-900">
                    Unternehmen:
                  </span>{" "}
                  Muster Elektro GmbH
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">
                    Vertreten durch:
                  </span>{" "}
                  Max Mustermann
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">Adresse:</span>{" "}
                  Musterstraße 1, 00000 Musterstadt
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">Telefon:</span>{" "}
                  +49 000 0000000
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">E-Mail:</span>{" "}
                  info@ihre-elektrofirma.de
                </p>
                <p>
                  <span className="font-semibold text-zinc-900">
                    Umsatzsteuer-ID:
                  </span>{" "}
                  DE123456789
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Datenschutz
              </p>
              <h2 className="mt-3 text-2xl font-bold">Hinweis zum Datenschutz</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
                Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
                verwendet und nicht ohne Ihre Zustimmung an Dritte
                weitergegeben.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}