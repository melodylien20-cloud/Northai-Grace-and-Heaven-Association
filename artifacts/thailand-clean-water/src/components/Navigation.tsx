import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "./ui/button";

export function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-border py-4 shadow-sm" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-3 h-3 rounded-full bg-secondary" />
          </div>
          <span className={`font-serif font-bold text-xl tracking-tight transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>
            TCWP
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: "crisis", label: "The Crisis" },
            { id: "mission", label: "Mission" },
            { id: "work", label: "Our Work" },
            { id: "impact", label: "Impact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                scrolled ? "text-foreground/70" : "text-white/90 drop-shadow-sm"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant={scrolled ? "default" : "secondary"}
            onClick={() => scrollTo("help")}
            className="rounded-full font-bold px-8 shadow-lg transition-all"
          >
            Donate
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}