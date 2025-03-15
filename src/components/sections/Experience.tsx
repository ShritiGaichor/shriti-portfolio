
import ExperienceCard from "@/components/ui/ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "12Grids",
      period: "Aug 2020 - Feb 2025",
      responsibilities: [
        "Designed and implemented user interfaces for web-based applications with API integration.",
        "Provided technical assistance to junior developers in debugging code.",
        "Monitored system performance and identified areas of improvement.",
        "Authored technical documents such as design specifications and user manuals.",
        "Documented software development processes and procedures for future use.",
        "Collaborated with team members to ensure successful project completion within timeline constraints.",
        "Analyzed business needs and created solutions that met customer expectations.",
        "Identified opportunities for automation of manual processes.",
        "Mentored junior developers and engineers to increase productivity."
      ]
    }
  ];

  const achievements = [
    "Community Service Award - Jan 2025",
    "Associate of the month - March 2022",
    "Associate of the month - March 2021",
    "Extraordinary Performance of the Month - Jan 2021"
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
          <p className="text-muted-foreground">My professional journey and achievements</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                period={exp.period}
                responsibilities={exp.responsibilities}
              />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-xl p-6 border border-border/50 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <p className="font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
