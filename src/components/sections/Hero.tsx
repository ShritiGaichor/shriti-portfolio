
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide animate-slide-in opacity-0" style={{ animationDelay: "0.2s" }}>
                SENIOR SOFTWARE ENGINEER
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-slide-in opacity-0" style={{ animationDelay: "0.3s" }}>
                Shriti Gaichor
              </h1>
              <p className="text-xl text-muted-foreground mt-3 animate-slide-in opacity-0" style={{ animationDelay: "0.4s" }}>
                Innovative software engineer with 4.5 years of experience building responsive web applications.
              </p>
            </div>

            <p className="text-muted-foreground max-w-2xl animate-slide-in opacity-0" style={{ animationDelay: "0.5s" }}>
              Enthusiastic about developing forward-thinking solutions to tomorrow's productivity problems. Skilled in React, NextJS, and UI frameworks with a passion for creating exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-slide-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <a 
                href="#projects"
                className={cn(
                  "inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                  "shadow-sm hover:shadow-md hover:shadow-primary/10"
                )}
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className={cn(
                  "inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                  "border border-border"
                )}
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-primary/5">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Shriti Gaichor" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 aspect-square w-full rounded-2xl bg-secondary/80 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
