import React from "react";
import Story from "../components/story/Story";

function StoryDetail({ selectedStory, fetchStoryById }) {
  return (
    <div className="container">
      <Story selectedStory={selectedStory} fetchStoryById={fetchStoryById} />
    </div>
  );
}

export default StoryDetail;
