import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Exp from "./Pages/Exp";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import GotoTop from "./Components/GotoTop";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Exp />
      <Works />
      <Contact />
      <Footer />
      <GotoTop/>
    </div>
  );
}

export default App;
