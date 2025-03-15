
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  className,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-xl border border-border/50 bg-card p-6",
        "transition-all duration-300 ease-in-out",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        "h-full flex flex-col",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden h-48 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-primary font-medium transition-all duration-300">
          View Project
          <ArrowRight 
            className={cn(
              "ml-1 w-4 h-4 transition-transform duration-300",
              isHovered ? "translate-x-1" : ""
            )}
          />
        </div>
      </div>
      
      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ProjectCard;
