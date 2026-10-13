import { useState, useEffect, useRef } from "react";

const HIDDEN = { up: "translate-y-10", left: "-translate-x-12", right: "translate-x-12", zoom: "scale-90" };

function Reveal({ children, className = "", tag: T = "div", from = "up", delay = 0 }) {
  const [on, setOn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <T ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`${className} transition-all duration-1000 ease-out ${on ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${HIDDEN[from]}`}`}>{children}</T>;
}

export default Reveal;
