import { motion } from 'framer-motion';
import dirtyWaterImg from '@assets/dirty-water-baseline_1785921726580.jpeg';
import infantImpactImg from '@assets/infant-community-impact_1785921726581.jpeg';

export default function BaselineCrisis() {
  return (
    <section id="baseline-crisis" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            The Water Crisis
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg">
            Before our intervention, the Arunothai community relied on contaminated surface storage and limited weekly municipal rations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            className="group relative flex flex-col bg-[#081c14] border border-emerald-900/50 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden">
              <img 
                src={dirtyWaterImg} 
                alt="Contaminated water storage" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c14] via-transparent to-transparent opacity-90" />
            </div>
            <div className="p-8 relative z-10 -mt-10">
              <span className="inline-block bg-[#06140e] border border-emerald-900/50 text-accent px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase mb-4 shadow-lg">
                The Baseline Condition (Pre-Intervention)
              </span>
              <p className="text-foreground/90 font-light leading-relaxed text-base">
                Unfiltered water storage in Arunothai showing heavy sediment and algae buildup, posing severe gastrointestinal risks to residents.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="group relative flex flex-col bg-[#081c14] border border-emerald-900/50 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden">
              <img 
                src={infantImpactImg} 
                alt="Infant health impact" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c14] via-transparent to-transparent opacity-90" />
            </div>
            <div className="p-8 relative z-10 -mt-10">
              <span className="inline-block bg-[#06140e] border border-emerald-900/50 text-accent px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase mb-4 shadow-lg">
                Public Health Vulnerability
              </span>
              <p className="text-foreground/90 font-light leading-relaxed text-base">
                Infants and displaced youth face the highest risk of waterborne illness in high-temperature, low-sanitation environments.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
