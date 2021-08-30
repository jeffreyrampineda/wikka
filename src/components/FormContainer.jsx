import React, { useState, useEffect } from 'react';
import Sentence from './Sentence';
import InputBox from './InputBox';
import { generateTranslation } from '../helpers/translator';

/**
 * @param {Array<string>} sentences
 */
function FormContainer({ sentences }) {
    const [currentIndexSentence, setCurrenctIndexSentence] = useState(0);
    const [currentIndexChar, setCurrenctIndexChar] = useState(0);
    const [canNextSentence, setCanNextSentence] = useState(false);
    const [sentence, setSentence] = useState(() => generateTranslation(sentences[0]));

    useEffect(() => {
        handleNextChar(0);
    }, [sentence]);

    // Updates which sentence is currently active & resets canNextSentence.
    const handleNextSentence = () => {
        const _nextIndexSentence = currentIndexSentence + 1;

        if (_nextIndexSentence < sentences.length) {
            setCurrenctIndexSentence(_nextIndexSentence);
            setCanNextSentence(false);
            setSentence(generateTranslation(sentences[_nextIndexSentence]));
        }
    }

    /**
     * Updates which character is currently active. Default is the next
     * translatable character.
     * @param {number} nextIdx 
     */
    const handleNextChar = (nextIdx = currentIndexChar + 1) => {
        let _nextIndexChar = nextIdx;

        // Ignore undefined translations.
        while (_nextIndexChar < sentence.length && sentence[_nextIndexChar].translation === undefined) {
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
