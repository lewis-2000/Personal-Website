// components/FadeInSection.tsx
import React from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
}

const FadeInSection: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 50% of the element is in viewport
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section transition-opacity duration-500 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
