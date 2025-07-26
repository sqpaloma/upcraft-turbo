import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#home", section: "home" },
    { label: "Sobre", href: "#about", section: "about" },
    { label: "Serviços", href: "#services", section: "services" },
    { label: "Portfólio", href: "#portfolio", section: "portfolio" },
    { label: "Contato", href: "#contact", section: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMobileMenu();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              !isScrolled && location.pathname === "/home"
                ? "text-white"
                : "gradient-primary bg-clip-text text-transparent"
            }`}
          >
            UpCraftCrew
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className={`transition-colors duration-300 relative group ${
                  !isScrolled
                    ? "text-white/90 hover:text-white"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    !isScrolled ? "bg-white" : "bg-primary"
                  } w-0 group-hover:w-full`}
                ></span>
              </button>
            ))}
            <Button
              variant={
                !isScrolled && location.pathname === "/home"
                  ? "outline"
                  : "hero"
              }
              size="sm"
              className={
                !isScrolled && location.pathname === "/home"
                  ? "text-white border-white/50 hover:bg-white hover:text-purple-600 bg-transparent"
                  : ""
              }
            >
              Orçamento
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              !isScrolled && location.pathname === "/home"
                ? "text-white hover:text-white/80"
                : "text-foreground hover:text-primary"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.section)}
                  className={`block w-full text-left transition-colors duration-300 ${
                    !isScrolled
                      ? "text-white/90 hover:text-white"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant={
                  !isScrolled && location.pathname === "/home"
                    ? "outline"
                    : "hero"
                }
                size="sm"
                className={`w-full ${
                  !isScrolled && location.pathname === "/home"
                    ? "text-white border-white/50 hover:bg-white hover:text-purple-600 bg-transparent"
                    : ""
                }`}
              >
                Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
