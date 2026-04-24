import Navbar from "./components/Navbar";
// import Home from "../pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Hero from "./pages/Hero";
import Internship from "./pages/Internship";
import WhatsAppBtn from "./components/WhatsAppBtn";

function App() {
  return (
    <div className="bg-[#070b14] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Internship/>
      <Contact />
      <Footer />

      {/* 🔥 Add it here (IMPORTANT) */}
      <ScrollTopBtn />
      <WhatsAppBtn/>
    </div>
  );
}

export default App;