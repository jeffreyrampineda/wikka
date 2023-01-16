import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./StoriesList.css";
import Card from "./common/Card";
import Button from "./common/Button";

const storiesActionsStyle = {
  textAlign: "center",
};

/**
 * @param {Array<Story>} stories
 * @param {function} fetchStories
 */
function StoriesList({ stories, fetchStories }) {
  useEffect(() => {
    fetchStories();
  }, []);

  let storiesView = "";

  if (stories === null) {
    storiesView = (
      <div className="text-center mt-3">
        <p>Unable to retrieve stories list</p>
      </div>
    );
  } else if (stories.length === 0) {
    storiesView = (
      <div className="text-center mt-3">
        <p>No stories yet.</p>
      </div>
    );
  } else {
    storiesView = (
      <div>
        {stories.map((story) => (
          <Card key={story._id}>
            <div className="m-bottom-1">
              <h4>{story.title}</h4>
              <small>By {story.author.name}</small>
              <p>{story.description}</p>
            </div>
            <div style={storiesActionsStyle}>
              <Link to={`/stories/${story._id}`}>
                <Button color="primary">Read This</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <section className="stories-list">
      <h3>Pick one of the stories to read</h3>
      {storiesView}
    </section>
  );
}

export default StoriesList;
