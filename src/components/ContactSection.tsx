import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", product: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@emripinnacle.com?subject=Quick Quote from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nProduct: ${formData.product}\n\n${formData.message}`
    )}`;
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" className="py-28 bg-secondary/20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass-card rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            {/* Left — contact info panel */}
            <div className="lg:col-span-2 bg-gradient-gold p-10 md:p-14 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold text-background mb-4">
                  Let's Work Together
                </h2>
                <p className="text-background/70 text-sm leading-relaxed mb-10">
                  Ready to streamline your wholesale distribution? Reach out today.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                      <Mail size={18} className="text-background" />
                    </div>
                    <a href="mailto:info@emripinnacle.com" className="text-sm text-background/90 hover:text-background transition-colors">
                      info@emripinnacle.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                      <Phone size={18} className="text-background" />
                    </div>
                    <a href="tel:+19546704886" className="text-sm text-background/90">(954) 670-4886</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                      <MapPin size={18} className="text-background" />
                    </div>
                    <span className="text-sm text-background/90">Pembroke Pines, Florida, USA</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-background hover:gap-3 transition-all"
                >
                  Full Contact Page <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — quick form */}
            <div className="lg:col-span-3 p-10 md:p-14">
              <h3 className="font-serif text-2xl font-bold mb-2">Quick Quote Request</h3>
              <p className="text-sm text-muted-foreground mb-8">We'll respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="Your Name *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                  <input type="email" required placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                </div>
                <select value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} className={inputClass}>
                  <option value="">Select product category</option>
                  {["Rice", "Flour", "Corn", "Vegetable Oil", "Bulgur", "Black Beans", "Pinto Beans", "Custom Goods", "Multiple Products", "Other"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <textarea rows={4} placeholder="Tell us about your needs..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-gold text-background font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-gold text-sm">
                  Send Inquiry <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
