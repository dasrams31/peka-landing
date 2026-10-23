import { useEffect, useState } from 'react';
import Logo from './Logo';

const links = [
  { label: 'Produk', href: '#produk' },
  { label: 'Demo', href: '#demo' },
  { label: 'Kenapa Peka', href: '#kenapa' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo size={30} />
          <span className="font-mono text-sm font-semibold tracking-tight text-cream">
            peka<span className="text-accent">.ai.id</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-dim transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#akses"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-accent-soft hover:shadow-[0_0_24px_rgba(255,212,0,0.35)]"
        >
          Akses awal
        </a>
      </nav>
    </header>
  );
}
