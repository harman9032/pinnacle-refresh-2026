import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28" ref={ref}>
      <div className="container">
        {/* Full-width horizontal card with image on right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Text side */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">About Us</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
                Trusted Leader in{" "}
                <span className="text-gradient-gold">Wholesale Distribution</span>{" "}
                Since 2024
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by Olivier Richardson in South Florida, Emri Pinnacle has become a trusted leader in USA wholesale distribution of dry food commodities and supermarket goods.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 14 years of expertise in wholesale distribution operations, strategic sourcing, and domestic trade — fluent in English, French, Haitian Creole, and Spanish.
              </p>

              <blockquote className="border-l-2 border-primary pl-5 mb-8">
                <p className="text-sm italic text-foreground/80 leading-relaxed">
                  "Connecting manufacturers, wholesalers, and retailers with consistent, high-quality bulk products and seamless logistics."
                </p>
                <footer className="text-primary text-xs font-semibold mt-2">— Our Mission</footer>
              </blockquote>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={14} />
              </Link>
            </div>

            {/* Image side */}
            <div className="relative min-h-[400px] lg:min-h-0">
              <img
                src={warehouseImage}
                alt="Warehouse operations"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Floating stats on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-4 gap-3">
                {[
                  { val: "2024", lbl: "Founded" },
                  { val: "2+", lbl: "Years" },
                  { val: "50+", lbl: "Partners" },
                  { val: "FCL", lbl: "Logistics" },
                ].map((s) => (
                  <div key={s.lbl} className="text-center p-3 rounded-lg bg-background/60 backdrop-blur-md">
                    <div className="font-serif text-lg font-bold text-primary">{s.val}</div>
                    <div className="text-[10px] text-foreground/70 tracking-wide uppercase">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
