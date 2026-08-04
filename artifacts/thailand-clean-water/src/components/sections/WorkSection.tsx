import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import wellImage from "@assets/generated_images/well-construction.jpg";

export function WorkSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section id="work" ref={ref} className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary uppercase tracking-widest font-bold text-sm mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6 text-foreground leading-tight"
          >
            Engineering hope.
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border">
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-secondary" />
              <h3 className="text-2xl font-serif text-foreground mb-3">1. Deep Drilling</h3>
              <p className="text-muted-foreground leading-relaxed">
                We bring specialized drilling rigs capable of piercing through 100+ meters of rock to reach untouched, ancient aquifers that never run dry.
              </p>
            </div>
            <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border">
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-secondary" />
              <h3 className="text-2xl font-serif text-foreground mb-3">2. Biosand Filtration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We install robust, locally-sourced filtration systems that remove 99% of bacteria and pathogens without requiring electricity or expensive replacement parts.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-secondary" />
              <h3 className="text-2xl font-serif text-foreground mb-3">3. WASH Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clean water is only half the battle. We conduct comprehensive hygiene and sanitation workshops in local languages to maximize health impacts.
              </p>
            </div>
          </motion.div>
          
          <div className="lg:col-span-7 h-[600px] overflow-hidden rounded-2xl relative shadow-2xl">
            <motion.img 
              style={{ y, scale: 1.2 }}
              src={wellImage} 
              alt="New water well flowing" 
              className="w-full h-full object-cover origin-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}