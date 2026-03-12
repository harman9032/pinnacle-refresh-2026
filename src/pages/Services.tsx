import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Package, Ship, Search, BarChart3, ShoppingCart, FileCheck, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Bulk Dry Food Commodities Procurement & Distribution",
    desc: "Complete end-to-end sourcing and distribution of bulk dry food commodities including rice, flour, corn, vegetable oil, bulgur, black beans, and pinto beans. We handle everything from manufacturer selection to warehouse delivery.",
    benefits: ["Direct manufacturer relationships", "Quality-assured sourcing process", "Consistent supply guarantees", "Competitive bulk pricing"],
  },
  {
    icon: Ship,
    title: "Full Container Load (FCL) Logistics & Shipping Coordination",
    desc: "Expert coordination of Full Container Load logistics and shipping across South Florida and nationwide. We manage the complete shipping lifecycle from container booking to final delivery.",
    benefits: ["On-time delivery track record", "Nationwide shipping coverage", "Real-time shipment tracking", "Optimized routing and costs"],
  },
  {
    icon: Search,
    title: "Strategic Sourcing & Supplier Contract Negotiation",
    desc: "Leverage our extensive network and 18+ years of industry relationships to secure the best products at competitive prices through strategic sourcing and skilled contract negotiation.",
    benefits: ["Access to nationwide USA supplier network", "Volume-based pricing advantages", "Long-term contract stability", "Risk mitigation strategies"],
  },
  {
    icon: BarChart3,
    title: "Market Analysis & Demand Forecasting",
    desc: "Data-driven market analysis and demand forecasting to help you stay ahead of market trends, optimize inventory levels, and make informed purchasing decisions.",
    benefits: ["Commodity price trend analysis", "Seasonal demand planning", "Inventory optimization insights", "Market opportunity identification"],
  },
  {
    icon: ShoppingCart,
    title: "Custom Supermarket Goods Sourcing",
    desc: "Tailored supermarket goods sourcing matched precisely to your client specifications and market needs. We source exactly what your customers demand, with no minimum product variety requirements.",
    benefits: ["Client-specific product sourcing", "Flexible order configurations", "Quality verification process", "Rapid turnaround times"],
  },
  {
    icon: FileCheck,
    title: "USA Regulatory Compliance & Trade Documentation",
    desc: "Comprehensive USA regulatory compliance support and trade documentation ensuring seamless domestic operations. We navigate regulatory requirements so you can focus on your business.",
    benefits: ["Regulatory compliance management", "Documentation preparation", "Customs clearance support", "Trade barrier navigation"],
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership & Account Management",
    desc: "Dedicated account management and long-term partnership development with retail chains and wholesalers. We invest in relationships that grow stronger over time through reliability and trust.",
    benefits: ["Dedicated account representative", "Priority order processing", "Customized service agreements", "Ongoing supply optimization"],
  },
];

const Services = () => {
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-50px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        label="Our Services"
        title="End-to-End Wholesale Distribution Solutions"
        description="From procurement to delivery, we handle every step of USA wholesale distribution so you can focus on growing your business."
      />

      {/* Services — Alternating full-width cards */}
      <section className="py-24" ref={listRef}>
        <div className="container space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i }}
              className="glass-card rounded-2xl p-8 md:p-10 grid md:grid-cols-5 gap-8 items-start hover:border-primary/30 transition-all"
            >
              <div className="md:col-span-3 flex gap-5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <div className="md:col-span-2 md:border-l md:border-border/50 md:pl-8">
                <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Key Benefits</span>
                <ul className="space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/20" ref={ctaRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Streamline Your Distribution?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Contact us today to discuss how our comprehensive distribution solutions can benefit your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-background font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-gold"
            >
              Get Started <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
