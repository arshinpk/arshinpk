import { ShoppingCart, Code2, Puzzle, Sparkles, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Magento 2 Development",
      description: "Comprehensive Magento 2 solutions for modern e-commerce",
      features: [
        "Custom module creation",
        "Theme development",
        "API integrations",
        "Performance optimization",
        "Multi-store setup & configuration",
      ],
      gradient: "from-primary/10 to-transparent",
      iconBg: "from-primary/20 to-primary/5",
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack web development with modern technologies",
      features: [
        "Dynamic websites using PHP & CodeIgniter",
        "Frontend and UI improvements",
        "Responsive design",
        "Mobile-friendly applications",
      ],
      gradient: "from-secondary/10 to-transparent",
      iconBg: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Puzzle,
      title: "Custom Solutions",
      description: "Tailored development to meet unique business needs",
      features: [
        "Custom business logic implementation",
        "Bug fixing and troubleshooting",
        "Scalability enhancements",
        "Technical consultation",
      ],
      gradient: "from-accent/10 to-transparent",
      iconBg: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">What I Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.iconBg} border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all`}>
                  <service.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">{service.description}</p>

                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
