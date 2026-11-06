import { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { SUITS } from '../data/cards';
import type { Suit, SuitId } from '../data/cards';
import { SufiOrnament } from '../components/SufiOrnament';
import { SpreadsModal } from '../components/SpreadsModal';

interface HomePageProps {
  onNavigate: (suitId: SuitId) => void;
}

function CategoryCard({ suit, index, onNavigate }: { suit: Suit; index: number; onNavigate: (id: SuitId) => void }) {
  const isMajor = suit.id === 'major';
  const accentText = suit.accent === 'gold' ? 'text-gold-400' : 'text-emerald-300';
  const accentBorder = suit.accent === 'gold' ? 'border-gold-500/20 hover:border-gold-500/50' : 'border-emerald-500/20 hover:border-emerald-400/40';

  return (
    <button
      onClick={() => onNavigate(suit.id)}
      style={{ animationDelay: `${index * 80}ms` }}
      className={`group relative animate-fade-in-up overflow-hidden rounded-2xl border ${accentBorder} glass-panel p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,175,55,0.10)] sm:p-7 ${
        isMajor ? 'sm:col-span-2' : ''
      }`}
    >
      <SufiOrnament
        size={isMajor ? 140 : 100}
        className="pointer-events-none absolute -right-4 -top-4 opacity-10 transition-all duration-700 group-hover:rotate-45 group-hover:opacity-25"
        color="#D4AF37"
      />

      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <span className={`font-serif text-xl ${accentText}`}>{suit.symbol}</span>
          <span className={`text-[10px] uppercase tracking-[0.2em] ${accentText} opacity-60`}>
            {suit.subtitle}
          </span>
        </div>

        <h2 className={`font-serif font-semibold text-cream-100 text-illuminated ${isMajor ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          {suit.name}
        </h2>

        <p className="max-w-prose text-sm leading-relaxed text-sage-200/80">
          {suit.description}
        </p>

        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <span className={`rounded-full border border-gold-500/15 px-2.5 py-0.5 text-[11px] ${accentText}`}>
            {suit.count} 張
          </span>
          <span className={`rounded-full border border-gold-500/15 px-2.5 py-0.5 text-[11px] ${accentText}`}>
            {suit.element} · {suit.elementArabic}
          </span>
          {suit.rootWord !== '—' && (
            <span className={`rounded-full border border-gold-500/15 px-2.5 py-0.5 text-[11px] ${accentText}`}>
              {suit.rootWord}
            </span>
          )}
          <span className="ml-auto text-[11px] text-gold-500/60 transition-all group-hover:translate-x-1 group-hover:text-gold-400">
            探索 →
          </span>
        </div>
      </div>
    </button>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [spreadsOpen, setSpreadsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      {/* hero */}
      <div className="relative mb-10 flex flex-col items-center text-center sm:mb-12">
        <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2">
          <SufiOrnament size={170} className="animate-rotate-slow opacity-[0.10]" color="#D4AF37" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 animate-fade-in-up">
          <div className="flex items-center gap-2 rounded-full border border-gold-500/25 bg-velvet-200/40 px-4 py-1.5 text-[11px] tracking-[0.2em] text-gold-400/80">
            <Sparkles className="h-3.5 w-3.5" />
            SUFI TAROT · 蘇菲塔羅
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight text-cream-100 text-illuminated sm:text-5xl">
            蘇菲塔羅
            <span className="block text-gold-gradient text-3xl sm:text-4xl">學習指南與導師</span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-sage-200/70 sm:text-base">
            以蘇菲神祕學為經，塔羅智慧為緯。
            在這片靜謐之下，開啟一場通往內在的學習之旅——
            從牌義理解，到一對一的生命反思引導。
          </p>

          {/* spreads button */}
          <button
            onClick={() => setSpreadsOpen(true)}
            className="mt-2 flex items-center gap-2 rounded-full border border-gold-500/40 bg-midnight-200/60 px-6 py-2.5 font-serif text-sm text-gold-300 shadow-lg transition-all hover:border-gold-500/70 hover:bg-midnight-100/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] active:scale-95"
          >
            <BookOpen className="h-4 w-4 text-gold-400" />
            序言與牌陣指引
          </button>
        </div>
      </div>

      {/* categories */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SUITS.map((suit, i) => (
          <CategoryCard key={suit.id} suit={suit} index={i} onNavigate={onNavigate} />
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-sage-400/50">
        78 張牌 · 五大花色 · 一條通往自性的道路
      </p>

      <SpreadsModal open={spreadsOpen} onClose={() => setSpreadsOpen(false)} />
    </div>
  );
}
