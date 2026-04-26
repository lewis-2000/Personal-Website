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
      <section className="centered-section">
        <div className="centered-section-inner">
          <FadeInRepeat>
            <Hero />
          </FadeInRepeat>
        </div>
      </section>

      <section className="centered-section">
        <div className="centered-section-inner">
          <FadeInSection>
            <About />
          </FadeInSection>
        </div>
      </section>

      <section className="centered-section">
        <div className="centered-section-inner">
          <Experience />
        </div>
      </section>

      <section className="centered-section">
        <div className="centered-section-inner">
          <Suspense
            fallback={
              <div className="text-gray-500 animate-pulse">Loading...</div>
            }
          >
            <Projects />
          </Suspense>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default home;
