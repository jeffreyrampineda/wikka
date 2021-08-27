import React, { useState } from 'react';
import './App.css';
import { stories } from './helpers/stories';
import StoriesList from './components/StoriesList';
import Story from './components/Story';

function App() {
  const [selectedStory, setSelectedStory] = useState(undefined);

  const handleSelectStory = (id) => {
    setSelectedStory(stories.find(story => story.id === id));
  }

  return (
    <>
      <h1>Hiragana Practice</h1>
      <StoriesList stories={stories} selectStory={handleSelectStory}></StoriesList>
      {selectedStory !== undefined && <Story currentStory={selectedStory.story}></Story>}
    </>
  );
}

export default App;
