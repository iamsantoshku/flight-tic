// src/hooks/useInView.js
import { useEffect, useState, useRef } from "react";

const UseInView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (observer && observer.unobserve) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

export default UseInView;
