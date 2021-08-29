import { stories } from '../helpers/stories';

export function getStories() {
    // Mock getStories.
    return stories;
}

export function getStoryById(id) {
    // Mock getStoryById.
    return stories.find(story => story.id === Number(id));
}
