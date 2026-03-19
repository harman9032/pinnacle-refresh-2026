import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-port.jpg";

const counters = [
  { value: "2+", label: "Years" },
  { value: "20+", label: "Partners" },
  { value: "FCL", label: "Logistics" },
  { value: "3+", label: "Languages" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full bleed background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Shipping containers at port" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>

      {/* Content — centered layout */}
      <div className="container relative z-10 min-h-screen flex flex-col items-center justify-center text-center pt-28 pb-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.25em] uppercase mb-8"
        >
          B2B Wholesale Distribution
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-4xl mb-6"
        >
          We Distribute{" "}
          <span className="text-gradient-gold">Quality</span> Food
          <br className="hidden md:block" /> Commodities Across the USA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Containerized dry food commodities, full container load logistics, and seamless nationwide wholesale distribution from South Florida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-gold text-background font-semibold rounded-full hover:opacity-90 transition-opacity shadow-gold text-sm tracking-wide"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-border/60 text-foreground font-semibold rounded-full hover:bg-secondary/50 transition-colors text-sm tracking-wide"
          >
            Explore Products
          </Link>
        </motion.div>

        {/* Counters strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-8 md:gap-16"
        >
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary">{c.value}</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">{c.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
