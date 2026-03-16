import { Link } from "react-router-dom";
import emriLogo from "@/assets/emri-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="bg-white rounded-xl p-2">
                <img src={emriLogo} alt="Emri Pinnacle LLC" className="h-14 w-auto" />
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Leading USA wholesale distributor of dry food commodities and supermarket goods since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-4">Company</h4>
            <div className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Products", href: "/products" },
                { label: "Clients", href: "/clients" },
              ].map((l) => (
                <Link key={l.label} to={l.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-4">Products</h4>
            <div className="space-y-2">
              {["Black Beans", "Pinto Beans", "Rice", "Bulgur Wheat", "Cooking Oils", "Corn Products"].map((p) => (
                <span key={p} className="block text-sm text-muted-foreground">{p}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:info@emripinnacle.com" className="block hover:text-primary transition-colors">info@emripinnacle.com</a>
              <a href="tel:+17863029420" className="block hover:text-primary transition-colors">(786) 302-9420</a>
              <a href="tel:+13059007195" className="block hover:text-primary transition-colors">(305) 900-7195</a>
              <p>Miramar, Florida, USA</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Emri Pinnacle LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["English", "French", "Haitian Creole", "Spanish"].map((l) => (
              <span key={l} className="text-[10px] text-muted-foreground/60">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
