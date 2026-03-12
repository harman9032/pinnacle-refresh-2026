import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Package, Ship, Search, BarChart3, ShoppingCart, FileCheck, Handshake, ArrowRight } from "lucide-react";

const services = [
  { icon: Package, title: "Procurement & Distribution", desc: "End-to-end sourcing of bulk dry food commodities from manufacturer to warehouse." },
  { icon: Ship, title: "FCL Logistics", desc: "Full Container Load shipping coordination across South Florida and nationwide." },
  { icon: Search, title: "Strategic Sourcing", desc: "Supplier negotiation and strategic sourcing for the best products at competitive prices." },
  { icon: BarChart3, title: "Market Analysis", desc: "Data-driven demand forecasting to keep your distribution ahead." },
  { icon: ShoppingCart, title: "Custom Sourcing", desc: "Supermarket goods matched precisely to your client specifications." },
  { icon: FileCheck, title: "Compliance Support", desc: "USA regulatory compliance and trade documentation for seamless operations." },
  { icon: Handshake, title: "Partnership Development", desc: "Long-term partnerships with retail chains and wholesalers built on trust." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 bg-secondary/20" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">What We Do</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
              Comprehensive <span className="text-gradient-gold">Distribution</span> Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From procurement to delivery, we handle every step of USA wholesale distribution so you can focus on growing your business.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-background font-semibold text-sm rounded-full hover:opacity-90 transition-opacity shadow-gold"
            >
              All Services <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Right scrolling list */}
          <div className="lg:col-span-2 space-y-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.06 * i }}
                className="group flex items-start gap-5 p-6 rounded-2xl glass-card hover:border-primary/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
