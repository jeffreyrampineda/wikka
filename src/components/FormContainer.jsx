import React, { useState, useEffect } from 'react';
import Sentence from './Sentence';
import InputBox from './InputBox';
import { generateTranslation } from '../helpers/translator';

const punctionations = [' ', '、', '。', '「', '」'];

/**
 * @param {Array<string>} sentences
 */
function FormContainer({ sentences }) {
    const [currentIndexSentence, setCurrenctIndexSentence] = useState(0);
    const [currentIndexChar, setCurrenctIndexChar] = useState(0);
    const [canNextSentence, setCanNextSentence] = useState(false);
    const [sentence, setSentence] = useState(() => generateTranslation(sentences[0]));

    // Reset currentIndexSentence, currentIndexChar, & canNextSentence if sentences is updated.
    useEffect(() => {
        setCurrenctIndexSentence(0);
        setCurrenctIndexChar(0);
        setCanNextSentence(false);
        setSentence(generateTranslation(sentences[0]));
    }, [sentences]);

    // Updates which sentence is currently active, resets currentIndexChar & canNextSentence.
    const handleNextSentence = () => {
        const _nextIndexSentence = currentIndexSentence + 1;

        if (_nextIndexSentence < sentences.length) {
            setCurrenctIndexSentence(_nextIndexSentence);
            setCurrenctIndexChar(0);
            setCanNextSentence(false);
            setSentence(generateTranslation(sentences[_nextIndexSentence]));
        }
    }

    // Updates which character is currently active.
    const handleNextChar = () => {
        let _nextIndexChar = currentIndexChar + 1;

        // Ignore punctionations.
        while (_nextIndexChar < sentence.length && punctionations.includes(sentence[_nextIndexChar].character)) {
            _nextIndexChar++;
        }

        // Check if the sentence is complete.
        if (_nextIndexChar >= sentence.length) {
            setCanNextSentence(true);
        }
        setCurrenctIndexChar(_nextIndexChar);
    }

    return (
        <>
            <p>Sentence: {currentIndexSentence + 1}/{sentences.length}</p>
            <Sentence sentence={sentence} currentIndexChar={currentIndexChar}></Sentence>
            <InputBox translation={sentence[currentIndexChar]?.translation} nextChar={handleNextChar}></InputBox>
            {canNextSentence && currentIndexSentence + 1 < sentences.length && <button onClick={handleNextSentence}>Next</button>}
        </>
    );
}

export default FormContainer;
