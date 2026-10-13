import Img from "../ui/Img";
import Grain from "../ui/Grain";
import Logo from "./Logo";
import Location from "../ui/Location";
import { COMPANY, INFO, PRODUCTS, NAV } from "../../data/content";

function Footer({ go }) {
  return (
    <footer className="relative mt-24 overflow-hidden bg-forest text-cream">
      <div className="h-1 bg-gradient-to-r from-forest via-gold to-forest" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-cream/70">We deal in Basmati and non-Basmati rice. {COMPANY} supplies high quality rice to customers around the world.</p>
        </div>
        <div>
          <h4 className="mb-5 font-display text-lg text-gold-light">Latest products</h4>
          {PRODUCTS.slice(0, 3).map((p) => (
            <button key={p.name} onClick={() => go("products")} className="group mb-4 flex w-full items-center gap-3 text-left text-sm">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-gold/40"><Img src={p.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-125" fallback={<Grain c={p.c} size={48} />} /></div>
              <span className="transition group-hover:text-gold-light">{p.name}<br /><span className="text-xs text-cream/50">Length {p.len}</span></span>
            </button>
          ))}
        </div>
        <div>
          <h4 className="mb-5 font-display text-lg text-gold-light">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.map(([k, l]) => <li key={k}><button onClick={() => go(k)} className="text-cream/70 transition hover:translate-x-1 hover:text-gold-light">› {l}</button></li>)}
          </ul>
        </div>
        <div className="text-sm leading-7">
          <h4 className="mb-4 font-display text-lg text-gold-light">Contact</h4>
          <Location className="text-cream/70" /><p className="mt-2">CEO: <span className="text-gold-light">{INFO.ceo}</span></p>
          <a href={`tel:${INFO.tel}`} className="block hover:text-gold-light">{INFO.phone}</a>
          <a href={`mailto:${INFO.email}`} className="block hover:text-gold-light">{INFO.email}</a>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">© 2026 {COMPANY}. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
