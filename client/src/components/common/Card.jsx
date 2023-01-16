import React from "react";
import "./Card.css";

function Card({ children }) {
  return (
    <article className="card">
      <div className="container">{children}</div>
    </article>
  );
}

export default Card;
