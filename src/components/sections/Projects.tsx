
import ProjectCard from "@/components/ui/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Ticket Booking System",
      description: "A comprehensive ticket booking system with support for online, offline and kiosk bookings. Integrated secure payment gateway and responsive design.",
      technologies: ["HTML", "CSS", "Bootstrap", "REST API"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      slug: "ticket-booking-system"
    },
    {
      title: "OnestopNDT (Media Platform)",
      description: "A full-featured media platform with user authentication, role-based access, and content management dashboard.",
      technologies: ["HTML", "CSS", "React", "Bootstrap", "REST API"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      slug: "onestop-ndt"
    },
    {
      title: "Swimming Pool Online Booking System",
      description: "An interactive booking system for swimming pools with member profile management and payment integration.",
      technologies: ["HTML", "CSS", "React", "REST API"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      slug: "swimming-pool-booking"
    },
    {
      title: "Facebio (Face Detection & Attendance System)",
      description: "Automated attendance tracking system using face detection, integrated with Aadhaar APIs for authentication.",
      technologies: ["HTML", "CSS", "JavaScript", "REST API"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      slug: "facebio"
    },
    {
      title: "Content Management System",
      description: "Modern CMS with role-based access control, built with performance optimizations including caching and lazy loading.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      slug: "content-management-system"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
          <p className="text-muted-foreground">Showcasing my work and accomplishments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
