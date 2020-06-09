import React from "react";
import "./style.css";

function Wrapper(props) {
  return(
    <div className="container wrapper">
      <div className="row">
        {props.children}
      </div>
    </div>);
}

export default Wrapper;
