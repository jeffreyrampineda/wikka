import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Story.css';
import Button from './Button';

/**
 * @param {Array<Story>} stories
 * @param {function} fetchStories
 */
function StoriesList({ stories, fetchStories }) {
    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <section>
            <h3>Pick one of the stories to read</h3>
            {stories.map((story) =>
                <article key={story.id} className="card">
                    <article className="container">
                        <h4>{story.title}</h4>
                        <small>By {story.author}</small>
                        <p>{story.description}</p>
                        <Link to={`/stories/${story.id}`}><Button>Read This</Button></Link>
                    </article>
                </article>
            )}
        </section>
    );
}

export default StoriesList;
