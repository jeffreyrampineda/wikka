import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {Array<Story>} stories
 * @param {function} fetchStories
 */
function StoriesList({ stories, fetchStories }) {
    useEffect(() => {
        fetchStories();
    }, []);

    return (
        <article>
            <h3>Pick one of the stories to read</h3>
            {stories.map((story) =>
                <article key={story.id}>
                    <h4>{story.title}</h4>
                    <small>By {story.author}</small>
                    <p>{story.description}</p>
                    <Link to={`/stories/${story.id}`}><button>Read This</button></Link>
                </article>
            )}
        </article>
    );
}

export default StoriesList;
