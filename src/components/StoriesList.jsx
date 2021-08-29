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
        <ul>
            {stories.map((story) =>
                <Link key={story.id} to={`/stories/${story.id}`}>{story.title}</Link>
            )}
        </ul>
    );
}

export default StoriesList;
