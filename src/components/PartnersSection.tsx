import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "Trujillo & Sons, Inc.", type: "Wholesale Distribution" },
  { name: "Sam's Club Wholesale", type: "Retail Wholesale" },
  { name: "F. Garcia Wholesale & Export", type: "Wholesale & Export" },
  { name: "Family & Son, Inc.", type: "Wholesale Distribution" },
  { name: "Marché TiTony, Inc.", type: "Retail & Wholesale" },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-24 bg-secondary/20" ref={ref}>
      <div className="container">
        <div className="glass-card rounded-3xl p-10 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — partner list as numbered items */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Our Partners</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-10">
                Sourcing From America's{" "}
                <span className="text-gradient-gold">Top Distributors</span>
              </h2>

              <div className="space-y-0 divide-y divide-border/30">
                {partners.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-5 py-4 group"
                  >
                    <span className="font-serif text-2xl font-bold text-primary/30 group-hover:text-primary transition-colors w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-base font-semibold">{p.name}</h3>
                      <p className="text-xs text-muted-foreground">{p.type}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-6 italic">And many more... References available upon request</p>
            </motion.div>

            {/* Right — big CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <div className="w-24 h-24 rounded-3xl bg-gradient-gold flex items-center justify-center mx-auto lg:mx-0 mb-8">
                <span className="font-serif text-3xl font-bold text-background">EP</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Partnerships Built on Trust
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are proud to serve some of the most respected wholesalers and retail organizations in the United States. Our partnerships are built on trust, reliability, and mutual growth.
              </p>
              <Link
                to="/clients"
                className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all"
              >
                See All Partners <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
