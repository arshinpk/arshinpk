import { Code, Database, Layout, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: ["PHP", "Magento 2", "CodeIgniter", "JavaScript", "Knockout.js", "jQuery", "AJAX"],
    },
    {
      icon: Database,
      title: "Database & Backend",
      skills: ["MySQL", "API Development", "Server-side Logic"],
    },
    {
      icon: Layout,
      title: "Frontend",
      skills: ["HTML", "CSS", "Responsive Design", "UI/UX"],
    },
    {
      icon: Zap,
      title: "Core Strengths",
      skills: ["Team Collaboration", "Performance Optimization", "Custom Module Development", "Magento Expertise"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all group hover:card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
