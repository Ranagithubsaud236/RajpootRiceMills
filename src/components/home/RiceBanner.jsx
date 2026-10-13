import Grain from "../ui/Grain";

// Rajpoot rice pouch, drawn so it stays sharp at any size.
function Pack({ id, band, label, photo }) {
  return (
    <svg viewBox="0 0 100 124" className="h-full w-auto drop-shadow-[0_8px_10px_rgba(80,50,10,.45)]" aria-hidden="true">
      <defs>
        <linearGradient id={`sheen${id}`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".35" stopColor="#fff" stopOpacity=".35" /><stop offset=".55" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <clipPath id={`win${id}`}><ellipse cx="50" cy="94" rx="30" ry="15" /></clipPath>
      </defs>
      {/* pouch body */}
      <path d="M12 10 Q12 3 19 3 H81 Q88 3 88 10 V114 Q88 121 81 121 H19 Q12 121 12 114Z" fill="#fbf6e6" stroke="#cdb57a" strokeWidth="1" />
      <rect x="40" y="7" width="20" height="5" rx="2.5" fill="#e6d8b0" stroke="#cdb57a" strokeWidth=".6" />
      {/* brand */}
      <circle cx="50" cy="29" r="12" fill="#0f3d2e" stroke="#c9a24b" strokeWidth="1.6" />
      <g stroke="#e6c97a" strokeWidth="1.1" strokeLinecap="round" fill="#e6c97a">
        <path d="M50 37 C50 31 51 26 54 21" fill="none" /><path d="M50 37 C50 31 49 26 46 21" fill="none" />
        {[[52.5, 27], [53.5, 23.5], [47.5, 27], [46.5, 23.5]].map(([x, y]) => <ellipse key={x + "" + y} cx={x} cy={y} rx="1.6" ry=".8" stroke="none" />)}
      </g>
      <text x="50" y="51" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="10.5" letterSpacing="1.2" fill="#0f3d2e">RAJPOOT</text>
      <text x="50" y="58" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="4.6" letterSpacing="1.4" fill="#9c7a2c">BASMATI RICE</text>
      {/* variety band with rice window */}
      <path d="M12 64 H88 V114 Q88 121 81 121 H19 Q12 121 12 114Z" fill={band} />
      <rect x="12" y="64" width="76" height="1.6" fill="#c9a24b" />
      <text x="50" y="74" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="6.4" letterSpacing=".6" fill="#fff">{label}</text>
      <ellipse cx="50" cy="94" rx="31.5" ry="16.5" fill="#fff" />
      <image href={photo} x="18" y="78" width="64" height="32" preserveAspectRatio="xMidYMid slice" clipPath={`url(#win${id})`} />
      <text x="83" y="117" textAnchor="end" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="4.4" fill="#fff">5 KG</text>
      <path d="M12 10 Q12 3 19 3 H81 Q88 3 88 10 V114 Q88 121 81 121 H19 Q12 121 12 114Z" fill={`url(#sheen${id})`} />
    </svg>
  );
}

// Gold product card: variety name on the left, Rajpoot pack on the right.
function RiceBanner({ b: { a, t, color, band, label, photo }, id }) {
  return (
    <div className="@container relative aspect-[308/131] w-full overflow-hidden bg-gradient-to-br from-[#f7e7b4] via-[#dcb563] to-[#b5852e] text-left">
      <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 308 131" preserveAspectRatio="none" aria-hidden="true">
        {Array.from({ length: 14 }, (_, n) => (
          <path key={n} d={`M${12 + n * 22} 131 C${10 + n * 22} 90 ${18 + n * 22} 50 ${26 + n * 22} 18`} stroke="#8a6a22" strokeWidth="1.2" fill="none" />
        ))}
      </svg>
      <svg className="absolute inset-x-0 bottom-0 h-1/2 w-full" viewBox="0 0 308 65" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 65 V48 C80 18 190 6 308 30 V65Z" fill="#fffaf0" opacity=".92" />
        <path d="M0 48 C80 18 190 6 308 30" stroke="#fff" strokeWidth="2" fill="none" opacity=".9" />
      </svg>
      <div className="absolute bottom-[14%] right-[30%] opacity-80 transition duration-500 group-hover:rotate-12"><Grain c={["#fffbe8", "#d9b46a"]} size={34} /></div>
      <div className="absolute left-[7%] top-[13%] z-10 leading-[1.02]">
        <div className="font-lato text-[8cqw] font-bold drop-shadow-[0_1px_0_rgba(255,255,255,.4)]" style={{ color }}>{a}</div>
        <div className="font-lato text-[8.6cqw] font-bold uppercase tracking-tight text-stone-700">{t}</div>
      </div>
      <div className="absolute bottom-[6%] right-[5%] top-[6%] rotate-[-6deg] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-2deg] group-hover:scale-105">
        <Pack id={id} band={band} label={label} photo={photo} />
      </div>
    </div>
  );
}

export default RiceBanner;
