import React, { useState, useEffect } from 'react';
import Sentence from './Sentence';
import InputBox from './InputBox';

const punctionations = [' ', '、', '。', '「', '」'];

/**
 * @param {Array<string>} sentences
 */
function FormContainer({ sentences }) {
    const [currentIndexSentence, setCurrenctIndexSentence] = useState(0);
    const [currentIndexChar, setCurrenctIndexChar] = useState(0);
    const [canNextSentence, setCanNextSentence] = useState(false);
    const [chars, setChars] = useState(sentences[0].split(''));

    // Reset currentIndexSentence, currentIndexChar, & canNextSentence if sentences is updated.
    useEffect(() => {
        setCurrenctIndexSentence(0);
        setChars(sentences[0].split(''));
        setCurrenctIndexChar(0);
        setCanNextSentence(false);
    }, [sentences]);

    // Updates which sentence sentences is on, resets currentIndexChar & canNextSentence.
    const handleNextSentence = () => {
        const _nextIndexSentence = currentIndexSentence + 1;

        if (_nextIndexSentence < sentences.length) {
            setCurrenctIndexSentence(_nextIndexSentence);
            setChars(sentences[_nextIndexSentence].split(''));
            setCurrenctIndexChar(0);
            setCanNextSentence(false);
        }
    }

    const handleNextChar = () => {
        let _nextIndexChar = currentIndexChar + 1;

        // Ignore punctionations.
        while (_nextIndexChar < chars.length && punctionations.includes(chars[_nextIndexChar])) {
            _nextIndexChar++;
        }

        // Check if the sentence is complete.
        if (_nextIndexChar >= chars.length) {
            setCanNextSentence(true);
        }
        setCurrenctIndexChar(_nextIndexChar);
    }

    return (
        <>
            <p>Sentence: {currentIndexSentence + 1}/{sentences.length}</p>
            <Sentence currentChars={chars} currentIndexChar={currentIndexChar}></Sentence>
            <InputBox currentChar={chars[currentIndexChar]} nextChar={handleNextChar}></InputBox>
            {canNextSentence && currentIndexSentence + 1 < sentences.length && <button onClick={handleNextSentence}>Next</button>}
        </>
    );
}

export default FormContainer;
