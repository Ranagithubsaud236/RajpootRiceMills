// Picture for each production step, so the process reads without words.
// Order matches STEPS + SHIPMENT in data/content.js.

const C = { sack: "#c89b5c", sackD: "#8a6232", gold: "#e9c46a", goldD: "#b8902f", rice: "#fbf8ee", riceD: "#d8cfb0", steel: "#9fb3bf", steelD: "#5d7380", ink: "#33424b", red: "#e2553b", green: "#2f8f5b" };

// Animation class goes on a wrapper so it doesn't override the SVG rotate().
const G = ({ x, y, r = 0, f = C.gold, s = C.goldD, k = 1, cls = "", d = 0 }) => (
  <g className={cls} style={d ? { animationDelay: `${d}s` } : undefined}>
    <ellipse cx={x} cy={y} rx={5.5 * k} ry={2.3 * k} fill={f} stroke={s} strokeWidth=".8" transform={`rotate(${r} ${x} ${y})`} />
  </g>
);
const Check = ({ x, y, r = 9 }) => (
  <g className="pop"><circle cx={x} cy={y} r={r} fill={C.green} /><path d={`M${x - r * .45} ${y} l${r * .3} ${r * .32} l${r * .55} -${r * .62}`} fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></g>
);
const Sack = ({ x, y, k = 1, f = C.sack }) => (
  <g transform={`translate(${x} ${y}) scale(${k})`}>
    <path d="M-14 0 q-5 -22 5 -30 l-3 -6 h24 l-3 6 q10 8 5 30z" fill={f} stroke={C.sackD} strokeWidth="1.4" />
    <rect x="-9" y="-33" width="18" height="3.5" rx="1.5" fill={C.sackD} />
  </g>
);

