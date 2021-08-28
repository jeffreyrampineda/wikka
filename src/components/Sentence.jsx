import React from 'react';
import './Sentence.css';
import Tooltip from './Tooltip';
import translate from '../helpers/translator';

/**
 * @param {Array<char>} currentChars
 * @param {number} currentIndexChar
 */
function Sentence({ currentChars, currentIndexChar }) {
    return (
        <p>
            {currentChars.map((char, i) =>
                <Tooltip key={i} message={translate(char)}>
                    <span className={`${i < currentIndexChar ? 'correct' : i === currentIndexChar ? 'current' : 'incorrect'}`}>{char}</span>
                </Tooltip>
            )}
        </p>
    );
}

export default Sentence;
