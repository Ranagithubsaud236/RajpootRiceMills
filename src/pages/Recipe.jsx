import { useState } from "react";
import Img from "../components/ui/Img";
import Grain from "../components/ui/Grain";
import Reveal from "../components/ui/Reveal";
import PageTitle from "../components/ui/PageTitle";
import { RECIPES, RECIPE_META, RECIPE_IMG } from "../data/content";

const TIPS = [
  ["Rinse well", "Washing away surface starch keeps every grain separate and fluffy."],
  ["Rest after cooking", "Five to ten minutes covered lets the steam finish the grain evenly."],
  ["Fluff gently", "Use a fork, not a spoon, so the long grains do not break."],
];

function Bowl({ tab }) {
  const src = RECIPE_IMG[tab], photo = !src.endsWith(".png");
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-6 rounded-full bg-gradient-to-br from-gold-light/40 to-cream" />
      <svg className="spin-slow absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="47" fill="none" stroke="#c9a24b" strokeWidth=".4" strokeDasharray="1.5 2.5" /></svg>
      <svg className="absolute left-1/2 top-[6%] h-1/4 w-1/3 -translate-x-1/2" viewBox="0 0 60 60" aria-hidden="true">
        {[14, 30, 46].map((x, n) => <path key={x} className="steam" style={{ animationDelay: `${n * 0.9}s` }} d={`M${x} 58 c-6 -8 6 -14 0 -22 s6 -14 0 -22`} fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" />)}
      </svg>
      {photo ? (
        <div key={tab} className="pop absolute inset-[13%]"><div className="float h-full w-full overflow-hidden rounded-full shadow-2xl ring-8 ring-white">
          <Img src={src} alt={`${tab} rice`} className="h-full w-full object-cover" fallback={<div className="grid h-full w-full place-items-center bg-cream"><Grain c={["#f3deA0", "#c9a24b"]} size={200} /></div>} />
        </div></div>
      ) : (
        <div key={tab} className="pop absolute inset-0">
          <Img src={src} alt={`Bowl of cooked ${tab.toLowerCase()} rice`} className="float absolute inset-[12%] top-[18%] h-auto w-[76%] object-contain drop-shadow-2xl" fallback={<div className="float absolute inset-0 grid place-items-center"><Grain c={["#fff", "#e6e2cc"]} size={220} /></div>} />
        </div>
      )}
      {[[2, 70, 0], [82, 12, 1.2], [88, 74, 2.1]].map(([x, y, d]) => (
        <div key={x} className="float absolute opacity-80" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${d}s` }}><Grain c={["#f6eccb", "#c9a24b"]} size={44} rotate={x} /></div>
      ))}
    </div>
  );
}

function Recipe() {
  const keys = Object.keys(RECIPES);
  const [tab, setTab] = useState(keys[0]);
  const idx = keys.indexOf(tab);
  return (
    <div className="page-in">
      <PageTitle eyebrow="From our kitchen" sub="Three types of rice, three simple methods. Perfect grains every time.">Cooking Recipe</PageTitle>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 md:grid-cols-2">
        <Reveal from="left"><Bowl tab={tab} /></Reveal>
        <Reveal from="right" delay={150}>
          <div className="relative grid grid-cols-3 rounded-full bg-cream p-1.5 ring-1 ring-stone-200">
            <span className="absolute inset-y-1.5 left-1.5 w-[calc((100%-12px)/3)] rounded-full bg-forest shadow-lg transition-transform duration-500 ease-out" style={{ transform: `translateX(${idx * 100}%)` }} />
            {keys.map((k) => (
              <button key={k} onClick={() => setTab(k)} className={`relative z-10 rounded-full px-3 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors md:text-sm ${tab === k ? "text-gold-light" : "text-stone-500 hover:text-forest"}`}>{k}</button>
            ))}
          </div>

          <div key={tab}>
            <h2 className="slide-in mt-8 font-display text-4xl text-forest">{tab}</h2>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {RECIPE_META[tab].map(([a, b], n) => (
                <div key={a} className="pop rounded-xl border border-gold/30 bg-cream py-3 text-center" style={{ animationDelay: `${n * 0.08}s` }}>
                  <div className="font-display text-xl text-forest">{b}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-gold">{a}</div>
                </div>
              ))}
            </div>
            <ol className="mt-7 space-y-4">
              {RECIPES[tab].map((s, n) => (
                <li key={s} className="slide-in flex gap-4" style={{ animationDelay: `${0.15 + n * 0.12}s` }}>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest font-display text-gold-light">{n + 1}</span>
                  <p className="pt-1.5 leading-relaxed text-stone-600">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        {TIPS.map(([t, d], n) => (
          <Reveal key={t} delay={n * 120}>
            <div className="group h-full rounded-2xl bg-forest p-7 text-cream transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-forest/30">
              <div className="font-display text-5xl text-gold/40 transition group-hover:text-gold">0{n + 1}</div>
              <h3 className="mt-3 font-display text-xl text-gold-light">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{d}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}

export default Recipe;
