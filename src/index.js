import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hero from "./Components/Hero/Hero";
import Leaders from "./Components/Leaders/Leaders";
import Forum from './Components/Forum/Forum'

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Leaders />
    <Forum/>
  </React.StrictMode>,
  document.getElementById("root")
);

