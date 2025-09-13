import { Github, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "FreshRoots – Online Marketplace for Local Sellers",
      description: "An e-commerce marketplace connecting buyers directly with local sellers like farmers, bakers, and small businesses. Features area-based product listings, seller registration with admin approval, and role-based dashboards for Admin, Sellers and Users.",
      tags: ["Java Spring Boot", "React", "MongoDB", "JWT", "REST APIs"],
      date: "2025",
      status: "Completed",
      github: "https://github.com/Naveeth235/FreshRoots.git",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=300&fit=crop"
    },
    {
      title: "PetCare+ – Veterinary Hospital Management System",
      description: "A full-stack web application for managing pet care services with user registration, admin panel, and role-based access control. Features responsive React frontend, Azure SQL persistence, and automated CI/CD pipelines with Docker containerization.",
      tags: ["C#", "ASP.NET Core", "React", "Azure SQL", "Docker", "Azure DevOps"],
      date: "2025",
      status: "In Progress",
      github: "https://github.com/Kanchan1015/PetCarePlus.git",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=300&fit=crop"
    },
    {
      title: "NexusLearn – Interactive Learning Platform",
      description: "A full-stack educational platform built with microservices architecture for students to access course materials and learn interactively while attempting quizzes. Features randomized questions, real-time results, and role-based access for Admin/Student users.",
      tags: ["Java Spring Boot", "React", "Microservices", "PostgreSQL", "Eureka", "OpenFeign"],
      date: "2025",
      status: "In Progress",
      github: "https://github.com/Naveeth235/NexusLearn.git",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop"
    },
    {
      title: "FormLang++ – Domain-Specific Language for Dynamic Form Generation",
      description: "A Domain-Specific Language (DSL) for creating interactive HTML forms with validation. Built lexer with Lex and parser with Yacc (Bison) to translate DSL scripts into clean HTML. Supports multiple field types, validation rules, and automated HTML generation with proper formatting.",
      tags: ["Lex", "Yacc (Bison)", "C", "HTML", "CSS"],
      date: "2025",
      status: "Completed",
      github: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop"
    },
    {
      title: "FliSuper – Full-Stack E-Commerce Application",
      description: "A comprehensive e-commerce platform with customer features like product listings, search/sorting, cart & checkout with multiple payment options, and promo codes. Includes admin dashboard for managing products, orders, and users with JWT authentication.",
      tags: ["Java Spring Boot", "React", "MySQL", "JWT", "Spring Security", "REST APIs", "CSS"],
      date: "2024",
      status: "Completed",
      github: "https://github.com/Naveeth235/Fli-super-supermarket-app.git",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills with modern design, smooth animations, and optimal performance.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      date: "2024",
      status: "Completed",
      github: "https://github.com/Naveeth235/Personal-portfolio.git",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card border-none group hover:glow-primary transition-smooth overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-black text-green-400 border border-green-500/80' 
                      : 'bg-black text-yellow-400 border border-yellow-500/80'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <CardHeader className="space-y-4">
                {/* Project Title & Date */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Tag className="w-4 h-4 text-primary" />
                    <span>Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start">
                  <Button 
                    size="sm"
                    className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white border-none group/btn transition-smooth"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 text-white group-hover/btn:scale-110 transition-transform" />
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-bounce group"
            asChild
          >
            <a href="https://github.com/Naveeth235" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;