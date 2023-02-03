import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./common/Card";
import Button from "./common/Button";

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
      <section className="text-center mt-3">
        <p>Unable to retrieve stories list</p>
      </section>
    );
  } else if (stories.length === 0) {
    storiesView = (
      <section className="text-center mt-3">
        <p>No stories yet.</p>
      </section>
    );
  } else {
    storiesView = (
      <section className="grid gap-3">
        {stories.map((story) => (
          <Card key={story._id}>
            <h3 className="card-title display-6 mb-5">{story.title}</h3>
            <small className="blockquote-footer">By {story.author.name}</small>
            <p className="card-text lead">{story.description}</p>

            <div className="text-center">
              <Link to={`/stories/${story._id}`}>
                <Button color="primary">Read This</Button>
              </Link>
            </div>
          </Card>
        ))}
      </section>
    );
  }

  return (
    <>
      <h1 className="display-3 text-center">Pick one of the stories to read</h1>
      {storiesView}
    </>
  );
}

export default StoriesList;
