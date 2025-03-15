
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 bg-secondary/30">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Shriti Gaichor. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/shriti-gaichor/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-foreground/80" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-foreground/80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
