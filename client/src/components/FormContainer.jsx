import React, { useState, useEffect } from 'react';
import Sentence from './Sentence';
import InputBox from './InputBox';
import Button from './common/Button';
import { generateTranslation } from '../helpers/translator';

const formActionsStyle = {
    'display': 'flex',
    'justifyContent': 'space-between',
};

/**
 * @param {Array<string>} sentences
 * @param {function} addSkipped
 * @param {function} gotoComplete
 */
function FormContainer({ sentences, addSkipped, gotoComplete }) {
    const [currentIndexSentence, setCurrenctIndexSentence] = useState(0);
    const [currentIndexChar, setCurrenctIndexChar] = useState(0);
    const [canNextSentence, setCanNextSentence] = useState(false);
    const [sentence, setSentence] = useState(() => generateTranslation(sentences[0]));

    useEffect(() => {
        handleNextChar(0);
    }, [sentence]);

    // Returns true if currentIndexSentence is the last available sentences index.
    const isLastSentence = () => currentIndexSentence + 1 >= sentences.length;

    // Change to <Complete /> component for summary.
    const handleOnComplete = () => {
        gotoComplete();
    }

    // Updates which sentence is currently active & resets canNextSentence.
    const handleNextSentence = () => {
        const _nextIndexSentence = currentIndexSentence + 1;

        if (_nextIndexSentence < sentences.length) {
            setCurrenctIndexSentence(_nextIndexSentence);
            setCanNextSentence(false);
            setSentence(generateTranslation(sentences[_nextIndexSentence]));
        }
    }

    // Skip to the next available sentence or complete the story.
    const handleOnSkipped = () => {
        // Increment skipped by 1.
        addSkipped();

        if (isLastSentence()) {
            handleOnComplete();
        }
        handleNextSentence();
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
        <React.Fragment>
            <Sentence sentence={sentence} currentIndexChar={currentIndexChar}></Sentence>
            <InputBox translation={sentence[currentIndexChar]?.translation} nextChar={handleNextChar}></InputBox>
            <hr />
            <div style={formActionsStyle}>
                <Button color="secondary" onClick={handleOnSkipped}>Skip</Button>
                <p>Page: {currentIndexSentence + 1}/{sentences.length}</p>
                <Button
                    color="primary"
                    disabled={!canNextSentence}
                    onClick={isLastSentence() ? handleOnComplete : handleNextSentence}
                >
                    {isLastSentence() ? 'Complete' : 'Next'}
                </Button>
            </div>
        </React.Fragment>
    );
}

export default FormContainer;