const ART = [
  // Paddy selection: sack of paddy checked under a magnifier
  () => (<>
    <Sack x={36} y={80} k={1.25} />
    {[[30, 34, -20], [38, 31, 15], [45, 35, -40], [34, 38, 50]].map(([x, y, r]) => <G key={x} x={x} y={y} r={r} />)}
    <g className="float">
      <circle cx="80" cy="40" r="17" fill="#e8f4fb" stroke={C.ink} strokeWidth="4" />
      <G x={76} y={37} r={-25} k={1.4} /><G x={84} y={44} r={20} k={1.4} />
      <path d="M92 52 l13 14" stroke={C.ink} strokeWidth="7" strokeLinecap="round" />
    </g>
    <Check x={104} y={18} />
  </>),
  // Auto drying: dryer tower with fan and rising heat
  () => (<>
    <path d="M28 18 l19 -10 l19 10z" fill={C.steelD} />
    <rect x="28" y="18" width="38" height="62" rx="3" fill={C.steel} stroke={C.steelD} strokeWidth="1.5" />
    <circle cx="47" cy="50" r="13" fill="#e8f0f4" stroke={C.steelD} strokeWidth="1.5" />
    <g className="spin-fast">{[0, 120, 240].map((a) => <ellipse key={a} cx="47" cy="43" rx="3.5" ry="7" fill={C.steelD} transform={`rotate(${a} 47 50)`} />)}</g>
    <circle cx="47" cy="50" r="2.5" fill={C.ink} />
    {[80, 92, 104].map((x, n) => <path key={x} className="steam" style={{ animationDelay: `${n * .6}s` }} d={`M${x} 74 c-5 -7 5 -12 0 -19 s5 -12 0 -19`} fill="none" stroke={n === 1 ? C.red : "#f39b3d"} strokeWidth="3" strokeLinecap="round" />)}
  </>),
  // Sun drying: grain spread on a floor under the sun
  () => (<>
    <g className="spin-slow">{Array.from({ length: 10 }, (_, n) => <line key={n} x1="92" y1="6" x2="92" y2="0" stroke="#f7b733" strokeWidth="3" strokeLinecap="round" transform={`rotate(${n * 36} 92 22)`} />)}</g>
    <circle className="pulse" cx="92" cy="22" r="11" fill="#f7b733" />
    <rect x="4" y="62" width="112" height="22" rx="3" fill="#dccb9f" />
    {Array.from({ length: 22 }, (_, n) => <G key={n} x={12 + (n % 11) * 9.5} y={67 + Math.floor(n / 11) * 8} r={(n * 37) % 180} k={.8} />)}
    <g className="sway"><path d="M18 22 L34 60" stroke={C.sackD} strokeWidth="3.5" strokeLinecap="round" /><path d="M26 60 h18" stroke={C.ink} strokeWidth="4" strokeLinecap="round" /></g>
  </>),
  // Husking: paddy into the machine, husk flies out, rice comes out below
  () => (<>
    <G x={54} y={6} r={70} f="#c9984e" s="#8a6232" cls="fall" /><G x={64} y={4} r={110} f="#c9984e" s="#8a6232" cls="fall" d={.7} />
    <path d="M38 12 h44 l-11 16 h-22z" fill={C.steelD} />
    <rect x="32" y="28" width="56" height="36" rx="5" fill={C.steel} stroke={C.steelD} strokeWidth="1.5" />
    {[50, 70].map((x) => <g key={x}><circle cx={x} cy="46" r="9" fill={C.ink} /><path className="spin-fast" d={`M${x - 7} 46 h14 M${x} 39 v14`} stroke="#9fb3bf" strokeWidth="2" /></g>)}
    {[[98, 30], [108, 40], [100, 50]].map(([x, y], n) => <path key={x + y} className="float" style={{ animationDelay: `${n * .5}s` }} d={`M${x} ${y} q5 -4 9 0 q-4 3 -9 0z`} fill="#d8b47a" stroke="#a87a3e" strokeWidth=".8" />)}
    <path d="M88 40 l8 -6" stroke="#a87a3e" strokeWidth="2" strokeDasharray="2 2" />
    <G x={56} y={74} r={80} f="#e8d3a8" s="#b8902f" cls="fall" /><G x={64} y={76} r={100} f="#e8d3a8" s="#b8902f" cls="fall" d={.5} />
    <path d="M40 86 h40" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
  </>),
  // Parboiling: rice in a steaming pot over a flame
  () => (<>
    {[44, 60, 76].map((x, n) => <path key={x} className="steam" style={{ animationDelay: `${n * .8}s` }} d={`M${x} 32 c-5 -6 5 -10 0 -16 s5 -10 0 -16`} fill="none" stroke="#9fb3bf" strokeWidth="3" strokeLinecap="round" />)}
    <rect x="22" y="34" width="76" height="6" rx="3" fill={C.steelD} />
    <path d="M26 40 h68 v20 q0 12 -12 12 h-44 q-12 0 -12 -12z" fill={C.steel} stroke={C.steelD} strokeWidth="1.5" />
    <ellipse cx="60" cy="40" rx="30" ry="3" fill={C.gold} />
    <g className="pulse">{[44, 60, 76].map((x) => <path key={x} d={`M${x} 88 q-8 -6 -2 -14 q2 5 5 4 q-2 -6 4 -10 q4 9 0 20z`} fill="#f26b38" />)}</g>
  </>),
  // Warehousing: sacks stored and aged in a warehouse
  () => (<>
    <path d="M10 40 L60 12 L110 40z" fill="#8f3b2b" />
    <rect x="16" y="40" width="88" height="44" fill="#b5523b" />
    <rect x="36" y="48" width="48" height="36" fill="#3b2a20" />
    {[[44, 82], [60, 82], [76, 82], [52, 70], [68, 70], [60, 58]].map(([x, y]) => <rect key={x + "" + y} x={x - 7} y={y - 10} width="14" height="11" rx="3" fill="#d8b47a" stroke="#a87a3e" strokeWidth=".8" />)}
    <circle cx="100" cy="18" r="10" fill="#fff" stroke={C.ink} strokeWidth="2" />
    <path className="spin-slow" d="M100 18 v-7" stroke={C.red} strokeWidth="2" strokeLinecap="round" style={{ transformBox: "view-box", transformOrigin: "100px 18px" }} />
    <path d="M100 18 h5" stroke={C.ink} strokeWidth="2" strokeLinecap="round" />
  </>),
  // Grading: sieve keeps long grains, broken bits fall through
  () => (<>
    <path d="M10 30 L110 44" stroke={C.steelD} strokeWidth="6" strokeLinecap="round" strokeDasharray="4 3" />
    {[[24, 26], [44, 29], [64, 32], [84, 35]].map(([x, y], n) => <G key={x} x={x} y={y - 4} r={8} f={C.rice} s={C.riceD} k={1.3} cls="slide-r" d={n * .4} />)}
    {[[36, 44], [56, 46], [76, 50]].map(([x, y], n) => <rect key={x} className="fall" style={{ animationDelay: `${n * .5}s` }} x={x} y={y} width="4" height="3" rx="1" fill={C.riceD} />)}
    <path d="M24 66 h52 l-5 18 h-42z" fill="#d6dde1" stroke={C.steelD} strokeWidth="1.5" />
    {[34, 44, 54, 62].map((x) => <rect key={x} x={x} y="70" width="4" height="3" rx="1" fill={C.riceD} />)}
    <path d="M86 56 h28 l-4 28 h-20z" fill="#e7f3ea" stroke={C.green} strokeWidth="1.5" />
    {[[94, 64], [104, 70], [96, 76]].map(([x, y]) => <G key={x + y} x={x} y={y} r={-15} f={C.rice} s={C.riceD} />)}
  </>),
  // Cleaning: stones and dirt picked out of the grain
  () => (<>
    <path d="M14 56 q46 30 92 0z" fill="#d6dde1" stroke={C.steelD} strokeWidth="1.5" />
    {[[34, 60, 10], [46, 64, -20], [58, 62, 30], [70, 65, -10], [82, 60, 20], [52, 58, 60], [66, 58, -40]].map(([x, y, r]) => <G key={x + "" + y} x={x} y={y} r={r} f={C.rice} s={C.riceD} />)}
    <g className="float">
      <circle cx="38" cy="28" r="6" fill="#8a8f93" /><circle cx="56" cy="20" r="4.5" fill="#6f7478" /><path d="M76 24 q4 -6 10 -2 q-2 6 -10 2z" fill="#7a5a3a" />
      <path d="M50 40 v-10" stroke={C.ink} strokeWidth="2" strokeLinecap="round" markerEnd="" /><path d="M46 33 l4 -5 l4 5" fill="none" stroke={C.ink} strokeWidth="2" strokeLinecap="round" />
    </g>
    <g stroke={C.red} strokeWidth="3" strokeLinecap="round"><path d="M96 12 l14 14 M110 12 l-14 14" /></g>
  </>),
  // Whitening: brown grain goes in, white grain comes out
  () => (<>
    <ellipse cx="24" cy="46" rx="16" ry="7" fill="#b98a4b" stroke="#8a6232" strokeWidth="1.5" transform="rotate(-20 24 46)" />
    <circle cx="60" cy="46" r="14" fill={C.steel} stroke={C.steelD} strokeWidth="1.5" />
    <path className="spin-fast" d="M50 46 h20 M60 36 v20 M53 39 l14 14 M67 39 l-14 14" stroke={C.ink} strokeWidth="2" />
    <path d="M42 46 h4 M74 46 h4" stroke={C.ink} strokeWidth="3" strokeLinecap="round" /><path d="M76 41 l5 5 -5 5" fill="none" stroke={C.ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="98" cy="46" rx="16" ry="7" fill={C.rice} stroke={C.riceD} strokeWidth="1.5" transform="rotate(-20 98 46)" />
    {[[106, 30], [88, 62], [114, 54]].map(([x, y], n) => <path key={x} className="pulse" style={{ animationDelay: `${n * .5}s` }} d={`M${x} ${y - 5} l1.5 3.5 3.5 1.5 -3.5 1.5 -1.5 3.5 -1.5 -3.5 -3.5 -1.5 3.5 -1.5z`} fill="#f7b733" />)}
  </>),
  // Quality assurance: lab test with a pass mark
  () => (<>
    <path d="M28 14 h16 M32 14 v20 l-14 36 q-2 8 6 8 h24 q8 0 6 -8 l-14 -36 v-20" fill="#e8f4fb" stroke={C.ink} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M22 62 l6 -14 h16 l6 14 q2 8 -6 8 h-16 q-8 0 -6 -8z" fill="#7cc79a" />
    {[[32, 56], [40, 60]].map(([x, y], n) => <circle key={x} className="steam" style={{ animationDelay: `${n * .7}s` }} cx={x} cy={y} r="2" fill="#fff" />)}
    <g className="float"><circle cx="78" cy="40" r="14" fill="#fff" stroke={C.ink} strokeWidth="3.5" /><G x={78} y={40} r={-20} k={1.4} f={C.rice} s={C.riceD} /><path d="M88 50 l10 10" stroke={C.ink} strokeWidth="6" strokeLinecap="round" /></g>
    <Check x={102} y={18} r={11} />
  </>),
  // Color sorting: camera spots a dark grain and air blows it out
  () => (<>
    <rect x="44" y="6" width="32" height="18" rx="4" fill={C.ink} /><circle cx="60" cy="24" r="7" fill="#1d2a31" stroke={C.steel} strokeWidth="2" />
    <circle className="blink" cx="70" cy="11" r="2.5" fill={C.red} />
    <path d="M60 31 l-14 22 h28z" fill="#5aa9e6" opacity=".18" />
    <path d="M6 64 h108" stroke={C.steelD} strokeWidth="4" strokeLinecap="round" />
    {[16, 30, 44, 76, 90, 104].map((x) => <G key={x} x={x} y={58} f={C.rice} s={C.riceD} />)}
    <g className="float"><G x={60} y={42} r={-30} f="#5b4a3a" s="#3b2a20" k={1.1} /></g>
    {[54, 60, 66].map((x) => <path key={x} className="steam" d={`M${x} 78 v-10`} stroke="#5aa9e6" strokeWidth="2" strokeLinecap="round" />)}
    <g stroke={C.red} strokeWidth="2.5" strokeLinecap="round"><path d="M70 34 l8 -8 M78 34 l-8 -8" /></g>
  </>),
  // Packing: sack weighed on an electronic scale
  () => (<>
    <Sack x={44} y={60} k={1.3} f="#efe4c8" />
    <path d="M30 40 h28" stroke={C.green} strokeWidth="5" />
    <rect x="14" y="60" width="62" height="8" rx="2" fill={C.steelD} />
    <rect x="22" y="68" width="46" height="14" rx="2" fill={C.steel} />
    <rect x="84" y="34" width="30" height="20" rx="3" fill={C.ink} />
    <text x="99" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#7cf0a4" fontFamily="monospace" className="blink">50kg</text>
    <path d="M84 54 q-6 6 -10 8" fill="none" stroke={C.ink} strokeWidth="2" />
    <Check x={104} y={18} r={9} />
  </>),
  // Shipment: cargo ship on the sea
  () => (<>
    <g className="float">
      <path d="M18 56 h86 l-10 18 h-68z" fill="#1f4e79" />
      <path d="M18 56 h86 l-2 4 h-82z" fill={C.red} />
      {[["#e2553b", 26], ["#f7b733", 42], ["#2f8f5b", 58], ["#5aa9e6", 74]].map(([f, x]) => <rect key={x} x={x} y="42" width="14" height="14" fill={f} stroke="#fff" strokeWidth="1" />)}
      {[["#2f8f5b", 34], ["#e2553b", 50], ["#f7b733", 66]].map(([f, x]) => <rect key={x} x={x} y="30" width="14" height="12" fill={f} stroke="#fff" strokeWidth="1" />)}
      <rect x="88" y="30" width="12" height="26" fill="#fff" stroke={C.ink} strokeWidth="1" /><rect x="90" y="34" width="8" height="4" fill="#5aa9e6" />
    </g>
    <path className="sway" d="M-10 76 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 V90 H-10z" fill="#5aa9e6" />
    <path className="sway" style={{ animationDelay: "-1.5s" }} d="M-14 82 q10 -5 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 V90 H-14z" fill="#3f8fd0" />
  </>),
];

const BG = ["#fdf3dc", "#eef6f1", "#fff6dc", "#f3efe6", "#eef3fb", "#f6ece8", "#eef6f1", "#f3efe6", "#fdf3dc", "#eef3fb", "#f1efe9", "#fdf3dc", "#e8f4fb"];

function StepArt({ n, className = "" }) {
  const Art = ART[n];
  return (
    <svg viewBox="0 0 120 90" className={className} style={{ background: BG[n] }} role="img" aria-hidden="true">
      <Art />
    </svg>
  );
}

export default StepArt;
