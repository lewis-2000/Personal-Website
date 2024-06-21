import React, { Suspense } from "react";

import MainNav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
const Projects = React.lazy(() => import("./components/projects/projects"));

import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <MainNav />
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

export default App;
