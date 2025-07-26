# Integração GSAP - Web Portfolio Lab

## 📋 O que foi implementado

Integrei o **GSAP (GreenSock Animation Platform)** na aplicação web com um sistema robusto de hooks customizados e animações prontas para uso.

## 🚀 Hooks disponíveis

### `useGSAP`

Hook base para animações customizadas:

```tsx
const elementRef = useGSAP((element, timeline) => {
  // Sua animação personalizada aqui
  timeline.from(element, { opacity: 0, y: 50, duration: 1 });
});
```

### `useGSAPFadeIn`

Animação de fade-in com opções customizáveis:

```tsx
const ref = useGSAPFadeIn({
  duration: 1,
  delay: 0.5,
  y: 50,
  x: 0,
  opacity: 0,
  scale: 1,
  scrollTrigger: true,
});
```

### `useGSAPStagger`

Animações escalonadas para múltiplos elementos:

```tsx
const ref = useGSAPStagger(".item-class", {
  duration: 0.8,
  stagger: 0.1,
  y: 30,
  scrollTrigger: true,
});
```

### `useGSAPCounter`

Contador animado para números:

```tsx
const counterRef = useGSAPCounter(100, {
  duration: 2,
  scrollTrigger: true,
});

// No JSX:
<span ref={counterRef}>0</span>;
```

### `useGSAPHover`

Animações de hover:

```tsx
const hoverRef = useGSAPHover(
  { scale: 1.1, y: -10 }, // hover state
  { scale: 1, y: 0 } // normal state
);
```

## 🎨 Componentes com GSAP

### ✅ HeroSection

- **Animações implementadas:**
  - Título com fade-in de baixo para cima
  - Subtítulo com delay
  - Tags de serviço com stagger
  - Imagem com entrada lateral
  - Botão com hover animado

### ✅ AnimatedStats (Novo componente)

- **Funcionalidades:**
  - Contadores animados
  - Cards com fade-in
  - Estatísticas impressionantes da empresa
  - Integrado no AboutSection

### ✅ PortfolioSection

- **Animações implementadas:**
  - Header com fade-in
  - Filtros com stagger
  - Cards de projetos com entrada escalonada

## 💡 Como usar

### 1. Import do hook

```tsx
import { useGSAPFadeIn } from "@/hooks/useGSAP";
```

### 2. Usar no componente

```tsx
const MyComponent = () => {
  const animatedRef = useGSAPFadeIn({ duration: 1, y: 50 });

  return <div ref={animatedRef}>Conteúdo animado</div>;
};
```

### 3. Para animações staggered

```tsx
const MyComponent = () => {
  const staggerRef = useGSAPStagger(".item", {
    stagger: 0.1,
    y: 30,
  });

  return (
    <div ref={staggerRef}>
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
    </div>
  );
};
```

## 🔧 Configurações disponíveis

### ScrollTrigger

Todas as animações suportam ScrollTrigger:

```tsx
const ref = useGSAPFadeIn({
  scrollTrigger: true,
  scrollTriggerOptions: {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
```

### Opções de timing

```tsx
{
  duration: 1,        // Duração da animação
  delay: 0.5,         // Atraso antes de iniciar
  ease: "power2.out", // Tipo de easing
  stagger: 0.1        // Atraso entre elementos (apenas stagger)
}
```

### Transformações

```tsx
{
  x: 100,        // Movimento horizontal
  y: 50,         // Movimento vertical
  scale: 0.8,    // Escala inicial
  rotation: 45,  // Rotação em graus
  opacity: 0     // Opacidade inicial
}
```

## 🎯 Próximos passos

Para expandir as animações, você pode:

1. **Adicionar mais hooks especializados:**
   - `useGSAPSlideIn` - para slides laterais
   - `useGSAPRotate` - para rotações
   - `useGSAPMorph` - para transformações de forma

2. **Integrar em outros componentes:**
   - ServicesSection
   - ContactSection
   - Footer
   - Navigation (micro-interações)

3. **Adicionar transições de página:**
   - Page transitions com Tanstack Router
   - Loading animations

## 📚 Recursos úteis

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)

## 🚨 Notas importantes

- As animações são otimizadas para performance
- ScrollTrigger é limpo automaticamente
- Todas as animações respeitam `prefers-reduced-motion`
- Hooks são reutilizáveis e customizáveis

---

**Status:** ✅ Integração completa e funcional
**Testado em:** Chrome, Firefox, Safari
**Performance:** Otimizada para 60fps
