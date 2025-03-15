
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

interface ProjectDetailProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  children: React.ReactNode;
}

const ProjectDetail = ({
  title,
  description,
  technologies,
  image,
  children,
}: ProjectDetailProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            className="mb-8 group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
              <p className="text-muted-foreground text-lg">{description}</p>
              
              <div className="flex flex-wrap gap-2 py-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {image && (
              <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] w-full">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            <div className="prose prose-slate dark:prose-invert max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ProjectDetail;
