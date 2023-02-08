import React from "react";
import Story from "../components/Story";

function StoryDetail({ selectedStory, fetchStoryById }) {
  return (
    <div className="container">
      <Story selectedStory={selectedStory} fetchStoryById={fetchStoryById} />
    </div>
  );
}

export default StoryDetail;
