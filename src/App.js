import React from "react";
import "antd/dist/antd.css";
import "./styles/App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <ParallaxProvider>
      <Header />
      <About />
      <Projects />
    </ParallaxProvider>
  );
};

export default App;
