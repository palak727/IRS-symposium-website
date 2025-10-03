import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xpwyrezd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-teal-50" data-testid="contact-section"> 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16">
       <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="contact-title"> Get In Touch </h2> 
       <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle"> Have questions about the symposium? Want to participate or sponsor? We'd love to hear from you. </p> 
       </div> 
       <div className="grid md:grid-cols-2 gap-12"> <div className="space-y-8">
         <Card className="shadow-sm" data-testid="contact-email-card">
           <CardContent className="p-6"> <div className="flex items-start space-x-4">
             <div className="bg-primary/10 p-3 rounded-lg"> 
             <Mail className="text-primary text-xl h-6 w-6" /> 
             </div> 
             <div> 
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
               <p className="text-muted-foreground mb-2">For general inquiries and registration</p>
                <a href="mailto:pg_anc@iitk.ac.in" className="text-primary hover:underline" data-testid="contact-email-link"> pg_anc@iitk.ac.in </a> 
                </div> 
                </div> 
                </CardContent>
                 </Card>
                  <Card className="shadow-sm" data-testid="contact-phone-card">
                     <CardContent className="p-6"> <div className="flex items-start space-x-4"> <div className="bg-accent/10 p-3 rounded-lg">
                      <Phone className="text-accent text-xl h-6 w-6" /> </div> <div> <h3 className="text-xl font-semibold mb-2">Call Us</h3> 
                      <a href="tel:+91 9793306778" className="text-primary hover:underline" data-testid="contact-phone-link"> +91 97933-06788 </a>
                       </div>
                        </div> 
                        </CardContent> 
                        </Card>
                        <Card className="shadow-sm" data-testid="contact-address-card">
                         <CardContent className="p-6"> 
                          <div className="flex items-start space-x-4"> 
                            <div className="bg-secondary/10 p-3 rounded-lg">
                             <MapPin className="text-secondary text-xl h-6 w-6" /> 
                             </div> 
                             <div> 
                              <h3 className="text-xl font-semibold mb-2">Visit Us</h3> 
                              <p className="text-muted-foreground" data-testid="contact-address"> 
                                Room 205<br /> 
                                Student Activity Center<br /> 
                                OAT, IIT Kanpur </p> 
                                </div>
                                 </div>
                                 </CardContent> </Card> </div>

          {/* Right form panel */}
          <Card className="shadow-sm">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Textarea
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    rows={2}
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
