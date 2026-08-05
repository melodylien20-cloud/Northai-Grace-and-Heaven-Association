import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Baseline Crisis', href: '#baseline-crisis' },
    { label: 'Impact Metrics', href: '#impact-metrics' },
    { label: 'Field Operations', href: '#field-operations' },
    { label: 'Interactive Map', href: '#interactive-map' },
    { label: 'Financial Integrity', href: '#financial-integrity' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#06140e]/92 backdrop-blur-md border-b border-emerald-900/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-serif text-foreground font-bold text-xl tracking-wide hover:text-primary transition-colors flex items-center"
            >
              SILOAM WELLS FUND
            </a>
            <span className="hidden lg:inline-block bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase">
              Chiang Dao District
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold tracking-wide hover:bg-accent transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
            >
              Donate
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted-foreground hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-emerald-900/50 bg-[#06140e]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-white text-base font-medium tracking-wide transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-emerald-900/50">
                <a
                  href="#donate"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-semibold tracking-wide text-center w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Donate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
