import { ShoppingCart, Code2, Puzzle } from "lucide-react";
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
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:card-glow animate-fade-in overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
