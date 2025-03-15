
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Reset success message after a delay
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="space-y-4 max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
          <p className="text-muted-foreground">Let's talk about your project or job opportunity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 animate-slide-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out to me for project inquiries, job opportunities, or just to say hello!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919405184313" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9405184313
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:shritigaichor@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      shritigaichor@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 animate-slide-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="p-6 bg-card rounded-xl border border-border/50 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <p className="text-primary font-medium">Thank you for your message! I'll get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-32"
                    placeholder="Your message"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "shadow-sm hover:shadow-md hover:shadow-primary/10",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
