import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16" data-testid="hero-section">
      <div className="absolute inset-0 hero-gradient"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in" data-testid="hero-title">
          Institute Research Symposium
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-white/90 animate-slide-up" data-testid="hero-subtitle">
          Advancing Knowledge Through Collaborative Research
        </p>
        <p className="text-lg mb-8 text-white/80 animate-slide-up" data-testid="hero-description">
          Join us for an inspiring gathering of researchers, academics, and innovators as we explore groundbreaking discoveries and foster meaningful collaborations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-2 border-white text-white bg-transparent px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            data-testid="button-register"
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
}