import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroHighlandsImg from '@assets/generated_images/hero-highlands.jpg';

type Frequency = 'monthly' | 'once';

const MONTHLY_OPTIONS = [
  { value: 15,  label: '$15 USD/mo' },
  { value: 30,  label: '$30 USD/mo' },
  { value: 75,  label: '$75 USD/mo' },
  { value: 150, label: '$150 USD/mo' },
];

const ONCE_OPTIONS = [
  { value: 25,  label: '$25 USD' },
  { value: 50,  label: '$50 USD' },
  { value: 100, label: '$100 USD' },
  { value: 250, label: '$250 USD' },
];

const IMPACT: Record<number, string> = {
  15:  'Gives 1 resident in Arunothai clean water access.',
  25:  'Provides safe water for a family for one month.',
  30:  'Secures 30,000 Liters of purified water output.',
  50:  'Supplies a wash station with filtration materials.',
  75:  'Supports clean water & health for 5 Hope Home youth.',
  100: 'Equips the team with a month of field supplies.',
  150: 'Funds clean sanitation infrastructure for 10 villagers.',
  250: 'Sponsors a full community well service & maintenance.',
};

function getImpact(amount: number | string): string {
  const n = Number(amount);
  if (IMPACT[n]) return IMPACT[n];
  if (n > 0) return `Brings life-changing clean water to ${Math.max(1, Math.round(n / 15))} resident${Math.round(n / 15) !== 1 ? 's' : ''} in Arunothai.`;
  return 'Choose an amount above to see your impact.';
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const bgOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const [freq, setFreq] = useState<Frequency>('monthly');
  const [selectedAmount, setSelectedAmount] = useState(75);
  const [customAmount, setCustomAmount] = useState('');

  const options = freq === 'monthly' ? MONTHLY_OPTIONS : ONCE_OPTIONS;

  // When switching frequency, reset to first default if previous selection not in new list
  const handleFreq = (f: Frequency) => {
    setFreq(f);
    setCustomAmount('');
    const defaults: Record<Frequency, number> = { monthly: 75, once: 100 };
    setSelectedAmount(defaults[f]);
  };

  const activeAmount = customAmount !== '' ? customAmount : selectedAmount;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ scale, opacity: bgOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#06140e]/90 via-[#06140e]/70 to-[#06140e] z-10" />
        <img
          src={heroHighlandsImg}
          alt="Highlands of Northern Thailand"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Two-column layout */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Hero Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-3 mb-8 bg-[#081c14]/80 border border-emerald-900/50 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                Public Health Engineering • Chiang Dao District
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium text-foreground leading-[1.1] mb-8">
              Water is the{' '}
              <span className="text-primary italic">beginning</span>{' '}
              of everything.
            </h1>

            <p className="text-foreground/75 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-xl">
              From 1 hour of clean water a week to 15,000 liters daily. Evolving temporary medical
              relief into permanent public health infrastructure in rural Arunothai, Northern Thailand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#impact-metrics"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded font-semibold text-sm tracking-wide hover:bg-accent transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
              >
                Explore Impact Metrics
              </a>
              <a
                href="#field-operations"
                className="inline-flex items-center justify-center gap-3 border border-emerald-900/50 bg-[#081c14]/50 text-foreground px-8 py-4 rounded font-semibold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all duration-300 backdrop-blur-sm"
              >
                View Field Documentation
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Donation Widget ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl border border-emerald-500/30 bg-[#06140e]/80 backdrop-blur-xl shadow-[0_0_60px_rgba(6,182,212,0.06)] overflow-hidden">
              {/* Subtle top shimmer */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="p-7 sm:p-8">

                {/* Charity: water–style header */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xl">💧</span>
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-foreground/50">
                    Siloam Wells Fund
                  </span>
                </div>

                {/* Frequency Toggle */}
                <div className="flex rounded-lg overflow-hidden border border-emerald-800/50 mb-6 text-sm font-bold tracking-widest">
                  {(['monthly', 'once'] as Frequency[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => handleFreq(f)}
                      className={`flex-1 py-3 uppercase transition-all duration-200 ${
                        freq === f
                          ? 'bg-primary text-slate-950'
                          : 'bg-[#081c14] text-foreground/50 hover:text-foreground/80'
                      }`}
                    >
                      {f === 'monthly' ? '💧 Monthly' : 'Give Once'}
                    </button>
                  ))}
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {options.map((opt) => {
                    const isActive = customAmount === '' && selectedAmount === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => { setSelectedAmount(opt.value); setCustomAmount(''); }}
                        className={`py-3.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? 'bg-primary/15 border-primary text-primary shadow-[0_0_14px_rgba(234,179,8,0.18)]'
                            : 'bg-[#081c14] border-emerald-800/40 text-foreground/70 hover:border-primary/40 hover:text-foreground'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                {/* Custom amount */}
                <div className="relative mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 text-sm font-semibold">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); }}
                    className="w-full pl-8 pr-4 py-3.5 rounded-xl border border-emerald-800/40 bg-[#081c14] text-foreground placeholder-foreground/30 text-sm font-semibold focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                  />
                </div>

                {/* Dynamic Impact Metric */}
                <motion.div
                  key={String(activeAmount)}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 bg-emerald-950/60 border border-emerald-800/30 rounded-xl px-4 py-3.5 mb-6"
                >
                  <span className="text-lg leading-none mt-0.5">💛</span>
                  <p className="text-foreground/80 text-sm leading-snug">
                    {getImpact(activeAmount)}
                  </p>
                </motion.div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const amt = customAmount !== '' ? customAmount : selectedAmount;
                    window.location.href = `#donate?amount=${amt}&freq=${freq}`;
                  }}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 active:scale-[0.98] text-slate-950 font-bold py-4 rounded-xl uppercase tracking-wider text-sm transition-all duration-200 shadow-[0_0_24px_rgba(234,179,8,0.25)] hover:shadow-[0_0_32px_rgba(234,179,8,0.4)]"
                >
                  Fund the Flow Today
                </button>

                {/* Trust line */}
                <p className="text-center text-foreground/30 text-[11px] mt-4 leading-snug">
                  Secure · Tax-deductible · Cancel anytime<br />
                  Partner: Arunothai Church, Chiang Dao
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span className="text-primary/60 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
      </motion.div>
    </section>
  );
}
