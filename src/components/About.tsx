import { GraduationCap, Users, Lightbulb, Target, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const qualities = [
    { icon: Lightbulb, title: "Smart Worker", description: "Efficient problem-solving approach", color: "from-primary/20 to-primary/5" },
    { icon: Target, title: "Dedicated", description: "Committed to excellence", color: "from-secondary/20 to-secondary/5" },
    { icon: Users, title: "Team Player", description: "Collaborative and supportive", color: "from-accent/20 to-accent/5" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">My Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <p className="text-xl text-foreground leading-relaxed">
                Arshin is a <span className="relative inline-block text-primary font-semibold">
                  Software Engineer
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-primary/10 -z-10"></span>
                </span> with 3 years of experience, 
                specializing in PHP and Magento 2 development. He has expertise in frontend and backend Magento development, 
                CodeIgniter-based web applications, and advanced customizations.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Known as a smart worker, dedicated team player, and problem solver, Arshin brings a unique blend of 
                technical proficiency and collaborative spirit to every project.
              </p>
            </div>

            {/* Enhanced Education Card */}
            <Card className="group relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">B.Sc. Computer Science</h3>
                  <p className="text-foreground/80 font-medium mb-1">College of Applied Science Pinarayi</p>
                  <p className="text-sm text-muted-foreground">Kannur University • 2021</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced Personal Qualities */}
          <div className="grid gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {qualities.map((quality, index) => (
              <Card
                key={index}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10 flex items-start gap-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${quality.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all border border-primary/10`}>
                    <quality.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">{quality.title}</h3>
                    <p className="text-muted-foreground text-base">{quality.description}</p>
                  </div>
                </div>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
