import { SufiOrnament } from './SufiOrnament';
import type { SuitId } from '../data/cards';

interface CardArtProps {
  suitId: SuitId;
  name: string;
  number: string;
  reversed?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const accentMap: Record<SuitId, { ring: string; glow: string; text: string }> = {
  major: { ring: 'border-gold-400/50', glow: 'shadow-[0_0_30px_rgba(252,211,77,0.25)]', text: 'text-gold-300' },
  staffs: { ring: 'border-gold-400/40', glow: 'shadow-[0_0_25px_rgba(245,158,11,0.2)]', text: 'text-gold-300' },
  cups: { ring: 'border-emerald-400/40', glow: 'shadow-[0_0_25px_rgba(16,185,129,0.2)]', text: 'text-emerald-300' },
  swords: { ring: 'border-gold-300/40', glow: 'shadow-[0_0_25px_rgba(252,211,77,0.18)]', text: 'text-gold-200' },
  coins: { ring: 'border-emerald-400/40', glow: 'shadow-[0_0_25px_rgba(5,150,105,0.2)]', text: 'text-emerald-300' },
};

const sizeMap = {
  sm: { w: 'w-32', h: 'h-48', ornament: 70, title: 'text-xs', num: 'text-[10px]' },
  md: { w: 'w-44', h: 'h-64', ornament: 95, title: 'text-sm', num: 'text-xs' },
  lg: { w: 'w-56', h: 'h-80', ornament: 130, title: 'text-base', num: 'text-sm' },
};

export function CardArt({ suitId, name, number, reversed = false, size = 'md' }: CardArtProps) {
  const a = accentMap[suitId];
  const s = sizeMap[size];

  return (
    <div
      className={`relative ${s.w} ${s.h} shrink-0 rounded-2xl bg-gradient-to-br from-midnight-700 via-midnight-800 to-midnight-950 border-2 ${a.ring} ${a.glow} overflow-hidden transition-all duration-500 ${reversed ? 'rotate-180' : ''}`}
    >
      {/* corner flourishes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-gold-400/40 rounded-tl-lg" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-gold-400/40 rounded-tr-lg" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-gold-400/40 rounded-bl-lg" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-gold-400/40 rounded-br-lg" />
      </div>

      {/* sufi pattern bg */}
      <div className="sufi-pattern absolute inset-0 opacity-60" />

      {/* center ornament */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
        <div className={`${s.num} font-serif tracking-widest text-gold-400/70 uppercase`}>{number}</div>
        <SufiOrnament size={s.ornament} className="animate-rotate-slow opacity-80" />
        <div className={`font-serif ${s.title} ${a.text} text-center leading-tight px-2`}>
          {name}
        </div>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      </div>
    </div>
  );
}
