import { stories_mock } from "../helpers/stories.mock";

export function getStories() {
  // Mock getStories.
  return stories_mock;
}

export function getStoryById(id) {
  // Mock getStoryById.
  return stories_mock.find((story) => story.id === Number(id));
}
