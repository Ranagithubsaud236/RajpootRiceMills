import { useState, useEffect } from "react";
import Logo from "./Logo";
import Location from "../ui/Location";
import { INFO, NAV } from "../../data/content";

function Header({ page, go }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f);
  }, []);
  const nav = (k) => { go(k); setOpen(false); };
  return (
    <div className="sticky top-0 z-40">
      <div className="bg-forest-dark text-xs text-cream/70">
        <div className="mx-auto flex max-w-6xl justify-center gap-6 px-5 py-2 md:justify-between">
          <span className="flex items-center gap-2"><span className="hidden md:inline"><Location /></span><span className="md:hidden"><Location text={INFO.short} /></span><span className="md:hidden">· <a href={`tel:${INFO.tel}`}>{INFO.phone}</a></span></span>
          <span className="hidden shrink-0 gap-6 md:flex"><span>CEO: <span className="text-gold-light">{INFO.ceo}</span></span><span className="hidden lg:inline">{INFO.hours}</span></span>
        </div>
      </div>
      <header className={`border-b transition-all duration-500 ${scrolled ? "border-stone-200 bg-white/90 shadow-lg shadow-black/5 backdrop-blur" : "border-transparent bg-white"}`}>
        <div className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
          <button onClick={() => nav("home")} aria-label="Home"><Logo /></button>
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map(([k, l]) => (
              <li key={k}>
                <button onClick={() => nav(k)} className={`group relative px-4 py-2 text-sm font-semibold transition ${page === k ? "text-forest" : "text-stone-500 hover:text-forest"}`}>
                  {l}<span className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded bg-gold transition-transform duration-300 ${page === k ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </button>
              </li>
            ))}
            <li className="ml-3"><a href={`tel:${INFO.tel}`} className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-md transition hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-lg">Call {INFO.phone}</a></li>
          </ul>
          <button className="relative h-10 w-10 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {[0, 1, 2].map((n) => <span key={n} className={`absolute left-2 h-0.5 w-6 rounded bg-forest transition duration-300 ${n === 0 ? (open ? "top-5 rotate-45" : "top-3") : n === 1 ? (open ? "top-5 opacity-0" : "top-5") : (open ? "top-5 -rotate-45" : "top-7")}`} />)}
          </button>
        </div>
        <div className={`grid overflow-hidden transition-all duration-500 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <ul className="min-h-0 bg-forest">
            {NAV.map(([k, l], n) => (
              <li key={k}><button onClick={() => nav(k)} style={{ transitionDelay: `${n * 40}ms` }} className={`block w-full px-6 py-3.5 text-left text-sm font-semibold transition ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"} ${page === k ? "text-gold-light" : "text-cream"}`}>{l}</button></li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
