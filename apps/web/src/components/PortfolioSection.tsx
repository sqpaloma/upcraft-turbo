import {
  Code,
  ExternalLink,
  Github,
  Globe,
  Palette,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAPFadeIn, useGSAPStagger, useGSAPHover } from "@/hooks/useGSAP";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // GSAP Animation refs
  const headerRef = useGSAPFadeIn({ duration: 1, y: 50 });
  const filtersRef = useGSAPStagger(".filter-btn", {
    duration: 0.6,
    y: 20,
    stagger: 0.1,
    delay: 0.3,
  });
  const projectsRef = useGSAPStagger(".project-card", {
    duration: 0.8,
    y: 50,
    stagger: 0.15,
    delay: 0.5,
  });

  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      category: "web",
      type: "E-commerce",
      description:
        "Loja virtual completa com sistema de pagamentos integrado e dashboard administrativo.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "+300% conversões",
    },
    {
      id: 2,
      title: "App Banking Redesign",
      category: "design",
      type: "UI/UX Design",
      description:
        "Redesign completo de aplicativo bancário focado em experiência do usuário e acessibilidade.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["Figma", "Design System", "Prototyping", "User Research"],
      liveUrl: "https://figma.com",
      results: "95% satisfação usuários",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "web",
      type: "Aplicativo Web",
      description:
        "Dashboard analytics para SaaS com visualizações em tempo real e relatórios personalizados.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "WebSocket", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "40% redução churn",
    },
    {
      id: 4,
      title: "Landing Page Conversão",
      category: "marketing",
      type: "Landing Page",
      description:
        "Landing page otimizada para conversão com A/B testing e integração com ferramentas de marketing.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind", "Analytics", "Hotjar"],
      liveUrl: "https://example.com",
      results: "250% aumento leads",
    },
    {
      id: 5,
      title: "Sistema CRM Customizado",
      category: "web",
      type: "Sistema Web",
      description:
        "CRM personalizado para gestão de vendas com automações e integrações avançadas.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "Django", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "60% produtividade vendas",
    },
    {
      id: 6,
      title: "Brand Identity Startup",
      category: "design",
      type: "Branding",
      description:
        "Identidade visual completa para startup de tecnologia, incluindo logo, cores e guidelines.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&h=400&fit=crop",
      technologies: [
        "Adobe Creative",
        "Brand Guidelines",
        "Logo Design",
        "Visual Identity",
      ],
      liveUrl: "https://behance.net",
      results: "100% reconhecimento marca",
    },
  ];

  const filters = [
    { id: "all", label: "Todos os Projetos", icon: Globe },
    { id: "web", label: "Desenvolvimento", icon: Code },
    { id: "design", label: "Design", icon: Palette },
    { id: "marketing", label: "Marketing", icon: Smartphone },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-32 h-64 w-64 animate-float rounded-full bg-accent/20 blur-3xl" />
        <div
          className="absolute bottom-32 left-32 h-48 w-48 animate-float rounded-full bg-primary/20 blur-2xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm">Nosso Portfólio</span>
          </div>

          <h2 className="mb-6 font-bold text-4xl md:text-5xl">
            Projetos que
            <span className="gradient-primary bg-clip-text text-transparent">
              {" "}
              Transformam
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-muted-foreground text-xl">
            Cada projeto é uma história de sucesso. Veja como ajudamos nossos
            clientes a alcançar resultados extraordinários.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          ref={filtersRef}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "hero" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="filter-btn group"
            >
              <filter.icon className="mr-2 h-4 w-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="project-card glass group overflow-hidden border-white/10 transition-all duration-500 hover:border-primary/30"
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute right-4 bottom-4 left-4 flex gap-2">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="flex-1"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Live
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="secondary">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-primary/30 text-primary text-xs"
                    >
                      {project.results}
                    </Badge>
                  </div>

                  <h3 className="mb-2 font-bold text-lg transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/30"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Projeto
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass mx-auto max-w-2xl rounded-2xl border border-white/20 p-8">
            <h3 className="mb-4 font-bold text-2xl">Gostou do Que Viu?</h3>
            <p className="mb-6 text-muted-foreground">
              Que tal discutirmos como podemos criar algo incrível para o seu
              negócio?
            </p>
            <Button variant="hero" size="lg" className="group">
              Vamos Conversar
              <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
