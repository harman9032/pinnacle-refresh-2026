import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Link2, Truck, DollarSign, Languages, MapPin } from "lucide-react";

const reasons = [
  { icon: Award, title: "Proven Expertise", desc: "Deep expertise in USA wholesale distribution since 2024." },
  { icon: Link2, title: "Direct Relationships", desc: "Manufacturer partnerships cutting out middlemen." },
  { icon: Truck, title: "Reliable FCL", desc: "On-time full container load delivery across the USA." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Volume purchasing power without sacrificing quality." },
  { icon: Languages, title: "Multilingual Team", desc: "English, French, Haitian Creole, and Spanish." },
  { icon: MapPin, title: "Nationwide Reach", desc: "Coast to coast distribution from South Florida." },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">Why Us</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Why <span className="text-gradient-gold">Emri Pinnacle</span>
          </h2>
        </motion.div>

        {/* 2-row, 3-col bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.08 * i }}
              className="group p-8 rounded-2xl glass-card hover:border-primary/30 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-base font-semibold mb-2">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
