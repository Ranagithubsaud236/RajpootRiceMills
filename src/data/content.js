// Site content and image paths. Photos live in /public/images.

export const COMPANY = "Rajpoot Rice Mills Pvt Limited";

export const INFO = {
  address: "Shah Jamal Road / Kassoke Road area, Tehsil & District Hafizabad, Punjab, Pakistan",
  short: "Hafizabad, Punjab, Pakistan",
  email: "info@rajpootrice.com.pk",
  phone: "0305 8872117",
  tel: "+923058872117",
  ceo: "Haji Abdul Sittar",
  hours: "Open 9:00 AM – 10:00 PM, Mon–Sat",
  map: "Kassoke Road, Hafizabad, Punjab, Pakistan",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Shah Jamal Road, Kassoke Road, Hafizabad, Punjab, Pakistan"),
};

export const NAV = [["home","Home"],["products","Products"],["relationship","Relationship"],["processing","Processing"],["recipe","Recipe"],["contact","Contact us"]];

const PACK = "2-5-10-25-50 kg in PP Jute or Cotton bags | 0-2% Broken | Sortexed | Double Polished / Silky Polished";

export const PRODUCTS = [
  { name: "1121 Parboiled/Sella Rice", img: "/images/sella.jpg", c: ["#f3deA0","#e0b865"], len: "8.45 mm", wid: "1.59 mm", thick: "1.42 mm", aroma: "Not present",
    text: "Parboiled Rice is the rice variety that undergoes a hydrothermal steaming process to partially boil the unhusked rice. This process enhances the strength of rice grains for better cooking results.", pack: PACK },
  { name: "Super Basmati White/Parboiled Rice", img: "/images/super-basmati.jpg", c: ["#fbfaf2","#e6e2cc"], len: "7.15 mm", wid: "1.80 mm", thick: "1.65 mm", aroma: "Present",
    text: "Super Kernel Basmati is a variety of long grain rice grown in India and Pakistan, notable for its fragrance and delicate, nuanced flavour. Its name means “the fragrant one”. India and Pakistan are the largest cultivators and exporters of this rice, and it is primarily grown through paddy field farming in the Punjab region. The grains of basmati rice are longer than most other types of rice, and cooked grains are characteristically free-flowing rather than sticky.", pack: PACK },
  { name: "Basmati Brown Rice", img: "/images/brown.jpg", c: ["#d9b46a","#a97a33"], len: "7.4 mm", wid: "1.80 mm", thick: "1.60 mm", aroma: "Present",
    text: "When only the outermost layer of a grain of rice (the husk) is removed, brown rice is produced. To produce white rice, the next layers underneath the husk (the bran layer and the germ) are removed, leaving mostly the starchy endosperm. Super Basmati Brown Rice Grain ADL 7.4 mm is one of the best varieties of Basmati Rice and is favoured by people around the globe.",
    pack: "1-50 kg in PP or Cotton bags",
    spec: "Color sortexed, Avg. grain length 7.4 mm, Moisture content 12% Max, Damaged, shriveled & yellow 0.5% Max, Broken grains 2% Max, Chalky grains 3% Max, Foreign grains 2.0% Max, Foreign matter 0.1% Max, Paddy grains 0.2% Max, Under milled & red striped 2% Max" },
  { name: "Parboiled/White Long Grain PK 386 Rice", img: "/images/pk386.jpg", c: ["#f6f1e1","#ddd3b0"], len: "6.55 mm", wid: "1.62 mm", thick: "1.61 mm", aroma: "Not present",
    text: "Having a longer grain, this rice variety is appropriate for the local lovers who enjoy slightly dry types of cuisines. Nevertheless, due to its superiority over other long grain varieties, PK 386 is one of the most demanded non-basmati varieties.", pack: PACK },
  { name: "Long Grain IRRI-9 Parboiled/White Rice", img: "/images/irri9.jpg", c: ["#ffffff","#e8e6dc"], len: "5.7 mm", wid: "1.85 mm", thick: "1.44 mm", aroma: "Not present",
    text: "Many people prefer the mushy touch this rice has to offer. Most of Pakistan's exported IRRI-9 goes to the Middle East.", pack: PACK },
  { name: "Parboiled/White IRRI-6/KS-282 Long Grain Rice", img: "/images/irri6.jpg", c: ["#f1e7a8","#d8c46a"], len: "6.65 mm", wid: "2.20 mm", thick: "1.90 mm", aroma: "Not present",
    text: "This long grain variety is inferior to other grades of non-basmati and is generally supplied in bulk shipments to African regions.", pack: PACK },
];

export const MAIZE = { name: "Maize Products", img: "/images/maize.jpg",
  text: "Rajpoot Rice & Processing Mills purchases maize directly from growers and, after cleaning and grading, exports it to all countries." };

