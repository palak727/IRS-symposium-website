import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ResearchHackathon() {
  const hackathons = [
    /* Example:
    {
      title: "Data Science Hackathon",
      theme: "Climate Data Analysis",
      description: "Collaborate in teams to solve real-world research challenges."
    }
    */
  ];

  return (
    <section id="research-hackathon" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Research Hackathons</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Participate in collaborative hackathons to tackle research problems with innovative solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card key={index} className="hover:shadow-md transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                <p className="text-muted-foreground mb-2">Theme: {hackathon.theme}</p>
                <p className="text-muted-foreground mb-3">{hackathon.description}</p>
                <Badge className="bg-accent/10 text-accent hover:bg-accent/20">TBD</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
