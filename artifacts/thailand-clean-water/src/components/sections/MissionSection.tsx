import { motion } from "framer-motion";
import communityImage from "@assets/generated_images/community-village.jpg";

export function MissionSection() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-card -z-10 rounded-l-[100px] opacity-50" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={communityImage} 
                alt="Community gathering in village" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <span className="text-secondary uppercase tracking-widest font-bold text-sm mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground leading-tight">
              Rooted in the community.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                We are not a traditional charity. We are a grassroots force working at the intersection of environmental stewardship and human dignity. We partner directly with local leaders to understand the unique terrain, culture, and needs of every village we enter.
              </p>
              <p>
                When we drill a well, we don't just leave a piece of machinery. We train local water committees to maintain the systems, ensuring that the water flows not just today, but for generations to come.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl text-foreground">100% Local Partnership</h4>
                <p className="text-sm text-muted-foreground">Every project is co-led by the village.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}