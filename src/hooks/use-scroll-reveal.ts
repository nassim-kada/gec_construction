import { useEffect, useState } from "react";

export function useScrollReveal(options = { threshold: 0.1, rootMargin: "0px" }) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref);
      }
    }, options);
    
    observer.observe(ref);
    
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options.threshold, options.rootMargin]);

  return [setRef, isVisible] as const;
}
