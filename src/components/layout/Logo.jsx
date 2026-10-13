// Crest: two paddy stalks inside a gold ring, with the wordmark beside it.
const grains = (side) => [0, 1, 2, 3].map((i) => {
  const y = 43 - i * 6, x = 32 + side * (i * 1.1);
  return [<ellipse key={`a${i}`} cx={x - 3.6} cy={y} rx="3" ry="1.3" transform={`rotate(${-38 + side * 8} ${x - 3.6} ${y})`} />,
          <ellipse key={`b${i}`} cx={x + 3.6} cy={y - 2} rx="3" ry="1.3" transform={`rotate(${38 + side * 8} ${x + 3.6} ${y - 2})`} />];
});

export const Crest = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <linearGradient id="crestGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f3dc96" /><stop offset=".5" stopColor="#c9a24b" /><stop offset="1" stopColor="#9c7a2c" /></linearGradient>
      <radialGradient id="crestBg" cx=".35" cy=".3"><stop offset="0" stopColor="#1d5a43" /><stop offset="1" stopColor="#082a1f" /></radialGradient>
    </defs>
    <circle cx="32" cy="32" r="31" fill="url(#crestBg)" stroke="url(#crestGold)" strokeWidth="1.6" />
    <circle className="spin-slow spin-hover" cx="32" cy="32" r="26.5" fill="none" stroke="#c9a24b" strokeWidth=".7" strokeDasharray="1 2.4" />
    <g fill="url(#crestGold)" stroke="url(#crestGold)">
      <g transform="rotate(14 31 54)"><g className="stalk"><path d="M31 54 C31 42 32 28 37 14" fill="none" strokeWidth="1.3" />{grains(1)}<ellipse cx="37.6" cy="12" rx="1.6" ry="3.2" transform="rotate(22 37.6 12)" /></g></g>
      <g transform="translate(64 0) scale(-1 1) rotate(14 31 54)"><g className="stalk b"><path d="M31 54 C31 42 32 28 37 14" fill="none" strokeWidth="1.3" />{grains(1)}<ellipse cx="37.6" cy="12" rx="1.6" ry="3.2" transform="rotate(22 37.6 12)" /></g></g>
    </g>
    <path d="M22 52 Q32 57 42 52" fill="none" stroke="url(#crestGold)" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const Logo = ({ light }) => (
  <div className="group flex items-center gap-3">
    <div className="rounded-full shadow-lg shadow-forest/30 transition duration-500 group-hover:scale-105"><Crest /></div>
    <div className="text-left leading-none">
      <div className={`font-display text-[26px] font-semibold tracking-[.12em] ${light ? "text-cream" : "text-forest"}`}>RAJPOOT</div>
      <div className="mt-1.5 flex items-center gap-2">
        <span className="h-px w-4 bg-gold" />
        <span className={`text-[10px] font-semibold uppercase tracking-[.3em] ${light ? "text-gold-light" : "text-gold"}`}>Rice Mills</span>
        <span className="h-px w-4 bg-gold" />
      </div>
    </div>
  </div>
);

export default Logo;
