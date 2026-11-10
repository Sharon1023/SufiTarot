import { SufiOrnament } from './SufiOrnament';

export type VisualId = 'fool' | 'alchemist' | 'murshida' | 'shahbanu' | 'pir' | 'aashiqan' | 'waali' | 'quwwat';

interface CardVisualProps {
  visualId: VisualId;
  className?: string;
}

/* ============================================================
   THE FOOL (0) — Sufi Salik at the cliff's edge
   RWS elements: cliff, figure stepping forward, white rose,
   small dog, stick with bag, sun, mountains
   Sufi: dervish with sikke hat, desert gul rose, desert falcon,
   knotted staff, sun, dunes
   ============================================================ */
function FoolVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fool-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041914" />
          <stop offset="25%" stopColor="#0a2a20" />
          <stop offset="55%" stopColor="#1a4d3a" />
          <stop offset="80%" stopColor="#3a6b52" />
          <stop offset="100%" stopColor="#c4954a" />
        </linearGradient>
        <radialGradient id="fool-sun" cx="0.5" cy="0.25" r="0.18">
          <stop offset="0%" stopColor="#f4e5ad" />
          <stop offset="35%" stopColor="#D4AF37" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fool-dune1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6b3a" />
          <stop offset="100%" stopColor="#4a3818" />
        </linearGradient>
        <linearGradient id="fool-dune2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a07a42" />
          <stop offset="100%" stopColor="#5c481f" />
        </linearGradient>
        <linearGradient id="fool-cliff" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b5530" />
          <stop offset="100%" stopColor="#2a1f0e" />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="200" height="210" fill="url(#fool-sky)" />
      <rect width="200" height="210" fill="url(#fool-sun)" />

      {/* sun disk with rays */}
      <g transform="translate(100,50)">
        <circle r="14" fill="#D4AF37" opacity="0.15" />
        <circle r="9" fill="#D4AF37" opacity="0.4" />
        <circle r="5" fill="#f4e5ad" opacity="0.7" />
        <g stroke="#D4AF37" strokeWidth="0.5" opacity="0.3">
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            return <line key={i} x1={Math.cos(a) * 12} y1={Math.sin(a) * 12} x2={Math.cos(a) * 20} y2={Math.sin(a) * 20} />;
          })}
        </g>
      </g>

      {/* stars */}
      <g fill="#D4AF37" opacity="0.4">
        <circle cx="25" cy="30" r="1" />
        <circle cx="170" cy="45" r="1.2" />
        <circle cx="45" cy="70" r="0.7" />
        <circle cx="155" cy="80" r="0.9" />
        <circle cx="180" cy="110" r="0.7" />
      </g>

      {/* distant mountain peaks */}
      <path d="M0,165 L30,130 L55,155 L80,120 L110,150 L140,125 L170,145 L200,135 L200,190 L0,190 Z"
        fill="#1a4d3a" opacity="0.5" />

      {/* distant dunes */}
      <path d="M0,185 Q50,170 100,178 T200,175 L200,210 L0,210 Z" fill="url(#fool-dune2)" opacity="0.6" />

      {/* near dunes with cliff edge on right */}
      <path d="M0,210 Q40,195 80,205 Q110,210 120,208 L120,208 L130,210 L200,200 L200,300 L0,300 Z"
        fill="url(#fool-dune1)" />

      {/* cliff edge — the void below */}
      <path d="M120,208 L130,210 L135,300 L120,300 Z" fill="url(#fool-cliff)" />
      <path d="M135,210 L200,200 L200,300 L135,300 Z" fill="#020d0a" opacity="0.6" />

      {/* the Salik (dervish wanderer) standing at cliff edge */}
      <g transform="translate(105,135)">
        {/* conical dervish hat (sikke) */}
        <path d="M-4,-38 L4,-38 L2,-50 L-2,-50 Z" fill="#D4AF37" opacity="0.6" />
        <ellipse cx="0" cy="-38" rx="5" ry="1.5" fill="#D4AF37" opacity="0.5" />
        {/* head */}
        <circle cx="0" cy="-33" r="4.5" fill="#D4AF37" opacity="0.7" />
        {/* body — flowing dervish robe */}
        <path d="M-5,-28 Q-8,-15 -10,0 Q-9,10 -7,18 L7,18 Q9,10 10,0 Q8,-15 5,-28 Z"
          fill="#D4AF37" opacity="0.4" stroke="#D4AF37" strokeWidth="0.4" opacity="0.5" />
        {/* right arm — reaching forward */}
        <path d="M5,-22 Q12,-18 18,-15" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.5" />
        {/* left arm — holding white rose */}
        <path d="M-5,-22 Q-10,-18 -12,-12" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.5" />
        {/* white rose (gul) in left hand */}
        <circle cx="-13" cy="-11" r="3" fill="#f4e5ad" opacity="0.6" stroke="#D4AF37" strokeWidth="0.3" />
        <circle cx="-13" cy="-11" r="1.5" fill="#D4AF37" opacity="0.3" />
        {/* legs — one foot forward at the edge */}
        <path d="M-3,18 Q-5,24 -7,30" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M3,18 Q6,24 8,30" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4" />
      </g>

      {/* knotted staff with small bundle over shoulder */}
      <g transform="translate(90,115)" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" fill="none">
        <path d="M0,0 Q3,-15 0,-30" />
        {/* bundle at end */}
        <ellipse cx="0" cy="-32" rx="4" ry="3" fill="#D4AF37" opacity="0.2" />
      </g>

      {/* small desert falcon at feet (replacing the dog) */}
      <g transform="translate(115,200)" opacity="0.5">
        <ellipse cx="0" cy="0" rx="5" ry="3" fill="#D4AF37" opacity="0.5" />
        <circle cx="3" cy="-2" r="2" fill="#D4AF37" opacity="0.6" />
        <path d="M5,-2 L8,-1" stroke="#D4AF37" strokeWidth="0.5" />
        {/* wing detail */}
        <path d="M-2,-1 Q0,-4 3,-3" stroke="#D4AF37" strokeWidth="0.4" fill="none" />
      </g>

      {/* cliff edge highlight line */}
      <line x1="120" y1="208" x2="200" y2="200" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3" />

      {/* horizon glow */}
      <line x1="0" y1="185" x2="200" y2="185" stroke="#D4AF37" strokeWidth="0.3" opacity="0.2" />
    </svg>
  );
}

/* ============================================================
   THE MAGICIAN (1) — Sufi Alchemist at the workbench
   RWS elements: standing figure, infinity above head, table
   with 4 suit tools, as-above-so-below gesture, roses/lilies
   Sufi: alchemist with lemniscate, four elements on table,
   Sufi geometric garden below, pointing gesture
   ============================================================ */
function AlchemistVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="alc-bg" cx="0.5" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#0a3a2f" />
          <stop offset="50%" stopColor="#041914" />
          <stop offset="100%" stopColor="#020d0a" />
        </radialGradient>
        <radialGradient id="alc-glow" cx="0.5" cy="0.3" r="0.3">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="alc-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c481f" />
          <stop offset="100%" stopColor="#3a2e15" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#alc-bg)" />
      <rect width="200" height="300" fill="url(#alc-glow)" />

      {/* Sufi geometric arch background */}
      <g stroke="#D4AF37" fill="none" opacity="0.08">
        <path d="M20,250 Q20,160 60,140 Q100,120 140,140 Q180,160 180,250" strokeWidth="0.5" />
        <path d="M35,250 Q35,170 65,155 Q100,140 135,155 Q165,170 165,250" strokeWidth="0.3" />
      </g>

      {/* manifestation rings around figure */}
      <g stroke="#D4AF37" fill="none" opacity="0.1">
        <circle cx="100" cy="100" r="75" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="60" strokeWidth="0.4" />
      </g>

      {/* infinity symbol (lemniscate) above head */}
      <g transform="translate(100,45)" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.5">
        <path d="M-14,0 C-14,-7 -7,-7 0,0 C7,7 14,7 14,0 C14,-7 7,-7 0,0 C-7,7 -14,7 -14,0" />
      </g>

      {/* the Alchemist figure */}
      <g transform="translate(100,90)">
        {/* head */}
        <circle cx="0" cy="0" r="6" fill="#D4AF37" opacity="0.6" />
        {/* white inner robe */}
        <path d="M-8,6 Q-10,25 -12,50 L12,50 Q10,25 8,6 Z" fill="#f4e5ad" opacity="0.15" />
        {/* red outer robe (gold in Sufi palette) */}
        <path d="M-10,6 Q-14,30 -16,55 L16,55 Q14,30 10,6 Z" fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.4" />
        {/* right arm raised — pointing up with wand */}
        <path d="M8,8 Q15,0 20,-15" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* double-ended wand in right hand */}
        <line x1="20" y1="-15" x2="20" y2="-28" stroke="#f4e5ad" strokeWidth="1.5" opacity="0.7" />
        <circle cx="20" cy="-28" r="2" fill="#f4e5ad" opacity="0.6" />
        <circle cx="20" cy="-15" r="1.5" fill="#D4AF37" opacity="0.5" />
        {/* left arm pointing down */}
        <path d="M-8,8 Q-14,18 -16,30" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* finger pointing down */}
        <line x1="-16" y1="30" x2="-16" y2="36" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
      </g>

      {/* the table/workbench with four suit symbols */}
      <rect x="45" y="160" width="110" height="6" fill="url(#alc-table)" rx="1" />
      <rect x="48" y="166" width="4" height="40" fill="url(#alc-table)" />
      <rect x="148" y="166" width="4" height="40" fill="url(#alc-table)" />

      {/* four suit tools on the table */}
      {/* Wand (Staffs / Fire) */}
      <g transform="translate(65,155)">
        <line x1="0" y1="-8" x2="0" y2="5" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />
        <path d="M-2,-8 L0,-12 L2,-8" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.6" />
      </g>
      {/* Cup (Cups / Water) */}
      <g transform="translate(90,155)">
        <path d="M-4,-5 Q-4,2 0,3 Q4,2 4,-5 Z" fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.5" />
        <ellipse cx="0" cy="-5" rx="4" ry="1" fill="#D4AF37" opacity="0.2" />
        <rect x="-0.5" y="3" width="1" height="3" fill="#D4AF37" opacity="0.3" />
      </g>
      {/* Sword (Swords / Air) */}
      <g transform="translate(115,155)">
        <path d="M0,-12 L1.5,5 L-1.5,5 Z" fill="#D4AF37" opacity="0.4" />
        <line x1="-4" y1="5" x2="4" y2="5" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        <line x1="0" y1="5" x2="0" y2="9" stroke="#D4AF37" strokeWidth="0.6" opacity="0.4" />
      </g>
      {/* Pentacle (Coins / Earth) */}
      <g transform="translate(140,155)">
        <circle cx="0" cy="-2" r="5" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        {/* eight-pointed star inside */}
        <g stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.4">
          <path d="M0,-6 L1,-1 L6,0 L1,1 L0,6 L-1,1 L-6,0 L-1,-1 Z" />
        </g>
      </g>

      {/* garden below — roses and lilies */}
      <g transform="translate(0,215)">
        {/* red/gold roses */}
        <g opacity="0.35">
          <circle cx="55" cy="10" r="3" fill="#c44030" opacity="0.5" />
          <circle cx="55" cy="10" r="1.5" fill="#D4AF37" opacity="0.3" />
          <circle cx="70" cy="8" r="2.5" fill="#c44030" opacity="0.4" />
          <circle cx="130" cy="9" r="3" fill="#c44030" opacity="0.5" />
          <circle cx="130" cy="9" r="1.5" fill="#D4AF37" opacity="0.3" />
          <circle cx="145" cy="7" r="2" fill="#c44030" opacity="0.4" />
        </g>
        {/* white lilies */}
        <g opacity="0.3">
          <path d="M85,12 L83,5 L85,2 L87,5 Z" fill="#f4e5ad" />
          <path d="M115,12 L113,5 L115,2 L117,5 Z" fill="#f4e5ad" />
        </g>
        {/* leaves */}
        <g fill="#1a4d3a" opacity="0.3">
          <ellipse cx="50" cy="12" rx="3" ry="1.5" transform="rotate(30 50 12)" />
          <ellipse cx="75" cy="12" rx="3" ry="1.5" transform="rotate(-20 75 12)" />
          <ellipse cx="125" cy="12" rx="3" ry="1.5" transform="rotate(20 125 12)" />
          <ellipse cx="150" cy="12" rx="3" ry="1.5" transform="rotate(-30 150 12)" />
        </g>
        {/* ground line */}
        <line x1="0" y1="15" x2="200" y2="15" stroke="#D4AF37" strokeWidth="0.3" opacity="0.15" />
      </g>

      {/* scattered sparks of manifestation */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="40" cy="80" r="0.8" />
        <circle cx="170" cy="70" r="1" />
        <circle cx="30" cy="130" r="0.7" />
        <circle cx="175" cy="120" r="0.8" />
        <circle cx="160" cy="200" r="0.6" />
      </g>

      {/* "as above so below" vertical line of light */}
      <line x1="100" y1="50" x2="100" y2="220" stroke="#D4AF37" strokeWidth="0.3" opacity="0.08" />
    </svg>
  );
}

/* ============================================================
   THE HIGH PRIESTESS (2) — Sufi Murshida between the pillars
   RWS elements: seated between two pillars, moon crown, scroll,
   pomegranate veil, crescent at feet, blue robes
   Sufi: Murshida between two Sufi arch-pillars, crescent crown,
   scroll with divine wisdom, pomegranate curtain, crescent moon
   ============================================================ */
function MurshidaVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mur-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020d0a" />
          <stop offset="40%" stopColor="#041914" />
          <stop offset="100%" stopColor="#062821" />
        </linearGradient>
        <radialGradient id="mur-glow" cx="0.5" cy="0.35" r="0.3">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mur-veil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a3a2f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#041914" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#mur-bg)" />
      <rect width="200" height="300" fill="url(#mur-glow)" />

      {/* stars */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="25" cy="25" r="0.8" />
        <circle cx="50" cy="50" r="1" />
        <circle cx="175" cy="30" r="1.2" />
        <circle cx="150" cy="55" r="0.6" />
        <circle cx="20" cy="100" r="0.8" />
        <circle cx="180" cy="95" r="1" />
      </g>

      {/* pomegranate veil/curtain behind */}
      <rect x="25" y="60" width="150" height="200" fill="url(#mur-veil)" />
      {/* pomegranates on the veil */}
      <g opacity="0.2">
        {[
          [50, 90], [100, 80], [150, 90],
          [60, 140], [120, 135], [170, 145],
          [40, 190], [90, 185], [140, 195],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="#c44030" opacity="0.4" stroke="#D4AF37" strokeWidth="0.3" />
        ))}
      </g>
      {/* palm-leaf patterns on veil */}
      <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.12">
        <path d="M75,100 Q80,90 85,100" />
        <path d="M125,100 Q130,90 135,100" />
        <path d="M55,160 Q60,150 65,160" />
        <path d="M145,160 Q150,150 155,160" />
      </g>

      {/* left pillar (dark — Boaz) */}
      <rect x="30" y="60" width="12" height="200" fill="#020d0a" opacity="0.8" />
      <rect x="28" y="58" width="16" height="6" fill="#020d0a" opacity="0.9" rx="1" />
      <text x="36" y="265" fill="#D4AF37" opacity="0.3" fontSize="8" fontFamily="serif" textAnchor="middle">B</text>

      {/* right pillar (light — Jachin) */}
      <rect x="158" y="60" width="12" height="200" fill="#D4AF37" opacity="0.15" />
      <rect x="156" y="58" width="16" height="6" fill="#D4AF37" opacity="0.25" rx="1" />
      <text x="164" y="265" fill="#D4AF37" opacity="0.3" fontSize="8" fontFamily="serif" textAnchor="middle">J</text>

      {/* Sufi arch connecting the pillars */}
      <path d="M30,65 Q100,30 170,65" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.2" />
      <path d="M36,68 Q100,38 164,68" stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.15" />

      {/* the Murshida — seated figure */}
      <g transform="translate(100,120)">
        {/* crescent moon crown */}
        <g transform="translate(0,-42)" opacity="0.6">
          <path d="M-8,2 A8,8 0 1,0 8,2 A6,6 0 1,1 -8,2" fill="#D4AF37" />
        </g>
        {/* face */}
        <circle cx="0" cy="-30" r="6" fill="#D4AF37" opacity="0.5" />
        {/* blue robe → deep emerald robe in Sufi palette */}
        <path d="M-15,-22 Q-20,0 -22,35 Q-20,50 -15,55 L15,55 Q20,50 22,35 Q20,0 15,-22 Z"
          fill="#0a3a2f" opacity="0.6" stroke="#D4AF37" strokeWidth="0.3" />
        {/* cross on chest → Sufi eight-pointed star */}
        <g transform="translate(0,-5)" opacity="0.4">
          <path d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z" fill="#D4AF37" />
        </g>
        {/* hands holding scroll */}
        <rect x="-12" y="5" width="24" height="14" rx="2" fill="#f4e5ad" opacity="0.15" stroke="#D4AF37" strokeWidth="0.3" />
        {/* scroll text lines (Arabic-style calligraphy suggestion) */}
        <g stroke="#D4AF37" strokeWidth="0.3" opacity="0.25">
          <line x1="-8" y1="9" x2="8" y2="9" />
          <line x1="-8" y1="12" x2="6" y2="12" />
          <line x1="-8" y1="15" x2="8" y2="15" />
        </g>
        {/* TORA → DHIKR scroll label */}
        <text x="0" y="19" fill="#D4AF37" opacity="0.25" fontSize="3.5" fontFamily="serif" textAnchor="middle">DHIKR</text>
      </g>

      {/* crescent moon at feet */}
      <g transform="translate(100,230)" opacity="0.4">
        <path d="M-12,0 A12,12 0 1,0 12,0 A9,9 0 1,1 -12,0" fill="#D4AF37" />
      </g>

      {/* veil drape at bottom */}
      <path d="M25,260 Q100,270 175,260 L175,300 L25,300 Z" fill="#0a3a2f" opacity="0.3" />

      {/* faint geometric pattern on veil */}
      <g stroke="#D4AF37" strokeWidth="0.2" fill="none" opacity="0.08">
        <rect x="60" y="100" width="30" height="30" transform="rotate(45 75 115)" />
        <rect x="110" y="100" width="30" height="30" transform="rotate(45 125 115)" />
        <rect x="60" y="170" width="30" height="30" transform="rotate(45 75 185)" />
        <rect x="110" y="170" width="30" height="30" transform="rotate(45 125 185)" />
      </g>
    </svg>
  );
}

/* ============================================================
   THE EMPRESS (3) — Sufi Shahbanu on the throne
   RWS elements: throne, 12-star crown, pomegranate robe,
   wheat field, garden/forest, scepter, Venus symbol
   Sufi: Shahbanu on throne, eight-pointed star crown,
   pomegranate robe, wheat, Persian garden (cypress, water),
   scepter with Sufi ornament
   ============================================================ */
function ShahbanuVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sha-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041914" />
          <stop offset="35%" stopColor="#0a3a2f" />
          <stop offset="100%" stopColor="#062821" />
        </linearGradient>
        <radialGradient id="sha-glow" cx="0.5" cy="0.3" r="0.4">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sha-wheat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#937422" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="sha-throne" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c481f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3a2e15" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#sha-bg)" />
      <rect width="200" height="300" fill="url(#sha-glow)" />

      {/* Persian garden behind — cypress trees */}
      <g opacity="0.25">
        {/* left cypress */}
        <path d="M30,200 L28,120 L32,120 L30,200 Z" fill="#1a4d3a" />
        <path d="M25,130 Q30,115 35,130" fill="#1a4d3a" opacity="0.6" />
        <path d="M24,145 Q30,130 36,145" fill="#1a4d3a" opacity="0.5" />
        <path d="M23,160 Q30,145 37,160" fill="#1a4d3a" opacity="0.4" />
        <path d="M23,175 Q30,160 37,175" fill="#1a4d3a" opacity="0.3" />
        {/* right cypress */}
        <path d="M170,200 L168,120 L172,120 L170,200 Z" fill="#1a4d3a" />
        <path d="M165,130 Q170,115 175,130" fill="#1a4d3a" opacity="0.6" />
        <path d="M164,145 Q170,130 176,145" fill="#1a4d3a" opacity="0.5" />
        <path d="M163,160 Q170,145 177,160" fill="#1a4d3a" opacity="0.4" />
        <path d="M163,175 Q170,160 177,175" fill="#1a4d3a" opacity="0.3" />
        {/* middle trees */}
        <path d="M70,190 L68,140 L72,140 L70,190 Z" fill="#1a4d3a" opacity="0.5" />
        <path d="M65,150 Q70,135 75,150" fill="#1a4d3a" opacity="0.4" />
        <path d="M130,190 L128,140 L132,140 L130,190 Z" fill="#1a4d3a" opacity="0.5" />
        <path d="M125,150 Q130,135 135,150" fill="#1a4d3a" opacity="0.4" />
      </g>

      {/* waterfall / stream */}
      <g opacity="0.15">
        <path d="M85,160 Q90,180 85,210 Q80,240 85,270" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M115,160 Q110,180 115,210 Q120,240 115,270" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M100,165 Q95,190 100,220 Q105,250 100,275" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.6" />
      </g>

      {/* stars in sky */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="40" cy="30" r="0.8" />
        <circle cx="160" cy="35" r="1" />
        <circle cx="100" cy="20" r="0.6" />
      </g>

      {/* the throne */}
      <g>
        {/* throne back */}
        <rect x="65" y="100" width="70" height="100" fill="url(#sha-throne)" rx="3" />
        {/* throne top — ornate */}
        <path d="M60,105 Q100,90 140,105 L140,112 L60,112 Z" fill="url(#sha-throne)" />
        {/* throne arms */}
        <rect x="55" y="140" width="12" height="40" fill="url(#sha-throne)" rx="2" />
        <rect x="133" y="140" width="12" height="40" fill="url(#sha-throne)" rx="2" />
        {/* Sufi geometric pattern on throne back */}
        <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.15">
          <rect x="80" y="120" width="20" height="20" transform="rotate(45 90 130)" />
          <rect x="100" y="120" width="20" height="20" transform="rotate(45 110 130)" />
          <rect x="80" y="150" width="20" height="20" transform="rotate(45 90 160)" />
          <rect x="100" y="150" width="20" height="20" transform="rotate(45 110 160)" />
        </g>
      </g>

      {/* the Shahbanu — seated queen */}
      <g transform="translate(100,110)">
        {/* twelve-star crown */}
        <g opacity="0.6">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const r = 7;
            return (
              <g key={i} transform={`translate(${Math.cos(a) * r},${-10 + Math.sin(a) * r * 0.5})`}>
                <path d="M0,-2 L0.5,-0.5 L2,0 L0.5,0.5 L0,2 L-0.5,0.5 L-2,0 L-0.5,-0.5 Z" fill="#D4AF37" />
              </g>
            );
          })}
          {/* crown base */}
          <path d="M-8,-10 Q0,-14 8,-10" stroke="#D4AF37" strokeWidth="0.8" fill="none" />
        </g>

        {/* face */}
        <circle cx="0" cy="-5" r="5.5" fill="#D4AF37" opacity="0.55" />

        {/* pomegranate-patterned robe */}
        <path d="M-14,1 Q-18,25 -20,55 L20,55 Q18,25 14,1 Z"
          fill="#0a3a2f" opacity="0.5" stroke="#D4AF37" strokeWidth="0.3" />
        {/* pomegranate pattern on robe */}
        <g opacity="0.3">
          <circle cx="-8" cy="15" r="2.5" fill="#c44030" opacity="0.4" />
          <circle cx="8" cy="15" r="2.5" fill="#c44030" opacity="0.4" />
          <circle cx="0" cy="30" r="2.5" fill="#c44030" opacity="0.4" />
          <circle cx="-8" cy="40" r="2" fill="#c44030" opacity="0.3" />
          <circle cx="8" cy="40" r="2" fill="#c44030" opacity="0.3" />
        </g>

        {/* right arm resting on throne arm */}
        <path d="M14,10 Q20,15 22,20" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.4" />
        {/* left arm holding scepter */}
        <path d="M-14,10 Q-18,15 -20,20" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.4" />

        {/* scepter in left hand with Sufi ornament top */}
        <g transform="translate(-20,15)" opacity="0.5">
          <line x1="0" y1="5" x2="0" y2="-20" stroke="#D4AF37" strokeWidth="1.2" />
          {/* eight-pointed star scepter top */}
          <g transform="translate(0,-22)">
            <path d="M0,-4 L1,-1 L4,0 L1,1 L0,4 L-1,1 L-4,0 L-1,-1 Z" fill="#D4AF37" opacity="0.6" />
          </g>
        </g>
      </g>

      {/* Venus / heart symbol on cushion at her side */}
      <g transform="translate(60,185)" opacity="0.3">
        <circle r="6" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        {/* Sufi heart (eight-pointed star) instead of Venus */}
        <path d="M0,-3 L1,-1 L3,0 L1,1 L0,3 L-1,1 L-3,0 L-1,-1 Z" fill="#D4AF37" opacity="0.5" />
      </g>

      {/* golden wheat field at bottom */}
      <g transform="translate(0,240)">
        <line x1="0" y1="5" x2="200" y2="5" stroke="#D4AF37" strokeWidth="0.3" opacity="0.15" />
        {Array.from({ length: 15 }).map((_, i) => {
          const x = 10 + i * 13;
          return (
            <g key={i} transform={`translate(${x},0)`} opacity="0.4">
              <line x1="0" y1="5" x2="0" y2="-12" stroke="url(#sha-wheat)" strokeWidth="0.8" />
              {/* wheat grains */}
              <ellipse cx="-1.5" cy="-5" rx="1" ry="1.5" fill="#D4AF37" opacity="0.4" />
              <ellipse cx="1.5" cy="-5" rx="1" ry="1.5" fill="#D4AF37" opacity="0.4" />
              <ellipse cx="-1.5" cy="-9" rx="0.8" ry="1.2" fill="#D4AF37" opacity="0.35" />
              <ellipse cx="1.5" cy="-9" rx="0.8" ry="1.2" fill="#D4AF37" opacity="0.35" />
            </g>
          );
        })}
      </g>

      {/* ground / earth */}
      <rect x="0" y="270" width="200" height="30" fill="#3a2e15" opacity="0.3" />
    </svg>
  );
}

/* ============================================================
   THE HIEROPHANT (5) — Sufi Pir, the spiritual gardener
   RWS elements: two pillars/acolytes, triple crown, staff,
   blessing gesture, keys
   Sufi: Pir as gardener tending seedlings, geometric mirror,
   golden staff, twin seedlings
   ============================================================ */
function PirVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="pir-bg" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#0a3a2f" />
          <stop offset="50%" stopColor="#041914" />
          <stop offset="100%" stopColor="#020d0a" />
        </radialGradient>
        <radialGradient id="pir-glow" cx="0.5" cy="0.35" r="0.3">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pir-staff" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4e5ad" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#b8962a" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#pir-bg)" />
      <rect width="200" height="300" fill="url(#pir-glow)" />

      {/* faint geometric mirror pattern in background */}
      <g stroke="#D4AF37" fill="none" opacity="0.07">
        <circle cx="100" cy="110" r="55" strokeWidth="0.4" />
        <circle cx="100" cy="110" r="40" strokeWidth="0.3" />
        <path d="M70,110 L130,110 M100,60 L100,160" strokeWidth="0.3" />
        <path d="M78,78 L122,142 M122,78 L78,142" strokeWidth="0.2" />
      </g>

      {/* two pillars (acolytes → twin seedlings) */}
      <g opacity="0.3">
        {/* left seedling pillar */}
        <rect x="38" y="100" width="10" height="160" fill="#0a3a2f" opacity="0.6" rx="2" />
        <g transform="translate(43,95)" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.4">
          <path d="M0,8 Q-4,2 -6,-2" />
          <path d="M0,8 Q4,2 6,-2" />
          <path d="M0,8 L0,-4" />
        </g>
        {/* right seedling pillar */}
        <rect x="152" y="100" width="10" height="160" fill="#D4AF37" opacity="0.12" rx="2" />
        <g transform="translate(157,95)" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.4">
          <path d="M0,8 Q-4,2 -6,-2" />
          <path d="M0,8 Q4,2 6,-2" />
          <path d="M0,8 L0,-4" />
        </g>
      </g>

      {/* Sufi arch connecting pillars */}
      <path d="M38,105 Q100,65 162,105" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.2" />
      <path d="M44,108 Q100,72 156,108" stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.12" />

      {/* keys crossed at bottom */}
      <g transform="translate(100,255)" opacity="0.25" stroke="#D4AF37" strokeWidth="0.8" fill="none">
        <g transform="rotate(-25)">
          <circle cx="-12" cy="0" r="4" />
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="6" y1="0" x2="6" y2="4" />
          <line x1="3" y1="0" x2="3" y2="3" />
        </g>
        <g transform="rotate(25)">
          <circle cx="-12" cy="0" r="4" />
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="6" y1="0" x2="6" y2="4" />
          <line x1="3" y1="0" x2="3" y2="3" />
        </g>
      </g>

      {/* the Pir — standing figure with staff */}
      <g transform="translate(100,85)">
        {/* turban / triple-crown */}
        <g opacity="0.5">
          <path d="M-9,-42 L9,-42 L7,-48 L-7,-48 Z" fill="#D4AF37" />
          <path d="M-7,-48 L7,-48 L5,-52 L-5,-52 Z" fill="#D4AF37" opacity="0.7" />
          <path d="M-5,-52 L5,-52 L3,-55 L-3,-55 Z" fill="#D4AF37" opacity="0.5" />
          {/* jewel on turban */}
          <circle cx="0" cy="-44" r="1.5" fill="#f4e5ad" opacity="0.6" />
        </g>
        {/* face */}
        <circle cx="0" cy="-35" r="5" fill="#D4AF37" opacity="0.55" />
        {/* beard */}
        <path d="M-3,-32 Q0,-25 3,-32" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* robe */}
        <path d="M-12,-28 Q-16,-5 -18,30 Q-16,45 -12,50 L12,50 Q16,45 18,30 Q16,-5 12,-28 Z"
          fill="#D4AF37" opacity="0.2" stroke="#D4AF37" strokeWidth="0.3" />
        {/* eight-pointed star on chest */}
        <g transform="translate(0,-10)" opacity="0.4">
          <path d="M0,-4 L1,-1 L4,0 L1,1 L0,4 L-1,1 L-4,0 L-1,-1 Z" fill="#D4AF37" />
        </g>
        {/* right arm — blessing gesture */}
        <path d="M12,-22 Q18,-18 20,-12" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.4" />
        {/* fingers raised */}
        <line x1="20" y1="-12" x2="22" y2="-16" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" />
        <line x1="20" y1="-12" x2="23" y2="-10" stroke="#D4AF37" strokeWidth="0.6" opacity="0.3" />
        {/* left arm — holding staff */}
        <path d="M-12,-22 Q-16,-15 -18,-8" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.4" />
      </g>

      {/* the staff (triple-cross / Sufi crook) */}
      <g transform="translate(82,50)" opacity="0.45">
        <line x1="0" y1="0" x2="0" y2="75" stroke="url(#pir-staff)" strokeWidth="1.8" />
        {/* Sufi ornament top — triple bar */}
        <line x1="-5" y1="5" x2="5" y2="5" stroke="#D4AF37" strokeWidth="1" opacity="0.6" />
        <line x1="-4" y1="10" x2="4" y2="10" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        {/* small circle top */}
        <circle cx="0" cy="0" r="3" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        <path d="M0,-3 L0,-6 M-2,-5 L2,-5" stroke="#D4AF37" strokeWidth="0.6" opacity="0.4" />
      </g>

      {/* seedlings being tended at bottom — the gardener metaphor */}
      <g transform="translate(0,200)" opacity="0.3">
        {Array.from({ length: 5 }).map((_, i) => {
          const x = 55 + i * 22;
          return (
            <g key={i} transform={`translate(${x},0)`} stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.5">
              <path d="M0,12 L0,0" />
              <path d="M0,4 Q-3,1 -4,-2" />
              <path d="M0,4 Q3,1 4,-2" />
              <path d="M0,1 Q-2,-1 -3,-4" opacity="0.6" />
              <path d="M0,1 Q2,-1 3,-4" opacity="0.6" />
            </g>
          );
        })}
      </g>

      {/* ground line */}
      <line x1="0" y1="225" x2="200" y2="225" stroke="#D4AF37" strokeWidth="0.3" opacity="0.1" />

      {/* scattered light sparks */}
      <g fill="#D4AF37" opacity="0.25">
        <circle cx="35" cy="60" r="0.7" />
        <circle cx="165" cy="70" r="0.8" />
        <circle cx="50" cy="130" r="0.6" />
        <circle cx="155" cy="140" r="0.7" />
        <circle cx="100" cy="50" r="0.5" />
      </g>
    </svg>
  );
}

/* ============================================================
   THE LOVERS (6) — Sufi Aashiqan, complementary golden silhouettes
   RWS elements: man & woman, angel above, sun, tree of knowledge,
   garden, five-pointed star
   Sufi: two complementary golden light silhouettes merging into
   geometric harmony in the Garden, with a winged presence above
   ============================================================ */
function AashiqanVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="aash-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#041914" />
          <stop offset="40%" stopColor="#0a3a2f" />
          <stop offset="100%" stopColor="#062821" />
        </linearGradient>
        <radialGradient id="aash-sun" cx="0.5" cy="0.15" r="0.2">
          <stop offset="0%" stopColor="#f4e5ad" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="aash-glow" cx="0.5" cy="0.45" r="0.3">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="200" height="300" fill="url(#aash-bg)" />
      <rect width="200" height="180" fill="url(#aash-sun)" />
      <rect width="200" height="300" fill="url(#aash-glow)" />

      {/* sun disk */}
      <g transform="translate(100,35)" opacity="0.4">
        <circle r="10" fill="#D4AF37" opacity="0.15" />
        <circle r="6" fill="#f4e5ad" opacity="0.4" />
        <g stroke="#D4AF37" strokeWidth="0.4" opacity="0.3">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            return <line key={i} x1={Math.cos(a) * 9} y1={Math.sin(a) * 9} x2={Math.cos(a) * 16} y2={Math.sin(a) * 16} />;
          })}
        </g>
      </g>

      {/* angel / winged presence above */}
      <g transform="translate(100,70)" opacity="0.35">
        {/* head */}
        <circle cx="0" cy="0" r="4" fill="#D4AF37" opacity="0.5" />
        {/* wings spread */}
        <path d="M-4,2 Q-15,5 -22,12 Q-18,8 -10,8 Q-8,6 -4,4 Z" fill="#D4AF37" opacity="0.3" />
        <path d="M4,2 Q15,5 22,12 Q18,8 10,8 Q8,6 4,4 Z" fill="#D4AF37" opacity="0.3" />
        {/* body */}
        <path d="M-3,3 L3,3 L2,14 L-2,14 Z" fill="#D4AF37" opacity="0.2" />
        {/* small star above */}
        <path d="M0,-8 L1,-5 L4,-4 L1,-3 L0,-1 L-1,-3 L-4,-4 L-1,-5 Z" fill="#f4e5ad" opacity="0.4" />
      </g>

      {/* trees on either side (Garden of Eden → Persian garden) */}
      <g opacity="0.2">
        {/* left tree */}
        <path d="M25,180 L24,130 L26,130 L25,180 Z" fill="#1a4d3a" />
        <circle cx="25" cy="120" r="14" fill="#1a4d3a" opacity="0.4" />
        <circle cx="18" cy="115" r="8" fill="#1a4d3a" opacity="0.3" />
        <circle cx="32" cy="118" r="9" fill="#1a4d3a" opacity="0.3" />
        {/* fruit on tree */}
        <circle cx="20" cy="125" r="1.5" fill="#c44030" opacity="0.3" />
        <circle cx="30" cy="120" r="1.2" fill="#c44030" opacity="0.3" />
        {/* right tree */}
        <path d="M175,180 L174,130 L176,130 L175,180 Z" fill="#1a4d3a" />
        <circle cx="175" cy="120" r="14" fill="#1a4d3a" opacity="0.4" />
        <circle cx="168" cy="115" r="8" fill="#1a4d3a" opacity="0.3" />
        <circle cx="182" cy="118" r="9" fill="#1a4d3a" opacity="0.3" />
        <circle cx="170" cy="125" r="1.5" fill="#c44030" opacity="0.3" />
        <circle cx="180" cy="120" r="1.2" fill="#c44030" opacity="0.3" />
      </g>

      {/* the two complementary golden silhouettes */}
      <g transform="translate(100,130)">
        {/* left figure (feminine) */}
        <g transform="translate(-18,0)" opacity="0.35">
          {/* head */}
          <circle cx="0" cy="0" r="6" fill="#D4AF37" opacity="0.6" />
          {/* flowing body silhouette */}
          <path d="M-8,6 Q-12,25 -14,50 Q-12,65 -8,70 L8,70 Q12,65 14,50 Q12,25 8,6 Z"
            fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.3" />
          {/* hair flowing */}
          <path d="M-6,-2 Q-10,5 -8,15" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.3" />
        </g>
        {/* right figure (masculine) */}
        <g transform="translate(18,0)" opacity="0.35">
          {/* head */}
          <circle cx="0" cy="0" r="6" fill="#D4AF37" opacity="0.6" />
          {/* body silhouette */}
          <path d="M-7,6 Q-10,25 -12,50 Q-10,65 -7,70 L7,70 Q10,65 12,50 Q10,25 7,6 Z"
            fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.3" />
        </g>

        {/* merging geometric pattern between them */}
        <g opacity="0.2">
          <path d="M0,-5 L4,3 L0,11 L-4,3 Z" fill="#D4AF37" />
          <path d="M0,-8 L6,3 L0,14 L-6,3 Z" fill="none" stroke="#D4AF37" strokeWidth="0.3" />
          {/* infinity-like bridge between hearts */}
          <path d="M-8,0 C-8,-5 -4,-5 0,0 C4,5 8,5 8,0 C8,-5 4,-5 0,0 C-4,5 -8,5 -8,0"
            stroke="#f4e5ad" strokeWidth="0.4" fill="none" opacity="0.4" />
        </g>
      </g>

      {/* garden ground / grass */}
      <g transform="translate(0,200)" opacity="0.15">
        <line x1="0" y1="0" x2="200" y2="0" stroke="#D4AF37" strokeWidth="0.3" />
        {Array.from({ length: 12 }).map((_, i) => {
          const x = 15 + i * 16;
          return (
            <g key={i} transform={`translate(${x},0)`} stroke="#1a4d3a" strokeWidth="0.5" fill="none" opacity="0.6">
              <path d="M0,0 Q-1,-3 -2,-5" />
              <path d="M0,0 Q1,-3 2,-5" />
            </g>
          );
        })}
      </g>

      {/* mountain in distance */}
      <path d="M0,195 L40,165 L70,185 L100,155 L130,180 L160,160 L200,180 L200,200 L0,200 Z"
        fill="#1a4d3a" opacity="0.2" />

      {/* scattered light sparks (love particles) */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="60" cy="100" r="0.8" />
        <circle cx="140" cy="105" r="0.7" />
        <circle cx="45" cy="150" r="0.6" />
        <circle cx="155" cy="155" r="0.7" />
        <circle cx="100" cy="115" r="0.5" />
        <circle cx="80" cy="180" r="0.6" />
        <circle cx="120" cy="185" r="0.5" />
      </g>
    </svg>
  );
}

/* ============================================================
   THE CHARIOT (7) — Sufi Waali, soul-rider on emerald waves
   RWS elements: chariot, two sphinxes/horses, canopy of stars,
   moat/water, warrior with wand
   Sufi: Waali standing on two golden horses on emerald waves,
   no reins — pure will and focus
   ============================================================ */
function WaaliVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="waali-wave" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a3a2f" />
          <stop offset="40%" stopColor="#0f4d3c" />
          <stop offset="70%" stopColor="#0A3A2F" />
          <stop offset="100%" stopColor="#041914" />
        </linearGradient>
        <radialGradient id="waali-glow" cx="0.5" cy="0.3" r="0.3">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* emerald wave background */}
      <rect width="200" height="300" fill="url(#waali-wave)" />
      <rect width="200" height="300" fill="url(#waali-glow)" />

      {/* stars in sky */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="30" cy="25" r="0.8" />
        <circle cx="170" cy="20" r="1" />
        <circle cx="50" cy="45" r="0.6" />
        <circle cx="150" cy="50" r="0.7" />
        <circle cx="100" cy="30" r="0.5" />
        <circle cx="80" cy="60" r="0.6" />
        <circle cx="130" cy="65" r="0.5" />
      </g>

      {/* canopy of stars above figure */}
      <g transform="translate(100,55)" opacity="0.3">
        <path d="M-30,0 Q0,-15 30,0" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
        <path d="M-25,3 Q0,-10 25,3" stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.6" />
        {Array.from({ length: 7 }).map((_, i) => {
          const x = -25 + i * 8.5;
          return <path key={i} transform={`translate(${x},-2)`} d="M0,-3 L0.8,-0.8 L3,0 L0.8,0.8 L0,3 L-0.8,0.8 L-3,0 L-0.8,-0.8 Z" fill="#f4e5ad" opacity="0.5" />;
        })}
      </g>

      {/* emerald waves — layered */}
      <g opacity="0.5">
        <path d="M0,200 Q25,190 50,200 T100,200 T150,200 T200,200 L200,230 L0,230 Z" fill="#0f4d3c" opacity="0.4" />
        <path d="M0,215 Q25,205 50,215 T100,215 T150,215 T200,215 L200,250 L0,250 Z" fill="#0A3A2F" opacity="0.5" />
        <path d="M0,230 Q25,220 50,230 T100,230 T150,230 T200,230 L200,300 L0,300 Z" fill="#062821" opacity="0.6" />
      </g>
      {/* wave highlights */}
      <g stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.2">
        <path d="M0,205 Q25,195 50,205 T100,205 T150,205 T200,205" />
        <path d="M0,220 Q25,210 50,220 T100,220 T150,220 T200,220" />
        <path d="M0,235 Q25,225 50,235 T100,235 T150,235 T200,235" />
      </g>

      {/* the Waali — soul-rider figure standing on chariot platform */}
      <g transform="translate(100,90)">
        {/* crown / headpiece */}
        <path d="M-6,-40 L6,-40 L4,-44 L-4,-44 Z" fill="#D4AF37" opacity="0.5" />
        {/* star on crown */}
        <path d="M0,-46 L1,-43 L3,-42 L1,-41 L0,-39 L-1,-41 L-3,-42 L-1,-43 Z" fill="#f4e5ad" opacity="0.6" />
        {/* head */}
        <circle cx="0" cy="-34" r="5" fill="#D4AF37" opacity="0.55" />
        {/* body — armored robe */}
        <path d="M-10,-28 Q-14,-5 -16,20 Q-14,35 -10,40 L10,40 Q14,35 16,20 Q14,-5 10,-28 Z"
          fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.3" />
        {/* chest armor — geometric pattern */}
        <g transform="translate(0,-10)" opacity="0.3">
          <rect x="-5" y="-3" width="10" height="8" fill="none" stroke="#D4AF37" strokeWidth="0.3" transform="rotate(45 0 1)" />
        </g>
        {/* right arm — holding wand forward */}
        <path d="M10,-22 Q16,-18 20,-12" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.4" />
        {/* wand in right hand */}
        <line x1="20" y1="-12" x2="24" y2="-20" stroke="#f4e5ad" strokeWidth="1.2" opacity="0.6" />
        <circle cx="24" cy="-20" r="1.5" fill="#f4e5ad" opacity="0.5" />
        {/* left arm — at side */}
        <path d="M-10,-22 Q-14,-15 -15,-8" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.4" />
      </g>

      {/* chariot platform / stone vehicle */}
      <g transform="translate(100,135)" opacity="0.4">
        <rect x="-28" y="0" width="56" height="8" fill="#3a2e15" rx="2" />
        <rect x="-25" y="8" width="6" height="20" fill="#3a2e15" opacity="0.6" />
        <rect x="19" y="8" width="6" height="20" fill="#3a2e15" opacity="0.6" />
        {/* geometric pattern on chariot side */}
        <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.4">
          <rect x="-10" y="1" width="8" height="6" transform="rotate(45 -6 4)" />
          <rect x="2" y="1" width="8" height="6" transform="rotate(45 6 4)" />
        </g>
      </g>

      {/* two golden horses — no reins */}
      <g opacity="0.4">
        {/* left horse */}
        <g transform="translate(55,170)">
          <path d="M-10,5 Q-12,-2 -8,-8 Q-4,-12 0,-10 Q4,-8 6,-3 L8,5 L6,5 L4,0 L2,5 L0,5 L-2,0 L-4,5 L-6,5 L-8,0 L-10,5 Z"
            fill="#D4AF37" opacity="0.5" />
          {/* mane */}
          <path d="M-6,-8 Q-8,-12 -6,-15 Q-4,-12 -4,-9" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.4" />
          {/* legs */}
          <line x1="-6" y1="5" x2="-7" y2="18" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
          <line x1="4" y1="5" x2="5" y2="18" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        </g>
        {/* right horse */}
        <g transform="translate(145,170)">
          <path d="M10,5 Q12,-2 8,-8 Q4,-12 0,-10 Q-4,-8 -6,-3 L-8,5 L-6,5 L-4,0 L-2,5 L0,5 L2,0 L4,5 L6,5 L8,0 L10,5 Z"
            fill="#D4AF37" opacity="0.5" />
          <path d="M6,-8 Q8,-12 6,-15 Q4,-12 4,-9" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.4" />
          <line x1="6" y1="5" x2="7" y2="18" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
          <line x1="-4" y1="5" x2="-5" y2="18" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
        </g>
      </g>

      {/* light trail behind chariot — movement */}
      <g opacity="0.15">
        <path d="M0,140 Q30,130 60,135" stroke="#D4AF37" strokeWidth="0.5" fill="none" />
        <path d="M0,145 Q20,140 40,142" stroke="#D4AF37" strokeWidth="0.3" fill="none" />
      </g>

      {/* yin-yang style balance symbol on chariot front */}
      <g transform="translate(100,139)" opacity="0.3">
        <circle r="4" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
        <path d="M0,-4 A4,4 0 0,1 0,4 A2,2 0 0,0 0,0 A2,2 0 0,1 0,-4 Z" fill="#D4AF37" opacity="0.4" />
        <circle cx="0" cy="-2" r="0.6" fill="#041914" opacity="0.5" />
        <circle cx="0" cy="2" r="0.6" fill="#D4AF37" opacity="0.5" />
      </g>
    </svg>
  );
}

/* ============================================================
   THE STRENGTH (8) — Sufi Quwwat, gentle girl taming the lion
   RWS elements: woman taming lion, infinity above head,
   mountains, flowers, gentle hands
   Sufi: small innocent girl silhouette gently stroking a
   massive geometric golden lion under a deep emerald night sky
   ============================================================ */
function QuwwatVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="quwwat-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020d0a" />
          <stop offset="30%" stopColor="#041914" />
          <stop offset="70%" stopColor="#0a3a2f" />
          <stop offset="100%" stopColor="#0f4d3c" />
        </linearGradient>
        <radialGradient id="quwwat-glow" cx="0.5" cy="0.4" r="0.35">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="quwwat-lion" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4e5ad" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#b8962a" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect width="200" height="300" fill="url(#quwwat-sky)" />
      <rect width="200" height="300" fill="url(#quwwat-glow)" />

      {/* stars */}
      <g fill="#D4AF37" opacity="0.3">
        <circle cx="25" cy="20" r="0.8" />
        <circle cx="175" cy="25" r="1" />
        <circle cx="50" cy="40" r="0.5" />
        <circle cx="155" cy="45" r="0.7" />
        <circle cx="100" cy="18" r="0.6" />
        <circle cx="75" cy="55" r="0.5" />
        <circle cx="130" cy="60" r="0.4" />
      </g>

      {/* infinity symbol (lemniscate) above girl's head */}
      <g transform="translate(100,70)" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.4">
        <path d="M-12,0 C-12,-6 -6,-6 0,0 C6,6 12,6 12,0 C12,-6 6,-6 0,0 C-6,6 -12,6 -12,0" />
      </g>

      {/* distant mountains */}
      <path d="M0,200 L35,170 L60,190 L90,160 L120,185 L150,165 L180,180 L200,175 L200,210 L0,210 Z"
        fill="#1a4d3a" opacity="0.25" />

      {/* flowers on ground */}
      <g opacity="0.2" transform="translate(0,235)">
        {Array.from({ length: 6 }).map((_, i) => {
          const x = 25 + i * 30;
          return (
            <g key={i} transform={`translate(${x},0)`}>
              <line x1="0" y1="0" x2="0" y2="-8" stroke="#1a4d3a" strokeWidth="0.5" />
              <circle cx="0" cy="-9" r="2.5" fill="#D4AF37" opacity="0.3" />
              <circle cx="0" cy="-9" r="1" fill="#f4e5ad" opacity="0.4" />
            </g>
          );
        })}
      </g>

      {/* the lion — massive, geometric golden lines */}
      <g transform="translate(120,165)" opacity="0.5">
        {/* lion body — geometric */}
        <ellipse cx="0" cy="10" rx="35" ry="22" fill="url(#quwwat-lion)" stroke="#D4AF37" strokeWidth="0.4" opacity="0.5" />
        {/* mane — radiating geometric spikes */}
        <g stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.4">
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i * 22.5 * Math.PI) / 180;
            const r1 = 14;
            const r2 = 22;
            return (
              <line key={i} x1={Math.cos(a) * r1} y1={-10 + Math.sin(a) * r1} x2={Math.cos(a) * r2} y2={-10 + Math.sin(a) * r2} />
            );
          })}
        </g>
        {/* mane circles */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return <circle key={i} cx={Math.cos(a) * 18} cy={-10 + Math.sin(a) * 18} r="2.5" fill="#D4AF37" opacity="0.2" />;
        })}
        {/* head */}
        <circle cx="0" cy="-10" r="13" fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.4" />
        {/* eyes — closed (tamed, peaceful) */}
        <path d="M-5,-12 Q-3,-14 -1,-12" stroke="#041914" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M1,-12 Q3,-14 5,-12" stroke="#041914" strokeWidth="0.5" fill="none" opacity="0.5" />
        {/* nose */}
        <path d="M-2,-7 L2,-7 L0,-5 Z" fill="#D4AF37" opacity="0.4" />
        {/* mouth — gentle */}
        <path d="M0,-5 Q-3,-2 -5,-3" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.4" />
        <path d="M0,-5 Q3,-2 5,-3" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.4" />
        {/* front legs */}
        <path d="M-15,28 L-17,45 M-12,28 L-14,45" stroke="#D4AF37" strokeWidth="1" opacity="0.4" fill="none" />
        {/* tail */}
        <path d="M-35,5 Q-45,0 -42,-10" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.4" />
        <circle cx="-42" cy="-10" r="2" fill="#D4AF37" opacity="0.3" />
      </g>

      {/* the small innocent girl — gently stroking the lion */}
      <g transform="translate(65,130)" opacity="0.4">
        {/* hair flowing */}
        <path d="M-8,-12 Q-12,-5 -10,5" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path d="M8,-12 Q12,-5 10,5" stroke="#D4AF37" strokeWidth="0.6" fill="none" opacity="0.4" />
        {/* head */}
        <circle cx="0" cy="-8" r="5" fill="#D4AF37" opacity="0.5" />
        {/* small body — simple dress */}
        <path d="M-6,-3 Q-8,15 -10,35 L10,35 Q8,15 6,-3 Z"
          fill="#D4AF37" opacity="0.25" stroke="#D4AF37" strokeWidth="0.3" />
        {/* flower garland on head */}
        <g opacity="0.4">
          {Array.from({ length: 5 }).map((_, i) => (
            <circle key={i} cx={-4 + i * 2} cy={-12} r="1" fill="#D4AF37" opacity="0.5" />
          ))}
        </g>
        {/* right arm — reaching toward lion, gentle stroke */}
        <path d="M6,0 Q20,5 35,15" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.45" />
        {/* hand on lion */}
        <circle cx="35" cy="15" r="2" fill="#D4AF37" opacity="0.4" />
        {/* left arm — at side */}
        <path d="M-6,0 Q-10,10 -12,20" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.35" />
      </g>

      {/* gentle energy field between girl and lion */}
      <g opacity="0.1">
        <ellipse cx="90" cy="145" rx="20" ry="10" fill="#D4AF37" opacity="0.3" />
      </g>

      {/* scattered light sparks (gentle energy) */}
      <g fill="#D4AF37" opacity="0.25">
        <circle cx="50" cy="100" r="0.6" />
        <circle cx="170" cy="110" r="0.7" />
        <circle cx="40" cy="180" r="0.5" />
        <circle cx="90" cy="120" r="0.4" />
        <circle cx="130" cy="140" r="0.5" />
      </g>

      {/* ground */}
      <rect x="0" y="245" width="200" height="55" fill="#0f4d3c" opacity="0.15" />
    </svg>
  );
}

const visuals: Record<VisualId, React.FC<{ className?: string }>> = {
  fool: FoolVisual,
  alchemist: AlchemistVisual,
  murshida: MurshidaVisual,
  shahbanu: ShahbanuVisual,
  pir: PirVisual,
  aashiqan: AashiqanVisual,
  waali: WaaliVisual,
  quwwat: QuwwatVisual,
};

export function CardVisual({ visualId, className }: CardVisualProps) {
  const Visual = visuals[visualId];
  if (!Visual) return null;
  return <Visual className={className} />;
}

/** Check whether a visual exists for the given id. */
export function hasVisual(visualId: string | undefined): visualId is VisualId {
  return !!visualId && visualId in visuals;
}

/** Ornament for the card back — shared geometric pattern. */
export function CardBack({ className }: { className?: string }) {
  return (
    <div className={`relative flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-midnight-200 via-midnight-300 to-velvet-300 ${className ?? ''}`}>
      <div className="sufi-watermark absolute inset-2 rounded-lg" />
      {/* inner decorative border frame */}
      <div className="pointer-events-none absolute inset-1 rounded-lg border border-gold-500/30" />

      {/* Sufi arch border pattern along top & bottom */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 40 60">
        <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.25">
          {Array.from({ length: 5 }).map((_, i) => (
            <path key={`t${i}`} d={`M${i * 8},1 L${i * 8},4 Q${i * 8 + 4},6 ${(i + 1) * 8},4 L${(i + 1) * 8},1`} />
          ))}
        </g>
        <g stroke="#D4AF37" strokeWidth="0.3" fill="none" opacity="0.25">
          {Array.from({ length: 5 }).map((_, i) => (
            <path key={`b${i}`} d={`M${i * 8},59 L${i * 8},56 Q${i * 8 + 4},54 ${(i + 1) * 8},56 L${(i + 1) * 8},59`} />
          ))}
        </g>
      </svg>

      <SufiOrnament size={80} className="animate-rotate-slow opacity-50" color="#D4AF37" />
      <div className="h-px w-12 gold-rule opacity-40" />
      <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-gold-400/50">Sufi Tarot</p>
      <p className="font-serif text-xs text-sage-300/40">蘇菲塔羅</p>
    </div>
  );
}
