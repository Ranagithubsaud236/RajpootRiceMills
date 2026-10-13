import { useState, useEffect, useRef } from "react";
import Reveal from "../components/ui/Reveal";
import StepArt from "../components/ui/StepArt";
import Img from "../components/ui/Img";
import PageTitle from "../components/ui/PageTitle";
import { STEPS, SHIPMENT } from "../data/content";

const ALL = STEPS.concat([SHIPMENT]);
const STAGES = ["Paddy", "Husking", "Whitening", "Sorting", "Packing"];

// Animated mill line: grains ride a moving belt past five pulsing stations.
function Conveyor() {
  return (
    <div className="relative mx-auto -mt-14 max-w-5xl px-5">
      <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-2xl shadow-forest/10 ring-1 ring-stone-100 md:p-8">
        <div className="relative grid grid-cols-5">
          {STAGES.map((s, n) => (
            <div key={s} className="relative z-10 flex flex-col items-center">
              <div className="relative grid h-12 w-12 place-items-center md:h-16 md:w-16">
                <span className="ping absolute inset-0 rounded-full bg-gold/40" style={{ animationDelay: `${n * 0.48}s` }} />
                <span className="relative grid h-full w-full place-items-center rounded-full bg-forest font-display text-lg text-gold-light ring-4 ring-cream md:text-xl">{n + 1}</span>
              </div>
              <span className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-stone-500 md:text-xs">{s}</span>
            </div>
          ))}
          <svg className="absolute left-[10%] top-6 h-2 w-[80%] md:top-8" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true">
            <line x1="0" y1="1" x2="100" y2="1" stroke="#e7e1cf" strokeWidth="2" />
            <line className="belt" x1="0" y1="1" x2="100" y2="1" stroke="#c9a24b" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="pointer-events-none absolute left-[10%] top-[18px] h-3 w-[80%] md:top-[26px]">
            {[0, 1, 2, 3, 4, 5].map((k) => (
              <div key={k} className="ride absolute inset-0" style={{ animationDelay: `-${k * 1.17}s` }}>
                <span className="absolute left-0 top-0 block h-2 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-100 to-amber-300 shadow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Processing() {
  const ref = useRef(null);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const f = () => {
      const r = ref.current?.getBoundingClientRect(); if (!r) return;
      setProg(Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height)));
    };
    f(); window.addEventListener("scroll", f, { passive: true }); window.addEventListener("resize", f);
    return () => { window.removeEventListener("scroll", f); window.removeEventListener("resize", f); };
  }, []);

  return (
    <div className="page-in">
      <PageTitle eyebrow="From paddy to port" sub="Thirteen careful stages turn field-fresh paddy into export-ready grain.">Production Process</PageTitle>
      <Conveyor />

      <div ref={ref} className="relative mx-auto mt-20 max-w-5xl px-5">
        <div className="absolute bottom-0 left-[38px] top-0 w-0.5 bg-stone-200 md:left-1/2 md:-translate-x-1/2" />
        <div className="absolute left-[38px] top-0 w-0.5 bg-gradient-to-b from-gold-light via-gold to-forest md:left-1/2 md:-translate-x-1/2" style={{ height: `${prog * 100}%` }} />

        {ALL.map(([t, d], n) => {
          const left = n % 2 === 0, done = prog * ALL.length > n + 0.3;
          return (
            <div key={t} className={`relative mb-10 flex items-center md:mb-14 ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className={`absolute left-[38px] z-10 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full font-display text-sm transition-all duration-500 md:left-1/2 ${done ? "scale-110 bg-forest text-gold-light shadow-lg shadow-forest/30 ring-4 ring-gold/30" : "bg-white text-stone-400 ring-2 ring-stone-200"}`}>
                {String(n + 1).padStart(2, "0")}
              </div>
              <Reveal from={left ? "left" : "right"} className={`ml-20 w-full md:ml-0 md:w-[calc(50%-40px)] ${left ? "md:mr-auto" : "md:ml-auto"}`}>
                <div className={`group relative overflow-hidden rounded-xl border bg-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/10 ${done ? "border-gold/40" : "border-stone-200"}`}>
                  <div className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-gold to-forest transition-transform duration-500 group-hover:scale-y-100" />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg ring-1 ring-black/5 sm:w-48">
                      <Img src={n < 13 ? `/images/steps/${String(n + 1).padStart(2, "0")}.jpg` : null} alt={t} className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        fallback={<StepArt n={n} className="h-full w-full transition duration-500 group-hover:scale-105" />} />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[.25em] text-gold">Step {n + 1}</div>
                      <h3 className="mt-1 font-display text-2xl text-forest">{t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Processing;
