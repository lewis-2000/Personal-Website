// components/animations/SlideInRightToLeft.tsx

import React, { useEffect, useRef } from "react";
import classNames from "classnames";

interface SlideInRightToLeftProps {
  children: React.ReactNode;
}

const SlideInRightToLeft: React.FC<SlideInRightToLeftProps> = ({
  children,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("animate-slide-right-to-left");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={classNames("transition-all", "duration-500", "ease-out")}
    >
      {children}
    </div>
  );
};

export default SlideInRightToLeft;
