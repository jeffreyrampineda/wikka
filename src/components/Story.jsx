import React, { useState, useEffect } from 'react';
import Sentence from './Sentence';

/**
 * @param {Array<string>} currentStory 
 */
function Story({ currentStory }) {
    const [currentIndex, setCurrenctIndex] = useState(0);
    const [canNextSentence, setCanNextSentence] = useState(false);

    // Reset currentIndex if currentStory is updated.
    useEffect(() => {
        setCurrenctIndex(0);
    }, [currentStory]);

    const handleNextSentence = () => {
        if (currentIndex + 1 < currentStory.length) {
            setCurrenctIndex(currentIndex + 1);
            setCanNextSentence(false);
        }
    }

    const handleCompleteSentence = () => {
        setCanNextSentence(true);
    }

    return (
        <>
            <p>Sentence: {currentIndex + 1}/{currentStory.length}</p>
            <Sentence currentSentence={currentStory[currentIndex]} completeSentence={handleCompleteSentence}></Sentence>
            {canNextSentence && currentIndex + 1 < currentStory.length && <button onClick={handleNextSentence}>Next</button>}
        </>
    );
}

export default Story;
