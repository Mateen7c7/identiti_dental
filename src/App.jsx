import About from "./components/About";
import BeforeAfter from "./components/BeforeAfter";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import NewHero from "./components/NewHero";
import Reviews from "./components/Reviews";
import Servicess from "./components/Servicess";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* <NewHero/> */}
        <Experience/>
        <About />
        <Servicess  />
        <BeforeAfter />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
