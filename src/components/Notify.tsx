import { useState } from 'react';

export default function Notify() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError('Masukkan alamat email yang valid.');
      return;
    }
    setError('');
    try {
      const list: string[] = JSON.parse(localStorage.getItem('peka-early') || '[]');
      const norm = email.trim().toLowerCase();
      if (!list.includes(norm)) {
        list.push(norm);
        localStorage.setItem('peka-early', JSON.stringify(list));
      }
    } catch {
      /* abaikan */
    }
    setDone(true);
  };

  return (
    <section id="akses" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 overflow-hidden rounded-2xl border border-line bg-panel/60 p-8 md:grid-cols-2 md:gap-12 md:p-12">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
              04 — akses awal
            </p>
            <h2 className="text-balance mt-4 text-3xl font-bold tracking-tight text-cream md:text-4xl">
              Jadi yang pertama tahu saat Peka rilis.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-dim">
              Pendaftar awal dapat undangan beta tiap produk, tanpa antre. Tanpa
              spam — hanya kabar rilis.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            {done ? (
              <div className="rounded-xl border border-accent/40 bg-accent-dim p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="font-semibold text-cream">Kamu masuk daftar.</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-dim">
                  Kami menghubungimu di <span className="font-mono text-accent">{email}</span> saat
                  Peka Sentimen rilis.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label htmlFor="early-email" className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  email
                </label>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="early-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="h-12 flex-1 rounded-lg border border-line bg-ink px-4 font-mono text-sm text-cream placeholder:text-faint outline-none transition-colors focus:border-accent/60"
                  />
                  <button
                    type="submit"
                    className="h-12 shrink-0 rounded-lg bg-accent px-6 text-sm font-semibold text-black transition-all hover:bg-accent-soft hover:shadow-[0_0_28px_rgba(255,212,0,0.35)]"
                  >
                    Beri tahu saya
                  </button>
                </div>
                {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
                <p className="mt-4 font-mono text-[11px] text-faint">
                  $ curl -X POST peka.ai.id/v1/akses-awal
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
