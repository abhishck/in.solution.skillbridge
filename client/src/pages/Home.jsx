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
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>

      <Helmet>
        <title>
          Skill Bridge Solutions | IT Services & Internship Programs
        </title>

        <meta
          name="description"
          content="Skill Bridge Solutions provides IT services, web development, AI solutions, and practical internship programs for students and freshers."
        />

        <meta
          name="keywords"
          content="IT services, internship programs, web development, AI solutions, software company, internships"
        />

        <meta
          property="og:title"
          content="Skill Bridge Solutions"
        />

        <meta
          property="og:description"
          content="IT services and internship opportunities for students."
        />

        <meta
          property="og:url"
          content="https://www.skillbridgesolutions.in"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

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
    </>
  );
}