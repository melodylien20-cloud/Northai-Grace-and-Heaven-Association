import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HelpSection() {
  return (
    <section id="help" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <svg className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] text-white/[0.03]" style={{ animation: 'spin 60s linear infinite' }} viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.2" fill="none" />
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary uppercase tracking-widest font-bold text-sm mb-4 block drop-shadow-md">Take Action</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-primary-foreground leading-tight drop-shadow-lg">
            Be the source.
          </h2>
          <p className="text-xl text-primary-foreground/90 font-light mb-16 max-w-2xl mx-auto">
            100% of public donations fund clean water projects directly. Join us in ending the water crisis in rural Thailand.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-left hover:bg-white/15 transition-all hover:-translate-y-1">
              <h3 className="text-3xl font-serif text-white mb-2">$35</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed h-10">Provides clean water for one person for life.</p>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md">Give $35</Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-left hover:bg-white/15 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
              <h3 className="text-3xl font-serif text-white mb-2">$150</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed h-10">Provides clean water for a whole family.</p>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md">Give $150</Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-left hover:bg-white/15 transition-all hover:-translate-y-1">
              <h3 className="text-3xl font-serif text-white mb-2">Custom</h3>
              <p className="text-white/80 text-sm mb-8 leading-relaxed h-10">Every drop counts. Give what you can today.</p>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary shadow-sm bg-transparent">Other Amount</Button>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="text-white/80 hover:text-white underline-offset-4 hover:underline text-sm transition-colors uppercase tracking-widest font-medium">
              Volunteer with us
            </button>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary" />
            <button className="text-white/80 hover:text-white underline-offset-4 hover:underline text-sm transition-colors uppercase tracking-widest font-medium">
              Fundraise for TCWP
            </button>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-secondary" />
            <button className="text-white/80 hover:text-white underline-offset-4 hover:underline text-sm transition-colors uppercase tracking-widest font-medium">
              Partner with us
            </button>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}