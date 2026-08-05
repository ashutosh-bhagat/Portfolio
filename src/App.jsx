import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
