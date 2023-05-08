import React from "react";
import "./App.css";
import About from "./components/about/about";
import Education from "./components/education/education";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Project from "./components/project/project";
import Achievement from "./components/achievement/achievement";

function App() {
  return (
    <div className="App">
      {/* Navbar Page -:  */}
      <Navbar />

      {/* Home Page -:  */}
      <Home />

      {/* About Page -:  */}
      <About />

      {/* Skills Page   */}
      <Skills />

      {/* Education Page  */}
      <Education />

      {/* Achievement Page  */}
      <Achievement />

      {/* Project Page  */}
      <Project />

      {/* Footer Page */}
      <Footer />
    </div>
  );
}

export default App;
