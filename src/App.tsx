import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { ROUTE } from './utils/routes';
import { Header } from './components/organisms/Header';
import { MonsterSelector } from './components/organisms/MonsterSelector';
import { MonsterInformation } from './components/organisms/MonsterInformation';
import { Craftsmanship } from './pages/Craftsmanship';

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="notebook">
        <Router>
          <div id="NotebookPaper">
            <Header />
            <Switch>
              <Route exact path={ROUTE.home} />
              <Route exact path={ROUTE.weapons} />
              <Route exact path={ROUTE.armors} />
              <Route exact path={ROUTE.craftsmanship} component={Craftsmanship} />
              <Route exact path={ROUTE.felyne} />
              <Route path={ROUTE.monsters.primary}>
                <div className="NotebookContent">
                  <MonsterSelector />
                  <Route path={ROUTE.monsters.secondary}>
                    <MonsterInformation />
                  </Route>
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
