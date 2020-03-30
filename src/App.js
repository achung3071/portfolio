import React, { useRef } from "react";
import "antd/dist/antd.css";
import "./styles/App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <ParallaxProvider>
      <Header refs={{ aboutRef, projectRef, footerRef }} />
      <About aboutRef={aboutRef} />
      <Projects projectRef={projectRef} />
      <Footer footerRef={footerRef} />
    </ParallaxProvider>
  );
};

export default App;
