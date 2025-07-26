import { useGSAPCounter, useGSAPFadeIn } from "@/hooks/useGSAP";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Zap } from "lucide-react";

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({
  icon: Icon,
  value,
  label,
  suffix = "",
  delay = 0,
}: StatItemProps) => {
  const counterRef = useGSAPCounter(value, {
    duration: 2.5,
    scrollTrigger: true,
  });

  const cardRef = useGSAPFadeIn({
    duration: 0.8,
    y: 30,
    delay: delay + 0.2,
    scrollTrigger: true,
  });

  return (
    <Card
      ref={cardRef}
      className="text-center border-none bg-white/5 backdrop-blur-sm"
    >
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">
            <span ref={counterRef}>0</span>
            <span className="text-purple-300">{suffix}</span>
          </div>
          <p className="text-white/70 text-sm font-medium">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const AnimatedStats = () => {
  const containerRef = useGSAPFadeIn({
    duration: 1,
    y: 50,
    scrollTrigger: true,
    scrollTriggerOptions: {
      start: "top 85%",
    },
  });

  const stats = [
    {
      icon: Users,
      value: 150,
      label: "Clientes Satisfeitos",
      suffix: "+",
      delay: 0,
    },
    {
      icon: Target,
      value: 300,
      label: "Projetos Concluídos",
      suffix: "+",
      delay: 0.2,
    },
    {
      icon: Award,
      value: 5,
      label: "Anos de Experiência",
      suffix: "+",
      delay: 0.4,
    },
    {
      icon: Zap,
      value: 98,
      label: "Taxa de Sucesso",
      suffix: "%",
      delay: 0.6,
    },
  ];

  return (
    <div ref={containerRef} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Nossos Números Falam Por Si
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Resultados que demonstram nossa dedicação e expertise em transformar
            ideias em realidade digital.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;
