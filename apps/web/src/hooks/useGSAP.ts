import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export interface GSAPAnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
  stagger?: number;
  scrollTrigger?: boolean;
  scrollTriggerOptions?: ScrollTrigger.StaticVars;
}

export const useGSAP = (
  animation: (element: Element, tl: gsap.core.Timeline) => void,
  dependencies: React.DependencyList = []
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tl = gsap.timeline();
    animation(element, tl);

    return () => {
      tl.kill();
    };
  }, dependencies);

  return elementRef;
};

export const useGSAPFadeIn = (options: GSAPAnimationOptions = {}) => {
  const {
    duration = 1,
    delay = 0,
    ease = "power2.out",
    y = 50,
    x = 0,
    opacity = 0,
    scale = 1,
    rotation = 0,
    scrollTrigger = true,
    scrollTriggerOptions = {},
  } = options;

  return useGSAP((element, tl) => {
    // Set initial state
    gsap.set(element, {
      opacity,
      y,
      x,
      scale,
      rotation,
    });

    // Create animation
    const animationConfig: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
      duration,
      delay,
      ease,
    };

    if (scrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...scrollTriggerOptions,
      };
    }

    tl.to(element, animationConfig);
  });
};

export const useGSAPStagger = (
  selector: string,
  options: GSAPAnimationOptions = {}
) => {
  const {
    duration = 0.8,
    delay = 0,
    ease = "power2.out",
    y = 30,
    x = 0,
    opacity = 0,
    stagger = 0.1,
    scrollTrigger = true,
    scrollTriggerOptions = {},
  } = options;

  return useGSAP((element, tl) => {
    const children = element.querySelectorAll(selector);

    if (children.length === 0) return;

    // Set initial state
    gsap.set(children, {
      opacity,
      y,
      x,
    });

    // Create staggered animation
    const animationConfig: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease,
      stagger,
    };

    if (scrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        ...scrollTriggerOptions,
      };
    }

    tl.to(children, animationConfig);
  });
};

export const useGSAPCounter = (
  endValue: number,
  options: { duration?: number; ease?: string; scrollTrigger?: boolean } = {}
) => {
  const { duration = 2, ease = "power2.out", scrollTrigger = true } = options;
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const obj = { value: 0 };

    const animationConfig: gsap.TweenVars = {
      value: endValue,
      duration,
      ease,
      onUpdate: () => {
        element.textContent = Math.floor(obj.value).toString();
      },
    };

    if (scrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      };
    }

    const tl = gsap.timeline();
    tl.to(obj, animationConfig);

    return () => {
      tl.kill();
    };
  }, [endValue, duration, ease, scrollTrigger]);

  return elementRef;
};

export const useGSAPHover = (
  hoverAnimation: gsap.TweenVars,
  normalAnimation: gsap.TweenVars = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, { ...hoverAnimation, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(element, { ...normalAnimation, duration: 0.3 });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hoverAnimation, normalAnimation]);

  return elementRef;
};

export { gsap, ScrollTrigger };
