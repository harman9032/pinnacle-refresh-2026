import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Ship, Search, BarChart3, ShoppingCart, FileCheck, Handshake } from "lucide-react";

const services = [
  { icon: Package, title: "End-to-End Procurement", desc: "Complete sourcing and distribution of bulk dry food commodities from manufacturer to your warehouse." },
  { icon: Ship, title: "FCL Logistics & Shipping", desc: "Full Container Load logistics and shipping coordination across South Florida and beyond." },
  { icon: Search, title: "Strategic Sourcing", desc: "Supplier contract negotiation and strategic sourcing to secure the best products at competitive prices." },
  { icon: BarChart3, title: "Market Analysis", desc: "Data-driven market analysis and demand forecasting to keep your distribution network ahead." },
  { icon: ShoppingCart, title: "Custom Supermarket Goods", desc: "Tailored supermarket goods sourcing matched precisely to your client specifications." },
  { icon: FileCheck, title: "Regulatory Compliance", desc: "USA regulatory compliance support and trade documentation for seamless operations." },
  { icon: Handshake, title: "Partnership Development", desc: "Long-term partnership development with retail chains and wholesalers built on trust." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-secondary/20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Our Services</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive Distribution <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From procurement to delivery, we handle every step of USA wholesale distribution so you can focus on growing your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="group p-6 rounded-xl glass-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
