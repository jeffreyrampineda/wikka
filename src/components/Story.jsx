import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import FormContainer from './FormContainer';

/**
 * @param {Story} selectedStory
 * @param {function} fetchStoryById
 */
function Story({ selectedStory, fetchStoryById }) {
    const { id } = useParams();
    
    useEffect(() => {
        fetchStoryById(id);
    }, []);

    return (
        <>
            <Link to="/">Back</Link>
            {selectedStory !== undefined && <FormContainer sentences={selectedStory.sentences}></FormContainer>}
        </>
    );
}

export default Story;
