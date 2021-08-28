import React from 'react';
import './Sentence.css';

/**
 * @param {Array<char>} currentChars
 * @param {number} currentIndexChar
 */
function Sentence({ currentChars, currentIndexChar }) {
    return (
        <p>
            {currentChars.map((char, i) =>
                <span key={i} className={`${i < currentIndexChar ? 'correct' : i === currentIndexChar ? 'current' : 'incorrect'}`}>{char}</span>
            )}
        </p>
    );
}

export default Sentence;
