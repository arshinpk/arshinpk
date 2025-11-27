import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge with icon */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/50 backdrop-blur-sm rounded-full text-sm border border-primary/30 hover:border-primary/50 transition-all">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-foreground font-medium">Available for Projects</span>
            </div>
            
            {/* Main heading with enhanced styling */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="text-gradient relative z-10">Arshin P K</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 blur-lg"></span>
                </span>
              </h1>
              
              {/* Subtitle with icons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-lg md:text-xl text-muted-foreground">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-lg">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span>Software Engineer</span>
                </div>
                <span className="text-muted-foreground/40">•</span>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-lg">
                  <Zap className="w-4 h-4 text-secondary" />
                  <span>Magento 2 Expert</span>
                </div>
              </div>
            </div>
            
            {/* Description with better typography */}
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
              A <span className="text-primary font-semibold">smart</span>, <span className="text-primary font-semibold">dedicated</span>, and <span className="text-primary font-semibold">results-driven</span> software engineer with <span className="text-secondary font-semibold">3 years</span> of experience 
              specializing in Magento 2, PHP, and modern web development.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base overflow-hidden"
                onClick={() => scrollToSection("portfolio")}
              >
                <span className="relative z-10 flex items-center">
                  View Portfolio
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-8 py-6 text-base backdrop-blur-sm"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Enhanced Social Links with glassmorphism */}
            <div className="flex gap-3 justify-center lg:justify-start pt-4">
              <a
                href="mailto:arshinashi@gmail.com"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all hover:scale-110 overflow-hidden"
              >
                <Mail className="w-5 h-5 relative z-10 text-foreground group-hover:text-primary-foreground transition-colors" />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="https://in.linkedin.com/in/arshin-p-k-b04695210"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all hover:scale-110 overflow-hidden"
              >
                <Linkedin className="w-5 h-5 relative z-10 text-foreground group-hover:text-primary-foreground transition-colors" />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all hover:scale-110 overflow-hidden"
              >
                <Github className="w-5 h-5 relative z-10 text-foreground group-hover:text-primary-foreground transition-colors" />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>

          {/* Enhanced Profile Picture */}
          <div className="flex-1 flex justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-glow"></div>
              
              {/* Rotating border gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-30 animate-spin" style={{ animationDuration: "8s" }}></div>
              
              {/* Main profile container with glassmorphism */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-card/30 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center overflow-hidden group-hover:border-primary/60 transition-all m-2">
                {/* Inner content */}
                <div className="text-center p-8 relative z-10">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20 group-hover:scale-110 transition-transform">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Profile Picture</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
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
