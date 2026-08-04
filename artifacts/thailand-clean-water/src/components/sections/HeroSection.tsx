import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/hero-highlands.jpg";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-primary">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Misty highland river in Thailand" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 block drop-shadow-md">
            Thailand Clean Water Project
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.1] mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Water is the beginning <br className="hidden md:block"/> of everything.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/90 max-w-2xl font-light mb-12 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          We drill wells and build filtration systems in the remote Karen and Hmong villages of northern Thailand. Restoring dignity and health, one community at a time.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8" onClick={() => document.getElementById("help")?.scrollIntoView({behavior: "smooth"})}>
            Give Clean Water
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-primary px-8" onClick={() => document.getElementById("mission")?.scrollIntoView({behavior: "smooth"})}>
            Our Mission
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}