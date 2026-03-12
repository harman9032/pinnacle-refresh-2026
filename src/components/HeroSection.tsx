import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-port.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Shipping containers at port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              B2B Wholesale Distribution
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8"
          >
            Premium Wholesale{" "}
            <span className="text-gradient-gold italic">Dry Food</span>{" "}
            Distribution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Containerized commodities • Full container load logistics • 
            Nationwide USA Wholesale Distribution
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-background font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-gold"
            >
              Request a Quote <ArrowRight size={18} />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors"
            >
              View Our Products
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6"
          >
            <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
              Partnered With
            </span>
            <div className="flex gap-3 flex-wrap">
              {["Sam's Club", "Trujillo & Sons", "F. Garcia Wholesale"].map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 text-xs font-medium text-muted-foreground border border-border/50 rounded-full bg-secondary/30"
                >
                  {name}
                </span>
              ))}
              <span className="px-3 py-1.5 text-xs text-primary italic">and more</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
