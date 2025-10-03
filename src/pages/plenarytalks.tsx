import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PlenaryTalks() {
  const talks = [
    /* Example:
    {
      title: "Future of Renewable Energy",
      speaker: "Dr. Jane Doe",
      description: "Insights on sustainable energy solutions for the next decade."
    }
    */
  ];

  return (
    <section id="plenary-talks" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Plenary Talks</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Attend inspiring talks by leading experts on cutting-edge research and emerging trends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {talks.map((talk, index) => (
            <Card key={index} className="hover:shadow-md transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{talk.title}</h3>
                <p className="text-muted-foreground mb-2">{talk.speaker}</p>
                <p className="text-muted-foreground mb-3">{talk.description}</p>
                <Badge className="bg-accent/10 text-accent hover:bg-accent/20">TBD</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
