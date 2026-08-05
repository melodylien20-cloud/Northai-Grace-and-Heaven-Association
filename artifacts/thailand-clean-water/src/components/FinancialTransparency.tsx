import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const budget = [
  { label: 'Well Drilling & Borehole Excavation', amount: 7750, color: '#eab308', percent: 51.7 }, // Amber
  { label: 'Storage Tanks, Filtration Systems & Piping', amount: 5580, color: '#40916c', percent: 37.2 }, // Emerald
  { label: 'Operational Maintenance Reserve', amount: 1670, color: '#d97706', percent: 11.1 }, // Dark Amber
];

const total = 15000;

export default function FinancialTransparency() {
  const chartData = {
    labels: budget.map((b) => b.label),
    datasets: [
      {
        data: budget.map((b) => b.amount),
        backgroundColor: budget.map((b) => b.color),
        borderColor: '#06140e',
        borderWidth: 6,
        hoverBorderColor: '#06140e',
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    cutout: '72%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { label: string; parsed: number }) =>
            ` ${ctx.label}: $${ctx.parsed.toLocaleString()} USD`,
        },
        backgroundColor: '#081c14',
        titleColor: '#eab308',
        titleFont: { family: 'DM Sans', size: 13 },
        bodyColor: '#fefce8',
        bodyFont: { family: 'DM Sans', size: 14 },
        borderColor: 'rgba(6, 78, 59, 0.5)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 4,
      },
    },
  };

  return (
    <section id="financial-integrity" className="py-24 px-6 bg-background border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            100% Financial Integrity
            <span className="block mt-2 text-primary/90 text-2xl sm:text-3xl italic">
              ($15,000 USD Allocation)
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Breakdown */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {budget.map((item, i) => (
              <div key={item.label} className="border border-emerald-900/50 rounded-xl p-6 bg-[#081c14] hover:border-emerald-900 transition-colors">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <span className="text-foreground font-medium tracking-wide flex-1">{item.label}</span>
                  <span className="text-muted-foreground font-light text-sm">{item.percent}%</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1 bg-[#06140e] rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (i * 0.2), ease: "easeOut" }}
                      style={{ width: `${item.percent}%`, background: item.color }}
                    />
                  </div>
                  <span className="text-xl font-serif tracking-tight text-foreground">
                    ${item.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}

            {/* Total Box */}
            <div className="border border-primary/30 rounded-xl p-6 bg-primary/5 mt-8">
              <div className="flex items-center justify-between">
                <span className="text-foreground font-semibold uppercase tracking-widest text-sm">Total Allocated</span>
                <span className="text-primary text-3xl font-serif font-bold">${total.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Doughnut Chart */}
          <motion.div 
            className="flex flex-col items-center justify-center lg:pl-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
              <Doughnut data={chartData} options={chartOptions as never} />
              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-white font-serif text-4xl font-bold tracking-tight">$15k</span>
                <span className="text-muted-foreground text-xs uppercase tracking-[0.2em] mt-1">Total USD</span>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-10 flex flex-col gap-3 w-full max-w-sm">
              {budget.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: b.color }} />
                  <span className="text-muted-foreground font-light text-sm truncate">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
