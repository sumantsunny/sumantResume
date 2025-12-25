import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center pb-6 border-b-2 border-primary/20">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
        Sumant Kumar
      </h1>
      <p className="text-lg md:text-xl text-primary font-medium mb-4">
        Frontend Developer
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base">
        <a
          href="mailto:Sumantsunny63@gmail.com"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
          <span>Sumantsunny63@gmail.com</span>
        </a>
        
        <a
          href="tel:+918789927623"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Phone"
        >
          <Phone className="w-4 h-4" />
          <span>+91 8789927623</span>
        </a>
        
        <a
          href="https://linkedin.com/in/sumant-kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        
        <a
          href="https://github.com/sumant-kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
