import About from "./About";
import Bio from "./Bio";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Bio />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
