import type { ReactNode } from 'react';

export default function Terminal({
  title,
  children,
  className = '',
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-[#080808] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#3f3f3f]" />
        <span className="h-3 w-3 rounded-full bg-[#3f3f3f]" />
        <span className="h-3 w-3 rounded-full bg-accent/80" />
        <span className="ml-2 font-mono text-xs text-faint">{title}</span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.75]">
        {children}
      </div>
    </div>
  );
}

export const T = {
  dim: 'text-faint',
  txt: 'text-cream',
  yel: 'text-accent',
  grn: 'text-emerald-400',
  red: 'text-red-400',
  gry: 'text-zinc-400',
  punc: 'text-zinc-500',
};
