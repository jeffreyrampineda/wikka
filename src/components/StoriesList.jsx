import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StoriesList.css';
import Card from './common/Card';
import Button from './common/Button';

const storiesActionsStyle = {
    'textAlign': 'center',
}

/**
 * @param {Array<Story>} stories
 * @param {function} fetchStories
 */
function StoriesList({ stories, fetchStories }) {
    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <section className="stories-list">
            <h3>Pick one of the stories to read</h3>
            {stories.map((story) =>
                <Card key={story.id}>
                    <div className="m-bottom-1">
                        <h4>{story.title}</h4>
                        <small>By {story.author}</small>
                        <p>{story.description}</p>
                    </div>
                    <div style={storiesActionsStyle}>
                        <Link to={`/stories/${story.id}`}><Button>Read This</Button></Link>
                    </div>
                </Card>
            )}
        </section>
    );
}

export default StoriesList;
