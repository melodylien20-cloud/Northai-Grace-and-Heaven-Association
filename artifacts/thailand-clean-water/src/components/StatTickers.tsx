import { motion } from 'framer-motion';

const stats = [
  {
    value: '1,000',
    unit: 'Residents',
    label: 'Served Daily across Arunothai village'
  },
  {
    value: '15,000',
    unit: 'L/Day',
    label: 'Well Flow Output Capacity (1,500 L/Hour)'
  },
  {
    value: '35',
    unit: 'Refugee Children',
    label: 'Direct beneficiaries at Hope Home (主恩之家)'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function StatTickers() {
  return (
    <section id="impact-metrics" className="py-20 px-6 bg-background relative z-30 -mt-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#081c14] border border-emerald-900/50 rounded-xl p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(64,145,108,0.15)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 4.95a8 8 0 11-11.31 0z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-serif text-4xl lg:text-5xl font-semibold text-primary">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-foreground font-medium text-lg mb-2">
                  {stat.unit}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
