import {
	Clock,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	Send,
	Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		service: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Simular envio do formulário
		toast({
			title: "Mensagem enviada com sucesso!",
			description: "Entraremos em contato em até 24 horas.",
		});

		// Reset form
		setFormData({
			name: "",
			email: "",
			phone: "",
			company: "",
			service: "",
			message: "",
		});
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const contactInfo = [
		{
			icon: Mail,
			label: "E-mail",
			value: "contato@techflow.com.br",
			link: "mailto:contato@techflow.com.br",
		},
		{
			icon: Phone,
			label: "WhatsApp",
			value: "+55 (11) 99999-9999",
			link: "https://wa.me/5511999999999",
		},
		{
			icon: MapPin,
			label: "Endereço",
			value: "São Paulo, SP - Brasil",
			link: "#",
		},
		{
			icon: Clock,
			label: "Horário",
			value: "Seg-Sex: 9h às 18h",
			link: "#",
		},
	];

	const services = [
		"Desenvolvimento Web",
		"UI/UX Design",
		"Consultoria em Vendas",
		"Marketing Digital",
		"E-commerce",
		"Consultoria Geral",
		"Outro",
	];

	return (
		<section
			id="contact"
			className="relative overflow-hidden bg-background py-20"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute top-20 left-20 h-64 w-64 animate-float rounded-full bg-primary/20 blur-3xl" />
				<div
					className="absolute right-20 bottom-20 h-48 w-48 animate-float rounded-full bg-accent/20 blur-2xl"
					style={{ animationDelay: "1s" }}
				/>
			</div>

			<div className="container relative z-10 mx-auto px-4">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<div className="glass mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2">
						<MessageSquare className="h-4 w-4 text-primary" />
						<span className="text-sm">Entre em Contato</span>
					</div>

					<h2 className="mb-6 font-bold text-4xl md:text-5xl">
						Vamos Criar Algo
						<span className="gradient-primary bg-clip-text text-transparent">
							{" "}
							Incrível
						</span>
					</h2>

					<p className="mx-auto max-w-3xl text-muted-foreground text-xl">
						Pronto para transformar sua ideia em realidade? Entre em contato e
						vamos discutir como podemos impulsionar seu negócio para o próximo
						nível.
					</p>
				</div>

				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
					{/* Contact Info */}
					<div className="lg:col-span-1">
						<Card className="glass h-fit border-white/10">
							<CardContent className="p-6">
								<h3 className="mb-6 font-bold text-xl">
									Informações de Contato
								</h3>

								<div className="space-y-6">
									{contactInfo.map((info, _index) => (
										<div
											key={info.label}
											className="group flex items-start gap-4"
										>
											<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 transition-transform duration-300 group-hover:scale-110">
												<info.icon className="h-5 w-5 text-primary" />
											</div>
											<div>
												<p className="mb-1 font-medium">{info.label}</p>
												{info.link && info.link !== "#" ? (
													<a
														href={info.link}
														className="text-muted-foreground transition-colors hover:text-primary"
													>
														{info.value}
													</a>
												) : (
													<p className="text-muted-foreground">{info.value}</p>
												)}
											</div>
										</div>
									))}
								</div>

								{/* Quick Actions */}
								<div className="mt-8 space-y-3">
									<Button
										variant="default"
										className="group w-full"
										onClick={() =>
											window.open("https://wa.me/5511999999999", "_blank")
										}
									>
										<MessageSquare className="mr-2 h-4 w-4" />
										WhatsApp
										<Zap className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
									</Button>

									<Button
										variant="outline"
										className="w-full border-primary/30"
										onClick={() => {
											window.location.href = "mailto:contato@techflow.com.br";
										}}
									>
										<Mail className="mr-2 h-4 w-4" />
										Enviar E-mail
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-2">
						<Card className="glass border-white/10">
							<CardContent className="p-6">
								<h3 className="mb-6 font-bold text-xl">
									Solicite um Orçamento
								</h3>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
										<div>
											<Label htmlFor="name">Nome Completo *</Label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="Seu nome"
												required
												className="mt-2 border-white/20 bg-background/50 focus:border-primary"
											/>
										</div>

										<div>
											<Label htmlFor="email">E-mail *</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="seu@email.com"
												required
												className="mt-2 border-white/20 bg-background/50 focus:border-primary"
											/>
										</div>
									</div>

									<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
										<div>
											<Label htmlFor="phone">Telefone/WhatsApp</Label>
											<Input
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												placeholder="(11) 99999-9999"
												className="mt-2 border-white/20 bg-background/50 focus:border-primary"
											/>
										</div>

										<div>
											<Label htmlFor="company">Empresa</Label>
											<Input
												id="company"
												name="company"
												value={formData.company}
												onChange={handleChange}
												placeholder="Nome da empresa"
												className="mt-2 border-white/20 bg-background/50 focus:border-primary"
											/>
										</div>
									</div>

									<div>
										<Label htmlFor="service">Serviço de Interesse</Label>
										<select
											id="service"
											name="service"
											value={formData.service}
											onChange={handleChange}
											className="mt-2 h-10 w-full rounded-md border border-white/20 bg-background/50 px-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
										>
											<option value="">Selecione um serviço</option>
											{services.map((service) => (
												<option
													key={service}
													value={service}
													className="bg-background"
												>
													{service}
												</option>
											))}
										</select>
									</div>

									<div>
										<Label htmlFor="message">Mensagem *</Label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Conte-nos sobre seu projeto, objetivos e como podemos ajudar..."
											required
											rows={5}
											className="mt-2 resize-none border-white/20 bg-background/50 focus:border-primary"
										/>
									</div>

									<Button
										type="submit"
										variant="default"
										size="lg"
										className="group w-full"
									>
										Enviar Mensagem
										<Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
									</Button>
								</form>

								<div className="mt-6 text-center">
									<p className="text-muted-foreground text-sm">
										Resposta garantida em até{" "}
										<span className="font-medium text-primary">24 horas</span>
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
