import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Competences from "./components/Competances";
import Projets from "./components/Projets";
import APropos from "./components/APropos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Experience from "./sections/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Competences />
      <Projets />
       <Experience />
      <APropos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
