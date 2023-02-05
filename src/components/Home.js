import Bio from "./Bio";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Bio />
      <Projects />
    </div>
  );
};

export default Home;
