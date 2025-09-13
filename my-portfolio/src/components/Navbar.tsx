import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="glass-navbar fixed w-[90%] z-50 top-4 left-1/2 -translate-x-1/2 rounded-3xl shadow-lg max-w-screen-xl mx-auto">
      <div className="flex flex-wrap items-center justify-between p-6">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/nav-logo.png"
            className="h-12 w-12 rounded-xl"
            alt="Naveeth Lareef Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-foreground">
            NAVEETH LAREEF
          </span>
        </a>
        
        {/* Hamburger for mobile */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Nav links */}
        <div
          className={`
            w-full md:flex md:w-auto md:order-2
            transition-all duration-300 ease-in-out
            overflow-hidden
            ${isOpen ? "max-h-96 opacity-100 flex" : "max-h-0 opacity-0 hidden"}
            md:max-h-full md:opacity-100 md:flex
          `}
        >
          <ul className="flex flex-col gap-3 p-0 mt-4 font-medium md:gap-2 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:items-center md:ml-auto w-full transition-all duration-300 ease-in-out">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full md:w-auto">
                <Button
                  variant="secondary" 
                  className="w-full text-center py-2 px-6 transition-smooth hover:glow-primary md:w-auto"
                  asChild
                >
                  <a href={link.href}>{link.name}</a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;