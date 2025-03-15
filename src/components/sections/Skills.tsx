
import SkillBadge from "@/components/ui/SkillBadge";

const Skills = () => {
  const technicalSkills = [
    "HTML5",
    "CSS (Bootstrap, Tailwind)",
    "JQuery",
    "JS (ReactJS, NextJS)",
    "NodeJS (Fastify)",
    "PHP (Laravel)"
  ];

  const expertiseAreas = [
    "Responsive Web Design",
    "UI Frameworks Expertise",
    "RESTful API Integration",
    "Code Review Experience",
    "Client Management",
    "Optimization",
    "Problem-Solving",
    "Leadership",
    "React and NextJS Proficiency",
    "UI and UX Design",
    "Project Planning",
    "Teamwork and Collaborations"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
          <p className="text-muted-foreground">Technical skills and professional expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
              <div className="p-6 bg-secondary/50 rounded-xl border border-border/50">
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.map((skill, index) => (
                    <SkillBadge key={index} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
              <div className="p-6 bg-secondary/50 rounded-xl border border-border/50">
                <div className="flex flex-wrap gap-3">
                  {expertiseAreas.map((skill, index) => (
                    <SkillBadge key={index} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary/80 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
            <p className="text-muted-foreground">
              Creating responsive, accessible, and modern user interfaces with frameworks like React and Next.js.
            </p>
          </div>

          <div className="p-6 bg-secondary/80 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            <h4 className="text-xl font-semibold mb-2">Backend Integration</h4>
            <p className="text-muted-foreground">
              Connecting frontends to APIs and services, handling data efficiently and securely with Node.js.
            </p>
          </div>

          <div className="p-6 bg-secondary/80 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
            <h4 className="text-xl font-semibold mb-2">Project Management</h4>
            <p className="text-muted-foreground">
              Leading teams, planning project lifecycles, and ensuring successful delivery within constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
