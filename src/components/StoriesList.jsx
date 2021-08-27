import React from 'react';

function StoriesList({ stories, selectStory }) {
    return (
        <ul>
            {stories.map((story) =>
                <li key={story.id} onClick={() => selectStory(story.id)}>{story.title}</li>
            )}
        </ul>
    );
}

export default StoriesList;
