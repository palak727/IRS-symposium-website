import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TopicSection } from "@/components/topics-section";
import { AbstractSection } from "@/components/abstract-section";
import { GuidelineSection } from "@/components/guidelines-section";
import { SpeakersSection } from "@/components/speakers-section";
import { WorkshopsSection } from "@/components/workshop-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="home-page">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TopicSection />
      <AbstractSection />
      <GuidelineSection />
      <SpeakersSection />
      <WorkshopsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
