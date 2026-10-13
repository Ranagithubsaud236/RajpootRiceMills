import { useState, useEffect } from "react";
import Img from "../ui/Img";
import Scene from "../ui/Scene";
import { SLIDES, BANNERS } from "../../data/content";

const Chevron = ({ flip }) => <svg viewBox="0 0 24 24" className={`h-6 w-6 ${flip ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>;

function Banner({ b: [a, t, src], go, n }) {
  return (
    <button onClick={() => go("products")} style={{ animationDelay: `${0.3 + n * 0.15}s` }}
      className="shine slide-in group block w-full overflow-hidden shadow-xl shadow-black/30 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <Img src={src} alt={`${a} ${t}`} className="block aspect-[308/131] w-full object-cover transition duration-700 group-hover:scale-105"
        fallback={<div className="grid aspect-[308/131] place-items-center bg-gradient-to-br from-gold-light to-gold font-display text-xl text-forest">{a} {t}</div>} />
    </button>
  );
}

function Hero({ go }) {
  // i runs 0..N; index N is a copy of slide 0 so the loop always slides forward.
  const N = SLIDES.length;
  const [i, setI] = useState(0);
  const [anim, setAnim] = useState(true);
  useEffect(() => { const t = setInterval(() => { setAnim(true); setI((x) => Math.min(x + 1, N)); }, 2000); return () => clearInterval(t); }, [N]);
  const onEnd = () => { if (i === N) { setAnim(false); setI(0); } };
  const step = (d) => { setAnim(true); setI((x) => (d < 0 && x === 0 ? N - 1 : Math.min(x + d, N))); };
  const dot = i % N;
  return (
    <section className="relative">
      <div className="relative h-[clamp(200px,22vw,420px)] overflow-hidden bg-stone-900">
        <div onTransitionEnd={onEnd} className={`flex h-full ${anim ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ transform: `translateX(-${i * 100}%)` }}>
          {SLIDES.concat(SLIDES[0]).map((s, k) => (
            <div key={k} aria-hidden={k % N !== dot} className="h-full w-full shrink-0">
              <Img src={s.img} alt={s.t} className="h-full w-full object-cover object-left" fallback={<Scene v={s.v} />} />
            </div>
          ))}
        </div>

        {[[-1, "left-3 md:left-6"], [1, "right-3 md:right-6"]].map(([d, pos]) => (
          <button key={d} aria-label={d < 0 ? "Previous slide" : "Next slide"} onClick={() => step(d)}
            className={`absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-white/90 backdrop-blur-sm transition hover:scale-110 hover:bg-gold hover:text-forest ${pos}`}><Chevron flip={d > 0} /></button>
        ))}
        <div className="absolute bottom-3 right-4 flex gap-2 md:bottom-5 md:right-8">
          {SLIDES.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => { setAnim(true); setI(k); }} className={`h-2 rounded-full transition-all duration-500 ${k === dot ? "w-7 bg-gold" : "w-2 bg-white/70 hover:bg-white"}`} />)}
        </div>

      </div>
      <div className="relative z-10 mx-auto grid max-w-[975px] gap-3 bg-forest p-4 sm:grid-cols-3 md:-mt-14 md:gap-6 md:bg-transparent md:px-5 md:py-0">
        {BANNERS.map((b, n) => <Banner key={b[0]} b={b} go={go} n={n} />)}
      </div>
    </section>
  );
}

export default Hero;
