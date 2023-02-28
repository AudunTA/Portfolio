import { useState } from "react";
import "./App.css";
import HomePage from "./assets/components/HomePage";
import About from "./assets/components/About";

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
    </div>
  );
}

export default App;
