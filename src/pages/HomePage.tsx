import { Sparkles } from 'lucide-react';
import { SUITS } from '../data/cards';
import type { Suit, SuitId } from '../data/cards';
import { SufiOrnament } from '../components/SufiOrnament';

interface HomePageProps {
  onNavigate: (suitId: SuitId) => void;
}

const accentClasses: Record<string, { border: string; bg: string; text: string; hoverBorder: string; glow: string }> = {
  gold: {
    border: 'border-gold-400/20',
    hoverBorder: 'hover:border-gold-400/60',
    bg: 'from-gold-500/10 to-transparent',
    text: 'text-gold-300',
    glow: 'hover:shadow-[0_0_40px_rgba(252,211,77,0.18)]',
  },
  emerald: {
    border: 'border-emerald-400/20',
    hoverBorder: 'hover:border-emerald-400/60',
    bg: 'from-emerald-500/10 to-transparent',
    text: 'text-emerald-300',
    glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.18)]',
  },
};

function CategoryCard({ suit, index, onNavigate }: { suit: Suit; index: number; onNavigate: (id: SuitId) => void }) {
  const a = accentClasses[suit.accent];
  const isMajor = suit.id === 'major';

  return (
    <button
      onClick={() => onNavigate(suit.id)}
      style={{ animationDelay: `${index * 90}ms` }}
      className={`group relative animate-fade-in-up overflow-hidden rounded-3xl border ${a.border} ${a.hoverBorder} ${a.glow} bg-gradient-to-br ${a.bg} bg-midnight-800/30 p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:bg-midnight-800/50 sm:p-8 ${
        isMajor ? 'sm:col-span-2' : ''
      }`}
    >
      {/* decorative ornament */}
      <SufiOrnament
        size={isMajor ? 160 : 110}
        className="pointer-events-none absolute -right-6 -top-6 opacity-15 transition-all duration-700 group-hover:rotate-45 group-hover:opacity-30"
      />

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className={`font-serif text-2xl ${a.text}`}>{suit.symbol}</span>
          <span className={`text-xs uppercase tracking-[0.2em] ${a.text} opacity-70`}>
            {suit.subtitle}
          </span>
        </div>

        <h2 className={`font-serif font-semibold text-gold-100 ${isMajor ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
          {suit.name}
        </h2>

        <p className="max-w-prose text-sm leading-relaxed text-midnight-100/70">
          {suit.description}
        </p>

        <div className="mt-2 flex items-center gap-3">
          <span className={`rounded-full border ${a.border} px-3 py-1 text-xs ${a.text}`}>
            {suit.count} 張牌
          </span>
          <span className={`rounded-full border ${a.border} px-3 py-1 text-xs ${a.text}`}>
            {suit.element}元素
          </span>
          <span className="ml-auto flex items-center gap-1 text-xs text-gold-200/60 transition-all group-hover:translate-x-1 group-hover:text-gold-200">
            探索 →
          </span>
        </div>
      </div>
    </button>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      {/* hero */}
      <div className="relative mb-10 flex flex-col items-center text-center sm:mb-14">
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2">
          <SufiOrnament size={200} className="animate-rotate-slow opacity-20" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 animate-fade-in-up">
          <div className="flex items-center gap-2 rounded-full border border-gold-400/20 bg-midnight-800/40 px-4 py-1.5 text-xs tracking-widest text-gold-300/80">
            <Sparkles className="h-3.5 w-3.5" />
            蘇菲塔羅 · Sufi Tarot
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-6xl">
            <span className="text-gold-gradient">蘇菲塔羅</span>
            <br />
            <span className="text-gold-100">學習指南與導師</span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-midnight-100/70 sm:text-base">
            以蘇菲神祕學為經，塔羅智慧為緯。
            在這片星夜之下，開啟一場通往內在的學習之旅——
            從牌義理解，到一對一的生命反思引導。
          </p>
        </div>
      </div>

      {/* categories */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SUITS.map((suit, i) => (
          <CategoryCard key={suit.id} suit={suit} index={i} onNavigate={onNavigate} />
        ))}
      </div>

      {/* footer note */}
      <p className="mt-12 text-center text-xs text-midnight-200/40">
        78 張牌 · 五大花色 · 一條通往自性的道路
      </p>
    </div>
  );
}
