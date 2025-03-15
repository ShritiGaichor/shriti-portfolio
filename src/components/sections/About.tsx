
import { Briefcase, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
          <p className="text-muted-foreground">Get to know my professional journey and what drives me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border/50 shadow-xl shadow-primary/5">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="About Shriti Gaichor" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6 flex flex-col justify-center">
            <div className="flex items-start space-x-3 animate-slide-in opacity-0" style={{ animationDelay: "0.4s" }}>
              <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional Profile</h3>
                <p className="text-muted-foreground">
                  I'm a Senior Software Engineer with 4.5 years of experience building web applications that solve real-world problems. My expertise spans across frontend and backend technologies, with a particular focus on creating responsive and user-friendly interfaces.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 animate-slide-in opacity-0" style={{ animationDelay: "0.5s" }}>
              <div className="mt-1 p-2 rounded-full bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Work Philosophy</h3>
                <p className="text-muted-foreground">
                  I believe in creating clean, maintainable code and focusing on the user experience. My approach combines technical expertise with a deep understanding of client needs to deliver solutions that exceed expectations.
                </p>
              </div>
            </div>

            <div className="animate-slide-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <div className="border-l-2 border-primary/30 pl-4 space-y-2">
                <div>
                  <p className="font-medium">Bachelor of Science (Computer Science)</p>
                  <p className="text-muted-foreground">Mumbai University</p>
                  <p className="text-sm text-muted-foreground">2017 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
