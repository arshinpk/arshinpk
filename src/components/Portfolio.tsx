import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const project = {
    name: "Proxima",
    url: "https://proxima.com.au",
    description: "Magento 2 Multi-Store Ecommerce Platform",
    fullDescription: "A comprehensive multi-store architecture with several storefronts operating under one unified Magento 2 system, delivering seamless shopping experiences across different markets.",
    contributions: [
      "Theme customization and responsive design",
      "Custom module development for business logic",
      "Frontend UI/UX enhancement",
      "Mobile optimization for improved performance",
      "Performance improvements and caching strategies",
      "Catalog configuration and store-specific customizations",
    ],
    technologies: ["Magento 2", "PHP", "JavaScript", "MySQL", "Knockout.js"],
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing excellence in Magento 2 development
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-8 md:p-12 bg-card border-border hover:border-primary/50 transition-all hover:card-glow animate-fade-in">
          <div className="space-y-8">
            {/* Project Header */}
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h3 className="text-3xl md:text-4xl font-bold">{project.name}</h3>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Featured Project
                </Badge>
              </div>
              <p className="text-xl text-primary mb-2">{project.description}</p>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-4 py-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Contributions */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Key Contributions
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {project.contributions.map((contribution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground">{contribution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open(project.url, "_blank")}
              >
                Visit Project
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;
