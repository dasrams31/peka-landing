import Terminal, { T } from './Terminal';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_20%_20%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* kiri: editorial */}
          <div className="lg:col-span-7">
            <div className="animate-rise flex items-center gap-3">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                peka.ai.id — segera hadir
              </span>
            </div>

            <h1
              className="animate-rise text-balance mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight text-cream md:text-7xl"
              style={{ animationDelay: '90ms' }}
            >
              Jadilah yang paling <span className="text-accent">peka</span>
              <br />
              di ruangan.
            </h1>

            <p
              className="animate-rise mt-6 max-w-lg text-base leading-relaxed text-dim md:text-lg"
              style={{ animationDelay: '180ms' }}
            >
              Infrastruktur analisis sentimen untuk Bahasa Indonesia. Pantau X,
              TikTok, dan marketplace — pahami apa yang publik rasakan, saat itu juga.
            </p>

            <div
              className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: '270ms' }}
            >
              <a
                href="#akses"
                className="rounded-full bg-accent px-7 py-3 text-center text-sm font-semibold text-black transition-all hover:bg-accent-soft hover:shadow-[0_0_32px_rgba(255,212,0,0.4)]"
              >
                Dapatkan akses awal
              </a>
              <a
                href="#produk"
                className="rounded-full border border-line px-7 py-3 text-center text-sm font-semibold text-cream transition-colors hover:border-faint hover:bg-white/[0.04]"
              >
                Lihat roadmap
              </a>
            </div>

            <dl
              className="animate-rise mt-12 grid grid-cols-3 gap-6 border-t border-line pt-6"
              style={{ animationDelay: '360ms' }}
            >
              {[
                ['ID', 'Bahasa Indonesia\nnative'],
                ['RT', 'Analisis\nreal-time'],
                ['API', 'Satu endpoint\nuntuk semua'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-sm font-bold text-accent">{k}</dt>
                  <dd className="mt-1.5 whitespace-pre-line text-[13px] leading-snug text-dim">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* kanan: terminal */}
          <div className="animate-rise lg:col-span-5" style={{ animationDelay: '200ms' }}>
            <Terminal title="peka — api">
              <div>
                <span className={T.grn}>$ </span>
                <span className={T.txt}>curl -X POST </span>
                <span className={T.yel}>peka.ai.id/v1/sentimen</span>
              </div>
              <div className={T.dim}>  -H "Authorization: Bearer pk_..." \</div>
              <div className={T.dim}>  -d '{'{'} "teks": "pelayanan lama banget, kecewa" {'}'}</div>
              <div className={T.punc}>{''}</div>
              <div>
                <span className={T.punc}>{'{'} </span>
                <span className={T.gry}>"sentimen"</span>
                <span className={T.punc}>: </span>
                <span className={T.red}>"negatif"</span>
                <span className={T.punc}>,</span>
              </div>
              <div>
                <span className={T.punc}>&nbsp;&nbsp;"skor": {'{'} </span>
                <span className={T.gry}>"negatif"</span>
                <span className={T.punc}>: </span>
                <span className={T.yel}>0.87</span>
                <span className={T.punc}> {'}'},</span>
              </div>
              <div>
                <span className={T.punc}>&nbsp;&nbsp;"kata_kunci": [</span>
                <span className={T.yel}>"lama banget"</span>
                <span className={T.punc}>, </span>
                <span className={T.yel}>"kecewa"</span>
                <span className={T.punc}>] {'}'}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 border-t border-line pt-3">
                <span className={`${T.grn} animate-pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-400`} />
                <span className={T.dim}>200 OK · 84ms</span>
              </div>
            </Terminal>
            <p className="mt-3 text-right font-mono text-[11px] text-faint">
              contoh respons API — bukan data live
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
