import React from "react";
import ReactDOM from "react-dom";
import  Game  from "./Components/Game";
import "./styles.css";

function App() {
  return (
    <Game /> 
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
