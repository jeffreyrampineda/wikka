import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Story.css';
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

    if (!selectedStory) {
        return (<p>Loading...</p>);
    }

    return (
        <article className="card">
            <article className="container">
                <Link to="/" className="close"></Link>
                <h4>{selectedStory.title}</h4>
                <br />
                <FormContainer sentences={selectedStory.sentences}></FormContainer>
            </article>
        </article>
    );
}

export default Story;
