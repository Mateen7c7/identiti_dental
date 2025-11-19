import About from "./components/About";
import BeforeAfter from "./components/BeforeAfter";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Servicess from "./components/Servicess";

function App() {
  return <main>
    <Hero />
    <About />
    <Servicess  />
    <BeforeAfter />
    <Gallery />
    <Reviews />
    <Contact />
  </main>;
}

export default App;
