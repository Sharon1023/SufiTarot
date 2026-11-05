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
  sm: { w: 'w-28', h: 'h-44', ornament: 60, title: 'text-[11px]', num: 'text-[9px]', padding: 'p-2' },
  md: { w: 'w-40', h: 'h-60', ornament: 85, title: 'text-sm', num: 'text-xs', padding: 'p-3' },
  lg: { w: 'w-52', h: 'h-76', ornament: 120, title: 'text-base', num: 'text-sm', padding: 'p-4' },
};

export function CardArt({ suitId, name, number, reversed = false, size = 'md' }: CardArtProps) {
  const s = sizeMap[size];
  const isMajor = suitId === 'major';

  return (
    <div
      className={`relative ${s.w} ${s.h} shrink-0 rounded-xl overflow-hidden transition-all duration-500 ${reversed ? 'rotate-180' : ''} ${
        isMajor
          ? 'bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 border-2 border-gold-500/60 shadow-[0_8px_30px_rgba(10,58,47,0.25)]'
          : 'bg-gradient-to-br from-cream-100 via-cream-200 to-cream-300 border-2 border-gold-500/50 shadow-[0_8px_24px_rgba(10,58,47,0.15)]'
      }`}
    >
      {/* corner flourishes */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className={`absolute top-1.5 left-1.5 w-5 h-5 border-t border-l rounded-tl-md ${isMajor ? 'border-gold-400/50' : 'border-gold-500/50'}`} />
        <div className={`absolute top-1.5 right-1.5 w-5 h-5 border-t border-r rounded-tr-md ${isMajor ? 'border-gold-400/50' : 'border-gold-500/50'}`} />
        <div className={`absolute bottom-1.5 left-1.5 w-5 h-5 border-b border-l rounded-bl-md ${isMajor ? 'border-gold-400/50' : 'border-gold-500/50'}`} />
        <div className={`absolute bottom-1.5 right-1.5 w-5 h-5 border-b border-r rounded-br-md ${isMajor ? 'border-gold-400/50' : 'border-gold-500/50'}`} />
      </div>

      {/* watermark pattern */}
      <div className="sufi-watermark absolute inset-0" />

      {/* center ornament */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
        <div className={`${s.num} font-serif tracking-[0.2em] uppercase ${isMajor ? 'text-gold-300/80' : 'text-emerald-700/60'}`}>{number}</div>
        <SufiOrnament
          size={s.ornament}
          className="animate-rotate-slow opacity-70"
          color={isMajor ? '#D4AF37' : '#0A3A2F'}
        />
        <div className={`font-serif ${s.title} text-center leading-tight ${isMajor ? 'text-cream-100' : 'text-emerald-800'} px-1`}>
          {name}
        </div>
        <div className="h-px w-10 gold-rule opacity-50" />
      </div>
    </div>
  );
}
