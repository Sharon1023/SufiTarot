import { X, Sparkles } from 'lucide-react';
import { SPREADS, COURT_CARDS } from '../data/guidebook';
import type { Spread } from '../data/guidebook';
import { SufiOrnament } from './SufiOrnament';

interface SpreadsModalProps {
  open: boolean;
  onClose: () => void;
}

function SpreadCard({ spread }: { spread: Spread }) {
  return (
    <div className="rounded-2xl border border-gold-500/15 bg-velvet-200/40 p-6">
      <div className="mb-3 flex items-baseline gap-2">
        <h3 className="font-serif text-xl font-semibold text-cream-100 text-illuminated">{spread.name}</h3>
        <span className="text-xs uppercase tracking-widest text-gold-500/70">{spread.subtitle}</span>
      </div>
      <p className="mb-2 text-xs italic text-emerald-300/50">{spread.origin}</p>
      <p className="mb-4 text-sm leading-relaxed text-sage-200/80">{spread.description}</p>

      <div className="flex flex-col gap-2">
        {spread.positions.map((pos) => (
          <div key={pos.position} className="flex items-start gap-3 rounded-xl border border-gold-500/10 bg-midnight-200/40 p-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-midnight-100/60 font-serif text-xs font-semibold text-gold-400">
              {pos.position}
            </span>
            <div>
              <p className="font-serif text-sm font-medium text-cream-100">{pos.label}</p>
              <p className="text-xs leading-relaxed text-sage-200/70">{pos.meaning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SpreadsModal({ open, onClose }: SpreadsModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div
        className="relative my-6 w-full max-w-3xl rounded-3xl border border-gold-500/25 bg-velvet-200/90 p-6 shadow-[0_0_60px_rgba(212,175,55,0.08)] animate-fade-in-scale sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/20 bg-velvet-100/60 text-gold-400 transition-colors hover:bg-velvet-50/60"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex items-center gap-3 pr-10">
          <SufiOrnament size={40} className="shrink-0" color="#D4AF37" />
          <div>
            <h2 className="font-serif text-2xl font-bold text-cream-100 text-illuminated">序言與牌陣指引</h2>
            <p className="text-sm text-gold-500/50">Introduction & Spreads</p>
          </div>
        </div>

        {/* intro */}
        <div className="mb-6 rounded-2xl border border-gold-500/15 bg-velvet-200/40 p-5">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <h3 className="font-serif text-base font-medium text-cream-100">如何親近這副牌</h3>
          </div>
          <p className="text-sm leading-relaxed text-sage-200/75">
            蘇菲塔羅源自波斯與阿拉伯的神祕傳統。求籤不是預測命運，而是與內在智慧對話。
            帶著一個真誠的問題洗牌，讓牌成為你與心之間的橋樑。以下三種牌陣系統，
            從最簡單的單牌啟示到完整的五角星牌陣，引導你由淺入深地探索。
          </p>
        </div>

        {/* spreads */}
        <div className="mb-6 flex flex-col gap-4">
          {SPREADS.map((s) => <SpreadCard key={s.id} spread={s} />)}
        </div>

        {/* court cards naming */}
        <div className="rounded-2xl border border-gold-500/15 bg-velvet-200/40 p-5">
          <div className="mb-3 flex items-center gap-2">
            <SufiOrnament size={20} className="opacity-70" color="#D4AF37" />
            <h3 className="font-serif text-base font-medium text-cream-100">宮廷牌正名</h3>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-sage-200/70">
            小阿卡納的宮廷牌沿用傳統塔羅的 Page/Knight/Queen/King 架構，
            但在蘇菲塔羅中以更精確的阿拉伯／波斯根源重新命名，還原其古老的文化脈絡。
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {COURT_CARDS.map((c) => (
              <div key={c.traditional} className="rounded-xl border border-gold-500/10 bg-midnight-200/40 p-4">
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="font-serif text-sm font-semibold text-cream-100">{c.sufiName}</span>
                  {c.transliteration !== '—' && (
                    <span className="text-xs italic text-gold-500/70">{c.transliteration}</span>
                  )}
                </div>
                <p className="mb-1 text-xs text-emerald-300/40">原：{c.traditional}</p>
                <p className="text-xs leading-relaxed text-sage-200/70">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
