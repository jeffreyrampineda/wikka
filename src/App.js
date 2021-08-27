import React from 'react';
import './App.css';

import { theTest } from './helpers/stories';
import Story from './components/Story';

function App() {
  return (
    <>
      <h1>Hiragana Practice</h1>
      <Story currentStory={theTest}></Story>
    </>
  );
}

export default App;
