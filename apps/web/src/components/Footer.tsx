import { ArrowUp, Heart, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const footerLinks = {
		services: [
			"Desenvolvimento Web",
			"UI/UX Design",
			"Consultoria em Vendas",
			"Marketing Digital",
			"E-commerce",
			"Consultoria",
		],
		company: [
			"Sobre Nós",
			"Nossa Equipe",
			"Portfólio",
			"Blog",
			"Carreiras",
			"Contato",
		],
		legal: ["Política de Privacidade", "Termos de Uso", "Cookies", "FAQ"],
	};

	return (
		<footer className="relative overflow-hidden border-white/10 border-t bg-card">
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
				<div className="absolute right-20 bottom-20 h-48 w-48 rounded-full bg-accent/20 blur-2xl" />
			</div>

			<div className="container relative z-10 mx-auto px-4">
				{/* Main Footer Content */}
				<div className="py-16">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						{/* Company Info */}
						<div className="lg:col-span-1">
							<div className="gradient-primary mb-4 bg-clip-text font-bold text-3xl text-transparent">
								TechFlow
							</div>
							<p className="mb-6 text-muted-foreground leading-relaxed">
								Transformamos ideias em realidade digital. Especialistas em
								desenvolvimento web, design e estratégias de vendas para
								impulsionar seu negócio.
							</p>

							<div className="space-y-3">
								<div className="flex items-center gap-3 text-sm">
									<Mail className="h-4 w-4 text-primary" />
									<span>contato@techflow.com.br</span>
								</div>
								<div className="flex items-center gap-3 text-sm">
									<Phone className="h-4 w-4 text-primary" />
									<span>+55 (11) 99999-9999</span>
								</div>
								<div className="flex items-center gap-3 text-sm">
									<MapPin className="h-4 w-4 text-primary" />
									<span>São Paulo, SP - Brasil</span>
								</div>
							</div>
						</div>

						{/* Services */}
						<div>
							<h3 className="mb-4 font-semibold text-lg">Serviços</h3>
							<ul className="space-y-2">
								{footerLinks.services.map((service) => (
									<li key={service}>
										<a
											href="#services"
											className="text-muted-foreground text-sm transition-colors duration-300 hover:text-primary"
										>
											{service}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Company */}
						<div>
							<h3 className="mb-4 font-semibold text-lg">Empresa</h3>
							<ul className="space-y-2">
								{footerLinks.company.map((link) => (
									<li key={link}>
										<a
											href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
											className="text-muted-foreground text-sm transition-colors duration-300 hover:text-primary"
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Newsletter & CTA */}
						<div>
							<h3 className="mb-4 font-semibold text-lg">Fique por Dentro</h3>
							<p className="mb-4 text-muted-foreground text-sm">
								Receba dicas e insights sobre tecnologia e negócios digitais.
							</p>

							<div className="space-y-3">
								<div className="flex gap-2">
									<input
										type="email"
										placeholder="Seu e-mail"
										className="flex-1 rounded-md border border-white/20 bg-background/50 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
									/>
									<Button size="sm" variant="hero">
										OK
									</Button>
								</div>

								<Button
									variant="outline"
									size="sm"
									className="w-full border-primary/30"
								>
									WhatsApp Direto
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-white/10 border-t py-6">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
							{footerLinks.legal.map((link) => (
								<button
									type="button"
									key={link}
									className="transition-colors duration-300 hover:text-primary"
								>
									{link}
								</button>
							))}
						</div>

						<div className="flex items-center gap-2 text-muted-foreground text-sm">
							<span>Feito com</span>
							<Heart className="h-4 w-4 animate-pulse text-red-500" />
							<span>pela TechFlow © 2024</span>
						</div>
					</div>
				</div>

				{/* Back to Top Button */}
				<Button
					onClick={scrollToTop}
					variant="hero"
					size="icon"
					className="fixed right-8 bottom-8 z-50 animate-float rounded-full shadow-glow"
				>
					<ArrowUp className="h-5 w-5" />
				</Button>
			</div>
		</footer>
	);
};

export default Footer;
