import React from "react";
import "./App.css";
import NavbarComponent from "./Components/Navbardiv/navbar";
import IntroP from "./IntroP/IntroP";
import Power from "./Power/Power";
import Contac from "./Title/Contac/Contac";
import Title from "./Title/Title";
import Wepon from "./Wepon/Wepon";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Title />
      <IntroP />
      <Power />
      <hr />
      <Wepon />
      <Contac />
    </div>
  );
}

export default App;
