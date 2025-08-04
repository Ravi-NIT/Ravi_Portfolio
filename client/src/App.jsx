import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Project";
import ProjectImages from "./components/ProjectImages";
import Contact from "./components/Contact";

const App = () => {
  // Fix basename for both dev and production
  const basename = window.location.pathname.includes('/Saurav_Portfolio') ? '/Saurav_Portfolio' : '';
  
  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<ProjectImages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
