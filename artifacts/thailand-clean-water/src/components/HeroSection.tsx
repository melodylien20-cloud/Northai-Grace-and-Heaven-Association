import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroHighlandsImg from '@assets/generated_images/hero-highlands.jpg';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top"
        style={{ scale, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#06140e]/90 via-[#06140e]/70 to-[#06140e] z-10" />
        <img 
          src={heroHighlandsImg} 
          alt="Highlands of Northern Thailand" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {/* Location tag */}
          <div className="inline-flex items-center gap-3 mb-8 bg-[#081c14]/80 border border-emerald-900/50 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Public Health Engineering • Chiang Dao District
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[1.1] mb-8">
            Water is the <br className="hidden md:block" />
            <span className="text-primary italic">beginning</span> of everything.
          </h1>

          {/* Sub-headline */}
          <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            From 1 hour of clean water a week to 15,000 liters daily. Evolving temporary medical relief into permanent public health infrastructure in rural Arunothai, Northern Thailand.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="#impact-metrics"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold text-sm tracking-wide hover:bg-accent transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
            >
              Explore Impact Metrics
            </a>
            <a
              href="#field-operations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-emerald-900/50 bg-[#081c14]/50 text-foreground px-8 py-4 rounded font-semibold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              View Field Documentation
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-primary/70 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
