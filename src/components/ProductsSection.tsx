import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featured = [
  { brand: "Emri Pinnacle", name: "Black Beans", desc: "50 LBS bags, superior quality", img: "https://emripinnacle.com/products/Black_beans.png" },
  { brand: "Alberto", name: "Pinto Beans", desc: "A-1 Premium Quality, 50 Lbs", img: "https://emripinnacle.com/products/Alberto_Pinto_Beans_sack.png" },
  { brand: "Americas", name: "Black Beans 100lb", desc: "Premium for high-volume distribution", img: "https://emripinnacle.com/products/Americas_Black_Beans_100lb.png" },
  { brand: "Family", name: "Long Grain Rice 50lb", desc: "Extra Fancy Long Grain Rice", img: "https://emripinnacle.com/products/Family_Rice_Extra_Fancy_Long_Grain_50lb.jpeg" },
  { brand: "Alberto", name: "Bulgur Cracked Wheat", desc: "A-1 Premium Quality, 50 Lbs", img: "https://emripinnacle.com/products/Alberto_Bulgur_sack.png" },
  { brand: "Don Lucas", name: "Black Beans", desc: "Premium Triple-Cleaned, 50 Lbs", img: "https://emripinnacle.com/products/Don_Lucas_black_beans.png" },
  { brand: "Pringles", name: "Assorted Flavors", desc: "Multi-pack variety for retail", img: "https://linfinidistributions.com/products/Pringlescombo.jpg" },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-28" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Featured Products</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Quality Bulk <span className="text-gradient-gold">Commodities</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all"
            >
              View All 25 Products <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Marquee-style horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featured.map((p, i) => (
            <motion.div
              key={p.brand + p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="aspect-square bg-secondary/20 flex items-center justify-center p-5 relative">
                <img
                  src={p.img}
                  alt={`${p.brand} ${p.name}`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-[10px] text-primary font-bold tracking-wider uppercase">{p.brand}</span>
                <h3 className="font-serif text-sm font-semibold mt-0.5 leading-tight">{p.name}</h3>
                <p className="text-[11px] text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          Full container load (FCL) quantities only — wholesalers, supermarket chains, and exporters
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsSection;
