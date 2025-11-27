import { Code, Database, Layout, Zap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Skills = () => {
  const skillCategories = [{
    icon: Code,
    title: "Programming & Frameworks",
    skills: ["PHP", "Magento 2", "CodeIgniter", "JavaScript", "Knockout.js", "jQuery", "AJAX"],
    gradient: "from-primary/20 via-primary/10 to-transparent"
  }, {
    icon: Database,
    title: "Database & Backend",
    skills: ["MySQL", "API Development", "Server-side Logic"],
    gradient: "from-secondary/20 via-secondary/10 to-transparent"
  }, {
    icon: Layout,
    title: "Frontend",
    skills: ["HTML", "CSS", "Responsive Design", "UI/UX"],
    gradient: "from-accent/20 via-accent/10 to-transparent"
  }, {
    icon: Zap,
    title: "Core Strengths",
    skills: ["Team Collaboration", "Performance Optimization", "Custom Module Development", "Magento Expertise"],
    gradient: "from-primary/20 via-secondary/10 to-transparent"
  }];
  return <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => <Card key={index} style={{
          animationDelay: `${index * 0.1}s`
        }} className="group relative p-8 backdrop-blur-sm border-border hover:border-primary/50 transition-all overflow-hidden animate-fade-in bg-slate-900">
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all border border-primary/20">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="text-sm px-5 py-2.5 bg-muted/70 backdrop-blur-sm hover:bg-primary hover:scale-105 transition-all cursor-default border border-border hover:border-primary font-medium text-primary">
                      {skill}
                    </Badge>)}
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Skills;