import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      {/* <Projects />*/}
      <Contact />
    </>
  );
}

export default Home;
