import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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
      <section className="text-center">
        <p>Unable to retrieve stories list</p>
      </section>
    );
  } else if (stories.length === 0) {
    storiesView = (
      <section className="text-center">
        <p>No stories yet.</p>
      </section>
    );
  } else {
    storiesView = (
      <div className="stories">
        <section className="stories__menu">
          <ul className="stories__menu__nav">
            <li className="stories__menu__nav--item">
              <Link className="stories__menu__nav--link active">
                New Releases
              </Link>
            </li>
            <li className="stories__menu__nav--item">
              <Link className="stories__menu__nav--link">Favourites</Link>
            </li>
            <li className="stories__menu__nav--item">
              <Link className="stories__menu__nav--link">Recommendation</Link>
            </li>
          </ul>
        </section>
        <section className="stories__main">
          <div className="stories__main__header">
            <h2 className="stories__main--heading">New Releases</h2>
          </div>
          <div className="stories__list">
            {stories.map((story) => (
              <Link
                to={`/stories/${story._id}`}
                className="stories__list--item hover-grow-1"
                style={{ textDecoration: "none" }}
              >
                <div className="stories__list--image"></div>
                <h3 className="stories__list--title">{story.title}</h3>
                <p className="stories__list--author">By {story.author.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return <div className="container">{storiesView}</div>;
}

export default StoriesList;
