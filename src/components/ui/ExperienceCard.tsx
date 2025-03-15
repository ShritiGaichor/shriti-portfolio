
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  className?: string;
}

const ExperienceCard = ({
  title,
  company,
  period,
  responsibilities,
  className,
}: ExperienceCardProps) => {
  return (
    <div 
      className={cn(
        "group relative rounded-xl border border-border/50 bg-card p-6",
        "transition-all duration-300 ease-in-out",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
        </div>
        <span className="text-muted-foreground text-sm mt-1 md:mt-0">{period}</span>
      </div>
      
      <ul className="space-y-2 list-disc list-inside text-muted-foreground">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="transition-transform duration-300 group-hover:translate-x-1">
            {responsibility}
          </li>
        ))}
      </ul>
      
      {/* Subtle gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ExperienceCard;
