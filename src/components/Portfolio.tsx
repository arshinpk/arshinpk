import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
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
    <section id="portfolio" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing excellence in Magento 2 development
          </p>
        </div>

        <Card className="group max-w-5xl mx-auto p-10 md:p-14 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative z-10 space-y-10">
            {/* Project Header */}
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h3 className="text-4xl md:text-5xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm font-semibold">
                  Featured Project
                </Badge>
              </div>
              <p className="text-2xl text-primary font-semibold mb-4">{project.description}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="p-6 rounded-2xl bg-muted/30 backdrop-blur-sm border border-border">
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="px-5 py-2.5 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all text-base font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Contributions */}
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
                Key Contributions
              </h4>
              <div className="grid md:grid-cols-2 gap-5">
                {project.contributions.map((contribution, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-base leading-relaxed group-hover/item:text-foreground transition-colors">{contribution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Button */}
            <div className="pt-6">
              <Button
                size="lg"
                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base overflow-hidden"
                onClick={() => window.open(project.url, "_blank")}
              >
                <span className="relative z-10 flex items-center">
                  Visit Project
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>
          </div>
          
          {/* Decorative corner */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;
