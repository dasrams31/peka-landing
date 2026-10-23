import SectionHead from './SectionHead';

const products = [
  {
    no: '01',
    name: 'Peka Sentimen',
    desc: 'Analisis sentimen Bahasa Indonesia untuk X, TikTok, Instagram, ulasan marketplace, dan Google Maps. Skor, tren harian, dan kata kunci pemicu.',
    meta: 'NLP · Bahasa Indonesia',
  },
  {
    no: '02',
    name: 'Peka Monitor',
    desc: 'Pantau brand, produk, atau isu tanpa henti. Alert otomatis saat sentimen anjlok atau ada lonjakan percakapan yang tidak biasa.',
    meta: 'Monitoring · Alert',
  },
  {
    no: '03',
    name: 'Peka Direktori',
    desc: 'Direktori SaaS AI terkurasi. Setiap tools diuji langsung, diringkas kelebihannya, diberi label harga yang jujur.',
    meta: 'Kurasi · Review',
  },
  {
    no: '04',
    name: 'Peka API',
    desc: 'Satu API untuk semua kemampuan Peka. Kirim teks, terima skor sentimen, entitas, dan ringkasan. SDK untuk JS & Python.',
    meta: 'REST · SDK',
  },
];

export default function Products() {
  return (
    <section id="produk" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          index="01"
          label="roadmap"
          title="Empat produk. Satu platform."
          desc="Semua dalam tahap pembangunan. Pendaftar akses awal mencoba tiap produk begitu rilis, tanpa antre."
        />

        <div className="border-t border-line">
          {products.map((p) => (
            <article
              key={p.no}
              className="group grid cursor-default grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-line py-7 transition-colors duration-200 hover:bg-white/[0.025] md:grid-cols-[72px_1fr_auto] md:items-center md:py-8"
            >
              <span className="font-mono text-sm font-semibold text-faint transition-colors group-hover:text-accent">
                {p.no}
              </span>
              <div className="pr-4">
                <h3 className="text-xl font-bold tracking-tight text-cream md:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-dim">{p.desc}</p>
                <p className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  {p.meta}
                </p>
              </div>
              <span className="col-span-2 mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent-dim px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-accent md:col-span-1 md:mt-0">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
                Coming soon
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
