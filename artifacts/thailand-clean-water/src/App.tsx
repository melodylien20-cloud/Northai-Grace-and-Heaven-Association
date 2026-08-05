import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatTickers from "@/components/StatTickers";
import BaselineCrisis from "@/components/BaselineCrisis";
import FieldGallery from "@/components/FieldGallery";
import MapSection from "@/components/MapSection";
import FinancialTransparency from "@/components/FinancialTransparency";
import FooterSection from "@/components/FooterSection";

function App() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatTickers />
        <BaselineCrisis />
        <FieldGallery />
        <MapSection />
        <FinancialTransparency />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
