import { Navbar } from "./components.js/Navbar";
import { Hero } from "./components.js/Hero";
import { About } from "./components.js/About";
import { Services } from "./components.js/Services";
import { Tours } from "./components.js/Tours";
import { Footer } from "./components.js/Footer";

function App() {
  console.log("Hello world");
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
      {/* testowy komentarz */}
    </>
  );
}

export default App;
