import React from "react";
import "antd/dist/antd.css";
import "./styles/App.css";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default App;
