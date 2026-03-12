import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Trujillo & Sons, Inc.",
  "Sam's Club Wholesale",
  "F. Garcia Wholesale & Export",
  "Family & Son, Inc.",
  "Marché TiTony, Inc.",
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Our Trusted Supply Partners</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-4">
            Sourcing Excellence from America's <span className="text-gradient-gold">Top Distributors</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * i }}
              className="px-8 py-4 glass-card rounded-xl text-sm font-medium text-foreground"
            >
              {p}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="px-8 py-4 text-sm text-primary italic flex items-center"
          >
            And many more...
          </motion.div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">References available upon request</p>
      </div>
    </section>
  );
};

export default PartnersSection;
