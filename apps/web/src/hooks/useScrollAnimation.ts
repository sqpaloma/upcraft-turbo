import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					element.style.opacity = "1";
					element.style.transform = "translateY(0)";
				}
			},
			{ threshold: 0.1 },
		);

		// Set initial styles
		element.style.opacity = "0";
		element.style.transform = "translateY(20px)";
		element.style.transition = "all 0.6s ease-out";

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return elementRef;
};
