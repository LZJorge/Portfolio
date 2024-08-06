import { useEffect } from "react";
import Cursor from "./components/common/Cursor";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/common/Background";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ 
      once: true, duration: 1500, anchorPlacement: 'top-top'
    });
  }, []);

  return (
    <>
      <Cursor />
      <ToastContainer />
      <Background />
      <Nav />
      <Container>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
