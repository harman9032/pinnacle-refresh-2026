import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Award, Link2, Truck, ShieldCheck, Languages, MapPin, Star, Heart, Scale } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";
import heroImage from "@/assets/hero-port.jpg";

const stats = [
{ value: "2024", label: "Founded" },
{ value: "2+", label: "Years in Business" },
{ value: "3+", label: "Languages Spoken" },
{ value: "50+", label: "Partner Companies" },
{ value: "FCL", label: "Container Logistics" }];


const values = [
{ icon: Star, title: "Excellence", desc: "We pursue the highest standards in every product we source and every shipment we coordinate." },
{ icon: Heart, title: "Reliability", desc: "Our partners count on us for consistent quality, on-time delivery, and transparent communication." },
{ icon: Scale, title: "Integrity", desc: "We build long-term relationships through honest dealings, fair pricing, and mutual respect." }];


const strengths = [
{ icon: Award, title: "Proven Expertise", desc: "Deep knowledge of USA wholesale distribution and dry food commodity markets since 2024." },
{ icon: Link2, title: "Direct Manufacturer Relationships", desc: "Established partnerships with trusted producers across the USA, ensuring product authenticity and competitive pricing." },
{ icon: Truck, title: "FCL Logistics Excellence", desc: "Full Container Load shipping coordination with reliable, on-time delivery across the USA." },
{ icon: ShieldCheck, title: "Compliance Expertise", desc: "USA regulatory compliance support and trade documentation for seamless domestic operations." },
{ icon: Languages, title: "Multilingual Support", desc: "Our team communicates fluently in English, French, Haitian Creole, and Spanish to serve diverse markets." },
{ icon: MapPin, title: "Nationwide USA Reach", desc: "From South Florida to coast to coast, our distribution network spans the entire USA." }];


const About = () => {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const leaderRef = useRef(null);
  const leaderInView = useInView(leaderRef, { once: true, margin: "-80px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const strengthsRef = useRef(null);
  const strengthsInView = useInView(strengthsRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        label="About Us"
        title="Trusted Wholesale Partner Since 2008"
        description="Emri Pinnacle is a leading USA wholesale distributor of containerized dry food commodities and supermarket goods based in Miramar, Florida." />
      

      {/* Our Story — Horizontal split layout */}
      <section className="py-28" ref={storyRef}>
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              className="lg:col-span-3">
              
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-8">
                Building a Legacy in Wholesale Distribution
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Founded in March 2008 by Olivier Richardson, Emri Pinnacle has grown into a trusted leader in USA wholesale distribution of dry food commodities and supermarket goods.
                </p>
                <p>
                  We specialize in containerized dry food commodities and custom supermarket goods for wholesalers, retail chains, and supermarkets across the U.S. Our deep understanding of USA wholesale distribution, combined with hands-on expertise in strategic sourcing and domestic trade, allows us to deliver consistent quality and reliability to every partner we serve.
                </p>
                <p>
                  From our base in Miramar, Florida, we have built a distribution network that spans the entire USA, serving some of the most respected names in wholesale distribution and retail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 relative">
              
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src={heroImage} alt="Shipping containers" className="w-full h-full object-cover" />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-4 right-4 grid grid-cols-5 gap-2">
                {stats.map((s, i) =>
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="text-center p-3 glass-card rounded-lg">
                  
                    <div className="font-serif text-sm font-bold text-primary">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.label}</div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership — Full-width card */}
      <section className="py-24 bg-secondary/20" ref={leaderRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={leaderInView ? { opacity: 1, y: 0 } : {}}
            className="glass-card rounded-2xl p-10 md:p-16 grid md:grid-cols-3 gap-10 items-center">
            
            <div className="md:col-span-1">
              <div className="w-32 h-32 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto md:mx-0">
                <span className="font-serif text-4xl font-bold text-background">EMRI</span>
              </div>
              <div className="text-center md:text-left mt-4">
                <h3 className="font-serif text-xl font-bold">Emri Pinnacle LLC</h3>
                <div className="text-sm text-primary font-medium mt-1 space-y-1">
                  <p>Eileen Metellus</p>
                  <p className="text-muted-foreground">(954) 670-4886</p>
                  <p className="text-muted-foreground text-xs leading-snug">
                    9800 N Hollybrook Lake Dr,<br />
                    Suite 9-104l<br />
                    Pembroke Pines, FL 33025
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap mt-3 justify-center md:justify-start">
                  {["English", "French", "Haitian Creole", "Spanish"].map((l) => <span key={l} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{l}</span>)}
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Leadership</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Experienced Leadership, Personal Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Owner & Managing Director Olivier Richardson brings over 14 years of hands-on expertise in USA wholesale distribution operations, strategic sourcing, domestic trade, and high-volume account management.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fluent in English, French, and Haitian Creole (working proficiency in Spanish), he personally leads procurement, logistics, and long-term client relationships to guarantee quality, reliability, and competitive pricing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His direct involvement in every aspect of operations ensures that Emri Pinnacle maintains the highest standards of service and builds lasting partnerships with every client.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values — Centered with icon cards */}
      <section className="py-28" ref={valuesRef}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-3xl mx-auto mb-16">
            
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Mission & Values</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-6">What Drives Us</h2>
            <blockquote className="text-lg italic text-foreground/80 border-l-2 border-primary pl-6 text-left mx-auto max-w-xl">
              "Connecting manufacturers, wholesalers, and retailers with consistent, high-quality bulk products and seamless logistics."
              <footer className="text-primary text-sm font-semibold mt-2 not-italic">— Our Mission</footer>
            </blockquote>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => <motion.div key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="text-center p-8 rounded-2xl glass-card hover:border-primary/30 transition-all group">
              
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <v.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Strengths — Staggered grid */}
      <section className="py-28 bg-secondary/20" ref={strengthsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-2xl mx-auto mb-16">
            
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Our Strengths</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-4">Why Choose Emri Pinnacle</h2>
            <p className="text-muted-foreground">
              Deep industry knowledge, strong relationships, and seamless logistics that deliver value beyond every transaction.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((s, i) =>
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={strengthsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i }}
              className="flex gap-4 p-6 rounded-xl glass-card hover:border-primary/30 transition-all">
              
                <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default About;