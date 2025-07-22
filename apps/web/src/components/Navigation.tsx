import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="gradient-primary bg-clip-text font-bold text-2xl text-transparent">
            TechFlow
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="group relative text-foreground transition-colors duration-300 hover:text-primary"
              >
                {item.label}
                <span className="-bottom-1 absolute left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button variant="hero" size="sm">
              Orçamento
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground transition-colors hover:text-primary md:hidden"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="glass absolute top-full right-0 left-0 animate-fade-in border-white/10 border-t md:hidden">
            <div className="space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="hero" size="sm" className="w-full">
                Orçamento
              </Button>
              <div className="flex justify-center pt-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
