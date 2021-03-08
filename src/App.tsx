import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './views/MainPage';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'}>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
