import { useState } from "react";
import Grain from "../components/ui/Grain";
import Img from "../components/ui/Img";
import Scene from "../components/ui/Scene";
import Cert from "../components/ui/Cert";
import Reveal from "../components/ui/Reveal";
import Hero from "../components/home/Hero";
import { PRODUCTS, STEPS, RECIPES, RECIPE_IMG, TESTIMONIALS, IMG } from "../data/content";

function Home({ go }) {
  const [tab, setTab] = useState("Basmati");
  return (
    <>
      <Hero go={go} />
      <Reveal tag="section" className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
        {[PRODUCTS[0], PRODUCTS[1], PRODUCTS[2], PRODUCTS[3]].map((p, n) => (
          <button key={p.name} onClick={() => go("products")} className="group text-center">
            <div className="float mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-dotted border-green-600 bg-white shadow-md transition duration-500 group-hover:scale-110 group-hover:shadow-xl" style={{ animationDelay: `${n * 0.4}s` }}><Img src={IMG.products[n]} alt={p.name} className="h-full w-full object-cover" fallback={<div className="grid h-full w-full place-items-center"><Grain c={p.c} size={110} /></div>} /></div>
            <div className="mt-4 text-sm font-bold uppercase text-forest">{p.name.replace(" Rice", "")}</div>
          </button>
        ))}
      </Reveal>

      <Reveal tag="section" className="mx-auto mt-24 grid max-w-6xl items-center gap-10 px-5 md:grid-cols-5">
        <div className="md:col-span-2"><div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg"><Img src={IMG.farmers} alt="Farmers planting rice" className="h-full w-full object-cover transition duration-700 hover:scale-110" fallback={<Scene v="field" />} /></div></div>
        <div className="md:col-span-3">
          <h2 className="font-display text-4xl text-stone-800">Farmer relation</h2>
          <p className="mt-4 leading-relaxed text-stone-600">Building relations with farmers is our main aim. We educate and guide them in modern cultivation so they can work better and faster. Our goal is to bring at least 500 small farmers into our supply network and help them improve yield, milling results and livelihoods.</p>
          <p className="mt-3 leading-relaxed text-stone-600">We have partnered with 40 large farmers, providing land leveling, seeds, fertilizers, pesticides and technical support on time. After harvest, we provide transport and labor from the fields to our mill.</p>
        </div>
      </Reveal>

      <Reveal tag="section" className="relative mt-24 overflow-hidden bg-forest py-16 text-white">
        <Img src={IMG.process} className="absolute inset-0 h-full w-full object-cover opacity-30" fallback={<Scene v="field" />} />
        <div className="relative mx-auto max-w-6xl px-5">
          <h2 className="mb-10 text-center font-display text-4xl">Production process</h2>
          <div className="grid border-l border-t border-cream/15 md:grid-cols-4">
            {STEPS.map(([t, d]) => (
              <button key={t} onClick={() => go("processing")} className="border-b border-r border-cream/15 p-5 text-left transition hover:bg-forest-light">
                <h3 className="font-semibold underline underline-offset-4">{t}</h3>
                <p className="mt-3 text-sm text-cream/75">{d.slice(0, 62)}… <span className="text-gold-light">Read more</span></p>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal tag="section" className="mx-auto mt-20 grid max-w-6xl gap-10 px-5 md:grid-cols-3">
        <div>
          <h2 className="font-display text-3xl text-stone-800">Cooking recipe</h2>
          <p className="mt-3 italic text-stone-500">Rinse, soak and cook. Three methods for three types of rice.</p>
          <button onClick={() => go("recipe")} className="mt-6 rounded bg-forest px-7 py-3 font-semibold text-white transition hover:bg-forest-light">Read more</button>
        </div>
        <div className="md:col-span-2">
          <div className="flex">{Object.keys(RECIPES).map((k, n) => (
            <button key={k} onClick={() => setTab(k)} className={`flex-1 px-4 py-3 text-sm font-bold uppercase text-white transition ${["bg-forest", "bg-forest-light", "bg-forest-dark"][n]} ${tab === k ? "" : "opacity-60 hover:opacity-90"}`}>{k}</button>))}</div>
          <div key={tab} className="fade-in flex items-center gap-6 bg-cream p-8">
            <Img src={RECIPE_IMG[tab]} alt={`${tab} rice`} className={`float h-32 w-32 shrink-0 ${RECIPE_IMG[tab].endsWith(".png") ? "object-contain" : "rounded-full object-cover shadow-lg ring-4 ring-white"}`} fallback={<div className="float text-7xl">🍚</div>} />
            <ol className="list-decimal space-y-2 pl-5 text-stone-700">{RECIPES[tab].map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
        </div>
      </Reveal>

      <section className="mt-24 bg-[#f3f0ea] pb-20 pt-16">
        <Reveal className="text-center">
          <div className="inline-block border-b-2 border-gold pb-1.5 text-[11px] font-bold uppercase tracking-[.2em] text-forest">What they say</div>
          <h2 className="mt-5 font-lato text-4xl font-light text-stone-700 md:text-5xl">Testimonials</h2>
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-6xl gap-x-6 gap-y-4 px-5 md:grid-cols-3">
          {TESTIMONIALS.map(([q, n, r], k) => (
            <Reveal key={n} delay={k * 150}>
              <figure className="group">
                <div className="relative bg-white px-7 pb-9 pt-10 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/5">
                  <span className="absolute left-4 top-0 font-display text-8xl leading-none text-gold/25 transition duration-500 group-hover:text-gold/60" aria-hidden="true">“</span>
                  <blockquote className="relative font-lato text-[15px] italic leading-relaxed text-stone-500">{q}</blockquote>
                  <span className="absolute -bottom-[26px] left-12 h-0 w-0 border-r-[26px] border-t-[26px] border-r-transparent border-t-white" aria-hidden="true" />
                </div>
                <figcaption className="mt-12 pl-20 font-lato"><div className="text-stone-700">{n}</div><div className="text-sm italic text-gold">{r}</div></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5 text-center">
        <Reveal>
          <div className="inline-block border-b-2 border-gold pb-1.5 text-[11px] font-bold uppercase tracking-[.2em] text-forest">Quality you can trust</div>
          <h2 className="mt-5 font-lato text-4xl font-light text-stone-700 md:text-5xl">Our Certifications</h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-end justify-center gap-3 md:gap-4">
          {IMG.cert.map((c, n) => (
            <Reveal key={c} from="zoom" delay={n * 100}>
              <Img src={c} alt="Certificate" className="h-28 w-auto transition duration-500 hover:-translate-y-2 hover:scale-105 hover:drop-shadow-xl md:h-36" fallback={<div className="h-36"><Cert k={n} /></div>} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
