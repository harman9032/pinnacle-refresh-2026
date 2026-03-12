import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import warehouseImage from "@/assets/warehouse.jpg";

const stats = [
  { value: "2008", label: "Founded" },
  { value: "18+", label: "Years of Expertise" },
  { value: "3+", label: "Languages Spoken" },
  { value: "50+", label: "Partner Companies" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={warehouseImage}
                alt="Warehouse operations"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-xl">
              <p className="font-serif text-sm italic text-muted-foreground leading-relaxed max-w-[240px]">
                "Connecting manufacturers, wholesalers, and retailers with consistent, high-quality bulk products."
              </p>
              <p className="text-primary text-xs mt-2 font-semibold tracking-wide">— Our Mission</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              A Trusted Leader in{" "}
              <span className="text-gradient-gold">USA Wholesale</span> Distribution
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in March 2008 by Olivier Richardson in South Florida, Emri Pinnacle has become a trusted leader in USA wholesale distribution of dry food commodities and supermarket goods.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Owner & Managing Director Olivier Richardson brings over 14 years of expertise in wholesale distribution operations, strategic sourcing, and domestic trade. Fluent in English, French, and Haitian Creole with working proficiency in Spanish.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                >
                  <div className="font-serif text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
