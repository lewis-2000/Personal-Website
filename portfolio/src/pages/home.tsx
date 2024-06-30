import React, { Suspense } from "react";
import FadeInSection from "../components/animations/FadeInSection";
import FadeInRepeat from "../components/animations/FadeInRepeat";

import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Experience from "../components/experience/experience";
import Footer from "../components/footer/footer";
const Projects = React.lazy(() => import("../components/projects/projects"));

function home() {
  return (
    <>
      <FadeInRepeat>
        <Hero />
      </FadeInRepeat>
      <FadeInSection>
        <About />
      </FadeInSection>

      <Experience />
      <Suspense
        fallback={<div className="text-gray-500 animate-pulse">Loading...</div>}
      >
        <Projects />
      </Suspense>
      <Footer />
    </>
  );
}

export default home;
