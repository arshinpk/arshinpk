import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-muted rounded-full text-sm text-primary border border-primary/20">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Arshin P K</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Software Engineer | Magento 2 Developer | PHP Developer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              A smart, dedicated, and results-driven software engineer with 3 years of experience 
              specializing in Magento 2, PHP, and modern web development.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection("portfolio")}
              >
                View Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="mailto:arshinashi@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://in.linkedin.com/in/arshin-p-k-b04695210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Picture Placeholder */}
          <div className="flex-1 flex justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-muted to-card border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Profile Picture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
