import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ResearchContest() {
  const contests = [
    /* Example:
    {
      title: "Best Paper Competition",
      theme: "Nanotechnology Innovations",
      description: "Submit your best research work and compete for awards."
    }
    */
  ];

  return (
    <section id="research-contest" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Research Contests</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase your research skills, compete with peers, and win exciting awards and recognition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contests.map((contest, index) => (
            <Card key={index} className="hover:shadow-md transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{contest.title}</h3>
                <p className="text-muted-foreground mb-2">Theme: {contest.theme}</p>
                <p className="text-muted-foreground mb-3">{contest.description}</p>
                <Badge className="bg-accent/10 text-accent hover:bg-accent/20">TBD</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
