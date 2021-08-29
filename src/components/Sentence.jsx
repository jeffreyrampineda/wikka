import React from 'react';
import './Sentence.css';
import Tooltip from './Tooltip';

/**
 * @param {Array<char>} sentence
 * @param {number} currentIndexChar
 */
function Sentence({ sentence, currentIndexChar }) {
    return (
        <p className="sentence">
            {sentence.map((mc, i) =>
                <Tooltip key={i} message={mc.translation}>
                    <span className={`${i < currentIndexChar ? 'correct' : i === currentIndexChar ? 'current' : 'incorrect'}`}>{mc.character}</span>
                </Tooltip>
            )}
        </p>
    );
}

export default Sentence;
