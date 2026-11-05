interface SufiOrnamentProps {
  size?: number;
  className?: string;
  color?: string;
}

/** Eight-pointed Sufi star (Khatim) with concentric geometry. */
export function SufiOrnament({ size = 120, className = '', color = '#D4AF37' }: SufiOrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      style={{ color }}
    >
      <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <g stroke="currentColor" strokeWidth="1" opacity="0.6" fill="none">
        <rect x="26" y="26" width="68" height="68" transform="rotate(0 60 60)" />
        <rect x="26" y="26" width="68" height="68" transform="rotate(45 60 60)" />
      </g>
      <g stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="none">
        <rect x="38" y="38" width="44" height="44" transform="rotate(22.5 60 60)" />
        <rect x="38" y="38" width="44" height="44" transform="rotate(67.5 60 60)" />
      </g>
      <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="1" opacity="0.7" fill="none" />
      <circle cx="60" cy="60" r="6" fill="currentColor" opacity="0.2" />
      <circle cx="60" cy="60" r="2.5" fill="currentColor" opacity="0.8" />
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.25">
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * 22.5 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={60 + Math.cos(a) * 20}
              y1={60 + Math.sin(a) * 20}
              x2={60 + Math.cos(a) * 52}
              y2={60 + Math.sin(a) * 52}
            />
          );
        })}
      </g>
    </svg>
  );
}
