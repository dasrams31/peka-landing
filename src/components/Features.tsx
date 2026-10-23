import SectionHead from './SectionHead';

const features = [
  {
    title: 'Dilatih untuk Bahasa Indonesia',
    desc: 'Bukan model generik yang diterjemahkan. Peka paham slang, singkatan, campur kode, dan konteks lokal — dari "wkwk" sampai "kecewa berat".',
  },
  {
    title: 'Real-time, bukan batch',
    desc: 'Stream percakapan masuk detik itu juga dianalisis. Alert terkirim saat ada lonjakan sentimen negatif — bukan laporan kemarin sore.',
  },
  {
    title: 'API-first untuk developer',
    desc: 'Semua kemampuan Peka lewat REST API yang bersih. Satu endpoint, satu API key, dokumentasi yang tidak bikin pusing.',
  },
];

export default function Features() {
  return (
    <section id="kenapa" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          index="03"
          label="kenapa peka"
          title="Dibangun untuk cara orang Indonesia berbicara."
        />

        <div className="grid border-t border-line md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`py-8 md:py-10 ${i > 0 ? 'border-t border-line md:border-l md:border-t-0 md:pl-8' : ''} ${i < 2 ? 'md:pr-8' : ''}`}
            >
              <p className="font-mono text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-cream">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-dim">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
