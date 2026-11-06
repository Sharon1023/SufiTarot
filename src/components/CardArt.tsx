import { SufiOrnament } from './SufiOrnament';
import type { SuitId } from '../data/cards';

interface CardArtProps {
  suitId: SuitId;
  name: string;
  number: string;
  reversed?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { w: 'w-28', h: 'h-44', ornament: 60, title: 'text-[11px]', num: 'text-[9px]' },
  md: { w: 'w-40', h: 'h-60', ornament: 85, title: 'text-sm', num: 'text-xs' },
  lg: { w: 'w-52', h: 'h-76', ornament: 120, title: 'text-base', num: 'text-sm' },
};

export function CardArt({ suitId, name, number, reversed = false, size = 'md' }: CardArtProps) {
  const s = sizeMap[size];
  const isMajor = suitId === 'major';

  return (
    <div
      className={`relative ${s.w} ${s.h} shrink-0 rounded-xl overflow-hidden transition-all duration-500 ${reversed ? 'rotate-180' : ''} ${
        isMajor
          ? 'bg-gradient-to-br from-midnight-100 via-midnight-200 to-velvet-300 border-2 border-gold-500/50 shadow-[0_8px_30px_rgba(212,175,55,0.10)]'
          : 'bg-gradient-to-br from-velvet-100 via-velvet-200 to-midnight-200 border-2 border-gold-500/35 shadow-[0_8px_24px_rgba(4,25,20,0.40)]'
      }`}
    >
      {/* corner flourishes */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-1.5 left-1.5 w-5 h-5 border-t border-l rounded-tl-md border-gold-500/40" />
        <div className="absolute top-1.5 right-1.5 w-5 h-5 border-t border-r rounded-tr-md border-gold-500/40" />
        <div className="absolute bottom-1.5 left-1.5 w-5 h-5 border-b border-l rounded-bl-md border-gold-500/40" />
        <div className="absolute bottom-1.5 right-1.5 w-5 h-5 border-b border-r rounded-br-md border-gold-500/40" />
      </div>

      {/* watermark pattern */}
      <div className="sufi-watermark absolute inset-0" />

      {/* center ornament */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
        <div className={`${s.num} font-serif tracking-[0.2em] uppercase text-gold-400/70`}>{number}</div>
        <SufiOrnament
          size={s.ornament}
          className="animate-rotate-slow opacity-60"
          color="#D4AF37"
        />
        <div className={`font-serif ${s.title} text-center leading-tight text-sage-100 px-1`}>
          {name}
        </div>
        <div className="h-px w-10 gold-rule opacity-50" />
      </div>
    </div>
  );
}
