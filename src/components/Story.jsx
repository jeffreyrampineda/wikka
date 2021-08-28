import React, { useState, useEffect } from 'react';
import Sentence from './Sentence';
import InputBox from './InputBox';

const punctionations = [' ', '、', '。', '「', '」'];

/**
 * @param {Array<string>} currentStory 
 */
function Story({ currentStory }) {
    const [currentIndexSentence, setCurrenctIndexSentence] = useState(0);
    const [currentIndexChar, setCurrenctIndexChar] = useState(0);
    const [canNextSentence, setCanNextSentence] = useState(false);

    // Inefficient?
    const chars = currentStory[currentIndexSentence].split('');

    // Reset currentIndexSentence, currentIndexChar, & canNextSentence if currentStory is updated.
    useEffect(() => {
        setCurrenctIndexSentence(0);
        setCurrenctIndexChar(0);
        setCanNextSentence(false);
    }, [currentStory]);

    // Updates which sentence currentStory is on, resets currentIndexChar & canNextSentence.
    const handleNextSentence = () => {
        if (currentIndexSentence + 1 < currentStory.length) {
            setCurrenctIndexSentence(currentIndexSentence + 1);
            setCurrenctIndexChar(0);
            setCanNextSentence(false);
        }
    }

    const handleNextChar = () => {
        let nextIndex = currentIndexChar + 1;

        // Ignore punctionations.
        while (nextIndex < chars.length && punctionations.includes(chars[nextIndex])) {
            nextIndex++;
        }

        // Check if the sentence is complete.
        if (nextIndex >= chars.length) {
            setCanNextSentence(true);
        }
        setCurrenctIndexChar(nextIndex);
    }

    return (
        <>
            <p>Sentence: {currentIndexSentence + 1}/{currentStory.length}</p>
            <Sentence currentChars={chars} currentIndexChar={currentIndexChar}></Sentence>
            <InputBox currentChar={chars[currentIndexChar]} nextChar={handleNextChar}></InputBox>
            {canNextSentence && currentIndexSentence + 1 < currentStory.length && <button onClick={handleNextSentence}>Next</button>}
        </>
    );
}

export default Story;
