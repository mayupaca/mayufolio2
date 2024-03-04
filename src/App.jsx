/* cSpell:ignore mayu */
import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Home />
        <Skill />
        <Project />
        <About />
      </div>
    </>
  );
}

export default App;