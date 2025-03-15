
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge = ({ name, className }: SkillBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
        "bg-secondary hover:bg-secondary/80",
        "border border-border/40",
        className
      )}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
