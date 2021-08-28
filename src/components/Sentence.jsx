import React, { useMemo } from 'react';
import './Sentence.css';
import Tooltip from './Tooltip';
import translate from '../helpers/translator';

/**
 * @param {Array<char>} currentChars
 * @param {number} currentIndexChar
 */
function Sentence({ currentChars, currentIndexChar }) {
    // Prevents re-translation if currentIndexChar triggers a re-render.
    const memoizedChars = useMemo(() => {
        return currentChars.map((char) => {
            return {
                chararacter: char,
                translation: translate(char)
            }
        });
    }, [currentChars]);

    return (
        <p className="sentence">
            {memoizedChars.map((mc, i) =>
                <Tooltip key={i} message={mc.translation}>
                    <span className={`${i < currentIndexChar ? 'correct' : i === currentIndexChar ? 'current' : 'incorrect'}`}>{mc.chararacter}</span>
                </Tooltip>
            )}
        </p>
    );
}

export default Sentence;
