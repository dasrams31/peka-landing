export default function SectionHead({
  index,
  label,
  title,
  desc,
}: {
  index: string;
  label: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm font-semibold text-accent">{index}</span>
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-faint">
          {label}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="text-balance mt-6 max-w-3xl text-3xl font-bold tracking-tight text-cream md:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-4 max-w-xl leading-relaxed text-dim">{desc}</p>}
    </div>
  );
}
