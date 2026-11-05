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
    <div className="rounded-2xl border border-gold-500/20 bg-cream-50 p-6">
      <div className="mb-3 flex items-baseline gap-2">
        <h3 className="font-serif text-xl font-semibold text-emerald-900">{spread.name}</h3>
        <span className="text-xs uppercase tracking-widest text-gold-600/70">{spread.subtitle}</span>
      </div>
      <p className="mb-2 text-xs italic text-emerald-600/60">{spread.origin}</p>
      <p className="mb-4 text-sm leading-relaxed text-emerald-800/80">{spread.description}</p>

      <div className="flex flex-col gap-2">
        {spread.positions.map((pos) => (
          <div key={pos.position} className="flex items-start gap-3 rounded-xl border border-gold-500/10 bg-cream-100 p-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-800 font-serif text-xs font-semibold text-gold-300">
              {pos.position}
            </span>
            <div>
              <p className="font-serif text-sm font-medium text-emerald-900">{pos.label}</p>
              <p className="text-xs leading-relaxed text-emerald-700/70">{pos.meaning}</p>
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
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-emerald-950/40 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        className="relative my-6 w-full max-w-3xl rounded-3xl border border-gold-500/30 bg-cream-100 p-6 shadow-2xl animate-fade-in-scale sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/20 bg-cream-50 text-emerald-700 transition-colors hover:bg-cream-200"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex items-center gap-3 pr-10">
          <SufiOrnament size={40} className="shrink-0" />
          <div>
            <h2 className="font-serif text-2xl font-bold text-emerald-900">序言與牌陣指引</h2>
            <p className="text-sm text-emerald-600/60">Introduction & Spreads</p>
          </div>
        </div>

        {/* intro */}
        <div className="mb-6 rounded-2xl border border-gold-500/15 bg-cream-50 p-5">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-gold-600" />
            <h3 className="font-serif text-base font-medium text-emerald-900">如何親近這副牌</h3>
          </div>
          <p className="text-sm leading-relaxed text-emerald-800/75">
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
        <div className="rounded-2xl border border-gold-500/15 bg-cream-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <SufiOrnament size={20} className="opacity-70" />
            <h3 className="font-serif text-base font-medium text-emerald-900">宮廷牌正名</h3>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-emerald-800/70">
            小阿卡納的宮廷牌沿用傳統塔羅的 Page/Knight/Queen/King 架構，
            但在蘇菲塔羅中以更精確的阿拉伯／波斯根源重新命名，還原其古老的文化脈絡。
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {COURT_CARDS.map((c) => (
              <div key={c.traditional} className="rounded-xl border border-gold-500/10 bg-cream-100 p-4">
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="font-serif text-sm font-semibold text-emerald-900">{c.sufiName}</span>
                  {c.transliteration !== '—' && (
                    <span className="text-xs italic text-gold-600/70">{c.transliteration}</span>
                  )}
                </div>
                <p className="mb-1 text-xs text-emerald-600/50">原：{c.traditional}</p>
                <p className="text-xs leading-relaxed text-emerald-700/70">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
