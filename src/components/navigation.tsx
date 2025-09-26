import { useState } from "react";
import { GraduationCap, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="https://www.anciitk.co.in/favicon.ico" className="text-2xl text-primary w-8 h-8 mr-3" />
            <span className="text-xl font-bold">Institute Research Symposium 2025</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("speakers")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-speakers"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-gallery"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-muted"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("speakers")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-nav-speakers"
            >
              Speakers
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-nav-gallery"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
            <div className="px-3 py-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                data-testid="mobile-theme-toggle"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}