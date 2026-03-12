import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Link2, Truck, DollarSign, Languages, MapPin } from "lucide-react";

const reasons = [
  { icon: Award, title: "14+ Years of Proven Expertise", desc: "Since 2008, deep expertise in USA wholesale distribution and dry food commodity markets." },
  { icon: Link2, title: "Direct Manufacturer Relationships", desc: "Direct partnerships with manufacturers, cutting out middlemen and ensuring product authenticity." },
  { icon: Truck, title: "Reliable FCL Logistics", desc: "Full Container Load shipping with reliable, on-time delivery across the USA." },
  { icon: DollarSign, title: "Competitive Pricing & Quality", desc: "Volume purchasing power for consistently competitive pricing without sacrificing quality." },
  { icon: Languages, title: "Multilingual Team", desc: "Fluent in English, French, Haitian Creole, and Spanish to serve diverse markets." },
  { icon: MapPin, title: "Nationwide USA Reach", desc: "From South Florida to coast to coast, our distribution network spans the entire USA." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary/20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Why Choose Us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Why <span className="text-gradient-gold">Emri Pinnacle</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <r.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
