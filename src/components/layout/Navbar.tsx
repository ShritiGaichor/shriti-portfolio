
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-padding max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold">
          <span className="text-primary">S</span>hriti
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              isMobileMenuOpen && "transform rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-opacity duration-300",
              isMobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              isMobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 top-full px-4 py-2 bg-background border-b border-border/50 shadow-sm",
          "transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col space-y-4 py-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium px-2 py-1.5 hover:bg-secondary rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
