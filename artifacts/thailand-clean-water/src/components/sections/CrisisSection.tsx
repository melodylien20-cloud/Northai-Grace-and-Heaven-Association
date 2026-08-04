import { motion } from "framer-motion";
import aerialImage from "@assets/generated_images/village-aerial.jpg";

export function CrisisSection() {
  return (
    <section id="crisis" className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-secondary uppercase tracking-widest font-bold text-sm mb-4 block">The Reality</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white leading-tight">
              A paradise on the surface. <br/> A struggle underneath.
            </h2>
            <div className="space-y-6 text-background/80 text-lg font-light leading-relaxed">
              <p>
                Northern Thailand's highlands are globally celebrated for their breathtaking beauty. Yet, hidden behind the mist and lush jungle, hundreds of remote communities lack the most fundamental human need: clean, safe drinking water.
              </p>
              <p>
                During the dry season, mountain streams slow to a trickle. Villagers—often children—must hike miles daily to fetch water from muddy, contaminated sources. This water brings disease, keeps children out of school, and locks communities in a cycle of poverty.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-4xl font-serif text-secondary mb-2">2.5M</h3>
                <p className="text-sm text-background/60">People lack access to safe water in rural regions.</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-secondary mb-2">4+ hrs</h3>
                <p className="text-sm text-background/60">Spent daily by women and children gathering water.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply rounded-2xl" />
            <img 
              src={aerialImage} 
              alt="Aerial view of isolated highland village" 
              className="w-full h-full object-cover rounded-2xl grayscale-[20%]"
            />
            <div className="absolute -bottom-8 -left-8 bg-background text-foreground p-8 rounded-xl shadow-xl max-w-sm z-20">
              <p className="font-serif italic text-lg border-l-2 border-secondary pl-4">
                "Water is life. Without it, our village cannot grow. We only survive."
              </p>
              <p className="text-sm text-muted-foreground mt-4 pl-4">— Village Elder, Mae Hong Son</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}