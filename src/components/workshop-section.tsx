import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WorkshopsSection() {
  const workshops = [
    /* Example workshop objects
    {
      title: "AI & Machine Learning Workshop",
      field: "Data Science, AI",
      description: "Hands-on session on latest AI techniques and applications.",
      image: "https://images.unsplash.com/photo-1581090700227-7c9f492f2df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "AI Workshop"
    },
    {
      title: "Sustainable Energy Workshop",
      field: "Renewable Energy",
      description: "Learn practical solutions in solar, wind, and sustainable technologies.",
      image: "https://images.unsplash.com/photo-1581091012184-263a6a8c1fef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Energy Workshop"
    }
    */
  ];

  return (
    <section id="workshops" className="py-20 bg-teal-50" data-testid="workshops-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="workshops-title">
            Workshops
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="workshops-subtitle">
            Engage in hands-on sessions and interactive workshops conducted by experts to enhance your skills and knowledge.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <Card key={index} className="hover:shadow-md transition-all hover:scale-105" data-testid={`workshop-card-${index}`}>
              <CardContent className="p-6">
                <div className="text-center">
                  {workshop.image && (
                    <img
                      src={workshop.image}
                      alt={workshop.alt}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                      data-testid={`workshop-image-${index}`}
                    />
                  )}
                  <h3 className="text-xl font-semibold mb-2" data-testid={`workshop-title-${index}`}>
                    {workshop.title}
                  </h3>
                  <p className="text-muted-foreground mb-2" data-testid={`workshop-field-${index}`}>
                    {workshop.field}
                  </p>
                  <p className="text-muted-foreground mb-3" data-testid={`workshop-description-${index}`}>
                    {workshop.description}
                  </p>
                  <Badge className="bg-accent/10 text-accent hover:bg-accent/20" data-testid={`workshop-status-${index}`}>
                    TBD - Details Coming Soon
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* More Workshops Card */}
          <Card
            className="hover:shadow-md transition-all hover:scale-105 col-span-full max-w-xs mx-auto"
            data-testid="more-workshops-card"
          >
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <Plus className="text-white text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Workshops</h3>
                <p className="text-muted-foreground mb-3">Additional Workshops Coming Soon</p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
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
