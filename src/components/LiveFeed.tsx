const feed = [
  { time: '12:04:11', src: 'X', text: 'akhirnya kesampaian nonton konsernya, pecah banget!', s: 'positif', v: 94 },
  { time: '12:03:48', src: 'TikTok', text: 'packaging penyok, unboxing gagal total', s: 'negatif', v: 88 },
  { time: '12:02:19', src: 'Tokopedia', text: 'pengiriman cepat, barang sesuai deskripsi', s: 'positif', v: 91 },
  { time: '12:01:33', src: 'Maps', text: 'parkir susah, tapi makanannya enak', s: 'netral', v: 62 },
  { time: '12:00:57', src: 'Instagram', text: 'kecewa, CS susah dihubungi dari kemarin', s: 'negatif', v: 85 },
  { time: '11:59:44', src: 'X', text: 'fitur barunya ngebantu banget buat kerjaan', s: 'positif', v: 89 },
];

const pill: Record<string, string> = {
  positif: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  netral: 'border-zinc-400/30 bg-zinc-400/10 text-zinc-300',
  negatif: 'border-red-400/30 bg-red-400/10 text-red-300',
};

export default function LiveFeed() {
  return (
    <section className="border-y border-line bg-panel/50">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2.5">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-cream">
              Sinyal masuk
            </span>
          </div>
          <span className="font-mono text-[11px] text-faint">contoh tampilan produk</span>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ul className="divide-y divide-line">
            {feed.map((f, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3.5 md:grid-cols-[90px_110px_1fr_auto] md:gap-6"
              >
                <span className="font-mono text-xs text-faint">{f.time}</span>
                <span className="hidden font-mono text-xs uppercase tracking-widest text-dim md:block">
                  {f.src}
                </span>
                <span className="truncate text-sm text-cream/90">{f.text}</span>
                <span
                  className={`rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest ${pill[f.s]}`}
                >
                  {f.s} · {f.v}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
