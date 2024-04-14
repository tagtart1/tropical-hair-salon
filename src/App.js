import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="test-block">test</div>
    </div>
  );
}

export default App;
