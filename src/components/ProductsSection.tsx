import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  { brand: "Emri Pinnacle", name: "Black Beans", desc: "50 LBS / 22.68 KGS bags, superior quality", img: "https://emripinnacle.com/products/Black_beans.png" },
  { brand: "Emri Pinnacle", name: "Pinto Beans", desc: "50 LBS / 22.68 KGS bags, superior quality", img: "https://emripinnacle.com/products/PintoBeans.png" },
  { brand: "Alberto", name: "Pinto Beans", desc: "A-1 Premium Quality, 50 Lbs / 22.68 Kg", img: "https://emripinnacle.com/products/Alberto_Pinto_Beans_sack.png" },
  { brand: "Alberto", name: "Michigan Black Beans", desc: "A-1 Premium Quality Frijoles Negros", img: "https://emripinnacle.com/products/Alberto_Michigan_Black_Beans_sack_new.png" },
  { brand: "Americas", name: "Black Beans 100lb", desc: "Premium Black Beans for high-volume distribution", img: "https://emripinnacle.com/products/Americas_Black_Beans_100lb.png" },
  { brand: "Don Lucas", name: "Black Beans", desc: "Premium Triple-Cleaned, 50 Lbs", img: "https://emripinnacle.com/products/Don_Lucas_black_beans.png" },
  { brand: "Alberto", name: "Bulgur Cracked Wheat", desc: "A-1 Premium Quality, 50 Lbs", img: "https://emripinnacle.com/products/Alberto_Bulgur_sack.png" },
  { brand: "Family", name: "Long Grain Rice 50lb", desc: "Extra Fancy Long Grain Rice", img: "https://emripinnacle.com/products/Family_Rice_Extra_Fancy_Long_Grain_50lb.jpeg" },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-32" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Products & Commodities</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Quality Bulk <span className="text-gradient-gold">Commodities</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Containerized dry food commodities and supermarket goods, sourced directly from trusted manufacturers across the USA.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name + p.brand}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i }}
              className="group rounded-xl overflow-hidden glass-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-square bg-secondary/30 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.brand} ${p.name}`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-primary font-semibold tracking-wide uppercase">{p.brand}</span>
                <h3 className="font-serif text-base font-semibold mt-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Bulk container quantities only — minimum full container load (FCL)
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsSection;
