import { GraduationCap, Users, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const qualities = [
    { icon: Lightbulb, title: "Smart Worker", description: "Efficient problem-solving approach" },
    { icon: Target, title: "Dedicated", description: "Committed to excellence" },
    { icon: Users, title: "Team Player", description: "Collaborative and supportive" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-foreground leading-relaxed">
              Arshin is a <span className="text-primary font-semibold">Software Engineer</span> with 3 years of experience, 
              specializing in PHP and Magento 2 development. He has expertise in frontend and backend Magento development, 
              CodeIgniter-based web applications, and advanced customizations.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Known as a smart worker, dedicated team player, and problem solver, Arshin brings a unique blend of 
              technical proficiency and collaborative spirit to every project.
            </p>

            {/* Education */}
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">B.Sc. Computer Science</h3>
                  <p className="text-muted-foreground">College of Applied Science Pinarayi</p>
                  <p className="text-sm text-muted-foreground">Kannur University • 2021</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Personal Qualities */}
          <div className="grid gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {qualities.map((quality, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all group hover:card-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <quality.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{quality.title}</h3>
                    <p className="text-muted-foreground">{quality.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
