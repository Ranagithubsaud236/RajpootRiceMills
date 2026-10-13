import Img from "../components/ui/Img";
import Scene from "../components/ui/Scene";
import Reveal from "../components/ui/Reveal";
import PageTitle from "../components/ui/PageTitle";
import { IMG } from "../data/content";

function Relationship() {
  return (
    <div className="page-in">
      <PageTitle eyebrow="Rooted in Punjab" sub="Good rice starts with good farming. We grow together with our farmers.">Farmer Relation</PageTitle>
      <div className="mx-auto max-w-4xl px-5 pt-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Reveal from="left"><div className="shine aspect-[5/4] overflow-hidden rounded-2xl shadow-xl ring-4 ring-cream"><Img src={IMG.farmers} alt="Farmers planting rice seedlings in a flooded field" className="h-full w-full object-cover transition duration-700 hover:scale-110" fallback={<Scene v="field" />} /></div></Reveal>
          <div className="grid gap-5">
            {[["500+", "Small farmers in our network"], ["40", "Large partner farms"]].map(([a, b], n) => (
              <Reveal key={a} from="right" delay={n * 150} className="rounded-2xl bg-cream p-6 text-center ring-1 ring-gold/20">
                <div className="font-display text-5xl text-forest">{a}</div><div className="mt-1 text-sm text-stone-500">{b}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal><p className="mt-10 leading-relaxed text-stone-600">Making relations with farmers is our main aim. We educate and guide them in modern ways of cultivating, which makes the working environment better so farmers can perform better and faster. Our pride is to engage at least 500 small farmers in our supply network, improving their agricultural practices and enabling them to become more competitive.</p></Reveal>
        <Reveal><p className="mt-4 leading-relaxed text-stone-600">We have partnered with 40 large farmers to provide inputs like land leveling, seeds, fertilizers, pesticides and technical support well in time. After the crop is grown, we provide transportation and labor to bring it from the fields to our mill.</p></Reveal>
      </div>
    </div>
  );
}

export default Relationship;
