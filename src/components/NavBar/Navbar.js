import React from "react";
import "./style.css";

function NavBar(props) {
  return(
  <nav className="navbar navbar-expand-lg navbar-light">
    <a classname="navbar-brand col-sm" href="/"><h3>Animal Crossing Clicky Game!</h3></a>
    
    <span className="navbar-text nav-sentence col-md">{props.sentence}</span>
    <span className="navbar-text score col-sm">Score: {props.score} | Top Score: {props.topScore}</span>

    {/* <nav className="navbar navbar-light bg-light">
      <span className="navbar-text nav-sentence">{props.sentence}</span>
      <span className="navbar-text score">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav> */}
  </nav>);
}

export default NavBar;
