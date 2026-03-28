import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Elektrotechnik
            </p>
            <h3 className="mt-3 text-2xl font-bold">Fachbetrieb seit 2004</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-300">
              Qualität, Zuverlässigkeit und fachgerechte Ausführung im
              Elektrohandwerk – für Privat- und Gewerbekunden.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
              Traditionelles Handwerk, moderne Technik und individuelle Lösungen
              aus einem familiengeführten Unternehmen in dritter Generation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Navigation
            </h4>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-zinc-300">
              <Link href="/" className="transition hover:text-white">
                Startseite
              </Link>
              <Link href="/uber-uns" className="transition hover:text-white">
                Über uns
              </Link>
              <Link href="/leistungen" className="transition hover:text-white">
                Leistungen
              </Link>
              <Link href="/karriere" className="transition hover:text-white">
                Karriere
              </Link>
              <Link href="/kontakt" className="transition hover:text-white">
                Kontakt
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Kontakt
            </h4>
            <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
              <p>Telefon: +49 000 0000000</p>
              <p>E-Mail: info@ihre-elektrofirma.de</p>
              <p>Adresse: Musterstraße 1, 00000 Musterstadt</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Elektrotechnik. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/kontakt" className="transition hover:text-white">
              Impressum
            </Link>
            <Link href="/kontakt" className="transition hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}