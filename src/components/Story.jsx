import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Story.css';
import Card from './common/Card';
import FormContainer from './FormContainer';
import Complete from './Complete';

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
    if (false) {
        return (
            <Card>
                <Complete
                    description={selectedStory.title}
                    pages={selectedStory.sentences.length}
                    pagesSkipped="0"
                ></Complete>
            </Card>
        );
    }
    return (
        <Card>
            <Link to="/" className="close"></Link>
            <h4>{selectedStory.title}</h4>
            <FormContainer sentences={selectedStory.sentences}></FormContainer>
        </Card>
    );
}

export default Story;
