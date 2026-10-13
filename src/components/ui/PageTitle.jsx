import Grain from "./Grain";

const DRIFT = [[6, 0, 9], [18, 3, 12], [33, 1.5, 10], [52, 4, 13], [68, .5, 11], [81, 2.5, 9], [93, 5, 12]];

// Full-width banner used at the top of every inner page.
const PageTitle = ({ children, eyebrow = "Rajpoot Rice Mills", sub }) => (
  <section className="relative overflow-hidden bg-forest pb-24 pt-16 text-center text-cream">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,75,.28),transparent_60%)]" />
    {DRIFT.map(([x, d, s]) => (
      <div key={x} className="drift absolute top-0 opacity-25" style={{ left: `${x}%`, animationDelay: `-${d}s`, animationDuration: `${s}s` }}><Grain c={["#e6c97a", "#c9a24b"]} size={34} /></div>
    ))}
    <div className="relative mx-auto max-w-3xl px-5">
      <div className="slide-in text-xs font-semibold uppercase tracking-[.35em] text-gold-light">{eyebrow}</div>
      <h1 className="slide-in d2 mt-3 font-display text-4xl font-medium md:text-6xl">{children}</h1>
      <div className="draw-x mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
      {sub && <p className="slide-in d3 mx-auto mt-5 max-w-xl text-cream/75">{sub}</p>}
    </div>
    <svg className="absolute -bottom-px left-0 h-12 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60 C360 0 1080 0 1440 60Z" fill="#fff" /></svg>
  </section>
);

export default PageTitle;
