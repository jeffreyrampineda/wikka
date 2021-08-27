import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import './Sentence.css';

/**
 * @param {string} currentSentence 
 * @param {function} completeSentence 
 */
function Sentence({ currentSentence, completeSentence }) {
    const [currentIndex, setCurrenctIndex] = useState(0);
    const punctionations = [' ', '、', '。', '「', '」'];
    const chars = currentSentence.split('');

    // Reset currentIndex if currentSentence is updated.
    useEffect(() => {
        setCurrenctIndex(0);
    }, [currentSentence]);

    const handleNextChar = () => {
        let nextIndex = currentIndex + 1;

        // Ignore punctionations.
        while (nextIndex < chars.length && punctionations.includes(chars[nextIndex])) {
            nextIndex++;
        }

        // Check if the sentence is complete.
        if (nextIndex >= chars.length) {
            completeSentence();
        }
        setCurrenctIndex(nextIndex);
    }

    return (
        <>
            <p>
                {chars.map((char, i) =>
                    <span key={i} className={`${i < currentIndex ? 'correct' : i  === currentIndex ? 'current' : 'incorrect'}`}>{char}</span>
                )}
            </p>
            <InputBox currentChar={chars[currentIndex]} nextChar={handleNextChar}></InputBox>
        </>
    );
}

export default Sentence;
