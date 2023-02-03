import React from "react";

function Card({ children }) {
  return (
    <article className="card shadow m-4">
      <div className="card-body">{children}</div>
    </article>
  );
}

export default Card;
