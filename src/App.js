// src/App.js

import React from "react";
import Intro from "./components/Intro";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Projectsintro from "./components/Projectsintro";
// import Skills from "./components/Skills";


export default function App() {
  return (
    <main className="main-wrapper">
      <div className="main-nav-wrapper">
        <Navbar />
      </div>
      <div className="intro-wrapper">
        <Intro />
        {/* <Projectsintro />
        <Projects /> */}
      </div>
      {/* <Contact /> */}
    </main>
  );
}