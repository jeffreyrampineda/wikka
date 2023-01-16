import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { getStories, getStoryById } from "./services/story.services";
import StoriesList from "./components/StoriesList";
import Story from "./components/Story";
import Footer from "./components/Footer";

const initialState = {
  stories: [],
  selectedStory: undefined,
  isLoading: false,
};

// CONSTANTS
export const REQUEST_STORIES = "REQUEST_STORIES";
export const REQUEST_STORIES_SUCCESS = "REQUEST_STORIES_SUCCESS";
export const REQUEST_STORIES_FAILED = "REQUEST_STORIES_FAILED";
export const REQUEST_STORY_DETAIL = "REQUEST_STORY_DETAIL";
export const REQUEST_STORY_DETAIL_SUCCESS = "REQUEST_STORY_DETAIL_SUCCESS";
export const REQUEST_STORY_DETAIL_FAILED = "REQUEST_STORY_DETAIL_FAILED";

// ACTIONS
function requestStories() {
  console.log("DISPATCH: requestStories");
  return {
    type: REQUEST_STORIES,
    isLoading: true,
  };
}

function requestStoriesSuccess(data) {
  return {
    type: REQUEST_STORIES_SUCCESS,
    stories: data ? data : [],
    isLoading: false,
  };
}

function requestStoriesFailed(error) {
  return {
    type: REQUEST_STORIES_FAILED,
    error: error.message,
    stories: null,
    isLoading: false,
  };
}

function requestStoryDetail(id) {
  console.log("DISPATCH: requestStoryDetail id: " + id);
  return {
    type: REQUEST_STORY_DETAIL,
    isLoading: true,
  };
}

function requestStoryDetailsSuccess(data) {
  return {
    type: REQUEST_STORY_DETAIL_SUCCESS,
    selectedStory: data ? data : {},
    isLoading: false,
  };
}

function requestStoryDetailFailed(error) {
  return {
    type: REQUEST_STORY_DETAIL_FAILED,
    error: error.message,
    selectedStory: null,
    isLoading: false,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
    case REQUEST_STORIES_SUCCESS:
      return Object.assign({}, state, {
        stories: action.stories,
        isLoading: action.isLoading,
      });
    case REQUEST_STORIES_FAILED:
      return Object.assign({}, state, {
        stories: action.stories,
        isLoading: action.isLoading,
      });
    case REQUEST_STORY_DETAIL:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
      });
    case REQUEST_STORY_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        selectedStory: action.selectedStory,
        isLoading: action.isLoading,
      });
    case REQUEST_STORY_DETAIL_FAILED:
      return Object.assign({}, state, {
        selectedStory: action.selectedStory,
        isLoading: action.isLoading,
      });
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchStories() {
    dispatch(requestStories());
    return fetch(`/api/stories`)
      .then((response) => response.json())
      .then((data) => dispatch(requestStoriesSuccess(data)))
      .catch((error) => dispatch(requestStoriesFailed(error)));
  }

  const fetchStoryById = (id) => {
    dispatch(requestStoryDetail(id));
    return fetch(`/api/stories/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch(requestStoryDetailsSuccess(data)))
      .catch((error) => dispatch(requestStoryDetailFailed(error)));
  };

  return (
    <Router>
      <div>
        <header>
          <h1>Wikka</h1>
          <h2>Practice your Japanese!</h2>
        </header>
        <section className="container">
          <Routes>
            <Route
              index
              element={
                <React.Fragment>
                  <StoriesList
                    stories={state.stories}
                    fetchStories={fetchStories}
                  />
                  <Footer></Footer>
                </React.Fragment>
              }
            />
            <Route
              path="/stories/:id"
              element={
                <Story
                  selectedStory={state.selectedStory}
                  fetchStoryById={fetchStoryById}
                />
              }
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
