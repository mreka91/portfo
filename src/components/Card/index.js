import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <article className="card">
      <img src={props.image} alt="title" className="bg-image" />
      <div className="card-content">
        <a href={props.link} target="_blank" rel="noreferrer noopener">
          See on GitHub
        </a>
      </div>
    </article>
  );
};

export default Card;
