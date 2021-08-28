import React, { useState } from 'react';
import './App.css';
import { stories } from './helpers/stories';
import StoriesList from './components/StoriesList';
import FormContainer from './components/FormContainer';

function App() {
  const [selectedStory, setSelectedStory] = useState(undefined);

  const handleSelectStory = (id) => {
    setSelectedStory(stories.find(story => story.id === id));
  }

  return (
    <>
      <h1>Hiragana Practice</h1>
      <StoriesList stories={stories} selectStory={handleSelectStory}></StoriesList>
      {selectedStory !== undefined && <FormContainer sentences={selectedStory.sentences}></FormContainer>}
    </>
  );
}

export default App;
