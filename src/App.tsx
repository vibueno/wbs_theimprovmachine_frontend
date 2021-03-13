import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './views/MainPage';
import ModeSelector from './views/ModeSelector';
import Generator from './views/Generator';

import NoRoute from './views/NoRoute';

// Dotenv set-up
import * as dotenv from 'dotenv';

const App = () => {
  useEffect(() => {
    dotenv.config();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/modeselector">
          <ModeSelector />
        </Route>
        <Route exact path="/generator">
          <Generator />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="*">
          <NoRoute />
        </Route>
      </Switch>
      {/* <BackToTop btnStyle="back-to-top" /> */}
    </div>
  );
};

export default App;
