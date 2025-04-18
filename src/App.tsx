import './styles/main.scss';

import { useCallback, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { getStories, getStoryById } from './services/story.services';
import Home from './views/Home';
import Stories from './views/Stories';
import StoryDetail from './views/StoryDetail';
import About from './views/About';
import { Story } from './types';

interface AppState {
  stories?: Story[];
  selectedStory?: Story | undefined;
  isLoading?: boolean;
}

interface AppAction {
  type: string;
  payload: AppState;
}

const initialState: AppState = {
  stories: [],
  selectedStory: undefined,
  isLoading: false,
};

// CONSTANTS
export const REQUEST_STORIES = 'REQUEST_STORIES';
export const REQUEST_STORIES_SUCCESS = 'REQUEST_STORIES_SUCCESS';
export const REQUEST_STORIES_FAILED = 'REQUEST_STORIES_FAILED';
export const REQUEST_STORY_DETAIL = 'REQUEST_STORY_DETAIL';
export const REQUEST_STORY_DETAIL_SUCCESS = 'REQUEST_STORY_DETAIL_SUCCESS';
export const REQUEST_STORY_DETAIL_FAILED = 'REQUEST_STORY_DETAIL_FAILED';

// ACTIONS
function requestStories(): AppAction {
  console.log('DISPATCH: requestStories');
  return {
    type: REQUEST_STORIES,
    payload: {
      isLoading: true,
    },
  };
}

function requestStoriesSuccess(data: Story[] | undefined): AppAction {
  return {
    type: REQUEST_STORIES_SUCCESS,
    payload: {
      stories: data ? data : [],
      isLoading: false,
    },
  };
}

/*
function requestStoriesFailed(error): AppAction {
  return {
    type: REQUEST_STORIES_FAILED,
    payload: {
      error: error.message,
      stories: null,
      isLoading: false,
    },
  };
}
*/

function requestStoryDetail(id: string): AppAction {
  console.log('DISPATCH: requestStoryDetail id: ' + id);
  return {
    type: REQUEST_STORY_DETAIL,
    payload: {
      isLoading: true,
    },
  };
}

function requestStoryDetailsSuccess(data: Story | undefined): AppAction {
  return {
    type: REQUEST_STORY_DETAIL_SUCCESS,
    payload: {
      selectedStory: data ? data : undefined,
      isLoading: false,
    },
  };
}

/*
function requestStoryDetailFailed(error): AppAction {
  return {
    type: REQUEST_STORY_DETAIL_FAILED,
    payload: {
      error: error.message,
      selectedStory: null,
      isLoading: false,
    }
  };
}
*/

function reducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case REQUEST_STORIES:
      return Object.assign({}, state, {
        isLoading: action.payload.isLoading,
      });
    case REQUEST_STORIES_SUCCESS:
      return Object.assign({}, state, {
        stories: action.payload.stories,
        isLoading: action.payload.isLoading,
      });
    case REQUEST_STORIES_FAILED:
      return Object.assign({}, state, {
        stories: action.payload.stories,
        isLoading: action.payload.isLoading,
      });
    case REQUEST_STORY_DETAIL:
      return Object.assign({}, state, {
        isLoading: action.payload.isLoading,
      });
    case REQUEST_STORY_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        selectedStory: action.payload.selectedStory,
        isLoading: action.payload.isLoading,
      });
    case REQUEST_STORY_DETAIL_FAILED:
      return Object.assign({}, state, {
        selectedStory: action.payload.selectedStory,
        isLoading: action.payload.isLoading,
      });
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = useCallback(() => {
    dispatch(requestStories());
    //return fetch(`/api/stories`)
    //  .then((response) => response.json())
    //  .then((data) => dispatch(requestStoriesSuccess(data)))
    //  .catch((error) => dispatch(requestStoriesFailed(error)));
    dispatch(requestStoriesSuccess(getStories()));
  }, []);

  const fetchStoryById = useCallback((id: string) => {
    dispatch(requestStoryDetail(id));
    //return fetch(`/api/stories/${id}`)
    //  .then((response) => response.json())
    //  .then((data) => dispatch(requestStoryDetailsSuccess(data)))
    //  .catch((error) => dispatch(requestStoryDetailFailed(error)));
    dispatch(requestStoryDetailsSuccess(getStoryById(id)));
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/stories"
            element={
              <Stories
                stories={state.stories ?? []}
                fetchStories={fetchStories}
              />
            }
          />
          <Route
            path="/stories/:id"
            element={
              <StoryDetail
                selectedStory={state.selectedStory}
                fetchStoryById={fetchStoryById}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
