import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, ExternalLink, Github, Linkedin, Clock, Users, BookOpen } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Van Mourik Broekmanweg 6, 2628 XE Delft, The Netherlands",
      details: "Building 28 (EWI), Faculty of Electrical Engineering, Mathematics and Computer Science"
    },
    {
      icon: Mail,
      title: "Email",
      content: "Kim Boudewijn <K.Boudewijn@tudelft.nl>",
      details: "For general inquiries about our research group"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 - 17:00" },
    { day: "Saturday - Sunday", hours: "Closed" }
  ];

  const collaborationTypes = [
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Collaborate with our research team on industrial projects and innovation initiatives."
    },
    {
      icon: BookOpen,
      title: "Academic Collaboration",
      description: "Joint research projects, student exchanges, and academic partnerships with universities worldwide."
    },
    {
      icon: Github,
      title: "Open Source Projects",
      description: "Contribute to our open-source research projects and software development initiatives."
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/dis-delft", label: "GitHub" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: ExternalLink, href: "https://tudelft.nl", label: "TU Delft" }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Interested in collaboration, research opportunities, or have questions about our work? 
            We'd love to hear from you and explore potential partnerships.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <Card 
              key={item.title}
              className="group hover:shadow-elegant transition-all duration-300 glass-card"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-glow">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-academic mb-2 text-lg">{item.title}</h3>
                <p className="text-foreground font-medium mb-2">{item.content}</p>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Office Hours & Location */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-academic">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/20 last:border-0">
                    <span className="text-foreground/80 font-medium">{schedule.day}</span>
                    <span className="text-primary font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground/60 text-sm mt-4">
                For urgent matters outside office hours, please send an email and we'll respond as soon as possible.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-academic">How to Find Us</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">By Public Transport</h4>
                  <p className="text-foreground/70 text-sm">Take tram 1 to "TU Wijk" stop, then a 5-minute walk to Building 28.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">By Car</h4>
                  <p className="text-foreground/70 text-sm">Limited parking available on campus. Public parking available nearby.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Campus Map</h4>
                  <Button variant="outline" size="sm" className="text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Interactive Map
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Collaboration Opportunities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-academic mb-4">Collaboration Opportunities</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We welcome various forms of collaboration and are always interested in new partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {collaborationTypes.map((collab, index) => (
              <Card key={collab.title} className="glass-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <collab.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-academic mb-3">{collab.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{collab.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Actions */}
        <div className="text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-academic">
                Ready to Start a Conversation?
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Whether you're interested in research collaboration, have questions about our projects, 
                or want to explore partnership opportunities, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300" asChild>
                  <a href="mailto:K.Boudewijn@tudelft.nl">
                    <Mail className="mr-2 w-4 h-4" />
                    Send Us an Email
                  </a>
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5" asChild>
                  <a href="https://tudelft.nl" target="_blank" rel="noopener noreferrer">
                    Visit TU Delft
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3 pt-4 border-t border-border/20">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-primary/10 hover:border-primary/30"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;