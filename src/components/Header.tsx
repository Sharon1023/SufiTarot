import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  right?: React.ReactNode;
}

export function Header({ title, subtitle, onBack, right }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 glass-strong border-b border-gold-400/15">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
        {onBack ? (
          <button
            onClick={onBack}
            className="group flex items-center gap-1.5 rounded-full border border-gold-400/20 bg-midnight-800/50 px-3 py-1.5 text-sm text-gold-200 transition-all hover:border-gold-400/50 hover:bg-midnight-700/60 active:scale-95"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="hidden sm:inline">返回</span>
          </button>
        ) : (
          <div className="h-8 w-8 shrink-0" />
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          {title && (
            <h1 className="truncate font-serif text-base font-semibold text-gold-100 sm:text-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="truncate text-xs text-midnight-200/70">{subtitle}</p>
          )}
        </div>

        {right}
      </div>
    </header>
  );
}
