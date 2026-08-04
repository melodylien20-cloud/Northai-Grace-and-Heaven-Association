import { motion } from "framer-motion";

export function ImpactSection() {
  const stats = [
    { number: "86", label: "Villages Reached" },
    { number: "34,200", label: "Lives Changed" },
    { number: "12M", label: "Liters Filtered" },
    { number: "100%", label: "Local Ownership" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section id="impact" className="py-24 bg-primary text-primary-foreground border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary uppercase tracking-widest font-bold text-sm mb-4 block">Our Impact</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-16 leading-tight drop-shadow-sm">
            A ripple effect of change.
          </h2>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={item} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-serif text-secondary mb-4 drop-shadow-md">
                {stat.number}
              </span>
              <span className="text-sm md:text-base font-medium tracking-wide uppercase text-primary-foreground/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}