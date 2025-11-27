import { Mail, Linkedin, MapPin, Sparkles, Send } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arshinashi@gmail.com",
      href: "mailto:arshinashi@gmail.com",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "arshin-p-k",
      href: "https://in.linkedin.com/in/arshin-p-k-b04695210",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kochi, Kerala",
      href: null,
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all text-center overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${info.gradient} border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all`}>
                    <info.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{info.label}</h3>
                  
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors break-all text-base font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-base font-medium">{info.value}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <Card className="group relative mt-12 p-14 bg-card/50 backdrop-blur-sm border-border text-center animate-fade-in overflow-hidden" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start a project?
              </h3>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, and potential collaborations.
              </p>
              <a
                href="mailto:arshinashi@gmail.com"
                className="group/button relative inline-flex items-center justify-center px-10 py-5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg transition-all hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Send Me a Message
                  <Send className="ml-3 w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/button:opacity-100 transition-opacity"></div>
              </a>
            </div>
            
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
