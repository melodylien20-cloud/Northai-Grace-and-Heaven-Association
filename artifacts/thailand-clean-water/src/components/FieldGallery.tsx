import { motion } from 'framer-motion';
import wellInfraImg from '@assets/IMG_3551_1785921726581.JPG';
import hopeFacilityImg from '@assets/hope-home-facility_1785921726580.jpg';
import waterTanksImg from '@assets/water-filtration-tanks_1785921726582.jpg';
import communityChildrenImg from '@assets/community-children_1785921726580.jpg';
import washStationImg from '@assets/wash-station_1785921726581.jpg';
import arunoThaiChurchImg from '@assets/arunothai-church_1785921726570.jpg';

const items = [
  {
    image: wellInfraImg,
    caption: "Well Infrastructure & Piping | Deep groundwater extraction and distribution network in Chiang Dao."
  },
  {
    image: hopeFacilityImg,
    caption: "Hope Home (主恩之家) | Residential facility sheltering 35 displaced youth near the Myanmar border."
  },
  {
    image: waterTanksImg,
    caption: "Multi-Stage Filtration & Storage | High-capacity tanks ensuring continuous 15,000 L/day purified supply."
  },
  {
    image: communityChildrenImg,
    caption: "Youth Care & Community Impact | Daily health and educational stability backed by clean water access."
  },
  {
    image: washStationImg,
    caption: "Sanitation & Washing Stations | Upgraded concrete wash infrastructure reducing waterborne pathogen spread."
  },
  {
    image: arunoThaiChurchImg,
    caption: "Local Stewardship | Partnered with Chiang Mai Arunothai Church for long-term site maintenance."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function FieldGallery() {
  return (
    <section id="field-operations" className="py-24 px-6 bg-[#081c14] border-y border-emerald-900/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Ground Operations & Community Context
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg">
            Authenticated field documentation from Arunothai, Chiang Dao District.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl border border-emerald-900/50 aspect-[4/5] bg-background"
            >
              <img 
                src={item.image} 
                alt={`Field operation documentation ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06140e] via-[#06140e]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-foreground/90 font-light text-sm leading-relaxed border-l-2 border-primary pl-4">
                  {item.caption.split('|').map((part, i) => (
                    <span key={i} className={i === 0 ? "font-semibold block mb-1 text-primary" : "block text-muted-foreground"}>
                      {part.trim()}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
