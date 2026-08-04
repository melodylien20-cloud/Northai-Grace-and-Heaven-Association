import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { CrisisSection } from "@/components/sections/CrisisSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { HelpSection } from "@/components/sections/HelpSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full bg-background min-h-[100dvh] selection:bg-secondary selection:text-secondary-foreground text-foreground font-sans">
      <Navigation />
      <main>
        <HeroSection />
        <CrisisSection />
        <MissionSection />
        <WorkSection />
        <ImpactSection />
        <StoriesSection />
        <HelpSection />
      </main>
      <Footer />
    </div>
  );
}