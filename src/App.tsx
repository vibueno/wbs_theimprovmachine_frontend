import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './views/MainPage';
import ModeSelector from './views/ModeSelector';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={'/modeselector'}>
          <ModeSelector />
        </Route>
        <Route path={'/'}>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
