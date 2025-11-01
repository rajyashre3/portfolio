import { useRef, useEffect } from "react";

export function useVisible(
  callback: () => void,
  options = {} as {
    once?: boolean;
    root?: Element;
    threshold?: number;
    rootMargin?: string;
  }
) {
  const hasCalledRef = useRef(false);
  const elRef = useRef(null);

  useEffect(() => {
    if (hasCalledRef.current) {
      return; // already triggered
    }
    const node = elRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!options.once || !hasCalledRef.current) {
              hasCalledRef.current = true;
              callback?.();
            }
            // We can stop observing after first trigger
            if (options.once) {
              observer.unobserve(entry.target);
            }
          }
        }
      },
      {
        root: options.root ?? null,
        rootMargin: options.rootMargin ?? "0px",
        threshold: options.threshold ?? 0,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return elRef;
}
