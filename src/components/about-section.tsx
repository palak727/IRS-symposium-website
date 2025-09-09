import { Microscope, Users, Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="about-title">
            About the Institute Research Symposium
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            A premier academic event bringing together brilliant minds to share research, foster innovation, and shape the future of scientific discovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Microscope className="text-primary text-xl h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" data-testid="feature-research-title">
                      Cutting-Edge Research
                    </h3>
                    <p className="text-muted-foreground" data-testid="feature-research-description">
                      Discover the latest breakthroughs across multiple disciplines, from fundamental science to applied research with real-world impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Users className="text-accent text-xl h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" data-testid="feature-collaboration-title">
                      Collaborative Environment
                    </h3>
                    <p className="text-muted-foreground" data-testid="feature-collaboration-description">
                      Connect with fellow researchers, establish new partnerships, and engage in meaningful discussions that drive innovation forward.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Trophy className="text-secondary text-xl h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" data-testid="feature-awards-title">
                      Recognition & Awards
                    </h3>
                    <p className="text-muted-foreground" data-testid="feature-awards-description">
                      Outstanding research contributions are recognized through our prestigious awards program, celebrating excellence in various fields.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Research laboratory with scientists conducting experiments" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
            
            <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4" data-testid="highlights-title">
                Event Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3" data-testid="highlight-keynote">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Keynote presentations by renowned experts</span>
                </li>
                <li className="flex items-center space-x-3" data-testid="highlight-posters">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Interactive poster sessions and demonstrations</span>
                </li>
                <li className="flex items-center space-x-3" data-testid="highlight-networking">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Networking opportunities and panel discussions</span>
                </li>
                <li className="flex items-center space-x-3" data-testid="highlight-workshops">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Professional development workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
