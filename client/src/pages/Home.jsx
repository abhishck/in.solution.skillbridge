import Navbar from "../components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Internship from "./Internship";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollTopBtn from "../components/ScrollTopBtn";
import WhatsAppBtn from "../components/WhatsAppBtn";

export default function Home() {
  return (
    <div className="bg-[#070b14] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Internship />
      <Contact />
      <Footer />
      <ScrollTopBtn />
      <WhatsAppBtn />
    </div>
  );
}