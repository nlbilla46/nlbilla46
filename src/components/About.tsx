import { Badge } from "@/components/ui/badge";

const About = () => {

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              About Our Group
            </Badge>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Data-Intensive Systems (DIS) group pushes the boundaries of data-intensive computing, 
              combining theoretical foundations with real-world applications.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;