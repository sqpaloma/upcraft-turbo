import {
	BarChart3,
	Code,
	Figma,
	Globe,
	Megaphone,
	Palette,
	Smartphone,
	TrendingUp,
	Users,
	Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
	const headerRef = useScrollAnimation();
	const servicesRef = useScrollAnimation();
	const ctaRef = useScrollAnimation();

	const services = [
		{
			category: "Desenvolvimento Web",
			icon: Code,
			description: "Soluções web modernas e escaláveis",
			responsible: "João Silva",
			items: [
				{
					icon: Globe,
					title: "Sites Institucionais",
					desc: "Presença digital profissional e responsiva",
				},
				{
					icon: Zap,
					title: "Landing Pages",
					desc: "Páginas de alta conversão otimizadas",
				},
				{
					icon: BarChart3,
					title: "E-commerce",
					desc: "Lojas virtuais completas e seguras",
				},
				{
					icon: Smartphone,
					title: "Aplicativos Web",
					desc: "PWAs e aplicações web avançadas",
				},
			],
		},
		{
			category: "UI/UX Design",
			icon: Palette,
			description: "Design centrado no usuário",
			responsible: "Maria Santos",
			items: [
				{
					icon: Palette,
					title: "Design de Interface (UI)",
					desc: "Interfaces modernas e funcionais",
				},
				{
					icon: Users,
					title: "Experiência do Usuário (UX)",
					desc: "Jornadas otimizadas e intuitivas",
				},
				{
					icon: Figma,
					title: "Prototipagem no Figma",
					desc: "Protótipos interativos e colaborativos",
				},
				{
					icon: Zap,
					title: "Design System",
					desc: "Sistemas de design escaláveis",
				},
			],
		},
		{
			category: "Consultoria em Vendas",
			icon: TrendingUp,
			description: "Estratégias para acelerar crescimento",
			responsible: "Carlos Oliveira",
			items: [
				{
					icon: TrendingUp,
					title: "Estratégias de Vendas Digitais",
					desc: "Funis otimizados para conversão",
				},
				{
					icon: BarChart3,
					title: "CRM e Automação",
					desc: "Gestão inteligente de relacionamento",
				},
				{
					icon: Users,
					title: "Gestão de Projetos",
					desc: "Metodologias ágeis e eficientes",
				},
				{
					icon: Zap,
					title: "Treinamento de Times",
					desc: "Capacitação em vendas digitais",
				},
			],
		},
		{
			category: "Marketing Digital",
			icon: Megaphone,
			description: "Presença digital estratégica",
			responsible: "Ana Costa",
			items: [
				{
					icon: TrendingUp,
					title: "Tráfego Pago",
					desc: "Campanhas no Meta e Google Ads",
				},
				{
					icon: Users,
					title: "Social Media",
					desc: "Gestão estratégica de redes sociais",
				},
				{
					icon: Globe,
					title: "SEO e Conteúdo",
					desc: "Posicionamento orgânico otimizado",
				},
				{
					icon: BarChart3,
					title: "Analytics",
					desc: "Análise e otimização de resultados",
				},
			],
		},
	];

	return (
		<section
			id="services"
			className="relative overflow-hidden bg-background py-20"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-32 right-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
				<div className="absolute bottom-32 left-20 h-48 w-48 rounded-full bg-primary/20 blur-2xl" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				{/* Section Header */}
				<div ref={headerRef} className="mb-16 animate-on-scroll text-center">
					<div className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
						<Zap className="h-4 w-4 text-primary" />
						<span className="text-sm">Nossos Serviços</span>
					</div>

					<h2 className="mb-6 font-bold text-4xl md:text-5xl">
						Soluções
						<span className="gradient-primary bg-clip-text text-transparent">
							{" "}
							Completas
						</span>
					</h2>

					<p className="mx-auto max-w-3xl text-muted-foreground text-xl">
						Oferecemos uma gama completa de serviços digitais para impulsionar
						seu negócio ao próximo nível
					</p>
				</div>

				{/* Services Grid */}
				<div
					ref={servicesRef}
					className="grid animate-on-scroll grid-cols-1 gap-8 lg:grid-cols-2"
				>
					{services.map((service, index) => (
						<Card
							key={service.category}
							className="glass group animate-fade-in border-white/10 transition-all duration-500 hover:border-primary/30"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<CardHeader className="pb-4">
								<div className="mb-4 flex items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 transition-transform duration-300 group-hover:scale-110">
										<service.icon className="h-6 w-6 text-primary" />
									</div>
									<div>
										<CardTitle className="text-xl">
											{service.category}
										</CardTitle>
										<CardDescription className="text-muted-foreground">
											{service.description}
										</CardDescription>
									</div>
								</div>
								<div className="text-muted-foreground text-sm">
									<span className="font-medium text-primary">Responsável:</span>{" "}
									{service.responsible}
								</div>
							</CardHeader>

							<CardContent>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
									{service.items.map((item, _itemIndex) => (
										<div
											key={item.title}
											className="group/item rounded-lg bg-background/50 p-4 transition-all duration-300 hover:bg-background/80"
										>
											<div className="flex items-start gap-3">
												<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 transition-transform duration-300 group-hover/item:scale-110">
													<item.icon className="h-4 w-4 text-primary" />
												</div>
												<div>
													<h4 className="mb-1 font-semibold text-sm">
														{item.title}
													</h4>
													<p className="text-muted-foreground text-xs leading-relaxed">
														{item.desc}
													</p>
												</div>
											</div>
										</div>
									))}
								</div>

								<div className="mt-6">
									<Button
										variant="outline"
										className="group w-full border-primary/30 hover:border-primary"
									>
										Saiba Mais
										<service.icon className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* CTA Section */}
				<div ref={ctaRef} className="mt-16 animate-on-scroll text-center">
					<div className="glass mx-auto max-w-2xl rounded-2xl border border-white/20 p-8">
						<h3 className="mb-4 font-bold text-2xl">
							Pronto para Transformar Seu Negócio?
						</h3>
						<p className="mb-6 text-muted-foreground">
							Entre em contato e descubra como podemos acelerar seus resultados
							digitais
						</p>
						<Button variant="hero" size="lg" className="group">
							Solicitar Orçamento Personalizado
							<Zap className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
