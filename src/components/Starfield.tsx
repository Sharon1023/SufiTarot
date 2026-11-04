import { useMemo } from 'react';

interface Star {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
  color: string;
}

export function Starfield({ count = 60 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }).map(() => {
      const isGold = Math.random() > 0.5;
      return {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: `${Math.random() * 4}s`,
        duration: `${3 + Math.random() * 4}s`,
        opacity: Math.random() * 0.5 + 0.3,
        color: isGold ? 'rgba(252, 211, 77, 0.9)' : 'rgba(255, 255, 255, 0.7)',
      };
    });
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.color,
            animationDelay: s.delay,
            animationDuration: s.duration,
            opacity: s.opacity,
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
          }}
        />
      ))}
    </div>
  );
}
