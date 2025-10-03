import { GraduationCap } from "lucide-react";
import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export function Footer() {
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
    <footer className="bg-card border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-2xl text-primary mr-3" />
              <span className="text-xl font-bold" data-testid="footer-logo">Institute Research Symposium</span>
            </div>
            <p className="text-muted-foreground mb-4" data-testid="footer-description">
              Advancing knowledge through collaborative research and fostering innovation in academic communities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/anciitk?igsh=MXcxMDE4YjRvM2pqZw==" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-twitter">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/anciitk/posts/?feedView=all" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-linkedin">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://www.facebook.com/share/1BevQX5REt/" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-facebook">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://www.youtube.com/@pganciitk4600" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-youtube">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-links-title">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-about"
                >
                  About IRS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("topics")} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-speakers"
                >
                  Topics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("abstract")} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-gallery"
                >
                  Abstract Submission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("schedule")} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                 Schedule
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("guidelines")} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                 GuideLines
                </button>
              </li>
               <li>
                <button 
                  onClick={() => scrollToSection("speakers")} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                 Speakers
                </button>
              </li>
               <li>
                <button 
                  onClick={() => scrollToSection("workshops")} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                 Workshops
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="footer-resources-title">Events</h3>
            <ul className="space-y-2">
              <li><a href="\plenary-talks" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-events">Plenary Talks</a></li>
              <li><a href="\panel-discussion" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-events">Panel Discussion</a></li>
              <li><a href="\research-contest" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-events">Research Contest</a></li>
              <li><a href="\research-hackathon" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-events">Research Hackathon</a></li>
            </ul>
            <h3 className="font-medium mb-4 mt-8" data-testid="footer-resources-title">Contact us: pg_anc@iitk.ac.in</h3>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p data-testid="footer-copyright">&copy; 2025 Institute Research Symposium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
