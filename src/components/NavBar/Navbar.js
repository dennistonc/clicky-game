import React from "react";
import "./style.css";

function NavBar(props) {
  return(
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a classname="navbar-brand" href="/">Animal Crossing Clicky Game!</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <nav class="navbar navbar-light bg-light">
      <span class="navbar-text nav-sentence">{props.sentence}</span>
      <span class="navbar-text score">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
  </nav>);
}

export default NavBar;
