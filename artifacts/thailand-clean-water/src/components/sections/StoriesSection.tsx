import { motion } from "framer-motion";
import childImage from "@assets/generated_images/child-water.jpg";

export function StoriesSection() {
  return (
    <section id="stories" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12"
          >
            <span className="text-secondary uppercase tracking-widest font-bold text-sm mb-4 block">The Human Element</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
              More than just water.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                When a well is drilled, the change is immediate and profound. Diseases like cholera and dysentery plummet. Children return to school instead of hiking miles to fetch water.
              </p>
              <p>
                Women, freed from the daily burden of gathering water, begin to start small businesses and take on leadership roles in the community water committees.
              </p>
              <p className="font-medium text-foreground">
                Clean water is the foundation of every other human right.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src={childImage} 
                alt="Child drinking clean water" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="w-12 h-1 bg-secondary mb-6" />
                <p className="text-white text-xl md:text-2xl font-serif italic mb-4 leading-relaxed">
                  "I don't have to miss school anymore. The water is right here in our village."
                </p>
                <p className="text-white/80 text-sm font-medium tracking-wide uppercase">
                  — Nali, 9 years old, Chiang Mai Province
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}