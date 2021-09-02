import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Story.css';
import Card from './common/Card';
import FormContainer from './FormContainer';
import Complete from './Complete';

let timerRef;

/**
 * @param {Story} selectedStory
 * @param {function} fetchStoryById
 */
function Story({ selectedStory, fetchStoryById }) {
    const { id } = useParams();
    const skipped = useRef(0);
    const duration = useRef(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        fetchStoryById(id);

        timerRef = setInterval(() => {
            duration.current += 1;
        }, 1000);

        return () => clearInterval(timerRef);
    }, []);

    // Increments skipped by 1.
    const addSkipped = () => {
        skipped.current += 1;
    }

    const handleGotoComplete = () => {
        clearInterval(timerRef);
        setIsComplete(true);
    }

    if (!selectedStory) {
        return (<p>Loading...</p>);
    }
    if (isComplete) {
        return (
            <Card>
                <Complete
                    description={`Reading: ${selectedStory.title}`}
                    pages={selectedStory.sentences.length}
                    pagesSkipped={skipped.current}
                    duration={duration.current}
                ></Complete>
            </Card>
        );
    }
    return (
        <Card>
            <Link to="/" className="close"></Link>
            <h4>{selectedStory.title}</h4>
            <FormContainer
                sentences={selectedStory.sentences}
                addSkipped={addSkipped}
                gotoComplete={handleGotoComplete}>
            </FormContainer>
        </Card>
    );
}

export default Story;
