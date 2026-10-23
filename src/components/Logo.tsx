export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-label="Peka logo">
      <rect width="32" height="32" rx="7" fill="#FFD400" />
      <circle cx="11" cy="14" r="3.2" fill="#000" />
      <circle cx="21" cy="14" r="3.2" fill="#000" />
      <path
        d="M9 22c2.5 2.4 5 3.4 7 3.4s4.5-1 7-3.4"
        stroke="#000"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
