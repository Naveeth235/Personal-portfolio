import { Mail, MapPin, Phone, Linkedin, Instagram, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "mnaveeth235@gmail.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "(+94) 76 984 8168",
      action: "Call Me"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "Colombo, Sri Lanka",
      action: "View Map"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn",
      description: "Connect with me professionally",
      href: "https://www.linkedin.com/in/naveeth-lareef",
      color: "hover:text-blue-600 hover:bg-blue-50"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram", 
      description: "Follow my journey",
      href: "https://www.instagram.com/_nav235?igsh=MXV1bm1rMG9kdHZldA==",
      color: "hover:text-pink-600 hover:bg-pink-50"
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: "GitHub",
      description: "Check out my code",
      href: "https://github.com/Naveeth235",
      color: "hover:text-gray-800 hover:bg-gray-50"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Contact Info */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold mb-8">
                Let's <span className="gradient-text">Connect</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having 
                a friendly conversation about technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactInfo.map((info) => (
                <Card 
                  key={info.title} 
                  className="glass-card border-none group hover:glow-primary transition-smooth"
                >
                  <CardContent className="p-6 text-center">
                    <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform w-fit mx-auto mb-4">
                      {info.icon}
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8 animate-slideInUp">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8">
                Follow Me <span className="gradient-text">Online</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {socialLinks.map((social) => (
                <Card 
                  key={social.title} 
                  className="glass-card border-none group hover:glow-primary transition-smooth cursor-pointer"
                >
                  <CardContent className="p-8 text-center">
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className={`p-4 rounded-xl transition-all group-hover:scale-110 w-fit mx-auto mb-4 ${social.color}`}>
                        {social.icon}
                      </div>
                      <h4 className="font-semibold text-xl mb-2 group-hover:gradient-text transition-all">{social.title}</h4>
                      <p className="text-muted-foreground">{social.description}</p>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fadeInUp">
            <Button 
              size="lg"
              className="px-8 py-6 text-lg bg-primary hover:bg-primary-glow text-primary-foreground glow-primary transition-bounce group"
              asChild
            >
              <a href="#" download>
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;