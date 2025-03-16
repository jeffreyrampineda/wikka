import React from 'react';

function Card({ children }: { children: React.ReactNode }) {
  return (
    <article className="card shadow m-4">
      <div className="card-body">{children}</div>
    </article>
  );
}

export default Card;
