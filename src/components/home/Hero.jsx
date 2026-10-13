import { useState, useEffect } from "react";
import Img from "../ui/Img";
import Scene from "../ui/Scene";
import RiceBanner from "./RiceBanner";
import { SLIDES, BANNERS } from "../../data/content";

const Chevron = ({ flip }) => <svg viewBox="0 0 24 24" className={`h-6 w-6 ${flip ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>;

function Banner({ b, go, n }) {
  return (
    <button onClick={() => go("products")} style={{ animationDelay: `${0.3 + n * 0.15}s` }}
      className="shine slide-in group block w-full overflow-hidden shadow-xl shadow-black/30 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <span className="sr-only">{b.a} {b.t}</span>
      <RiceBanner b={b} id={n} />
    </button>
  );
}

function Hero({ go }) {
  // i runs 0..N; index N is a copy of slide 0 so the loop always slides forward.
  const N = SLIDES.length;
  const [i, setI] = useState(() => Math.max(0, Math.min(N - 1, (+new URLSearchParams(window.location.search).get("slide") || 1) - 1)));
  const [anim, setAnim] = useState(true);
  useEffect(() => { const t = setInterval(() => { setAnim(true); setI((x) => Math.min(x + 1, N)); }, 4000); return () => clearInterval(t); }, [N]);
  const onEnd = () => { if (i === N) { setAnim(false); setI(0); } };
  const step = (d) => { setAnim(true); setI((x) => (d < 0 && x === 0 ? N - 1 : Math.min(x + d, N))); };
  const dot = i % N;
  return (
    <section className="relative">
      <div className="relative h-[clamp(300px,34vw,500px)] overflow-hidden bg-forest-dark">
        <div onTransitionEnd={onEnd} className={`flex h-full ${anim ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ transform: `translateX(-${i * 100}%)` }}>
          {SLIDES.concat(SLIDES[0]).map((s, k) => (
            <div key={k} aria-hidden={k % N !== dot} className="relative h-full w-full shrink-0">
              {/* phones: photo fills the slide */}
              <Img src={s.img} alt={s.t} style={{ objectPosition: s.pos }} className={`h-full w-full object-cover md:hidden ${k % N === dot ? "kenburns" : ""}`} fallback={<Scene v={s.v} />} />
              {s.fit === "contain" && <img src={s.img} alt="" aria-hidden="true" className="absolute inset-y-0 right-0 h-full w-auto object-contain shadow-2xl md:hidden" />}
              {/* larger screens: blurred copy behind, the photo in a wide frame that resizes with the screen */}
              <div className="absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
                <img src={s.img} alt="" className="h-full w-full scale-110 object-cover blur-2xl brightness-[.5] saturate-125" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(8,42,31,.75),transparent_65%)]" />
              </div>
              <div className={`absolute bottom-[15%] left-[33%] right-[3%] top-[5%] hidden transition-all duration-700 md:block lg:left-[30%] xl:left-[28%] ${k % N === dot ? "translate-x-0 opacity-100" : "translate-x-6 opacity-60"}`}>
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60 ring-1 ring-white/20">
                  {s.fit === "contain" ? (
                    /* portrait/square photo: show it whole, with a blurred copy filling the frame */
                    <div className={`relative h-full w-full ${k % N === dot ? "kenburns" : ""}`}>
                      <img src={s.img} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl brightness-75" />
                      {s.box
                        ? <img src={s.img} alt={s.t} style={{ width: s.box, objectPosition: s.pos }} className="relative mx-auto h-full object-cover shadow-2xl" />
                        : <img src={s.img} alt={s.t} className="relative h-full w-full object-contain drop-shadow-2xl" />}
                    </div>
                  ) : (
                    <img src={s.img} alt={s.t} style={{ objectPosition: s.pos }} className={`h-full w-full object-cover ${k % N === dot ? "kenburns" : ""}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                {/* gold corner accents */}
                <span className="pointer-events-none absolute -left-2 -top-2 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-gold" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-gold" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent md:hidden" />
              {/* key flips when this slide becomes active, so the text animation replays on arrival */}
              <div key={`${k}-${k % N === dot}`} className="absolute inset-y-0 left-0 flex flex-col justify-center px-16 pb-14 md:w-[33%] md:pl-[6%] md:pr-6 lg:w-[30%] xl:w-[28%]">
                <div className={`${k % N === dot ? "slide-in" : ""} font-display text-5xl text-gold/40 md:text-6xl`}>{String((k % N) + 1).padStart(2, "0")}</div>
                <div className={`${k % N === dot ? "slide-in" : ""} mt-1 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.3em] text-gold-light`}><span className="h-px w-8 bg-gold" />Rajpoot Rice Mills</div>
                <h2 className={`${k % N === dot ? "slide-in d2" : ""} mt-3 font-display text-3xl font-medium leading-tight text-white drop-shadow-lg md:text-[2.3vw]`}>{s.t}</h2>
                <p className={`${k % N === dot ? "slide-in d3" : ""} mt-2 hidden text-white/80 sm:block md:text-sm lg:text-base`}>{s.s}</p>
                <button onClick={() => go("products")} className={`${k % N === dot ? "slide-in d4" : ""} group mt-5 hidden w-fit items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest-dark shadow-lg transition hover:bg-gold-light md:inline-flex`}>
                  Explore our rice <span className="transition group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {[[-1, "left-3 md:left-5"], [1, "right-3 md:right-5"]].map(([d, pos]) => (
          <button key={d} aria-label={d < 0 ? "Previous slide" : "Next slide"} onClick={() => step(d)}
            className={`absolute top-[45%] z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/25 text-white/90 backdrop-blur-sm transition hover:scale-110 hover:border-gold hover:bg-gold hover:text-forest ${pos}`}><Chevron flip={d > 0} /></button>
        ))}
        <div className="absolute bottom-3 right-4 z-10 flex gap-2 md:bottom-4 md:right-8">
          {SLIDES.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => { setAnim(true); setI(k); }} className={`h-2 rounded-full transition-all duration-500 ${k === dot ? "w-7 bg-gold" : "w-2 bg-white/60 hover:bg-white"}`} />)}
        </div>
        {/* 4-second progress line */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/10"><div key={dot} className="progress h-full bg-gradient-to-r from-gold to-gold-light" /></div>
      </div>
      <div className="relative z-10 mx-auto grid max-w-[975px] gap-3 bg-forest p-4 sm:grid-cols-3 md:-mt-14 md:gap-6 md:bg-transparent md:px-5 md:py-0">
        {BANNERS.map((b, n) => <Banner key={b.a} b={b} go={go} n={n} />)}
      </div>
    </section>
  );
}

export default Hero;
