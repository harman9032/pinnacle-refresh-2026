import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, Clock, Globe, Send } from "lucide-react";

const contactInfo = [
{ icon: Mail, label: "Email", value: "info@emripinnacle.com", href: "mailto:info@emripinnacle.com" },
{ icon: Phone, label: "Phone", value: "(786) 302-9420", href: "tel:+17863029420", extra: { value: "(305) 900-7195", href: "tel:+13059007195" } },
{ icon: MapPin, label: "Location", value: "Miramar, Florida, USA" },
{ icon: Clock, label: "Response Time", value: "Within 24 hours" }];


const Contact = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", product: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@emripinnacle.com?subject=Quote Request from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nProduct: ${formData.product}\n\n${formData.message}`
    )}`;
  };

  const inputClass = "w-full px-4 py-3.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        label="Contact Us"
        title="Let's Build a Long-Term Partnership"
        description="Reach out today to discuss your wholesale requirements. Our team is ready to help you find the right products and logistics solutions." />
      

      <section className="py-24" ref={formRef}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-1">
              
              <div className="glass-card rounded-2xl p-8 sticky top-28 space-y-8">
                <h3 className="font-serif text-xl font-bold">Contact Information</h3>
                {contactInfo.map((c) =>
                <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">{c.label}</p>
                      {c.href ?
                    <a href={c.href} className="text-sm text-foreground hover:text-primary transition-colors">{c.value}</a> :

                    <p className="text-sm text-foreground">{c.value}</p>
                    }
                      {c.extra

                    }
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Languages</p>
                      <div className="flex gap-2 flex-wrap">
                        {["English", "French", "Haitian Creole", "Spanish"].map((l) =>
                        <span key={l} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{l}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground italic">References available upon request</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2">
              
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Request a Quote</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-3">Tell Us About Your Needs</h2>
              <p className="text-muted-foreground mb-10">
                Fill out the form below and our team will get back to you within 24 hours with pricing, availability, and logistics details.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Full Name *</label>
                    <input type="text" required placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Company Name</label>
                    <input type="text" placeholder="Your Company, Inc." value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Email Address *</label>
                    <input type="email" required placeholder="john@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Phone Number</label>
                    <input type="tel" placeholder="(786) 555-0100" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Interested In</label>
                  <select value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} className={inputClass}>
                    <option value="">Select a product category</option>
                    {["Rice", "Flour", "Corn", "Vegetable Oil", "Bulgur", "Black Beans", "Pinto Beans", "Custom Supermarket Goods", "Multiple Products", "Other"].map((o) =>
                    <option key={o} value={o}>{o}</option>
                    )}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Message</label>
                  <textarea rows={5} placeholder="Tell us about your requirements..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-background font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-gold">
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Contact;