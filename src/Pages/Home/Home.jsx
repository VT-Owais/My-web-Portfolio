import Hero from "../../Components/Hero/Hero";
import AboutMe from "../AboutMe/About";
import Experience from "../Experience/Experience";
import Services from "../Services/Services";
import ContactMe from "../ContactMe/Contact";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <AboutMe />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="contact">
        <ContactMe />
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;