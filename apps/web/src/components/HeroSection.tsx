import { ArrowDown, Code, Palette, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
	const scrollToServices = () => {
		const element = document.querySelector("#services");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
		>
			{/* Animated Background */}
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-20 left-20 h-32 w-32 animate-float rounded-full bg-primary/20 blur-3xl" />
				<div
					className="absolute top-40 right-32 h-24 w-24 animate-float rounded-full bg-accent/20 blur-2xl"
					style={{ animationDelay: "1s" }}
				/>
				<div
					className="absolute bottom-32 left-1/3 h-40 w-40 animate-float rounded-full bg-primary-glow/20 blur-3xl"
					style={{ animationDelay: "2s" }}
				/>
			</div>

			<div className="container relative z-10 mx-auto px-4 text-center">
				<div className="mx-auto max-w-4xl">
					{/* Badge */}
					<div className="glass mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/20 px-4 py-2">
						<Sparkles className="h-4 w-4 text-primary" />
						<span className="text-sm">
							Transformando ideias em realidade digital
						</span>
					</div>

					{/* Main Heading */}
					<h1
						className="mb-6 animate-fade-in font-bold text-5xl md:text-7xl"
						style={{ animationDelay: "0.2s" }}
					>
						Criamos
						<span className="gradient-primary block bg-clip-text text-transparent">
							Experiências Digitais
						</span>
						Extraordinárias
					</h1>

					{/* Subtitle */}
					<p
						className="mx-auto mb-12 max-w-3xl animate-fade-in text-muted-foreground text-xl md:text-2xl"
						style={{ animationDelay: "0.4s" }}
					>
						Somos uma agência digital especializada em desenvolvimento web,
						UI/UX design e consultoria em vendas. Transformamos sua visão em
						soluções digitais de alto impacto.
					</p>

					{/* CTA Buttons */}
					<div
						className="mb-16 flex animate-fade-in flex-col justify-center gap-4 sm:flex-row"
						style={{ animationDelay: "0.6s" }}
					>
						<Button variant="hero" size="xl" className="group">
							Solicitar Orçamento
							<Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
						</Button>
						<Button variant="glass" size="xl" onClick={scrollToServices}>
							Ver Nossos Serviços
							<ArrowDown className="ml-2 h-5 w-5" />
						</Button>
					</div>

					{/* Service Icons */}
					<div
						className="grid animate-fade-in grid-cols-1 gap-8 md:grid-cols-3"
						style={{ animationDelay: "0.8s" }}
					>
						<div className="group">
							<div className="glass mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
								<Code className="h-8 w-8 text-primary" />
							</div>
							<h3 className="mb-2 font-semibold text-lg">
								Desenvolvimento Web
							</h3>
							<p className="text-muted-foreground text-sm">
								Sites, apps e e-commerce de alta performance
							</p>
						</div>

						<div className="group">
							<div className="glass mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
								<Palette className="h-8 w-8 text-primary" />
							</div>
							<h3 className="mb-2 font-semibold text-lg">UI/UX Design</h3>
							<p className="text-muted-foreground text-sm">
								Interfaces intuitivas e experiências marcantes
							</p>
						</div>

						<div className="group">
							<div className="glass mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
								<TrendingUp className="h-8 w-8 text-primary" />
							</div>
							<h3 className="mb-2 font-semibold text-lg">
								Consultoria em Vendas
							</h3>
							<p className="text-muted-foreground text-sm">
								Estratégias digitais para acelerar resultados
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="-translate-x-1/2 absolute bottom-8 left-1/2 transform animate-float">
				<div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
					<div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-primary" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
