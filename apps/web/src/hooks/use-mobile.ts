import { useEffect, useState } from "react";

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Check on mount
		checkIsMobile();

		// Add resize listener
		window.addEventListener("resize", checkIsMobile);

		// Cleanup
		return () => window.removeEventListener("resize", checkIsMobile);
	}, []);

	return isMobile;
}
