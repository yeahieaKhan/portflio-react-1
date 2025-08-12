import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import RecentWork from "./components/RecentWork/RecentWork";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <RecentWork></RecentWork>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
