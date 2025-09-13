import { Code, Laptop, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "HTML", "JavaScript"],
      icon: <Laptop className="w-8 h-8" />
    },
    {
      category: "Backend",
      items: ["Java", "C#", "Spring", "ASP.NET", "PostgreSQL", "MongoDB"],
      icon: <Code className="w-8 h-8" />
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "Postman", "AWS", "Azure", "Figma", "Linux", "Jira"],
      icon: <Lightbulb className="w-8 h-8" />
    }
  ];

  return (
    <section id="about" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate developer who loves turning complex problems into elegant solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Personal Story */}
          <div className="space-y-6 animate-fadeInUp">
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science undergraduate with a strong passion for technology, 
                problem-solving, and innovation. My journey in programming began with curiosity 
                and has grown into a drive to create digital solutions that make a real impact.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m currently focused on expanding my skills in software development while 
                exploring the fields of Artificial Intelligence and Machine Learning. 
                I enjoy building user-friendly applications, working on challenging projects, 
                and continuously learning. Beyond coding, I like brainstorming new ideas, 
                contributing to communities, and exploring creative ways to apply technology 
                in everyday life.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-semibold">Problem Solver</span>
                </div>
                <div className="px-4 py-2 bg-accent/10 rounded-full">
                  <span className="text-accent font-semibold">Creative Thinker</span>
                </div>
                <div className="px-4 py-2 bg-primary-glow/10 rounded-full">
                  <span className="text-primary-glow font-semibold">Team Player</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Skills Grid */}
          <div className="space-y-6 animate-slideInRight">
            <h3 className="text-3xl font-bold text-center lg:text-left mb-8">
              Technical <span className="gradient-text">Skills</span>
            </h3>
            
            <div className="grid gap-6">
              {skills.map((skillCategory, index) => (
                <Card key={skillCategory.category} className="glass-card border-none hover:glow-primary transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                        {skillCategory.icon}
                      </div>
                      <h4 className="text-xl font-bold">{skillCategory.category}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-smooth cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;