import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ArrowRight, Package } from "lucide-react";

type Category = "All" | "Beans & Legumes" | "Grains & Cereals" | "Cooking Oils" | "Canned Goods" | "Beverages" | "Snacks & Noodles" | "Pet Food";

const categories: { label: Category; count: number }[] = [
  { label: "All", count: 26 },
  { label: "Beans & Legumes", count: 11 },
  { label: "Grains & Cereals", count: 6 },
  { label: "Cooking Oils", count: 3 },
  { label: "Canned Goods", count: 1 },
  { label: "Beverages", count: 2 },
  { label: "Snacks & Noodles", count: 2 },
  { label: "Pet Food", count: 1 },
];

const products = [
  { brand: "Emri Pinnacle", name: "Black Beans", desc: "Our own branded black beans. 50 LBS / 22.68 KGS bags, superior quality, packed for Emri Pinnacle LLC. Miami, Florida.", img: "/lovable-uploads/Black_beans.png", cat: "Beans & Legumes" },
  { brand: "Emri Pinnacle", name: "Pinto Beans", desc: "Our own branded pinto beans. 50 LBS / 22.68 KGS bags, superior quality, packed for Emri Pinnacle LLC. Miami, Florida.", img: "/lovable-uploads/09f67c85-4cd7-489c-bbc9-417d58f383c4.jpg", cat: "Beans & Legumes" },
  { brand: "Alberto", name: "Pinto Beans", desc: "Alberto A-1 Premium Quality Pinto Beans (Frijoles Pintos). 50 Lbs / 22.68 Kg. Distributed by Trujillo & Sons, Miami, FL.", img: "/lovable-uploads/Alberto_Pinto_Beans_sack.png", cat: "Beans & Legumes" },
  { brand: "Alberto", name: "Michigan Black Beans", desc: "Alberto A-1 Premium Quality Michigan Black Beans (Frijoles Negros). 50 Lbs / 22.68 Kg. Product of U.S.A.", img: "/lovable-uploads/Alberto_Michigan_Black_Beans_sack_new.png", cat: "Beans & Legumes" },
  { brand: "Americas", name: "Black Beans 100lb", desc: "Americas Brand Premium Black Beans. 100 Lb bulk sack for high-volume wholesale distribution.", img: "/lovable-uploads/Americas_Black_Beans_100lb.png", cat: "Beans & Legumes" },
  { brand: "Don Lucas", name: "Black Beans", desc: "Don Lucas Premium Triple-Cleaned Black Beans. Net Wt. 50 Lbs / 22.89 Kg. Produce of U.S.A. By Trujillo & Sons Inc., Miami, FL.", img: "/lovable-uploads/Don_Lucas_black_beans.png", cat: "Beans & Legumes" },
  { brand: "Don Lucas", name: "Pinto Beans", desc: "Don Lucas Premium Triple-Cleaned Pinto Beans. Produce of U.S.A. Quality Food Products by Trujillo & Sons Inc.", img: "/lovable-uploads/linfinipintobeans.jpg", cat: "Beans & Legumes" },
  { brand: "F. Garcia", name: "Michigan Black Beans 50lb", desc: "F. Garcia Michigan Black Beans. 50 Lb sack. Premium quality beans for wholesale and supermarket distribution.", img: "/lovable-uploads/Black_beans.png", cat: "Beans & Legumes" },
  { brand: "F. Garcia", name: "Pinto Beans Super Clean 50lb", desc: "F. Garcia Pinto Beans Super Clean. 50 Lb sack. Triple-cleaned premium quality for commercial use.", img: "/lovable-uploads/Alberto_Pinto_Beans_sack.png", cat: "Beans & Legumes" },
  { brand: "Family", name: "Pinto Beans 100lb", desc: "Family Brand Pinto Beans. 100 Lb bulk sack. Ideal for high-volume food service and wholesale buyers.", img: "/lovable-uploads/linfinipintobeans.jpg", cat: "Beans & Legumes" },
  { brand: "Mariposa", name: "Premium Black Beans 50lb", desc: "Mariposa Premium Black Beans. 50 Lb sack. Select quality beans for wholesale distribution.", img: "/lovable-uploads/Mariposa_Premium_Black_Beans_50lb.png", cat: "Beans & Legumes" },
  { brand: "Alberto", name: "Bulgur Cracked Wheat", desc: "Alberto Bulgur Cracked Wheat. 50 Lbs / 22.68 Kg. A-1 Premium Quality Food Products.", img: "/lovable-uploads/Alberto_Bulgur_sack.png", cat: "Grains & Cereals" },
  { brand: "Alberto", name: "Alberto Coarse Cornmeal Bag", desc: "Alberto Coarse Cornmeal in branded packaging. 50 Lbs / 22.68 Kgs. A-1 Premium Quality. Product of USA.", img: "/lovable-uploads/Alberto_Bulgur_sack.png", cat: "Grains & Cereals" },
  { brand: "Alberto", name: "Alberto Super Corn Grits 50lb", desc: "Alberto Super Corn Grits. 50 Lb bag. A-1 Premium Quality. Ideal for food service and retail.", img: "/lovable-uploads/Alberto_Corn_Flakes_with_strawberries.png", cat: "Grains & Cereals" },
  { brand: "Alberto", name: "Corn Flakes", desc: "Alberto Corn Flakes. A-1 Premium Quality. Since 1956. Available in bulk container quantities.", img: "/lovable-uploads/Alberto_Corn_Flakes_with_strawberries.png", cat: "Grains & Cereals" },
  { brand: "Family", name: "Family Bulgur Wheat 50lb", desc: "Family Brand Bulgur Wheat. 50 Lb bag. Premium cracked wheat for wholesale buyers.", img: "/lovable-uploads/Alberto_Bulgur_sack.png", cat: "Grains & Cereals" },
  { brand: "Family", name: "Family Rice Extra Fancy Long Grain 50lb", desc: "Family Brand Extra Fancy Long Grain Rice. 50 Lb bag. Premium quality for supermarket distribution.", img: "/lovable-uploads/Family_Rice_Extra_Fancy_Long_Grain_50lb.jpeg", cat: "Grains & Cereals" },
  { brand: "Alberto", name: "Alberto Cooking Oils", desc: "Alberto Pure Vegetable Oil & Pure Corn Oil (Aceite de Maiz). High-quality cooking oils in commercial volumes.", img: "/lovable-uploads/Alberto_cooking_oils.png", cat: "Cooking Oils" },
  { brand: "Alberto", name: "Alberto Vegetable Oils", desc: "Alberto Pure Vegetable Oil. High-quality cooking oils in commercial volumes.", img: "/lovable-uploads/albertovegeoil.jpg", cat: "Cooking Oils" },
  { brand: "Family", name: "Family Vegetable Canola Corn Oil Bottles", desc: "Family Brand Vegetable, Canola & Corn Oil. Retail-ready bottle packaging for supermarket shelves.", img: "/lovable-uploads/Family_Vegetable_Canola_Corn_Oil_Bottles.png", cat: "Cooking Oils" },
  { brand: "Alberto", name: "Alberto Tomato Paste", desc: "Alberto 100% Natural Tomato Paste. Net Wt. 6 Lb. 15 Oz (3.15 KG). A-1 Premium Quality since 1966.", img: "/lovable-uploads/Albertotomato.jpg", cat: "Canned Goods" },
  { brand: "Pringles", name: "Pringles Assorted Flavors Pack", desc: "Pringles Assorted Flavors. Multi-pack variety for retail and convenience store distribution.", img: "/lovable-uploads/Pringlescombo.jpg", cat: "Snacks & Noodles" },
  { brand: "Gatorade", name: "Gatorade Mixed Flavor Pallet", desc: "Gatorade Mixed Flavor Pallet. Full pallet quantities for high-volume distribution and retail chains.", img: "https://emripinnacle.com/products/Gatorade_Mixed_Flavor_Pallet.jpeg", cat: "Beverages" },
  { brand: "Jumex", name: "Jumex Assorted Fruit Cans Pack", desc: "Jumex Assorted Fruit Nectar. Multi-flavor can pack. Popular across Latin American markets.", img: "/lovable-uploads/Jumex_Assorted_Fruit_Nectar_Cans_Pack.jpeg", cat: "Beverages" },
  { brand: "Nissin", name: "Nissin Top Ramen Chicken & Mixed Flavors", desc: "Nissin Top Ramen Chicken Flavor. Bulk pack for wholesale and retail distribution.", img: "/lovable-uploads/Nissin_Top_Ramen_Chicken_Flavor_Pack.jpeg", cat: "Snacks & Noodles" },
  { brand: "Pedigree", name: "Pedigree Adult Complete Nutrition 55lb", desc: "Pedigree Adult Complete Nutrition Dog Food. 55 Lb bag. Wholesale bulk for pet supply retailers.", img: "/lovable-uploads/Pedigree_Adult_Complete_Nutrition_Dog_Food_55lb.jpeg", cat: "Pet Food" },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const brandRef = useRef(null);
  const brandInView = useInView(brandRef, { once: true, margin: "-80px" });

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.cat === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        label="Our Products"
        title="Premium Bulk Dry Food Commodities"
        description="Containerized dry food commodities and supermarket goods sourced directly from trusted manufacturers across the USA."
      />

      {/* Notice bar */}
      <div className="bg-primary/5 border-y border-primary/10">
        <div className="container py-4 flex items-center justify-center gap-3">
          <Package size={18} className="text-primary" />
          <p className="text-sm text-foreground/80">
            Minimum order: Full Container Load (FCL) — Perfect for wholesalers, supermarket chains, and exporters.
          </p>
        </div>
      </div>

      {/* Filter + Grid */}
      <section className="py-20" ref={gridRef}>
        <div className="container">
          {/* Category filter — pill style */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((c) => (
              <button
                key={c.label}
                onClick={() => setActiveCategory(c.label)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === c.label
                    ? "bg-gradient-gold text-background shadow-gold"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {c.label} <span className="opacity-60">({c.count})</span>
              </button>
            ))}
          </div>

          {/* Product grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.brand + p.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: Math.min(0.03 * i, 0.5) }}
                className="group rounded-xl overflow-hidden glass-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="aspect-square bg-secondary/20 flex items-center justify-center p-4 relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.brand} ${p.name}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 text-[10px] px-2 py-1 rounded-md bg-background/80 backdrop-blur text-primary font-semibold uppercase tracking-wider">
                    {p.brand}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm font-semibold leading-tight">{p.name}</h3>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Showing {filtered.length} of 26 products — container quantities only.
          </p>
        </div>
      </section>

      {/* Own Brand Banner */}
      <section className="py-24 bg-secondary/20" ref={brandRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={brandInView ? { opacity: 1, y: 0 } : {}}
            className="glass-card rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl font-bold text-background">EP</span>
            </div>
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Our Own Brand</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4">
              Emri Pinnacle Brand — <span className="text-gradient-gold">Coming Soon</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              We are launching our own private label line of premium dry food commodities. Emri Pinnacle Brand products will be available exclusively through our wholesale distribution network across the USA. Stay tuned for the full product lineup.
            </p>
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Launching Soon
            </span>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Request a Quote for Current Pricing & Availability
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Contact us with your product requirements, quantities, and delivery specifications. We will provide competitive pricing and availability within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-background font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-gold"
          >
            Request a Quote <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
