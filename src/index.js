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
    <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div>
  </React.StrictMode>,
  document.getElementById("root")
);

