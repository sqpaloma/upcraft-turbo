import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code, Palette, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-12">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500/80 to-purple-300/20"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center py-12 lg:py-16 px-6">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                Olá, nós somos a
                <span className="block text-gray-700 mt-2">Up Craft Crew</span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Somos uma agência digital especializada que transforma ideias em
                soluções digitais extraordinárias.
              </p>
            </div>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-purple-700/50 backdrop-blur-sm text-white font-medium">
                <Code className="w-4 h-4" />
                Desenvolvedor
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-purple-600/50 backdrop-blur-sm text-white font-medium">
                <Palette className="w-4 h-4" />
                Designer
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-purple-500/50 backdrop-blur-sm text-white font-medium">
                <TrendingUp className="w-4 h-4" />
                Consultor
              </div>
            </div>
          </div>

          {/* Right Content - Image Area */}
          <div className="relative lg:justify-self-end">
            <div className="relative">
              {/* Placeholder for team photo */}
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center text-white/60 space-y-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="font-semibold">Foto da Equipe</p>
                    <p className="text-sm">Up Craft Crew</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/15 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 flex justify-center pt-8">
        <Button
          variant="secondary"
          size="lg"
          onClick={scrollToServices}
          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
        >
          Ver Nossos Serviços
        </Button>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
