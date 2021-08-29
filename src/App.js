import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { getStories, getStoryById } from './services/story.services';
import StoriesList from './components/StoriesList';
import Story from './components/Story';

const initialState = {
  stories: [],
  selectedStory: undefined
};

function reducer(state, action) {
  switch (action.type) {
    case 'requestStories':
      return Object.assign({}, state, {
        stories: [...getStories()],
        // Unselects story.
        selectedStory: undefined
      });
    case 'selectStory':
      return Object.assign({}, state, {
        selectedStory: getStoryById(action.id)
      });
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = () => {
    dispatch({ type: 'requestStories' });
  }

  const fetchStoryById = (id) => {
    dispatch({ type: 'selectStory', id: id });
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => 
            <StoriesList 
              stories={state.stories} 
              fetchStories={fetchStories}
            />}
          />
          <Route path="/stories/:id" children={
            <Story 
              selectedStory={state.selectedStory}
              fetchStoryById={fetchStoryById}
            />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
