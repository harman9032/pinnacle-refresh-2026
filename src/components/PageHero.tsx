import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

const PageHero = ({ label, title, description }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="absolute top-10 right-10 w-96 h-96 border border-primary rounded-full" />
        <div className="absolute top-32 right-32 w-64 h-64 border border-primary/50 rounded-full" />
        <div className="absolute bottom-10 right-20 w-48 h-48 border border-primary/30 rounded-full" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">
              {label}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
