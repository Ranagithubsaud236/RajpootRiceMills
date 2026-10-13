import Grain from "../components/ui/Grain";
import Img from "../components/ui/Img";
import Reveal from "../components/ui/Reveal";
import PageTitle from "../components/ui/PageTitle";
import { PRODUCTS, MAIZE } from "../data/content";

const Photo = ({ p, tall }) => (
  <div className={`shine group w-44 shrink-0 overflow-hidden rounded-lg border border-dashed border-green-600 bg-white p-px shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 md:w-48 ${tall ? "h-52 md:h-56" : "h-44 md:h-48"}`}>
    <Img src={p.img} alt={p.name} className={`h-full w-full rounded-[7px] transition duration-700 group-hover:scale-110 ${tall ? "object-contain p-2" : "object-cover"}`}
      fallback={<div className="grid h-full w-full place-items-center"><Grain c={p.c || ["#cfe3a8", "#7aa23a"]} size={130} /></div>} />
  </div>
);

const Label = ({ children }) => <h3 className="mt-5 text-[13px] font-bold uppercase text-stone-700">{children}</h3>;

function Row({ n, p, children }) {
  const flip = n % 2 === 1;
  return (
    <section className="border-b border-stone-200 last:border-0">
      <div className={`mx-auto flex max-w-[760px] flex-col gap-8 px-5 py-14 md:items-center md:justify-between md:gap-16 ${flip ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <Reveal from={flip ? "right" : "left"} className="md:max-w-[370px]">
          <h2 className="font-lato text-[30px] font-light leading-tight text-stone-700 md:text-[34px]">{p.name}</h2>
          <p className="mt-2 font-lato text-[13px] leading-relaxed text-stone-500">{p.text}</p>
          {children}
        </Reveal>
        <Reveal from="zoom" delay={200} className="self-center"><Photo p={p} tall={!p.len} /></Reveal>
      </div>
    </section>
  );
}

function Products({ go }) {
  return (
    <div className="page-in">
      <PageTitle eyebrow="What we mill" sub="Basmati and non-Basmati long grain varieties, sortexed and polished to export standard.">Our Products</PageTitle>
      <div className="font-lato">
        {PRODUCTS.map((p, n) => (
          <Row key={p.name} n={n} p={p}>
            <Label>Availability:</Label>
            <p className="text-[13px] leading-relaxed text-stone-500"><b className="font-bold text-stone-600">Packaging:</b> {p.pack}</p>
            <h3 className="mt-5 text-[13px] font-bold text-stone-600">Specifications:</h3>
            <p className="text-[13px] leading-relaxed text-stone-500">{p.spec || `Length: ${p.len} Width: ${p.wid} Thickness: ${p.thick} Aroma: ${p.aroma}`}</p>
          </Row>
        ))}
        <Row n={PRODUCTS.length} p={MAIZE}>
          <h3 className="mt-5 text-[13px] font-bold text-stone-600">Cargo Report :</h3>
          <button onClick={() => go("contact")} className="text-[13px] text-stone-500 underline-offset-2 transition hover:text-green-700 hover:underline">Click Here To Request</button>
        </Row>
      </div>
    </div>
  );
}

export default Products;
