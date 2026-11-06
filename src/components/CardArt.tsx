import { SufiOrnament } from './SufiOrnament';
import { CardVisual, hasVisual } from './CardVisual';
import type { VisualId } from './CardVisual';
import type { SuitId } from '../data/cards';

interface CardArtProps {
  suitId: SuitId;
  name: string;
  englishName?: string;
  number: string;
  visualId?: string;
  reversed?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { w: 'w-28', h: 'h-44', ornament: 60, title: 'text-[11px]', num: 'text-[9px]', pad: 'p-1.5', banner: 'h-5', borderWidth: 'border-2', innerBorder: 'border' },
  md: { w: 'w-40', h: 'h-60', ornament: 85, title: 'text-sm', num: 'text-xs', pad: 'p-2', banner: 'h-7', borderWidth: 'border-2', innerBorder: 'border' },
  lg: { w: 'w-52', h: 'h-76', ornament: 120, title: 'text-base', num: 'text-sm', pad: 'p-2.5', banner: 'h-8', borderWidth: 'border-[3px]', innerBorder: 'border-2' },
};

/** Sufi-style decorative border pattern rendered as SVG, tiled inside the card frame. */
function SufiBorderPattern({ accent = '#D4AF37' }: { accent?: string }) {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 40 60">
      {/* top repeating arch pattern */}
      <g stroke={accent} strokeWidth="0.3" fill="none" opacity="0.25">
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={`t${i}`} d={`M${i * 8},0 L${i * 8},3 Q${i * 8 + 4},5 ${(i + 1) * 8},3 L${(i + 1) * 8},0`} />
        ))}
      </g>
      {/* bottom repeating arch pattern (mirrored) */}
      <g stroke={accent} strokeWidth="0.3" fill="none" opacity="0.25">
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={`b${i}`} d={`M${i * 8},60 L${i * 8},57 Q${i * 8 + 4},55 ${(i + 1) * 8},57 L${(i + 1) * 8},60`} />
        ))}
      </g>
      {/* left side dots */}
      <g fill={accent} opacity="0.2">
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={`l${i}`} cx="1.5" cy={6 + i * 9} r="0.6" />
        ))}
      </g>
      {/* right side dots */}
      <g fill={accent} opacity="0.2">
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={`r${i}`} cx="38.5" cy={6 + i * 9} r="0.6" />
        ))}
      </g>
    </svg>
  );
}

/** Small eight-pointed star for cartouche decoration. */
function MiniStar({ className = '', color = '#D4AF37' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" style={{ color }}>
      <path d="M6,0 L7,5 L12,6 L7,7 L6,12 L5,7 L0,6 L5,5 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function CardArt({
  suitId,
  name,
  englishName,
  number,
  visualId,
  reversed = false,
  size = 'md',
}: CardArtProps) {
  const s = sizeMap[size];
  const isMajor = suitId === 'major';
  const showVisual = hasVisual(visualId);
  const displayName = englishName || name;

  const cardFront = showVisual ? (
    <div className={`relative ${s.w} ${s.h} shrink-0 overflow-hidden rounded-xl ${s.borderWidth} border-gold-500/50 shadow-[0_8px_30px_rgba(212,175,55,0.10)]`}>
      {/* Artwork fills the whole card */}
      <CardVisual visualId={visualId as VisualId} className="absolute inset-0 h-full w-full" />

      {/* Inner decorative border frame */}
      <div className={`pointer-events-none absolute inset-1 z-10 rounded-lg ${s.innerBorder} border-gold-500/30`} />
      <SufiBorderPattern accent="#D4AF37" />

      {/* Top number cartouche */}
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
        <div className={`flex items-center gap-1.5 ${s.banner} bg-gradient-to-b from-midnight-200/95 to-midnight-300/90 px-3 border-x border-gold-500/30`}>
          <MiniStar className="h-2.5 w-2.5" />
          <span className={`${s.num} font-serif tracking-[0.25em] text-gold-400/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]`}>{number}</span>
          <MiniStar className="h-2.5 w-2.5" />
        </div>
      </div>

      {/* Bottom name cartouche */}
      <div className="absolute left-1/2 bottom-0 z-20 -translate-x-1/2">
        <div className={`flex items-center gap-2 ${s.banner} bg-gradient-to-t from-midnight-200/95 to-midnight-300/90 px-4 border-x border-gold-500/30`}>
          <div className="h-px w-3 gold-rule opacity-50" />
          <span className={`font-serif ${s.title} text-center leading-none text-cream-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] whitespace-nowrap`}>{displayName}</span>
          <div className="h-px w-3 gold-rule opacity-50" />
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`relative ${s.w} ${s.h} shrink-0 rounded-xl overflow-hidden transition-all duration-500 ${
        isMajor
          ? 'bg-gradient-to-br from-midnight-100 via-midnight-200 to-velvet-300 border-2 border-gold-500/50 shadow-[0_8px_30px_rgba(212,175,55,0.10)]'
          : 'bg-gradient-to-br from-velvet-100 via-velvet-200 to-midnight-200 border-2 border-gold-500/35 shadow-[0_8px_24px_rgba(4,25,20,0.40)]'
      }`}
    >
      {/* Inner decorative border frame */}
      <div className={`pointer-events-none absolute inset-1 z-10 rounded-lg border border-gold-500/25`} />
      <SufiBorderPattern accent="#D4AF37" />

      {/* watermark pattern */}
      <div className="sufi-watermark absolute inset-2 rounded-lg" />

      {/* Top number cartouche */}
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
        <div className={`flex items-center gap-1.5 ${s.banner} bg-gradient-to-b from-midnight-200/95 to-midnight-300/90 px-3 border-x border-gold-500/30`}>
          <MiniStar className="h-2.5 w-2.5" />
          <span className={`${s.num} font-serif tracking-[0.25em] text-gold-400/80`}>{number}</span>
          <MiniStar className="h-2.5 w-2.5" />
        </div>
      </div>

      {/* center ornament */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-1.5 p-2">
        <SufiOrnament
          size={s.ornament}
          className="animate-rotate-slow opacity-60"
          color="#D4AF37"
        />
      </div>

      {/* Bottom name cartouche */}
      <div className="absolute left-1/2 bottom-0 z-20 -translate-x-1/2">
        <div className={`flex items-center gap-2 ${s.banner} bg-gradient-to-t from-midnight-200/95 to-midnight-300/90 px-4 border-x border-gold-500/30`}>
          <div className="h-px w-3 gold-rule opacity-50" />
          <span className={`font-serif ${s.title} text-center leading-none text-cream-100 whitespace-nowrap`}>{displayName}</span>
          <div className="h-px w-3 gold-rule opacity-50" />
        </div>
      </div>
    </div>
  );

  if (reversed) {
    return <div className="rotate-180">{cardFront}</div>;
  }

  return cardFront;
}
