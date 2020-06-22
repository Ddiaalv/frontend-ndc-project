import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import bg from '../src/assets/bg.jpg';
import bgNoteBook from '../src/assets/bg-notebook.jpg';
import { ROUTE } from './utils/routes';
import { Header } from './components/organisms/Header';
import { MonsterSelector } from './components/organisms/MonsterSelector';

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
        <Router>
          <div id="NotebookPaper">
            <Header />
            <Switch>
              <Route exact path={ROUTE.home} />
              <Route exact path={ROUTE.weapons} />
              <Route exact path={ROUTE.armors} />
              <Route exact path={ROUTE.felyne} />
              <Route exact path={ROUTE.monsters}>
                <div className="NotebookContent">
                  <MonsterSelector />
                </div>
              </Route>
            </Switch>
            <div className="paper-page paper-page-one" />
            <div className="paper-page paper-page-two" />
            <div className="paper-page paper-page-three" />
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
