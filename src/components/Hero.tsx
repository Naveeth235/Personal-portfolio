import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "../assets/hero-bg.jpg";
import profileImage from "../assets/Nav-picture.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden scroll-mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Portfolio Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float opacity-40" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-40 lg:pt-24 pb-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
        
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
          
          {/* Main Heading */}
          <div className="space-y-4 animate-fadeInUp">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
              Hello, I'm
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
              <span className="gradient-text">NAVEETH</span>
              <br />
              <span className="text-foreground">LAREEF</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
              Computer Science Student & Full-Stack Developer,
              passionate about creating innovative digital solutions.
            </p>
          </div>
        </div>

        {/* Right Side - Profile Image */}
  <div className="flex justify-center lg:justify-end animate-slideInLeft order-1 lg:order-2 mt-4 lg:mt-12">
          <div className="relative group">
            {/* Animated border ring */}
            <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-primary via-primary-glow to-accent rounded-full opacity-70 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
            
            {/* Main image container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[26rem] xl:h-[26rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-all duration-500">
              <img
                src={profileImage}
                alt="Naveeth Lareef"
                className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-800"
              />
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-30"></div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 hero-gradient rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 hero-gradient rounded-full opacity-15 blur-3xl"></div>
    </section>
  );
};

export default Hero;