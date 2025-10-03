import { Microscope, Users, Trophy, CheckCircle, BrainCircuit, Handshake, BookMarked } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-teal-50" data-testid="about-section">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why attend{" "}
            <span className="text-[#064e3b]" style={{ fontFamily: 'Georgia, serif', fontWeight: '700' }}>
              IRS 2025
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A premier academic event bringing together brilliant minds to share research, foster innovation, and shape the future of scientific discovery.
          </p>
        </div>
            {/* Card 1: Cutting-Edge Research */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Microscope className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Cutting-Edge Research
                    </h3>
                    <p className="text-muted-foreground">
                      Discover the latest breakthroughs across multiple disciplines, from fundamental science to applied research with real-world impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Card 2: Collaborative Environment */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Users className="text-blue-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Collaborative Environment
                    </h3>
                    <p className="text-muted-foreground">
                      Connect with fellow researchers, establish new partnerships, and engage in meaningful discussions that drive innovation forward.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Future-Ready Skills (ICON UPDATED) */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    {/* Changed from Users to BrainCircuit for uniqueness */}
                    <BrainCircuit className="text-purple-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Future-Ready Skills
                    </h3>
                    <p className="text-muted-foreground">
                      Stay ahead with discussions on key trends like AI, IoT, and SpaceTech shaping the industry.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NEW Card 4: Industry & Academia Fusion */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <Handshake className="text-green-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Industry & Academia Fusion
                    </h3>
                    <p className="text-muted-foreground">
                      Bridge the gap between theoretical research and practical application by connecting with industry leaders seeking the next big innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* NEW Card 5: Publication Pathways */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg">
                    <BookMarked className="text-orange-500 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Publication Pathways
                    </h3>
                    <p className="text-muted-foreground">
                      Selected high-quality papers will be fast-tracked for publication in our esteemed partner journals. Get your research recognized.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            {/* IMAGE STYLING ADJUSTED */}
            <img 
              src="/images/poster25.jpg" 
              alt="Research laboratory with scientists conducting experiments" 
              className="rounded-xl shadow-lg w-auto h-30 object-cover"
              data-testid="about-image"
            />
            
            <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Event Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Keynote presentations by renowned experts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Interactive poster sessions and demonstrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Networking with industry and academic leaders</span>
                </li>
                <li className="flex items-center space-x-3">
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