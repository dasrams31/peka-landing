import Logo from './Logo';

const links = [
  { n: '01', label: 'Produk', href: '#produk' },
  { n: '02', label: 'Demo', href: '#demo' },
  { n: '03', label: 'Kenapa Peka', href: '#kenapa' },
  { n: '04', label: 'Akses awal', href: '#akses' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <Logo size={26} />
            <span className="font-mono text-sm font-semibold text-cream">
              peka<span className="text-accent">.ai.id</span>
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group font-mono text-xs text-dim transition-colors hover:text-cream"
              >
                <span className="mr-1.5 text-faint transition-colors group-hover:text-accent">{l.n}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" />
            coming soon
          </div>
        </div>
        <p className="mt-10 border-t border-line pt-6 font-mono text-[11px] text-faint">
          © 2026 Peka — Kumpulan SaaS AI & analisis sentimen Bahasa Indonesia.
        </p>
      </div>
    </footer>
  );
}
