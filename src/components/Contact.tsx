import { Mail, Linkedin, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arshinashi@gmail.com",
      href: "mailto:arshinashi@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "arshin-p-k",
      href: "https://in.linkedin.com/in/arshin-p-k-b04695210",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kochi, Kerala",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:card-glow text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{info.label}</h3>
                
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 p-12 bg-gradient-to-br from-card to-muted/50 border-border text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start a project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, and potential collaborations.
            </p>
            <a
              href="mailto:arshinashi@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105"
            >
              Send Me a Message
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
