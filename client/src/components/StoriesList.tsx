import { JSX, useEffect } from 'react';
import { Link } from 'react-router';
import { Story } from '../types';

/**
 * @param {Array<Story>} stories
 * @param {function} fetchStories
 */
function StoriesList({
  stories,
  fetchStories,
}: {
  stories: Story[];
  fetchStories: () => void;
}) {
  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  let storiesView: JSX.Element | null = null;

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
              <p className="stories__menu__nav--link active">New Releases</p>
            </li>
            <li className="stories__menu__nav--item">
              <p className="stories__menu__nav--link">Favourites</p>
            </li>
            <li className="stories__menu__nav--item">
              <p className="stories__menu__nav--link">Recommendation</p>
            </li>
          </ul>
        </section>
        <section className="stories__main">
          <div className="stories__main__header">
            <h2 className="stories__main--heading">New Releases</h2>
          </div>
          <div className="stories__list">
            {stories.map((story: Story) => (
              <Link
                key={story._id}
                to={`/stories/${story._id}`}
                className="stories__list--item hover-grow-1"
                style={{ textDecoration: 'none' }}
              >
                {story.cover_image ? (
                  <img
                    src={story.cover_image}
                    alt="My Image"
                    className="stories__list--image"
                  />
                ) : (
                  <div className="stories__list--image"></div>
                )}
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
