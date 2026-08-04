export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-white">TCWP</span>
          </div>
          <p className="text-sm text-background/60 font-light leading-relaxed">
            Bringing clean, safe drinking water to remote highland communities in northern Thailand.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-secondary mb-6">Organization</h4>
          <ul className="space-y-4 text-sm text-background/70">
            <li><button className="hover:text-white transition-colors" onClick={() => document.getElementById("mission")?.scrollIntoView({behavior: "smooth"})}>Our Mission</button></li>
            <li><button className="hover:text-white transition-colors">Our Team</button></li>
            <li><button className="hover:text-white transition-colors">Financials</button></li>
            <li><button className="hover:text-white transition-colors">Careers</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-secondary mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-background/70">
            <li><button className="hover:text-white transition-colors">Contact Us</button></li>
            <li><button className="hover:text-white transition-colors">Newsletter</button></li>
            <li><button className="hover:text-white transition-colors">Instagram</button></li>
            <li><button className="hover:text-white transition-colors">LinkedIn</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-secondary mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-background/70">
            <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
            <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
            <li><span className="block mt-8 text-xs text-background/40">© {new Date().getFullYear()} Thailand Clean Water Project. <br/>All rights reserved.</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}