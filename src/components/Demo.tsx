import { useEffect, useRef, useState } from 'react';
import SectionHead from './SectionHead';

type Sample = {
  text: string;
  source: string;
  pos: number;
  neu: number;
  neg: number;
  verdict: 'Positif' | 'Netral' | 'Negatif';
  keywords: string[];
};

const samples: Sample[] = [
  {
    text: 'Gila sih ini CS-nya fast respon banget, masalah refund kelar dalam 10 menit. Recommended!',
    source: 'Ulasan marketplace · 2 jam lalu',
    pos: 92, neu: 6, neg: 2, verdict: 'Positif',
    keywords: ['fast respon', 'kelar', 'recommended'],
  },
  {
    text: 'Paketnya udah seminggu nggak gerak, dihubungi susah. Kecewa berat sama ekspedisi ini.',
    source: 'X (Twitter) · 5 jam lalu',
    pos: 4, neu: 9, neg: 87, verdict: 'Negatif',
    keywords: ['nggak gerak', 'susah', 'kecewa berat'],
  },
  {
    text: 'Baru coba fiturnya kemarin, sejauh ini oke. Nanti saya update lagi kalau udah seminggu pakai.',
    source: 'Komentar TikTok · 1 hari lalu',
    pos: 28, neu: 64, neg: 8, verdict: 'Netral',
    keywords: ['sejauh ini oke', 'nanti update'],
  },
];

const verdictStyle: Record<Sample['verdict'], string> = {
  Positif: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Netral: 'border-zinc-400/30 bg-zinc-400/10 text-zinc-300',
  Negatif: 'border-red-400/30 bg-red-400/10 text-red-300',
};

const barColor: Record<Sample['verdict'], string> = {
  Positif: 'bg-emerald-400',
  Netral: 'bg-zinc-400',
  Negatif: 'bg-red-400',
};

export default function Demo() {
  const [idx, setIdx] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [shown, setShown] = useState(false);
  const timer = useRef<number | null>(null);
  const s = samples[idx];

  const analyze = (i: number) => {
    if (timer.current) window.clearTimeout(timer.current);
    setIdx(i);
    setShown(false);
    setAnalyzing(true);
    timer.current = window.setTimeout(() => {
      setAnalyzing(false);
      setShown(true);
    }, 900);
  };

  useEffect(() => {
    analyze(0);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bars = [
    { label: 'Positif', value: s.pos },
    { label: 'Netral', value: s.neu },
    { label: 'Negatif', value: s.neg },
  ];

  return (
    <section id="demo" className="border-y border-line bg-panel/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHead
          index="02"
          label="coba langsung"
          title="Begini cara Peka membaca teks."
          desc="Pilih contoh, tekan analisis, dan lihat model memecah sentimen Bahasa Indonesia — termasuk slang dan singkatan — menjadi skor."
        />

        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-2.5">
            {samples.map((sample, i) => (
              <button
                key={i}
                onClick={() => analyze(i)}
                className={`rounded-xl border p-5 text-left transition-all duration-200 ${
                  idx === i && !analyzing
                    ? 'border-accent/50 bg-accent-dim'
                    : 'border-line bg-white/[0.02] hover:border-faint'
                }`}
              >
                <p className="text-[15px] leading-relaxed text-cream">{sample.text}</p>
                <p className="mt-2.5 font-mono text-[11px] text-faint">{sample.source}</p>
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-xl border border-line bg-[#080808] lg:sticky lg:top-24">
            <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                hasil analisis
              </span>
              {analyzing ? (
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  menganalisis…
                </span>
              ) : (
                shown && (
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] ${verdictStyle[s.verdict]}`}
                  >
                    {s.verdict}
                  </span>
                )
              )}
            </div>

            <div className="space-y-5 p-6">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-dim">{b.label}</span>
                    <span className="font-mono tabular-nums text-cream">
                      {shown && !analyzing ? `${b.value}%` : '—'}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${barColor[s.verdict]}`}
                      style={{ width: shown && !analyzing ? `${b.value}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}

              <div className="border-t border-line pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  kata kunci pemicu
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {shown && !analyzing ? (
                    s.keywords.map((k) => (
                      <code
                        key={k}
                        className="rounded-md bg-accent-dim px-2.5 py-1 font-mono text-xs text-accent"
                      >
                        {k}
                      </code>
                    ))
                  ) : (
                    <span className="font-mono text-xs text-faint">—</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] text-faint">
          * demo interaktif dengan data contoh — model produksi dilatih khusus Bahasa Indonesia.
        </p>
      </div>
    </section>
  );
}
