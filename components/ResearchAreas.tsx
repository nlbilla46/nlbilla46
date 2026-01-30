import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Shield, Database } from "lucide-react";
import { Link } from "react-router-dom";
import mlSystems from "@/assets/ml-systems.jpg";
import blockchainSystems from "@/assets/blockchain-systems.jpg";
import dataManagement from "@/assets/data-management.jpg";

const ResearchAreas = () => {
  const areas = [
    {
      icon: Brain,
      title: "Machine Learning & AI Systems",
      description: "Researching the principles and practices for enabling machine learning in large-scale distributed & federated systems.",
      image: mlSystems,
      highlights: [
        "Graph Neural Networks",
        "Distributed ML Algorithms",
        "Federated Learning Systems",
        "Large-scale AI Infrastructure"
      ],
      color: "from-primary to-academic"
    },
    {
      icon: Database,
      title: "Scalable Data Systems",
      description: "Research in data-intensive systems, and data integration for modern distributed computing environments.",
      image: dataManagement,
      highlights: [
        "Big Data Processing",
        "Data Integration",
        "Distributed Databases",
        "Serverless Systems",
        "Stream Processing"
      ],
      color: "from-accent to-accent-light"
    },
    {
      icon: Shield,
      title: "Resilient Systems & Blockchain",
      description: "Understanding and designing decentralized & fault-tolerant systems and consensus-free distributed architectures.",
      image: blockchainSystems,
      highlights: [
        "Blockchain Technology",
        "Consensus Algorithms",
        "Decentralized Systems",
        "Fault Tolerance"
      ],
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Research Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Our Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of data-intensive systems through three interconnected research domains, 
            each addressing critical challenges in modern computing.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => (
            <Card 
              key={area.title}
              className="group overflow-hidden hover:shadow-dramatic transition-all duration-500 border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-80`} />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-academic group-hover:text-primary transition-colors duration-200">
                  {area.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    Key Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight) => (
                      <Badge 
                        key={highlight} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/10 transition-colors duration-200"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '800ms' }}>
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-academic">
                Collaborative Research Opportunities
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Interested in collaborating or learning more about our research? 
                We welcome partnerships with industry and academic institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/publications">
                  <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                    View Publications
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/people">
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                    Contact Researchers
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;