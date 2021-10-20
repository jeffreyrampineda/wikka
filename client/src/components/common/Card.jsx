import React from 'react';
import './Card.css';

function Card({ children }) {
    return (
        <article className="card">
            <article className="container">
                {children}
            </article>
        </article>
    );
}

export default Card;