export const STEPS = [
  ["Paddy selection", "We buy bulk stock of different types of paddy from the open market under strict quality checks. An inspection team tests moisture, admixture and other parameters before purchase."],
  ["Auto drying", "Paddy is first dried in the pre-dryer, then moved to the column dryer for further moisture reduction using clean steam heat exchangers."],
  ["Sun drying", "Selected Basmati paddy is spread over large floors and dried slowly in the sun to reach the right moisture and avoid broken grains."],
  ["Husking plant", "Paddy is brought into our husking plant, where it is de-husked and graded. The outer husk is removed, leaving the germ and bran intact."],
  ["Parboiled rice", "Our modern plant parboils paddy under steam to hold quality. Parboiled rice is rich in nutrients and keeps its shape when cooked."],
  ["Warehousing", "Basmati gains taste and aroma when aged for eight to nine months. We keep part of the paddy to season before it reaches customers."],
  ["Grading", "Broken and shriveled rice is separated from head rice with high accuracy so the finished grain length is uniform."],
  ["Cleaning", "Milling starts with cleaning. Foreign materials like stones, mud balls, threads and paddy are removed in several stages."],
  ["Whitening", "Brown rice is gently milled in whitening machines over several passes, depending on the whiteness required."],
  ["Quality assurance", "Quality is our main aim. Our modern testing laboratory checks every lot before it ships."],
  ["Color sorting", "The final step in processing. Optical sorters remove discolored grains so every bag is uniform."],
  ["Packing", "Electronic bagging scales weigh every bag to the ordered quantity. Packing options: cardboard, paper sack, polypropylene, cotton and jute."],
];

export const SHIPMENT = ["Shipment", "We deal with major shipping lines to ensure safe transportation of cargo to the destination within the agreed time."];

export const RECIPES = {
  "Basmati": ["Rinse 1 cup of rice 3 times, then soak 30 minutes.", "Boil 6 cups of salted water, add rice and cook 6–7 minutes.", "Drain, cover and steam on low heat for 8 minutes. Fluff with a fork."],
  "Sella": ["Rinse the rice 2 times and soak for 20 minutes.", "Boil with 1.5 cups water per cup of rice, covered.", "Cook on low for 15 minutes. The grains stay separate and firm."],
  "Brown": ["Soak the rice for 1 hour to shorten cooking time.", "Simmer with 2 cups water per cup of rice, covered.", "Cook 30–35 minutes, then rest 10 minutes before serving."],
};

export const RECIPE_IMG = { "Basmati": "/images/rice-bowl.png", "Sella": "/images/recipe-sella.jpg", "Brown": "/images/recipe-brown.jpg" };

export const RECIPE_META = {
  "Basmati": [["Soak", "30 min"], ["Water", "1 : 6"], ["Cook", "15 min"]],
  "Sella": [["Soak", "20 min"], ["Water", "1 : 1.5"], ["Cook", "15 min"]],
  "Brown": [["Soak", "60 min"], ["Water", "1 : 2"], ["Cook", "35 min"]],
};

export const TESTIMONIALS = [
  ["Rajpoot Rice Mills has been a reliable Basmati provider from Punjab, Pakistan. They have fulfilled what they committed.", "Rana Haroon", "Importer"],
  ["In food retail, consistency of quality plays a major role. Rajpoot Rice Mills has always proven its worth in this difficult aspect.", "Syed Ghiasuddin Vaseem", "CEO, Majata Group"],
  ["Shipments arrive on schedule and the grain length matches the sample every time. A dependable long-term partner.", "Ahmed Raza", "Wholesale buyer"],
];

export const SLIDES = [
  { t: "Rajpoot Rice & Processing Mills", s: "Hafizabad, Punjab, Pakistan", img: "/images/slide-mill2.png", v: "mill", pos: "50% 60%" },
  { t: "Modern processing plant", s: "Drying, husking and milling in one place.", img: "/images/slide-2b.png", v: "mill", fit: "contain", box: "62%", pos: "50% 42%" },
  { t: "Grown in Punjab, Pakistan", s: "From golden paddy to perfect white grain.", img: "/images/slide-3.png?v=2", v: "field", fit: "contain" },
  { t: "Premium quality Super Basmati rice", s: "Long grain, aged and carefully sorted.", img: "/images/slide-4.png", v: "field" },
  { t: "Modern milling machinery", s: "Husking, whitening and sorting under one roof.", img: "/images/slide-5-hd.jpg", v: "machines" },
];

export const BANNERS = [
  { a: "Super", t: "Basmati Rice", color: "#1c6b34", band: "#1f6b3a", label: "SUPER BASMATI", photo: "/images/super-basmati.jpg" },
  { a: "Long-Grain", t: "Basmati Rice", color: "#1f5f9c", band: "#7a1f2b", label: "LONG GRAIN", photo: "/images/pk386.jpg" },
  { a: "1121 Par-Boiled", t: "Basmati Rice", color: "#ffffff", band: "#8a5a1f", label: "1121 SELLA", photo: "/images/sella.jpg" },
];

export const IMG = {
  products: PRODUCTS.map((p) => p.img),
  farmers: "/images/farmers-original.png", process: "/images/process-bg.jpg", bowl: "/images/rice-bowl.png",
  cert: ["/images/cert-haccp.png","/images/cert-qa-ukas.png","/images/cert-registrar.png","/images/cert-1.png","/images/cert-2.png"],
};
