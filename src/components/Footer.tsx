import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/naveeth-lareef/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_nav235?igsh=MXV1bm1rMG9kdHZldA==", label: "Instagram" },
    { icon: Github, href: "https://github.com/Naveeth235", label: "GitHub" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-8 rounded-t-3xl shadow-lg mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="font-bold text-xl text-white">NAVEETH LAREEF</h2>
          <p className="text-primary-foreground/80 text-sm max-w-md">
            CS undergrad passionate about turning innovative ideas into elegant code.
          </p>
          <p className="text-primary-foreground/60 text-xs">
            © 2025 All Rights Reserved.
          </p>
        </div>

        {/* Right Section - Social + Contact */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex space-x-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth hover:scale-110"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth text-xs px-4 py-2"
            asChild
          >
            <a href="#contact">
              <Mail className="w-4 h-4 mr-1" />
              CONTACT ME
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}