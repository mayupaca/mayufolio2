/* cSpell:ignore mayu */
import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <Skill />
      <Project />
      <About />
      <Footer />
    </div>
  );
}

export default App;
