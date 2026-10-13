

function Scene({ v = "field" }) {
  const sky = { field: ["#9ad0f5", "#e9f5c9"], mill: ["#7fb6e8", "#f3e6c4"], machines: ["#2d5a6b", "#8fb8b5"] }[v];
  return (
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs><linearGradient id={"sk" + v} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={sky[0]} /><stop offset="1" stopColor={sky[1]} /></linearGradient></defs>
      <rect width="800" height="400" fill={`url(#sk${v})`} />
      {v === "field" && (<>
        <circle cx="620" cy="90" r="46" fill="#fff6c2" className="pulse" />
        <path d="M0 220 Q200 170 400 215 T800 200 V400 H0Z" fill="#7fae3a" />
        {[0, 1, 2, 3, 4, 5].map((r) => <path key={r} className="sway" style={{ animationDelay: `${r * 0.3}s` }} d={`M0 ${250 + r * 28} Q200 ${235 + r * 28} 400 ${250 + r * 28} T800 ${245 + r * 28}`} stroke={r % 2 ? "#4f8a1f" : "#a4cf4a"} strokeWidth="14" fill="none" />)}
      </>)}
      {v === "mill" && (<>
        <rect x="60" y="150" width="420" height="170" fill="#9b4a4a" />
        {[0, 1, 2, 3, 4].map((k) => <path key={k} d={`M${90 + k * 78} 230 v-40 a24 24 0 0 1 48 0 v40z`} fill="#dcecf7" />)}
        <rect x="520" y="90" width="50" height="230" fill="#c9ccd0" /><rect x="590" y="120" width="50" height="200" fill="#b6bac0" />
        <rect y="320" width="800" height="80" fill="#5d9a3a" />
        <ellipse cx="200" cy="335" rx="90" ry="22" fill="#3f7a2a" /><ellipse cx="620" cy="340" rx="110" ry="24" fill="#6b2a45" />
      </>)}
      {v === "machines" && (<>
        <rect y="300" width="800" height="100" fill="#26414c" />
        {[0, 1, 2, 3, 4, 5, 6].map((k) => <g key={k} className="sway" style={{ animationDelay: `${k * 0.2}s` }}><path d={`M${40 + k * 110} 120 h70 l-14 90 h-42z`} fill="#eef0dc" /><rect x={68 + k * 110} y="210" width="14" height="90" fill="#9aa8a0" /></g>)}
      </>)}
    </svg>
  );
}

export default Scene;
