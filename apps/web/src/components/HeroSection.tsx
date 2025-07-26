import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useGSAP, useGSAPFadeIn } from "@/hooks/useGSAP";
import { gsap } from "gsap";

const SpaceXHeroSection = () => {
  // GSAP Animation refs
  const backgroundRef = useGSAP((element) => {
    // Continuous zoom-in animation for background
    gsap.to(element, {
      scale: 1.1,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });

  const titleRef = useGSAP((element, tl) => {
    gsap.set(element, {
      opacity: 0,
      y: 100,
      scale: 0.8,
    });

    tl.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  });

  const subtitleRef = useGSAP((element, tl) => {
    gsap.set(element, {
      opacity: 0,
      y: 50,
    });

    tl.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 1.2,
      ease: "power2.out",
    });
  });

  const buttonRef = useGSAP((element, tl) => {
    gsap.set(element, {
      opacity: 0,
      y: 30,
      scale: 0.9,
    });

    tl.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      delay: 1.8,
      ease: "back.out(1.7)",
    });
  });

  // Arrow animation
  const arrowRef = useGSAP((element) => {
    gsap.to(element, {
      x: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  });

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2070&auto=format&fit=crop')`,
          transform: "scale(1)",
        }}
      />

      {/* Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-purple-600/60" />

      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="mb-8 text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl"
          >
            TRANSFORMANDO
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              IDEIAS
            </span>
            <br />
            EM SOLUÇÕES DIGITAIS
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mx-auto mb-12 max-w-2xl text-xl font-light leading-relaxed text-gray-200 md:text-2xl"
          >
            Desenvolvemos software sob medida que potencializa o seu negócio com
            tecnologia de ponta e design excepcional.
          </p>

          {/* CTA Button */}
          <div ref={buttonRef}>
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="group relative overflow-hidden bg-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                Ver Portfólio
                <div ref={arrowRef} className="inline-flex">
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </span>

              {/* Button Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-purple-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-light text-gray-300">
                Role para baixo
              </span>
              <div className="h-12 w-6 rounded-full border-2 border-gray-300">
                <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-20 h-32 w-32 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-32 right-32 h-48 w-48 animate-pulse rounded-full bg-purple-400/10 blur-3xl" />
      <div className="absolute top-1/2 left-10 h-24 w-24 animate-pulse rounded-full bg-purple-600/20 blur-2xl" />
    </section>
  );
};

export default SpaceXHeroSection;
