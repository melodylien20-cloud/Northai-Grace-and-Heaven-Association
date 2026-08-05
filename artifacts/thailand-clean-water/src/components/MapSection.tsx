import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({ 
  iconRetinaUrl: markerIcon2x, 
  iconUrl: markerIcon, 
  shadowUrl: markerShadow 
});

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [19.7215, 98.9221],
      zoom: 13,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom Golden Amber marker
    const amberIcon = L.divIcon({
      html: `
        <div style="
          width: 18px; height: 18px; background: #eab308;
          border-radius: 50%; border: 2px solid white;
          box-shadow: 0 0 0 4px rgba(234,179,8,0.3), 0 0 16px rgba(234,179,8,0.6);
        "></div>
      `,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      className: '',
    });

    L.marker([19.7215, 98.9221], { icon: amberIcon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: 'DM Sans', sans-serif; font-size: 13px; color: #06140e; min-width: 240px; padding: 4px;">
          <strong style="color:#d97706; font-size: 15px; display: block; margin-bottom: 4px;">Siloam Well #1</strong>
          <span style="display: block; margin-bottom: 4px;">Target: Hope Home & Arunothai Village</span>
          <span style="font-weight: 500;">Capacity: 1,500 L/hr serving 1,000 people</span>
        </div>`,
        { maxWidth: 280 }
      )
      .openPopup();

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section id="interactive-map" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Field Operations & Well Infrastructure Location
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl text-lg">
            Interactive spatial map of completed well sites in Chiang Dao District near the Myanmar border.
          </p>
        </motion.div>

        {/* Map container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden border border-emerald-900/50 p-1 bg-[#081c14]"
        >
          <div ref={mapRef} className="rounded-lg h-[420px] w-full z-0 relative" />
        </motion.div>

        {/* Legend */}
        <motion.div 
          className="mt-6 flex items-center gap-3 text-muted-foreground font-light text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="w-3 h-3 rounded-full bg-primary inline-block shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
          <span>Active well site — Arunothai, Chiang Dao District (19.7215°N, 98.9221°E)</span>
        </motion.div>
      </div>
    </section>
  );
}
