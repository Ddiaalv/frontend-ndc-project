import React from 'react';
import './App.css';
import bg from '../src/assets/bg.jpg';
import bgNoteBook from '../src/assets/bg-notebook.jpg';

const bgStyles = {
  app: {
    background: `url(${bg})`,
  },
  notebook: {
    background: `url(${bgNoteBook})`,
  },
};

const App: React.FC = () => {
  return (
    <div className="App" style={bgStyles.app}>
      <div id="notebook" style={bgStyles.notebook}>
        <div id="notebook-paper">
          <div className="paper-page paper-page-one" />
          <div className="paper-page paper-page-two" />
          <div className="paper-page paper-page-three" />
        </div>
      </div>
    </div>
  );
};

export default App;
