import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.id} onClick={() => props.randomizeVillagers(props.id)}/>
      </div>
    </div>
  );
}

export default Cards;
