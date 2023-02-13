import React from "react";
import "./App.css";
import { Home } from "./components";
import { Navbar } from "./components";
import { Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/portfolio-new/" element={<Home />} />
        <Route path="/portfolio-new/aboutme" element={<AboutMe />} />
        <Route path="/portfolio-new/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-new/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
