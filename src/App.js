import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SalonImg from "./images/Salon Photo.jpg";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="first-page">
        <Header />
        <Hero />
      </div>
      <About />
      <div className="image-container">
        <div className="overlay"></div>
        <img className="salon-photo" src={SalonImg} alt="salon interior" />
      </div>
      <Services />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
