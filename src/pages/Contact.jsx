import { useState } from "react";
import Grain from "../components/ui/Grain";
import Reveal from "../components/ui/Reveal";
import PageTitle from "../components/ui/PageTitle";
import { INFO } from "../data/content";

const ICON = {
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  mail: "M3 6h18v12H3zM3 6l9 7 9-7",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
};
const Icon = ({ d }) => <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>;

const TOPICS = ["Basmati", "Non-Basmati", "Maize", "Cargo report", "Other"];

function Field({ label, value, onChange, type = "text", area }) {
  const T = area ? "textarea" : "input";
  return (
    <label className="group relative block">
      <T type={type} rows={area ? 4 : undefined} value={value} onChange={(e) => onChange(e.target.value)} placeholder=" "
        className="peer w-full resize-none border-b-2 border-stone-200 bg-transparent px-1 pb-2 pt-6 text-stone-800 outline-none transition-colors focus:border-transparent" />
      <span className="pointer-events-none absolute left-1 top-6 text-stone-400 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">{label}</span>
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-gold to-forest transition-transform duration-500 peer-focus:scale-x-100" />
    </label>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "" });
  const [topic, setTopic] = useState(TOPICS[0]);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(0);
  const set = (k) => (v) => setForm({ ...form, [k]: v });
  const submit = () => (form.name.trim() && /\S+@\S+\.\S+/.test(form.email) ? setSent(true) : setErr(err + 1));
  const info = [["pin", "Location / Address", INFO.address, INFO.mapUrl], ["user", "CEO", INFO.ceo], ["phone", "Phone", INFO.phone, `tel:${INFO.tel}`], ["mail", "Email", INFO.email, `mailto:${INFO.email}`], ["clock", "Hours", INFO.hours]];

  return (
    <div className="page-in">
      <PageTitle eyebrow="Let's talk rice" sub="Samples, pricing, private label or bulk export. Our team replies within one working day.">Contact Us</PageTitle>

      <Reveal from="zoom" className="relative z-10 mx-auto -mt-14 max-w-6xl px-5">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-2xl shadow-forest/15 ring-1 ring-stone-100 md:grid-cols-5">
          <aside className="relative overflow-hidden bg-gradient-to-br from-forest to-forest-dark p-8 text-cream md:col-span-2 md:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10" />
            <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full border border-gold/20" />
            <div className="float absolute bottom-8 right-8 opacity-30"><Grain c={["#e6c97a", "#c9a24b"]} size={90} /></div>
            <h2 className="relative font-display text-3xl">Get in touch</h2>
            <p className="relative mt-2 text-sm text-cream/70">Visit us at our mill in Hafizabad. We are always happy to show you our grain.</p>
            <ul className="relative mt-8 space-y-6">
              {info.map(([i, a, b, href], n) => (
                <Reveal key={a} from="left" delay={200 + n * 100} tag="li">
                  <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`group flex gap-4 ${href ? "" : "pointer-events-none"}`}>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream/10 text-gold-light ring-1 ring-gold/30 transition duration-300 group-hover:rotate-6 group-hover:bg-gold group-hover:text-forest"><Icon d={ICON[i]} /></span>
                    <span><span className="block text-[11px] font-semibold uppercase tracking-widest text-gold">{a}</span><span className="text-sm text-cream/90 transition group-hover:text-white">{b}</span></span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </aside>

          <div className="p-8 md:col-span-3 md:p-12">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <svg viewBox="0 0 52 52" className="pop h-24 w-24" aria-hidden="true"><circle cx="26" cy="26" r="24" fill="#0f3d2e" /><path className="check" d="M15 27l7 7 15-16" fill="none" stroke="#e6c97a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <h3 className="slide-in d2 mt-6 font-display text-3xl text-forest">Thank you, {form.name.split(" ")[0]}!</h3>
                <p className="slide-in d3 mt-2 text-stone-500">Your {topic.toLowerCase()} enquiry is with our team. We will reply to {form.email} within one working day.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", msg: "" }); }} className="slide-in d4 mt-8 text-sm font-semibold text-gold hover:text-forest">Send another message</button>
              </div>
            ) : (
              <div key={err} className={err ? "shake" : ""}>
                <h2 className="font-display text-3xl text-forest">Send us a message</h2>
                <p className="mt-1 text-sm text-stone-500">What are you interested in?</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {TOPICS.map((t) => (
                    <button key={t} onClick={() => setTopic(t)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition duration-300 ${topic === t ? "bg-forest text-gold-light shadow-md" : "bg-cream text-stone-600 ring-1 ring-stone-200 hover:ring-gold"}`}>{t}</button>
                  ))}
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <Field label="Your name *" value={form.name} onChange={set("name")} />
                  <Field label="Email address *" type="email" value={form.email} onChange={set("email")} />
                  <div className="md:col-span-2"><Field label="Phone (optional)" type="tel" value={form.phone} onChange={set("phone")} /></div>
                  <div className="md:col-span-2"><Field label="How can we help?" area value={form.msg} onChange={set("msg")} /></div>
                </div>
                {err > 0 && <p className="mt-4 text-sm text-red-600">Please enter your name and a valid email.</p>}
                <button onClick={submit} className="group mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full bg-forest py-3.5 pl-7 pr-3 font-semibold text-cream shadow-lg shadow-forest/25 transition hover:-translate-y-0.5 hover:bg-forest-light">
                  Send message
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-forest transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-30deg]">➜</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-6xl px-5">
        <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-stone-100">
          <a href={INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 bg-forest px-6 py-4 text-cream transition hover:bg-forest-light">
            <span className="flex items-center gap-3"><span className="relative grid h-10 w-10 place-items-center rounded-full bg-gold text-forest"><span className="ping absolute inset-0 rounded-full bg-gold/50" /><Icon d={ICON.pin} /></span><span className="text-sm">{INFO.address}</span></span>
            <span className="shrink-0 text-sm font-semibold text-gold-light transition group-hover:translate-x-1">Open in Google Maps →</span>
          </a>
          <iframe title="Mill location" className="h-80 w-full grayscale-[40%] transition duration-700 hover:grayscale-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(INFO.map)}&z=13&output=embed`} />
        </div>
      </Reveal>
    </div>
  );
}

export default Contact;
