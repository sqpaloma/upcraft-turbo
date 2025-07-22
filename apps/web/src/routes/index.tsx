import { createFileRoute } from "@tanstack/react-router";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";

function IndexComponent() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<PortfolioSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export const Route = createFileRoute("/Index")({
	component: IndexComponent,
});
