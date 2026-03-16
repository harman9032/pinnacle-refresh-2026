import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Building2, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";

const partners = [
  { name: "Trujillo & Sons, Inc.", type: "Wholesale Distribution" },
  { name: "Sam's Club Wholesale", type: "Retail Wholesale" },
  { name: "F. Garcia Wholesale & Export, Inc.", type: "Wholesale & Export" },
  { name: "Family & Son, Inc.", type: "Wholesale Distribution" },
  { name: "Marché TiTony, Inc.", type: "Retail & Wholesale" },
];

const benefits = [
  { icon: ShieldCheck, title: "Consistent Quality", desc: "Every product we deliver meets rigorous quality standards. Our partners count on us for consistency in every shipment." },
  { icon: TrendingUp, title: "Dependable Supply", desc: "We maintain strong manufacturer relationships to ensure uninterrupted supply, even during market fluctuations." },
  { icon: Building2, title: "Market Expertise", desc: "Our deep understanding of USA markets helps our partners make informed purchasing decisions." },
];

const Clients = () => {
  const partnersRef = useRef(null);
  const partnersInView = useInView(partnersRef, { once: true, margin: "-80px" });
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        label="Clients & Partners"
        title="Trusted by Industry Leaders Nationwide"
        description="We are proud to serve some of the most respected wholesalers and retail organizations in the United States."
      />

      {/* Partners */}
      <section className="py-28" ref={partnersRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Our Partners</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4">Building Lasting Partnerships</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are proud to serve some of the most respected wholesalers and retail organizations in the United States. Our partnerships are built on trust, reliability, and mutual growth.
            </p>
          </motion.div>

          {/* Partner cards — horizontal layout */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-base font-semibold">{p.name}</h3>
                <p className="text-xs text-primary mt-1 font-medium">{p.type}</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-xl p-6 text-center flex flex-col items-center justify-center border-dashed"
            >
              <p className="text-primary italic text-sm font-medium">And many more...</p>
              <p className="text-xs text-muted-foreground mt-2">References available upon request</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24 bg-secondary/20" ref={benefitsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Partner Benefits</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3">What Our Partners Can Expect</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className="glass-card rounded-2xl p-8 text-center hover:border-primary/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <b.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={benefitsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-14"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-background font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-gold"
            >
              Become a Partner <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
