import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import emriLogo from "@/assets/emri-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <div className="bg-white rounded-xl p-1.5">
            <img src={emriLogo} alt="Emri Pinnacle LLC" className="h-11 w-auto" />
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors tracking-wide uppercase ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-gradient-gold text-background font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity tracking-wide"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 tracking-wide uppercase ${
                    location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-gradient-gold text-background font-semibold text-sm rounded-lg text-center tracking-wide"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
