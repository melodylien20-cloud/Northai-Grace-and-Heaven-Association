export default function FooterSection() {
  return (
    <footer className="bg-[#06140e] border-t border-emerald-900/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-foreground font-bold text-xl mb-4 tracking-wide">
              SILOAM WELLS FUND
            </p>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
              Evolving temporary medical relief into permanent public health infrastructure in rural Northern Thailand — one well at a time.
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="text-primary font-semibold text-xs mb-4 uppercase tracking-[0.2em]">
              Field Operations
            </p>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Arunothai Village<br />
              Chiang Dao District, Chiang Mai<br />
              Northern Thailand<br />
              <span className="text-accent/90">(Myanmar Border Region)</span>
            </p>
          </div>

          {/* Partner */}
          <div>
            <p className="text-primary font-semibold text-xs mb-4 uppercase tracking-[0.2em]">
              Local Partner
            </p>
            <p className="text-muted-foreground font-light text-sm leading-relaxed">
              Chiang Mai Arunothai Church<br />
              Community-led water stewardship<br />
              Est. well operations 2024
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-900/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-light text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Siloam Wells Fund. All rights reserved.
          </p>
          <p className="text-primary font-light text-xs tracking-wider">
            Committed to 100% financial transparency.
          </p>
        </div>
      </div>
    </footer>
  );
}
