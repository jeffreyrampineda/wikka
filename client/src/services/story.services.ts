import { stories_mock } from '../helpers/stories.mock';
import { Story } from '../types';

export function getStories(): Story[] {
  // Mock getStories.
  return stories_mock;
}

export function getStoryById(id: string): Story | undefined {
  // Mock getStoryById.
  const story = stories_mock.find((story) => story._id == id);

  return story;
}
