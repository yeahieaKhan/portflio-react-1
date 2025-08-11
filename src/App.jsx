import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
    </>
  );
}

export default App;
