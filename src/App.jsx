import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Processing from "./pages/Processing";
import Relationship from "./pages/Relationship";
import Recipe from "./pages/Recipe";
import Contact from "./pages/Contact";
import { NAV } from "./data/content";
import "./styles/animations.css";

function App() {
  const [page, setPage] = useState(() => (NAV.some(([k]) => "#" + k === window.location.hash) ? window.location.hash.slice(1) : "home"));
  const go = (p) => { setPage(p); window.history.replaceState(null, "", "#" + p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const View = { home: Home, products: Products, relationship: Relationship, processing: Processing, recipe: Recipe, contact: Contact }[page];
  return (
    <div className="min-h-screen bg-white font-body text-stone-700">
      <Header page={page} go={go} />
      <main key={page}><View go={go} /></main>
      <Footer go={go} />
    </div>
  );
}

export default App;
