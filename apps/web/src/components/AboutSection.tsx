import { Award, Target, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const headerRef = useScrollAnimation();
  const storyRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  const team = [
    {
      name: "João Silva",
      role: "CEO & Desenvolvedor Full-Stack",
      area: "Desenvolvimento Web",
      experience: "8+ anos",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Maria Santos",
      role: "Head of Design",
      area: "UI/UX Design",
      experience: "6+ anos",
      skills: ["Figma", "Adobe Suite", "Design System", "UX Research"],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Carlos Oliveira",
      role: "Consultor de Vendas Senior",
      area: "Consultoria em Vendas",
      experience: "10+ anos",
      skills: ["CRM", "Automação", "Gestão", "Estratégia"],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Ana Costa",
      role: "Marketing Digital Specialist",
      area: "Marketing Digital",
      experience: "5+ anos",
      skills: ["Google Ads", "Meta Ads", "SEO", "Analytics"],
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const stats = [
    { icon: Users, label: "Clientes Satisfeitos", value: "150+" },
    { icon: Target, label: "Projetos Entregues", value: "300+" },
    { icon: Zap, label: "Anos de Experiência", value: "8+" },
    { icon: Award, label: "Prêmios Recebidos", value: "12+" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 h-64 w-64 animate-float rounded-full bg-primary/20 blur-3xl" />
        <div
          className="absolute right-20 bottom-20 h-48 w-48 animate-float rounded-full bg-accent/20 blur-2xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 animate-on-scroll text-center">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm">Sobre Nós</span>
          </div>

          <h2 className="mb-6 font-bold text-4xl md:text-5xl">
            Uma Equipe
            <span className="gradient-primary bg-clip-text text-transparent">
              {" "}
              Apaixonada
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-muted-foreground text-xl">
            Somos especialistas em transformar ideias em realidade digital.
            Nossa missão é impulsionar negócios através de soluções tecnológicas
            inovadoras e estratégias eficazes.
          </p>
        </div>

        {/* Company Story */}
        <div
          ref={storyRef}
          className="mx-auto mb-20 max-w-4xl animate-on-scroll"
        >
          <Card className="glass border-white/10 p-8">
            <CardContent className="p-0">
              <h3 className="mb-6 text-center font-bold text-2xl">
                Nossa História
              </h3>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Fundada em 2016, a{" "}
                    <strong className="text-primary">TechFlow</strong> nasceu da
                    visão de democratizar o acesso a soluções digitais de
                    qualidade. Começamos como uma startup focada em
                    desenvolvimento web e evoluímos para uma agência completa.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Hoje, oferecemos serviços integrados que vão desde a
                    concepção do design até a implementação de estratégias de
                    vendas, sempre com foco em resultados mensuráveis e
                    experiências excepcionais.
                  </p>
                </div>
                <div className="relative">
                  <div className="flex h-64 w-full items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="text-center">
                      <Zap className="mx-auto mb-4 h-16 w-16 animate-pulse-glow text-primary" />
                      <p className="font-semibold text-lg">
                        Inovação & Qualidade
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Desde 2016
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mb-20 grid animate-on-scroll grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="glass animate-scale-in border-white/10 p-6 text-center transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <div className="mb-1 font-bold text-2xl">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Team */}
        <div ref={teamRef} className="animate-on-scroll">
          <h3 className="mb-12 text-center font-bold text-3xl">
            Conheça Nossa
            <span className="gradient-primary bg-clip-text text-transparent">
              {" "}
              Equipe
            </span>
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="glass group animate-fade-in overflow-hidden border-white/10 transition-all duration-500 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="p-6">
                    <h4 className="mb-1 font-bold text-lg">{member.name}</h4>
                    <p className="mb-2 text-primary text-sm">{member.role}</p>
                    <p className="mb-3 text-muted-foreground text-sm">
                      {member.area}
                    </p>

                    <div className="mb-4 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {member.experience}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-primary/30 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
