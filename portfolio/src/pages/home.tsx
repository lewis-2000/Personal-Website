import React, { Suspense } from "react";

import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Experience from "../components/experience/experience";
import Footer from "../components/footer/footer";
const Projects = React.lazy(() => import("../components/projects/projects"));

function home() {
  return (
    <>
      <Hero />
      <About />
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
