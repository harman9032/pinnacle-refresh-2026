const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <span className="font-serif font-bold text-xs text-background">EP</span>
            </div>
            <span className="font-serif text-sm font-semibold text-foreground">EMRI PINNACLE LLC</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Emri Pinnacle LLC. All rights reserved. Miramar, Florida, USA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
