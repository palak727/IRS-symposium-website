import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SpeakersSection() {
  const speakers = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      title: "Keynote Speaker 1",
      field: "Field of Expertise",
      alt: "Academic speaker placeholder"
    },
    {
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      title: "Featured Researcher",
      field: "Research Area",
      alt: "Female researcher placeholder"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      title: "Panel Moderator",
      field: "Discussion Topic",
      alt: "Senior academic placeholder"
    },
    {
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      title: "Emerging Scholar",
      field: "Innovative Research",
      alt: "Young researcher placeholder"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-muted" data-testid="speakers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="speakers-title">
            Distinguished Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="speakers-subtitle">
            Learn from leading experts and researchers who are shaping the future of their respective fields.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="hover:shadow-md transition-all hover:scale-105" data-testid={`speaker-card-${index}`}>
              <CardContent className="p-6">
                <div className="text-center">
                  <img 
                    src={speaker.image} 
                    alt={speaker.alt}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                    data-testid={`speaker-image-${index}`}
                  />
                  <h3 className="text-xl font-semibold mb-2" data-testid={`speaker-name-${index}`}>
                    {speaker.title}
                  </h3>
                  <p className="text-muted-foreground mb-3" data-testid={`speaker-field-${index}`}>
                    {speaker.field}
                  </p>
                  <Badge className="bg-accent/10 text-accent hover:bg-accent/20" data-testid={`speaker-status-${index}`}>
                    TBD - Details Coming Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="hover:shadow-md transition-all hover:scale-105 sm:col-span-2 lg:col-span-1" data-testid="more-speakers-card">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Plus className="text-white text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid="more-speakers-title">
                  More Speakers
                </h3>
                <p className="text-muted-foreground mb-3" data-testid="more-speakers-description">
                  Additional Presentations
                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20" data-testid="more-speakers-status">
                  Announcements Coming Soon
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
